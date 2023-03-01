import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context';
import Header from './components/header/index';
import SearchBar from './components/searchBar/index';
import MovieList from './components/movieList/index';
import Menu from './components/menu/index';
import tabList from './genre';
import './style.css';

interface Tab {
  id: number;
  tabName: string;
};

const App: React.FC = () => {
  return (
    <MovieProvider>
        <Header />
        <BrowserRouter>
          <Menu tabList={tabList} />
          <SearchBar />
          <Routes>
            {
              tabList.map(({ tabName, id }: Tab) => <Route key={"link_" + id} path={id === 1 ? "/" : `/${tabName}`} element={<MovieList genre={tabName} />} />)
            }
          </Routes>
        </BrowserRouter>
    </MovieProvider>
  )
};

render(<App />, document.querySelector('#app'));