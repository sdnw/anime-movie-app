import React from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import MovieContainer from "./MovieContainer"
// import NewForm from "./NewForm"
import { useState, useEffect } from 'react'

function App() {
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState("")

    function fetchMovies() {
        fetch("http://localhost:3000/movies")
          .then((res) => res.json())
          .then((moviesData) => setMovies(moviesData))
    }
    useEffect(fetchMovies, [])

    const filteredMovies = movies.filter(
        (movie) => movie.name.toLowerCase().includes(search.toLowerCase()) || movies.description.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <div>
            <Header />
            {/* <NavBar setSearch={setSearch} search={search}/> */}
            <MovieContainer movies={filteredMovies}/>
            {/* <NewForm /> */}
        </div>
    )
}
export default App