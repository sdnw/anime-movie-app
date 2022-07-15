import React from 'react';
import {Link} from "react-router-dom"

function ContactUs() {
    // console.log('contact us')
    
    return (
        <div className="ContactUs">
            <h1>Contact Us</h1>
            <div className="row">
            <div className="col-md-6">
            <h2>Kelsey Weeks</h2>
            <Link to={{pathname: "https://github.com/kelsweeks"}} target="_blank">
                <button type="button" className="btn-primary">Her GitHub</button>
            </Link>
            </div>
            <div className="col-md-6">
            <h2>Steven Dawn</h2>
            <Link to={{pathname: "https://github.com/kelsweeks"}} target="_blank">
                <button type="button" className="btn-primary">His GitHub</button>
            </Link>
            </div>
            </div>
        </div>
    )
}

export default ContactUs;