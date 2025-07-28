import React from 'react';

function AboutSidebar({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-60 dark:bg-opacity-80 z-40 transition-opacity duration-300"
                    onClick={onClose}
                ></div>
            )}

            <div 
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{ 
                    overflowY: 'auto',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#f800ff #f0f0f0',
                }}
            >
                <div className="relative p-6 h-full overflow-y-auto">
                    <button 
                        className='absolute top-6 right-6 text-3xl text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-200'
                        onClick={onClose}
                        aria-label="Close sidebar"
                    >
                        &times;
                    </button>
                    <div className="text-center mt-12">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/images/profile-pic.jpg`} 
                            alt="Profile" 
                            className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#f800ff] dark:border-[#ff33ff] shadow-lg"
                        />
                        <p className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">Stephen J. Adler</p>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Full-Stack Software Engineer</p>
                    </div>
                    <p className="mt-8 text-left text-gray-700 dark:text-gray-200 leading-relaxed">
                        Hello! I'm Stephen J. Adler, a Full-stack Software Engineer with a passion for
                        building dynamic and intuitive web applications. I am proficient in design, 
                        collaborating, problem-solving, and outside-the-box thinking.
                    </p>
                    <div className="mt-8 text-left">
                        <h3 className="text-xl font-semibold text-[#f800ff] dark:text-[#ff33ff] mb-3">Developer Skills:</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Languages: JavaScript, Python, Swift</li>
                            <li>Frameworks: React, Flask, React Native</li>
                            <li>Tools: Git, Docker, Vite, AWS</li>
                            <li>Libraries: Redux, Tensorflow, Pytorch, Vue.js, Django</li>
                            <li>Software: Visual Studio Code, Postman, Replit, Unity, Xcode</li>
                        </ul>
                    </div>
                    <div className="mt-6 text-left">
                        <h3 className="text-xl font-semibold text-[#f800ff] dark:text-[#ff33ff] mb-3">Design Skills:</h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                            <li>Languages: HTML, CSS</li>
                            <li>Frameworks: Tailwind, Material UI, Bootstrap</li>
                            <li>Tools: Digital Art tools, Drawing tablets</li>
                            <li>Libraries: Three.js, React-three-fiber</li>
                            <li>Software: Adobe Creative Suite, Procreate, Canva, Affinity Suite, Figma, Blender, Autodesk Maya, ZBrush, and much more.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutSidebar;
