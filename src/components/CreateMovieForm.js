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
        // console.log('hi');
        const movie = { name, director, year, description, starring, pictureUrl, genre }
        console.log(movie)

        // console.log(movie)
        fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(movie),
        }).then(() => {
            console.log('new movie added')
        })
    }
    console.log("name: ", name)

    return (
        <div className="group">
            
            <form className="form-group" >
            <h2> Create Movie Form </h2>
                <div className="form">
                <label>Name </label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form">
                <label>Director </label>
                <input type="text" required value={director} onChange={(e) => setDirector(e.target.value)}/>
                </div>
                <div className="form">
                <label>Year </label>
                <input type="text" required value={year} onChange={(e) => setYear(e.target.value)}/>
                </div>
                <div className="form">
                <label>Description </label>
                <textarea required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="form">
                <label>Starring </label>
                <input type="text" required value={starring} onChange={(e) => setStarring(e.target.value)}/>
                </div>
                <div className="form">
                <label>Image </label>
                <input type="text" required value={pictureUrl} onChange={(e) => setPictureUrl(e.target.value)}/>
                </div>
                <div className="form">
                <label>Genre </label>
                <input type="text" required value={genre} onChange={(e) => setGenre(e.target.value)}/>
                </div>
                <button type="submit" onClick={handleSubmit}> Add Movie! </button>
            </form>
        </div>

    )
}

export default CreateMovieForm;

// <form>
//   <div class="form-group">
//     <label for="examplemovie">Name</label>
//     <input type="movie" class="form-control" id="exampleInputEma" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>