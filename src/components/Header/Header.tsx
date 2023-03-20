import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { bookStore } from '../../store/BookStore';
import { observer } from 'mobx-react-lite';
import { IFetchedData } from '../../types/book';
import { categoriesArr, sortArr, FETCH_BOOKS } from '../../utils/consts';
import Search from '../UI/Search/Search';
import Select from '../UI/Select/Select';

import "./Header.scss";

const Header: FC = observer(() => {
  const [query, setQuery] = useState<string>('');
  const limit: number = 30;
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchBooks = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (query.length) {
      try {
        const res: Response = await fetch(`${FETCH_BOOKS}?q=${query}&maxResults=${limit}&key=${apiKey}`);
        const {items}: IFetchedData = await res.json();
        bookStore.setBooks(items);
      } catch(err) {
        alert(err);
      }
    }
  }

  return (
    <header className="header">
      <div className="header__container">
        <h1 className='header__title'>Book search service</h1>
        <Search
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onSubmit={(e: FormEvent<HTMLFormElement>) => fetchBooks(e)}
        />
        <ul className="header__filter-list">
          <Select title="Category" optionsArr={categoriesArr}/>
          <Select title="Sorting by" optionsArr={sortArr}/>
        </ul>
      </div>
    </header>
  );
});

export default Header;