import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { getBooks } from '../../http/booksAPI';
import { bookStore } from '../../store/BookStore';
import { IFetchedData } from '../../types/book';
import { catalogLimit, catalogOffset, messageImgs } from '../../utils/consts';
import Card from '../Card/Card';
import Button from '../UI/Button/Button';
import ScreenMessage from '../UI/ScreenMessage/ScreenMessage';
import Spinner from '../UI/Spinner/Spinner';
import "./BookList.scss";

const BookList: FC = observer(() => {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [isOver, setIsOver] = useState<boolean>(false);
  const [newOffset, setNewOffset] = useState<number>(catalogOffset);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (bookStore.url) {
      fetchBooks(`${bookStore.url}&startIndex=${catalogOffset}&maxResults=${catalogLimit}`);
      setIsOver(false);
    }
  }, [bookStore.url]);

  const fetchBooks = (url: string, isMore?: boolean) => {
    setLoading(true);
    getBooks<IFetchedData>(url)
    .then(data => {
      console.log(data)
      if (data) {
        if (data.items) {
          setTotalItems(data.totalItems);
          if (isMore) return bookStore.addBooks(data.items);
          bookStore.setBooks(data.items);
        } else {
          setIsOver(true);
        }
      }
    })
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }

  const onAddBooks = async () => {
    const offset = newOffset + catalogLimit;
    if (offset > totalItems) setIsOver(true);
    setNewOffset(offset);
    fetchBooks(`${bookStore.url}&startIndex=${offset}&maxResults=${catalogLimit}`, true);
  }

  const renderMessage = (text?: string, imgUrl?: string) => <div className='book-list'><ScreenMessage imgUrl={imgUrl}>{text}</ScreenMessage></div>

  if (!bookStore.url) {
    return renderMessage(
      'Above you can find the book by name',
      messageImgs.main
    );
  }
  if (error) throw error;
  if (loading && newOffset === catalogOffset) return <Spinner clazz='book-list__spinner'/>
  if (!bookStore.books.length) {
    return renderMessage(
      'Nothing was found',
      messageImgs.empty
    );
  }

  return (
    <div className="book-list">
      <p className="book-list__books-count">Current books count: {totalItems}</p>
      <ul className="book-list__box">
        {bookStore.books.map(book => (
          <Card
            key={book.id}
            id={book.id}
            volumeInfo={book.volumeInfo}
          />
        ))}
      </ul>
      {bookStore.books.length && !isOver
          ? <Button
              onClick={onAddBooks}
              disabled={newOffset > catalogOffset && loading}
              clazz='book-list__btn'
            >Load more</Button>
          : null}
    </div>
  );
});

export default BookList;