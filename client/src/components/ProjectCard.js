import React from 'react';
import '../styles/ProjectCard.css';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image_url} alt={project.title} />
            <h2>
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h2>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;