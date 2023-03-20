import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { bookStore } from '../../../store/BookStore';
import Card from '../../Card/Card';

import "./CatalogPage.scss";

const CatalogPage: FC = observer(() => {
  return (
    <div className='catalog'>
      <div className="catalog__container">
        <ul className="catalog__book-list">
          {bookStore.books.map(book => (
            <Card
              key={book.id}
              id={book.id}
              volumeInfo={book.volumeInfo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});

export default CatalogPage;