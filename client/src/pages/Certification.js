import React from 'react';
import certificate from '../assets/certificate.png'

function Certification() {
    return (
        <div className='container viewer'>
            <h2 className="mt-4"> Full Stack Web Development Certification </h2>
            <section className='skills-container'>
                <img src={certificate} alt='Full Stack Web Development Certificate.' width="100%" height='350px'>
                </img>
            </section>
        </div>
    )
}

export default Certification