//client/src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import ProjectPage from './components/ProjectPage';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProjectList />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
        </Router>
    );
}

export default App;
