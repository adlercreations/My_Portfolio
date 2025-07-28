// client/src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const baseUrl = process.env.NODE_ENV === 'production' 
            ? `${process.env.PUBLIC_URL}/api/projects.json` // Deployed URL
            : 'http://127.0.0.1:5000/projects'; // Development URL

        fetch(baseUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setProjects(data))
            .catch((error) => console.error("Error fetching projects:", error));
    }, []);

    return (
        <section className="py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-thin text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {projects.map((project, index) => (
                        <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectList;