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
                Hello, and thank you for visiting my digital portfolio. My name is Brandon Perez. At 25 years old, I am a dedicated and enthusiastic junior developer who has transitioned into the tech industry with a deep commitment to mastering the art of coding.

I embarked on my tech journey at the University of Central Florida's boot camp, where I honed my skills in both front-end and back-end development, embracing a full-stack perspective. My primary training focused on JavaScript, setting a solid foundation for my coding skills. Eager to expand my expertise, I have also pursued additional courses in Java, C#, Python, and AWS, continually pushing the boundaries of my knowledge and abilities.

I approach every project with unwavering dedication, believing that the quality of one's work is a reflection of their character. Striving for excellence is not just about personal achievement but about being open to learning from others and seeking assistance when needed. I am excited about the opportunities to innovate and excel in this ever-evolving tech landscape.


                </p>
            </div>
        </div>
    );
}

export default About;