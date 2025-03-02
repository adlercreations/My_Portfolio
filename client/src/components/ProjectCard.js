//client/src/components/ProjectCard.js
import React from 'react';
import '../styles/ProjectCard.css';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    // Dynamically resolve the image URL
    const imageUrl = `${process.env.PUBLIC_URL}${project.image_url}`;

    return (
        <div className="project-card">
            <img src={imageUrl} alt={project.title} />
            <h2>
                <Link to={`/projects/${project.id}`}>{project.title}</Link>
            </h2>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;

