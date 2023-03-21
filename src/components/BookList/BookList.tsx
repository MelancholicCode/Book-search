import { FC } from 'react';
import { IBook } from '../../types/book';
import Card from '../Card/Card';
import "./BookList.scss";

interface BookListProps {
  booksArr: IBook[] | undefined;
}

const BookList: FC<BookListProps> = ({booksArr}) => {
  if (!booksArr) {
    return <p className='book-list__empty'>По запросу ничего не найдено...</p>
  }

  return (
    <ul className="book-list">
      {booksArr.map(book => (
        <Card
          key={book.id}
          id={book.id}
          volumeInfo={book.volumeInfo}
        />
      ))}
    </ul>
  );
};

export default BookList;