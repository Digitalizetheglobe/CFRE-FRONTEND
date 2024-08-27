import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './projectCard';
import BannerImage from './1.png' // Replace with your actual image path

function ProjectProperty() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://192.168.0.105:8001/projects');
                setProjects(response.data);
                console.log('Fetched projects:', response.data);
                
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Banner Image */}
            <div className="relative">
                <img
                    src={BannerImage}
                    alt="Banner"
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-6xl text-white">Projects Listing</h1>
                </div>
            </div>
            <div className="relative container mx-auto p-4 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectProperty;
