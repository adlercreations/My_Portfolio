import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectPage.css';

function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/api/projects/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setProject(data))
            .catch(error => console.error("Project not found:", error));
    }, [id]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="project-page">
            <h1>{project.title}</h1>
            <p>{project.expanded_description}</p>
            <h3>Tools Used:</h3>
            <ul>
                {project.tools.map((tool, index) => (
                    <li key={index}>{tool}</li>
                ))}
            </ul>
            <video
                src={project.video_link}
                controls
                width="100%"
                style={{ marginBottom: '200px'}}
            />
        </div>
    );
}

export default ProjectPage;