import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function MovieCard({movie}) {



  return (
    <>
    <div className='film'>
      <h1 className='movieTitle'>{movie.title}</h1>
      <img src={movie.srcImg} className='filmCover' />
      <Link to={`/details/${movie.id}`} className='LDetails' >details</Link>

    </div>



    {/* <iframe width="300" height="200" src={movie.srcImg} title="YouTube video player" 
    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/> */}

    </>
  )
}