import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

import './scss/main.scss';

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}

export default App;
