import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { bookStore } from '../../../store/BookStore';
import BookList from '../../BookList/BookList';

import "./CatalogPage.scss";

const CatalogPage: FC = observer(() => {
  return (
    <div className='catalog page'>
      <div className="catalog__container">
        <BookList/>
      </div>
    </div>
  );
});

export default CatalogPage;