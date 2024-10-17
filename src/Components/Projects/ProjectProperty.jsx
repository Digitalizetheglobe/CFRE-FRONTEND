import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './projectCard';
import BannerImage from './1.png'; // Replace with your actual image path
import Error from '../Error/Error'; // Import the Error component
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';

function ProjectProperty() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/projects');
                setProjects(response.data);
                console.log('Fetched projects:', response.data);
                setError(null); // Clear any previous errors
            } catch (error) {
                setError('Error fetching projects. Please try again later.'); // Set error message
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
                <Helmet>
                    <title>Explore Premier Commercial Properties | CFRE Realty </title>
                    <meta name="description" content="Discover a wide range of premier commercial properties for rent and investment at CFRE Realty. From office spaces to retail units, find the perfect location to grow your business. Explore our listings today!" />
                    <meta property="og:url" content="https://www.cfrerealty.com/projectproperty" />
                </Helmet>
        <Header />
        <div className="relative overflow-hidden">
            {/* Banner Image */}
            <div className="relative">
                <img
                    src={BannerImage}
                    alt="Banner"
                    className="w-full  h-36 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="md:text-6xl text-white">Projects Listing</h1>
                </div>
            </div>
            <div className="relative container mx-auto p-4">
                {error ? (
                    <Error message={error} /> // Show Error component if there's an error
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.length > 0 ? (
                            projects.map(project => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default ProjectProperty;
