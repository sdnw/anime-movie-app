import React from "react"
import Movie from "./Movie"

function MovieContainer({ movies }) {
    const renderMovies = movies.map((movie) => (
        <Movie movie={movie} key={movie.id}/>
    ))
    return (
        <ul className="cards">
            {renderMovies}
        </ul>
    )
}

export default MovieContainer