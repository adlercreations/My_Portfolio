import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.className = darkMode ? 'light-mode' : 'dark-mode';
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1 className="navbar-title">
                    <Link to="/">Stephen J. Adler</Link>
                </h1>
                <p className="navbar-subtitle">Full-stack Software Engineer</p>
            </div>
            <div className="navbar-actions">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

// function Navbar() {
//     return (
//         <nav className="navbar">
//             <div className="navbar-header">
//                 <h1 className="navbar-title">
//                     <Link to="/">Stephen J. Adler</Link>
//                 </h1>
//                 <p className="navbar-subtitle">Full-stack Software Engineer</p>
//             </div>
//             <div className="navbar-links">
//                 <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-github"></i>
//                 </a>
//                 <a href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-linkedin"></i>
//                 </a>
//                 <a href="mailto:your-email@example.com">
//                     <i className="fas fa-envelope"></i>
//                 </a>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;