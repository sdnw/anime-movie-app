import React from "react"
import Movie from "./Movie"

function MovieContainer({ movies }) {
    const renderMovies = movies.map((movie) => (
        <Movie movie={movie} key={movie.id}/>
    ))
    return (
        <div classname="movieContainer">
        <ul className="cards">
            {renderMovies}
        </ul>
        </div>
    )
}

export default MovieContainer