import './App.css';
import {moviesData} from './Data'
import { useState } from 'react';
import ListMovies from './Component/listMovies';
import { Link, Route, Routes } from 'react-router-dom';
import Details from './Component/Details';


function App() {

  return (
    <>
    <div className='BG'>
      <div className='menu'>
        
      <Link className='LMenu' to='/' >list movies</Link>
        <Link className='LMenu' to='/' >acceuil</Link>

      </div>
        <Routes>
        <Route path="/" element={<ListMovies />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
    </>
  );
}
export default App;
