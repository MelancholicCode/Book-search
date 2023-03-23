import { FC, useState, FormEvent, ChangeEvent } from 'react';
import { bookStore } from '../../store/BookStore';
import { observer } from 'mobx-react-lite';
import Search from '../UI/Search/Search';
import Select from '../UI/Select/Select';
import { categoriesArr, sortArr, FETCH_BOOKS, apiKey, catalogOffset, catalogLimit } from '../../utils/consts';
import "./Header.scss";

const Header: FC = observer(() => {
  const [categoryValue, setCategoryValue] = useState<string>(categoriesArr[0].value);
  const [sortingValue, setSortingValue] = useState<string>(sortArr[0].value);
  const [query, setQuery] = useState<string>('');
  const paramsArr: string[] = [
    `key=${apiKey}`,
    `q=${categoryValue === 'all' ? query : `${query}+subject:${categoryValue}`}`,
    `orderBy=${sortingValue}`,
  ];

  const changeUrl = (e: FormEvent) => {
    e.preventDefault();
    const url = `${FETCH_BOOKS}&${paramsArr.join('&')}`;
    bookStore.setUrl(url);
  }

  return (
    <header className="header">
      <div className="header__container">
        <h1 className='header__title'>Book search service</h1>
        <Search
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          onSubmit={(e: FormEvent<HTMLFormElement>) => changeUrl(e)}
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