import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './projectCard';
import BannerImage from './1.png'; // Replace with your actual placeholder image path
import Error from '../Error/Error';
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';

function ProjectProperty() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreprojects/');
                setProjects(response.data);
                setError(null);
            } catch (error) {
                setError('Error fetching projects. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <Helmet>
                <title>Explore Premier Commercial Properties | CFRE Realty</title>
                <meta
                    name="description"
                    content="Discover a wide range of premier commercial properties for rent and investment at CFRE Realty. From office spaces to retail units, find the perfect location to grow your business. Explore our listings today!"
                />
                <meta property="og:url" content="https://www.cfrerealty.com/projectproperty" />
            </Helmet>
            <Header />
            <div className="relative overflow-hidden">
                {/* Banner Section */}
                <div className="relative">
                    <img
                        src={projects[0]?.property_image ? `https://www.cfrerealty.com/${projects[0].property_image}` : BannerImage}
                        alt="Banner"
                        className="w-full h-36 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h1 className="md:text-6xl text-white">Projects Listing</h1>
                    </div>
                </div>
                {/* Projects Section */}
                <div className="relative container mx-auto p-4">
                    {loading ? (
                        <p>Loading projects...</p> // Show loading state
                    ) : error ? (
                        <Error message={error} /> // Show Error component
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <ProjectCard key={project.slug} project={project} />
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
