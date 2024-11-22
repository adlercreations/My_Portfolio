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
                Full-stack Software Engineer
            </p>
            <div className="navbar-links">
                <a 
                    href="https://github.com/your-github-username"
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
                    href="https://linkedin.com/in/your-linkedin-profile"
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
                    href="mailto:your-email@example.com"
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
                    <p>
                        Hello! I'm Stephen J. Adler, a Full-stack Software Engineer with a passion for
                        building dynamic and intuitive web applications. I am proficient in design, 
                        collaborating, problem-solving, and outside-the-box thinking.
                    </p>
                    <h3>Developer Skills:</h3>
                    <ul>
                        <li>Languages: JavaScript, Python</li>
                        <li>Frameworks: React, Flask</li>
                        <li>Tools: Git, Docker, Vite</li>
                        <li>Libraries: Redux, Tensorflow, Pytorch, Vue.js, Django</li>
                        <li>Software: Visual Studio Code, Postman, Replit</li>
                    </ul>
                    <h3>Design Skills:</h3>
                    <ul>
                        <li>Languages: HTML, CSS</li>
                        <li>Frameworks: Tailwind, Material UI</li>
                        <li>Tools: Digital Art tools, Drawing tablets</li>
                        <li>Libraries: Three.js, React-three-fiber</li>
                        <li>Software: Adobe Creative Suite, Procreate, Canva, Affinity Suite, Figma, 
                            Blender, Autodesk Maya, ZBrush, and much more.
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;



// //client/src/components/Navbar.js
// import React, { useState } from 'react';
// import ThreeDHeader from './ThreeDHeader';
// import '../styles/Navbar.css';

// function Navbar() {

//     const [darkMode, setDarkMode] = useState(false);
//     const [aboutVisable, setAboutVisable] = useState(false);

//     const toggleTheme = () => {
//         setDarkMode(!darkMode);
//         document.body.className = darkMode ? 'light-mode' : 'dark-mode';
//     };

//     const toggleAbout = () => {
//         setAboutVisable(!aboutVisable);

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="theme-toggle-container">
//                     <button className="theme-toggle" onClick={toggleTheme}>
//                         {darkMode ? 'Light Mode' : 'Dark Mode'}
//                     </button>
//                 </div>
//                 <ThreeDHeader />
//                 <p className="navbar-subtitle">Full-stack Software Engineer</p>
//                 <div className="navbar-links">
//                     <a href="https://github.com/adlercreations" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-github"></i>
//                     </a>
//                     <a href="https://www.linkedin.com/in/stephenadlerartist/" target="_blank" rel="noopener noreferrer">
//                         <i className="fab fa-linkedin"></i>
//                     </a>
//                     <a href="mailto:adlercreations@gmail.com">
//                         <i className="fas fa-envelope"></i>
//                     </a>
//                 </div>
//                 <div className='about-toggle-container'>
//                     <button className="about-toggle" onClick={toggleAbout}>
//                         {aboutVisable ? 'Hide About' : 'Show About'}
//                     </button>
//                 </div>
//             </nav>

//             {aboutVisable && (
//                 <div className="about-panel">
//                     <p>
//                         Hello! I'm Stephen Adler, a Full-stack Software Developer with a passion for 
//                         building dynamic and  intuitive web applications. I have experience in React, Flask,
//                         Python, Javascript, and more.
//                     </p>
//                     <h3>Technical Skills</h3>
//                     <ul>
//                         <li>Languages: Javascript, Python, HTML, CSS</li>
//                         <li>Frameworks: React, Flask</li>
//                         <li>Tools: Git, Docker, Webpack</li>
//                         <li>Libraries: Redux, Three.js, Axios</li>
//                         <li>Software: VS ComputedAttribute, Postman</li>
//                     </ul>
//                 </div>
//             )}
//         </>
//     );
// }

// export default Navbar;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Navbar.css';

// function Navbar() {
//     const [darkMode, setDarkMode] = useState(false);

//     const toggleTheme = () => {
//         setDarkMode(!darkMode);
//         document.body.className = darkMode ? 'light-mode' : 'dark-mode';
//     };

//     return (
//         <nav className="navbar">
//             {/* Dark Mode Toggle */}
//             <div className="theme-toggle-container">
//                 <button className="theme-toggle" onClick={toggleTheme}>
//                     {darkMode ? 'Light Mode' : 'Dark Mode'}
//                 </button>
//             </div>

//             {/* Main Navbar Content */}
//             <div className="navbar-header">
//                 <h1 className="navbar-title">
//                     <Link to="/">Stephen J. Adler</Link>
//                 </h1>
//                 <p className="navbar-subtitle">Full-stack Software Engineer</p>
//             </div>

//             {/* Contact Links */}
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