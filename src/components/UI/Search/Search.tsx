import { FC, FormEvent, ChangeEvent } from 'react';

import "./Search.scss";

interface ISearchProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const Search: FC<ISearchProps> = ({value, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="search">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="search__input"
        placeholder='Поиск книг'
      />
      <button className="search__btn">
        <span className="search__icon"></span>
      </button>
    </form>
  );
};

export default Search;