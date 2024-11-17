//client/src/components/ProjectPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProjectPage.css';

function ProjectPage() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

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
            .then((data) => {
                const foundProject = data.find((p) => p.id === parseInt(id));
                if (!foundProject) {
                    throw new Error("Project not found");
                }
                setProject(foundProject);
            })
            .catch((error) => console.error("Error fetching project:", error));
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