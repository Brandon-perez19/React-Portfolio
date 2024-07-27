import React from 'react';
import budgetTracker from '../assets/Budget-Tracker.png'
import teamProfileGenerator from '../assets/Team-Profile-Generator.png'
import eCommerce from '../assets/E-Commerce.png'
import techBlog from '../assets/Tech-Blog.png'
import deepThoughts from '../assets/Deep-Thoughts.png'
import bookSearch from '../assets/Book-Search.png'
import application from '../assets/application.png'
import '../styles/portfolio.css'

function Portfolio() {
    const projectsArr = [
        {
            name: "Book Search Engine",
            image: bookSearch,
            link: "https://salty-mountain-82785.herokuapp.com/",
            github: "https://github.com/Brandon-perez19/Book-Search-Engine"
        },
        {
            name: "Budget Tracker",
            image: budgetTracker,
            link: "https://aqueous-castle-91439.herokuapp.com/",
            github: "https://github.com/Brandon-perez19/Budget-Tracker"
        },
        {
            name: "Deep Thoughts",
            image: deepThoughts,
            link: "https://hidden-badlands-71187.herokuapp.com/",
            github: "https://github.com/Brandon-perez19/deep-thoughts"
        },
        {
            name: "E-Commerce",
            image: eCommerce,
            link: "https://github.com/Brandon-perez19/E-Commerce",
            github: "https://github.com/Brandon-perez19/E-Commerce"
        },
        {
            name: "Team Profile Generator",
            image: teamProfileGenerator,
            link: "https://github.com/Brandon-perez19/Team-Profile-Generator",
            github: "https://github.com/Brandon-perez19/Team-Profile-Generator"
        },
        {
            name: "Tech Blog",
            image: techBlog,
            link: "https://whispering-plateau-17922.herokuapp.com/",
            github: "https://github.com/Brandon-perez19/Tech-Blog"
        },
        {
            name: "Get Fit!",
            image: application,
            link: "https://mern-workout-tracker.herokuapp.com/",
            github: "https://github.com/Disha2022/mern_spa_project"
        }
    ]
    return (
        <div className='container viewer'>
            <h2 className='mt-4'> Featured Projects </h2>
            <div className='row'>
                {projectsArr.map((project, i) => (
                    <div key={i} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <img src={project.image} className="card-img-top" alt={project.name} />
                            <div className="card-body">
                                <h5 className="card-title">{project.name}</h5>
                                <a href={project.link} className='btn btn-primary mb-2'>Live Demo</a>
                                <a href={project.github} className='btn btn-secondary'>GitHub</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio

