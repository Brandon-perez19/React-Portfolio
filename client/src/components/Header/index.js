import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="border-bottom" style={{backgroundColor: "#D7EBBA"}}>
            <div>
                <Link to='/' className="text-decoration-none ">
                    <h1 className="pt-2" style={{color: "#7A5C58"}}>
                    Brandon Perez
                    </h1>
                </Link>
                <ul className="nav">
                    <Link to='/resume' style={{color: "#7A5C58"}} className="nav-item nav-link">
                        Resume
                    </Link>
                    <Link to='/about' style={{color: "#7A5C58"}} className="nav-item nav-link">
                        About
                    </Link>
                    <Link to='/contact' style={{color: "#7A5C58"}} className="nav-item nav-link">
                        Contact
                    </Link>
                    <Link to='/portfolio' style={{color: "#7A5C58"}} className="nav-item nav-link">
                        Portfolio
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header