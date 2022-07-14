import React from "react"
import Header from "./Header"
import NavBar from "./Navbar"
import MovieContainer from "./MovieContainer"
import CreateMovieForm from "./CreateMovieForm"
import { useState, useEffect } from 'react'
import Home from "./Home"
import ContactUs from "./ContactUs"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

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
        (movie) => { console.log(search)
        return (
        movie.name.toLowerCase().includes(search.toLowerCase()) ||
        movie.genre.toLowerCase().includes(search.toLowerCase())  ||
        movie.description.toLowerCase().includes(search.toLowerCase())
        )})
    return (
        <div>
            <nav>
                <ul>
                 <li>
                    <Link to="/">Home</Link>
                 </li>
                 <li>
                     <Link to="/contactus">Contact Us</Link>
                 </li>
                 <li>
                     <Link to="/createmovieform">Create Movie</Link>
                 </li>
                </ul>
            </nav>
            <Header />
                {/* <MovieContainer movies={filteredMovies}/> */}
            <Switch>
                <Route exact path="/" render={() => <Home movies={filteredMovies} setSearch={setSearch} search={search}/>} />
                
                <Route exact path="/contactus" component={ContactUs} />
                
                <Route exact path="/createmovieform" component={CreateMovieForm} />
            </Switch>
        </div>
    )
}
export default App