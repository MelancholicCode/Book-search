import { FC } from 'react';
import { IBook } from '../../types/book';

import "./Card.scss";

const Card: FC<IBook> = ({volumeInfo, id}) => {
  return (
    <li className="card">
      <img className='card__img' src={volumeInfo.imageLinks.thumbnail} alt="" />
      <p className="card__title">
        {volumeInfo.title.length < 20 ? volumeInfo.title : `${volumeInfo.title.slice(0, 20)}...`}
      </p>
      {volumeInfo.categories && <div className="card__category">{volumeInfo.categories[0]}</div>}
      <ul className="card__author-list">
        {volumeInfo.authors && volumeInfo.authors.map(author => (
          <li
            key={author}
            className="card__author-item"
          >
            {author}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Card;