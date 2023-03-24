import { FC } from 'react';
import { IBook } from '../../types/book';
//@ts-ignore
import placeholderImg from "../../img/placeholder-img.webp";
import Tag from '../UI/Tag/Tag';
import "./BookInfo.scss";

const BookInfo: FC<IBook> = ({volumeInfo, id}) => {
  const img = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : placeholderImg
  const title: string | null = volumeInfo.title || null;
  const description: string | null = volumeInfo.description || null;
  const authors: string[] | null = volumeInfo.authors || null;
  const categories: string[] | null = volumeInfo.categories || null;
  return (
    <div className='book-info'>
      <div className="book-info__left">
        <img src={img} alt="" />
      </div>
      <div className="book-info__right">
        <p className="book-info__title">{title}</p>
        <ul className="book-info__authors-list">
          {authors?.map(author => <Tag key={author} title={author}/>)}
        </ul>
        <ul className="book-info__categories-list">
          {categories?.map(category => <p key={category}>{category}</p>)}
        </ul>
        <p className="book-info__description">{description}</p>
      </div>
    </div>
  );
};

export default BookInfo;