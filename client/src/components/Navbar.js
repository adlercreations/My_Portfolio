import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">
                <Link to="/">Stephen J. Adler</Link>
            </h1>
            <p className="navbar-subtitle">Full-stack Software Engineer</p>
        </nav>
    );
}

export default Navbar;