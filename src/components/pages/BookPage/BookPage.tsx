import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooks } from '../../../http/booksAPI';
import { IBook } from '../../../types/book';
import { apiKey, FETCH_BOOK } from '../../../utils/consts';
import BookInfo from '../../BookInfo/BookInfo';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';
import Spinner from '../../UI/Spinner/Spinner';
import "./BookPage.scss";

const BookPage: FC = () => {
  const [book, setBook] = useState<IBook | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    getBooks<IBook>(`${FETCH_BOOK}/${id}?key=${apiKey}`)
      .then((data) => {
        if (!data) {
          return navigate('/404');
        }
        setBook(data);
      })
      .finally(() => setLoading(false));
  }, []);

  const render = () => {
    if (loading) {
      <Spinner/>
    } else {
      if (!book) return <p>Не удалось загрузить книгу</p>;
      return (
        <ErrorBoundary>
          <BookInfo id={book.id} volumeInfo={book.volumeInfo}/>
        </ErrorBoundary>
      )
    }
  }

  return (
    <div className='book-page page'>
      <div className="book-page__container">
        {render()}
      </div>
    </div>
  );
};

export default BookPage;