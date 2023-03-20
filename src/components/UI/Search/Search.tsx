import { FC } from 'react';

import "./Search.scss";

interface ISearchProps {
  
}

const Search: FC<ISearchProps> = () => {
  return (
    <form className="search">
      <input type="text" className="search__input" />
      <div className="search__btn">
        <span className="search__icon"></span>
      </div>
    </form>
  );
};

export default Search;