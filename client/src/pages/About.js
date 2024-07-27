import React from 'react';
import photo from '../assets/IMG_0258.JPG'
import '../styles/about.css'

function About() {
    return (
        <div className='container viewer'>
            <h1 id="about" className='mt-4'> Who am I?</h1>
            <div className='about-content mt-4'>
                <img className="img-thumbnail profile-photo" src={photo} alt='Brandon Perez'></img>
                <p className='about-text'>
                    Hello there! Thank you for taking a look at my digital portfolio. My name is Brandon Perez, I am a 23-year passionate junior developer wanting to change my career field in the world of code. I'm excited to keep up with an ever-changing world or technology and push myself to learn new laguages and forms of development! I studied at University of Central Florida's bootcamp for web development that focused on a full-stack view. Making me proficent in the development of front-end processes and back-end as well. My training had me focused primarily on the coding language JavaScript, but through continuation courses provided by the Universit, I have pushed myself to learn Java, C#, Python and AWS. I take everything I do with 110% effort as I believe your work is an exstention of yourself. If you want to be the best, you have to show your best efforts while not being scared to ask for help along the way!
                </p>
            </div>
        </div>
    );
}

export default About;