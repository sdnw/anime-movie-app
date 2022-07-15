import React from "react"
import Movie from "./Movie"

function MovieContainer({ movies }) {
    const renderMovies = movies.map((movie) => (
            <div className="col justify-content-center">
                <Movie movie={movie} key={movie.id}/>
             </div>
       
    ))
    return (
        <div className="movieContainer">
                 <ul className="cards">
                    <div className="row">    
                        {renderMovies}  
                    </div>
                </ul>
        </div>
    )
}

export default MovieContainer