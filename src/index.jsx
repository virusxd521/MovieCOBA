import React, {useState} from 'react';
import { render } from 'react-dom';
import Header from './components/header/index';
import MovieList from './components/movieList/index'
import Menu from './components/menu/index'
import tabList from './genre.js';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { MovieCartContext } from './context';
import './style.css';



const App = () => {
  const [movieCart, setMovieCart] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (id) =>{
    setActiveTab(id);
  }

  const setCart= (item) => {
    if(item.isSelect){
      const result = [...movieCart,item];
      setMovieCart(result);
    }
    else {
      const result = movieCart.filter(movie => movie.id !=item.id && movie.genre==item.genre);
      setMovieCart(result);
    }
  }
  
  return(
    <MovieCartContext.Provider value={{ movieCart, setCart }}>
      <Header count={movieCart?movieCart.length:0}/>
      <BrowserRouter>
        <Menu tabList={tabList} activeTab={activeTab} onTabChange={handleTabChange}/>
        <Routes>        
          {
            tabList.map(({tabName, id}) =><Route key={"link_"+id} path={id==1?"/":'/'+tabName} element={<MovieList genre={tabName} />}/>)
          }
        </Routes>
      </BrowserRouter>
    </MovieCartContext.Provider>
  )
};

render(<App />, document.querySelector('#app'));
