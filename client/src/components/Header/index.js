import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/header.css'

function Header() {
    return (
        <header className="header">
            <div>
                <Link to='/' className="text-decoration-none ">
                    <h1 className="header-title">
                    Brandon Perez | Web Developer Portfolio
                    </h1>
                </Link>
                <ul className="nav">
                    <Link to='/resume'className="nav-item">
                        Resume
                    </Link>
                    <Link to='/about' className="nav-item">
                        About
                    </Link>
                    <Link to='/contact' className="nav-item">
                        Contact
                    </Link>
                    <Link to='/portfolio' className="nav-item">
                        Portfolio
                    </Link>
                    <Link to='/certificate' className="nav-item">
                        Certification
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header