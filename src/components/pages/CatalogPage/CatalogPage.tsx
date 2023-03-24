import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import BookList from '../../BookList/BookList';
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary';

import "./CatalogPage.scss";

const CatalogPage: FC = observer(() => {
  return (
    <div className='catalog-page page'>
      <div className="catalog__container">
        <ErrorBoundary>
          <BookList/>
        </ErrorBoundary>
      </div>
    </div>
  );
});

export default CatalogPage;