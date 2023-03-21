import { FC } from 'react';
import { IBook } from '../../types/book';
import Tag from '../UI/Tag/Tag';

//@ts-ignore
import placeholderImg from "../../img/placeholder-img.webp";

import "./Card.scss";

const Card: FC<IBook> = ({volumeInfo, id}) => {
  return (
    <li className="card">
      <div className="card__img-box">
        {volumeInfo.imageLinks
          ? <img className='card__img' src={volumeInfo.imageLinks.thumbnail} alt="" />
          : <img className='card__img' src={placeholderImg} alt='Изображение отсутствует'/>}
      </div>
      <div className="card__content">
        <p className="card__title">
          {volumeInfo.title.length < 31 ? volumeInfo.title : `${volumeInfo.title.slice(0, 31)}...`}
        </p>
        <div className="card__category">
          {volumeInfo.categories && volumeInfo.categories[0]}
        </div>
        <ul className="card__author-list">
          {volumeInfo.authors &&
            volumeInfo.authors
              .slice(0, 3)
              .map(author => (
                <Tag
                  key={author}
                  title={author}
                />
              ))}
        </ul>
      </div>
    </li>
  );
};

export default Card;