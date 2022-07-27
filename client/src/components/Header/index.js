import React from "react";
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-light border-bottom">
            <div>
                <Link to='/' className="text-decoration-none ">
                    <h1 className="pt-2 text-muted">
                    Portfolio
                    </h1>
                </Link>
                <ul className="nav">
                    <Link to='/resume'>
                        Resume
                    </Link>
                    <Link to='/about' className="nav-item nav-link">
                        About
                    </Link>
                    <Link to='/contact' className="nav-item nav-link">
                        Contact
                    </Link>
                </ul>
            </div>
        </header>
    );
};

export default Header