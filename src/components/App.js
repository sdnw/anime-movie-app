import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import MovieContainer from "./MovieContainer"
import CreateMovieForm from "./CreateMovieForm"
import { useState, useEffect } from 'react'
import Home from "./Home"
import ContactUs from "./ContactUs"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import logo from "../images/logo.png"

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
          <nav className="navbar navbar-expand-md">
            <img className="logo" src={logo} /> <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="/contactus">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#" to="/createmovieform">Add a Movie</Link>
                    </li>
                </ul>
                 <form className="d-flex input-group w-auto">
                     <input type="search" className="form-control" placeholder="Search Movie" aria-label="Search" />
                     <button className="btn btn-outline-primary" type="button" data-mdb-ripple-color="dark" onChange={(event) => setSearch(event.target.value)} value={search}>
                          Search
                     </button>
                 </form>
            </div>
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



        {/* <nav>
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
        </nav> */}