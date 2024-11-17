// client/src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import '../styles/ProjectList.css';
import ProjectCard from './ProjectCard';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/projects') // Full URL to backend
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setProjects(data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="project-list">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default ProjectList;