// /client/src/components/Navbar.js
import React, { useState } from 'react';
import ThreeDHeader from './ThreeDHeader';
import '../styles/Navbar.css';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.className = darkMode ? 'light-mode' : 'dark-mode';
    };

    const toggleAbout = () => {
        setIsAboutOpen(!isAboutOpen);
    };

    return (
        <nav className="navbar">
            <div className="theme-toggle-container">
                <button 
                    className="theme-toggle"
                    onClick={toggleTheme}
                    style={{ 
                        color: "white",
                        // color: darkMode ? 'black' : 'white',
                    }}
                >
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <ThreeDHeader darkMode={darkMode} />
            <p 
                className="navbar-subtitle"
                style={{
                    color: darkMode ? 'white' : 'black',
                }}
            >
                Full-Stack Software Engineer
            </p>
            <div className="navbar-links">
                <a 
                    href="https://github.com/adlercreations"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? 'white' : 'black',
                        transition: 'color 0.3s ease',
                    }}
                >
                    <i className="fab fa-github"></i>
                </a>
                <a 
                    href="https://www.linkedin.com/in/stephenadlercreations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: darkMode ? 'white' : 'black',
                        transition: 'color 0.3s ease',
                    }}
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                <a 
                    href="mailto:adlercreations@gmail.com"
                    style={{ 
                        color: darkMode ? 'white' : 'black',
                        transition: 'color 0.3s ease',
                    }}
                >
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
            <div className="about-toggle-container">
                <button className="about-toggle" onClick={toggleAbout}>
                    About
                </button>
            </div>
            {isAboutOpen && (
                <div className="about-panel">
                    <button className='close-about' onClick={toggleAbout}>
                        Close
                    </button>
                    <div className="profile-container">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/profile-pic.jpg`} 
                                alt="Profile" 
                                className="profile-picture" 
                        />
                        <p className="profile-name">Stephen J. Adler</p>
                        <p className="profile-title">Full-stack Software Engineer</p>
                    </div>
                    <p>
                        Hello! I'm Stephen J. Adler, a Full-stack Software Engineer with a passion for
                        building dynamic and intuitive web applications. I am proficient in design, 
                        collaborating, problem-solving, and outside-the-box thinking.
                    </p>
                    <h3>Developer Skills:</h3>
                    <ul>
                        <li>Languages: JavaScript, Python, Swift</li>
                        <li>Frameworks: React, Flask, React Native</li>
                        <li>Tools: Git, Docker, Vite, AWS</li>
                        <li>Libraries: Redux, Tensorflow, Pytorch, Vue.js, Django</li>
                        <li>Software: Visual Studio Code, Postman, Replit, Unity, Xcode</li>
                    </ul>
                    <h3>Design Skills:</h3>
                    <ul>
                        <li>Languages: HTML, CSS</li>
                        <li>Frameworks: Tailwind, Material UI, Bootstrap</li>
                        <li>Tools: Digital Art tools, Drawing tablets</li>
                        <li>Libraries: Three.js, React-three-fiber</li>
                        <li>Software: Adobe Creative Suite, Procreate, Canva, Affinity Suite, Figma, Blender, Autodesk Maya, ZBrush, and much more.
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
