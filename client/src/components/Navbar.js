import React, { useState } from 'react';
import AboutSidebar from './AboutSidebar';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

function Navbar() {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const toggleAbout = () => {
        setIsAboutOpen(!isAboutOpen);
    };

    return (
        <>
            <nav className="w-full sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <a href="#/" className="text-2xl font-medium text-gray-900 dark:text-white hover:text-[#f800ff] dark:hover:text-[#ff33ff] transition-colors duration-200">
                                S J A
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={toggleTheme}
                                className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                            </button>
                            <button 
                                className="px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#f800ff] dark:hover:text-[#ff33ff] transition-colors duration-200"
                                onClick={toggleAbout}
                            >
                                About
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <AboutSidebar isOpen={isAboutOpen} onClose={toggleAbout} />
        </>
    );
}

export default Navbar;
