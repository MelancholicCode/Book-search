import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import CatalogPage from './components/pages/CatalogPage/CatalogPage';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import BookPage from './components/pages/BookPage/BookPage';

import './scss/main.scss';

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to="/catalog" replace/>}/>
          <Route path='/catalog' element={<CatalogPage/>}/>
          <Route path='/book/:id' element={<BookPage/>}/>
          <Route path='/404' element={<ErrorPage/>}/>
          <Route path='*' element={<Navigate to="/404" replace/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
