import {FC} from 'react';
import { categoriesArr, sortArr } from '../../utils/consts';
import Search from '../UI/Search/Search';
import Select from '../UI/Select/Select';

import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className='header__title'>Book search service</h1>
        <Search/>
        <ul className="header__filter-list">
          <Select title="Category" optionsArr={categoriesArr}/>
          <Select title="Sorting by" optionsArr={sortArr}/>
        </ul>
      </div>
    </header>
  );
};

export default Header;