//client/src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    // Dynamically resolve the image URL
    const imageUrl = `${process.env.PUBLIC_URL}${project.image_url}`;

    // Ensure tools is an array
    const tools = Array.isArray(project.tools) ? project.tools : [];

    return (
        <Link 
            to={`/projects/${project.id}`} 
            className="group flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 hover:border-[#f800ff] dark:hover:border-[#ff33ff] shadow-md hover:shadow-xl hover:shadow-[#f800ff20] dark:hover:shadow-[#ff33ff30]"
        >
            <div className="overflow-hidden">
                <img className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105" src={imageUrl} alt={project.title} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-3xl font-thin text-gray-900 dark:text-white group-hover:text-[#f800ff] dark:group-hover:text-[#ff33ff] transition-colors duration-300 mb-2">
                    {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {tools.slice(0, 4).map((tool, index) => (
                        <span key={index} className="border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full">
                            {tool}
                        </span>
                    ))}
                </div>
                <p className="text-[#f800ff] dark:text-[#ff33ff] font-semibold flex items-center gap-2 group-hover:text-[#e000e6] dark:group-hover:text-[#ff66ff] transition-colors duration-300 mt-4">
                    View Project
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </p>
            </div>
        </Link>
    );
}

export default ProjectCard;
