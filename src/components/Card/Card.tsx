import { FC } from 'react';
import { IBook } from '../../types/book';
import Tag from '../UI/Tag/Tag';

//@ts-ignore
import placeholderImg from "../../img/placeholder-img.webp";

import "./Card.scss";
import { bookStore } from '../../store/BookStore';

const Card: FC<IBook> = ({volumeInfo, id}) => {
  const img = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : placeholderImg
  let title: string | null = null;
  let category: string | null = null;
  if (volumeInfo.title) {
    title = volumeInfo.title.length < 31 ? volumeInfo.title : `${volumeInfo.title.slice(0, 31)}...`;
  }
  if (volumeInfo.categories?.length) {
    const i: number = volumeInfo.categories.indexOf(bookStore.category.name);
    if (bookStore.category.value !== 'all') {
      category = i > -1 ? volumeInfo.categories[i] : volumeInfo.categories[0]
    } else {
      category = volumeInfo.categories[0];
    }
  }
  return (
    <li className="card">
      <div className="card__img-box">
        <img className='card__img' src={img} alt="" />
      </div>
      <div className="card__content">
        <p className="card__title">
          {title}
        </p>
        <div className="card__category">
          {category}
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