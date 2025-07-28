import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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

    if (!project) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <p className="text-2xl text-subtle-text animate-pulse">Loading Project...</p>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in-up">
            <Link to="/" className="text-subtle-text hover:text-primary transition-colors duration-300 mb-8 inline-block">&larr; Back to Projects</Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                {/* Left Column (or Top on Mobile) - Media */}
                <div className="lg:col-span-3">
                    {project.video_link ? (
                        <div className="w-full aspect-video rounded-lg overflow-hidden border border-muted shadow-lg">
                            <video
                                src={`${process.env.PUBLIC_URL}${project.video_link}`}
                                controls
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <img 
                            src={`${process.env.PUBLIC_URL}${project.image_url}`}
                            alt={project.title}
                            className="w-full h-auto object-cover rounded-lg border border-muted shadow-lg"
                        />
                    )}
                </div>

                {/* Right Column (or Bottom on Mobile) - Details */}
                <div className="lg:col-span-2 flex flex-col">
                    <h1 className="text-4xl sm:text-5xl font-thin text-main-text mb-4">{project.title}</h1>
                    <p className="text-lg text-subtle-text mb-6 leading-relaxed">{project.expanded_description}</p>
                    
                    <h3 className="text-2xl font-semibold text-main-text mb-4">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.tools.map((tool, index) => (
                            <span key={index} className="border border-muted text-subtle-text text-sm font-medium px-3 py-1.5 rounded-full">
                                {tool}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto pt-6 border-t border-muted">
                        {project.live_link && (
                            <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-all duration-300 w-full text-center">
                                Live Demo
                            </a>
                        )}
                        {project.github_link && (
                            <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="border border-muted text-main-text px-6 py-3 rounded-lg font-semibold hover:bg-muted transition-all duration-300 w-full text-center">
                                GitHub Repo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;