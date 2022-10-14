import React from 'react';
import photo from '../assets/IMG_0258.JPG'

function About() {
    return (
        <div className='my-3 viewer'>
            <h1 id="about" style={{color: "#FEFFBE"}}> Who am I?</h1>
            <img className="img-thumbnail" style={{
                height: "600px",
                width: "350px"
            }} src={photo}></img>
            <p className='text-start mx-3 my-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default About;