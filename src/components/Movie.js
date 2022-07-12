import React from "react"
import { useState } from 'react'

function Movie({movie}) {
    const { name, director, year, description, starring, pictureUrl, genre } = movie
    const [showDescription, setShowDescription] = useState(true)

    function handleClick() {
        setShowDescription((prevState) =>!prevState)
    }
    return (
        <li className="cards__item">
        <div className="card">
          <img
            src={pictureUrl}
            alt={"RENDER PERSON NAME"}
            className="card__image"
            onClick={handleClick}
          />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p>{director}</p>
            <p className="card__text">{showDescription ? description : starring}</p>
            <div className="card__detail">
              <p>{year}</p>
              <p>{genre} </p>
            </div>
          </div>
        </div>
      </li>
    )
}
export default Movie