import '../App.css';
import React from 'react'
import { useParams } from "react-router-dom";
import {moviesData} from "../Data"

function getFilm(id) {
  return moviesData.filter((f)=>{if(f.id==id){return f;}})
}
function Details({movie}) {
  let {id} = useParams();
  let f=getFilm(id)[0];
  return (
      <>
        <div className="container">
            <h1 className='movieTitle'>Title: {f.title}</h1>
            <div className='CantainerTrailer'>
              <iframe width="800" height="500" src={f.srcTrailer} title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen/>
            </div>
            <h3 className='sinopsis'><b>sinopsis:</b></h3>
            <p className='sinopsis'>{f.sinopsis}</p>
        </div>
      </>
  )
}
export default Details