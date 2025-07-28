//client/src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import HeroSection from './components/HeroSection';
import ProjectPage from './components/ProjectPage';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="min-h-screen font-sans bg-background dark:bg-dark-background text-main-text dark:text-dark-main-text transition-colors duration-200">
                    <Navbar />
                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <Routes>
                            <Route 
                                path="/" 
                                element={
                                    <>
                                        <HeroSection />
                                        <ProjectList />
                                    </>
                                }
                            />
                            <Route path="/projects/:id" element={<ProjectPage />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
