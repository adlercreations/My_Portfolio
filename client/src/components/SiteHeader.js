import React from 'react';
import ThreeDHeader from './ThreeDHeader';

function SiteHeader() {
    return (
        <header className="flex flex-col items-center justify-center text-center py-12 sm:py-16 md:py-20 bg-background transition-colors duration-300">
            <ThreeDHeader />

            <div className="mt-8">
                <p className="text-xl sm:text-2xl font-light text-foreground mt-4">
                    Software Engineer & Digital Artist
                </p>
            </div>

            <div className="flex items-center gap-6 mt-6 text-3xl sm:text-4xl text-foreground">
                <a href="https://github.com/adlercreations" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/stephenadlercreations/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors duration-200">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:adlercreations@gmail.com" className="hover:text-primary transition-colors duration-200">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </header>
    );
}

export default SiteHeader;
