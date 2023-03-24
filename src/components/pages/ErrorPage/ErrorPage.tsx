import {FC} from 'react';

import "./ErrorPage.scss";

const ErrorPage: FC = () => {
  return (
    <div className='error-page page'>
      <div className="error-page__container">
        <h2 className='error-page__title'>404</h2>
        <p className='error-page__text'>Something went wrong...</p>
      </div>
    </div>
  );
};

export default ErrorPage;