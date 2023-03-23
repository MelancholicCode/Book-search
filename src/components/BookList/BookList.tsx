import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from 'react';
import { getBooks } from '../../http/booksAPI';
import { bookStore } from '../../store/BookStore';
import { IFetchedData } from '../../types/book';
import { catalogLimit, catalogOffset } from '../../utils/consts';
import Card from '../Card/Card';
import "./BookList.scss";

const BookList: FC = observer(() => {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [newOffset, setNewOffset] = useState<number>(catalogOffset);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (bookStore.url) {
      fetchBooks(`${bookStore.url}&startIndex=${catalogOffset}&maxResults=${catalogLimit}`);
    }
  }, [bookStore.url]);

  const fetchBooks = (url: string, isMore?: boolean) => {
    setLoading(true);
    getBooks<IFetchedData>(url)
    .then(data => {
      console.log(data)
      if (data?.items) {
        setTotalItems(data.totalItems);
        if (isMore) return bookStore.addBooks(data.items);
        bookStore.setBooks(data.items);
      }
    })
    .catch(err => setError(err))
    .finally(() => setLoading(false));
  }

  const onAddBooks = async () => {
    const offset = newOffset + bookStore.books.length;
    setNewOffset(offset);
    fetchBooks(`${bookStore.url}&startIndex=${offset}&maxResults=${catalogLimit}`, true);
  }

  if (!bookStore.url) return <p>Введите запрос</p>;
  if (error) return <p>Произошла ошибка</p>
  if (loading) return <p>Загрузка...</p>;
  if (!bookStore.books.length) return <p>Ничего не удалось найти</p>

  return (
    <div className="book-list">
      <p>{totalItems}</p>
      <ul className="book-list__box">
        {bookStore.books.map(book => (
          <Card
            key={book.id}
            id={book.id}
            volumeInfo={book.volumeInfo}
          />
        ))}
      </ul>
      {bookStore.books.length && (newOffset + catalogLimit) < totalItems
          ? <div
              onClick={onAddBooks}
              className="book-list__btn"
            >
              Load more
            </div>
          : null}
    </div>
  );
});

export default BookList;