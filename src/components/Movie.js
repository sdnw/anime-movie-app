import React from "react"
import { useState } from 'react'

function Movie({movie}) {
    const { name, director, year, description, starring, pictureUrl, genre } = movie
    const [showDescription, setShowDescription] = useState(true)

    function handleClick() {
        setShowDescription((prevState) =>!prevState)
    }
    return (
      <div className="card">
        <img src={pictureUrl} className="card-img-top" onClick={handleClick} />
        <div className="card-body">
         <h1 className="card-title">{name}</h1>
            <h3 className="card-subtitle">{director}</h3>
           <p className="card-text">{showDescription ? description : starring}</p>
           <p>{year}</p>
          <p>{genre}</p>
        </div>
       </div> 
      )
    }
    export default Movie

    
  //   <li className="cards__item">
  //   <div className="card">
  //     <img
  //       src={pictureUrl}
  //       alt={"RENDER PERSON NAME"}
  //       className="card__image"
  //       onClick={handleClick}
  //     />
  //     <div className="card__content">
  //       <div className="card__title">{name}</div>
  //       <p>{director}</p>
  //       <p className="card__text">{showDescription ? description : starring}</p>
  //       <div className="card__detail">
  //         <p>{year}</p>
  //         <p>{genre} </p>
  //       </div>
  //     </div>
  //   </div>
  // </li>