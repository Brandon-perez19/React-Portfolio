import React from 'react';
import budgetTracker from '../assets/Budget-Tracker.png'
import teamProfileGenerator from '../assets/Team-Profile-Generator.png'
import eCommerce from '../assets/E-Commerce.png'
import techBlog from '../assets/Tech-Blog.png'
import deepThoughts from '../assets/Deep-Thoughts.png'
import bookSearch from '../assets/Book-Search.png'

function Portfolio() {
    const projectsArr = [
        {
            name: "Book Search Engine",
            image: bookSearch,
            link: "https://salty-mountain-82785.herokuapp.com/",
            github:"https://github.com/Brandon-perez19/Book-Search-Engine"
        },
        {
            name: "Budget Tracker",
            image: budgetTracker,
            link: "https://aqueous-castle-91439.herokuapp.com/",
            github:"https://github.com/Brandon-perez19/Budget-Tracker"
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
            github:"https://github.com/Brandon-perez19/Tech-Blog"
        }
    ]
    return (
        <div>
            <h2 className='text-muted'> Featured Projects </h2>
            <div className='row'>
                {projectsArr.map((project, i) => (
                    <div className="col-5 my-2">
                        <div className="border rounded border-dark">
                            <div className="card">
                                <a href={project.link} rel="noreferrer" target="_blank">
                                <img src={project.image} className="card-img-top" alt={project.name} />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.github} rel="noreferrer" target="_blank">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio

