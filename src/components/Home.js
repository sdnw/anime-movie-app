import React from 'react';
import Navbar from './Navbar'
import MovieContainer from "./MovieContainer"
import { useState, useEffect } from 'react'

function Home({ movies, search, setSearch }) {
    console.log(movies)
    return (
        <div className="About">
            <h1>Home</h1>
            <Navbar setSearch={setSearch} search={search}/>
            <MovieContainer movies={movies || movies}/>
        </div>
    )
}

export default Home;