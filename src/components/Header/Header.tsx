import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { bookStore } from '../../store/BookStore';
import { observer } from 'mobx-react-lite';
import { IFetchedData } from '../../types/book';
import { categoriesArr, sortArr, FETCH_BOOKS } from '../../utils/consts';
import Search from '../UI/Search/Search';
import Select from '../UI/Select/Select';

import "./Header.scss";

const Header: FC = observer(() => {
  const [categoryValue, setCategoryValue] = useState<string>(categoriesArr[0].value);
  const [sortingValue, setSortingValue] = useState<string>(sortArr[0].value);
  const [query, setQuery] = useState<string>('');
  const startIndex: number = 0;
  const limit: number = 30;
  const apiKey: string | undefined = process.env.REACT_APP_API_KEY;
  const paramsArr: string[] = [
    `key=${apiKey}`,
    `q=${categoryValue === 'all' ? query : `${query}+subject:${categoryValue}`}`,
    `orderBy=${sortingValue}`,
    `maxResults=${limit}`
  ];

  const fetchBooks = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    if (query.length) {
      try {
        const res: Response = await fetch(`${FETCH_BOOKS}&${paramsArr.join('&')}`);
        const {items}: IFetchedData = await res.json();
        bookStore.setBooks(items);
        console.log(items)
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
          <Select
            value={categoryValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategoryValue(e.target.value)}
            title="Category"
            optionsArr={categoriesArr}/>
          <Select
            value={sortingValue}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortingValue(e.target.value)}
            title="Sorting by"
            optionsArr={sortArr}/>
        </ul>
      </div>
    </header>
  );
});

export default Header;