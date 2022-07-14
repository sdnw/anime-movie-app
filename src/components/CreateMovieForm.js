import React, { useState } from 'react';

function CreateMovieForm(){
    // console.log('create movie form');
    const [name, setName] = useState('')
    const [director, setDirector] = useState('')
    const [year, setYear] = useState('')
    const [description, setDescription] = useState('')
    const [starring, setStarring] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const movie = { name, director, year, description, starring, pictureUrl, genre }

        // console.log(movie)
        fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
        }).then(() => {
            console.log('new movie added')
        })
    }

    return (
        <div className="CreateMovieForm">
            <h2> Create Movie Form </h2>
            <form onSubmit={handleSubmit}>
                <label>Name </label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Director </label>
                <input 
                    type="text"
                    required
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                />
                <label>Year </label>
                <input 
                    type="text"
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <label>Description </label>
                <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label>Starring </label>
                <input 
                    type="text"
                    required
                    value={starring}
                    onChange={(e) => setStarring(e.target.value)}
                />
                <label>Image </label>
                <input 
                    type="text"
                    required
                    value={pictureUrl}
                    onChange={(e) => setPictureUrl(e.target.value)}
                />
                <label>Genre </label>
                <input 
                    type="text"
                    required
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                />
                <button> Add Movie! </button>
            </form>
        </div>
    )
}

export default CreateMovieForm;