import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="border-bottom border-dark" style={{backgroundColor: "#3a405a"}}>
            <div>
                <Link to='/' className="text-decoration-none ">
                    <h1 className="pt-2" style={{color: "#aec5eb"}}>
                    Brandon Perez
                    </h1>
                </Link>
                <ul className="nav">
                    <Link to='/resume' style={{color: "#aec5eb"}} className="nav-item nav-link">
                        Resume
                    </Link>
                    <Link to='/about' style={{color: "#aec5eb"}} className="nav-item nav-link">
                        About
                    </Link>
                    <Link to='/contact' style={{color: "#aec5eb"}} className="nav-item nav-link">
                        Contact
                    </Link>
                    <Link to='/portfolio' style={{color: "#aec5eb"}} className="nav-item nav-link">
                        Portfolio
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header