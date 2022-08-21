import '../App.css';
import React, { useState } from 'react'
import { moviesData } from '../Data';
import MovieCard from './movieCard';
function ListMovies() {
  const [movies, setMovies] = useState(moviesData);
  return (
    <div className='films'>
        {movies.map((movie ,key)=><MovieCard movie={movie} key={key}/>)}
    </div>
  )
}
export default ListMovies;