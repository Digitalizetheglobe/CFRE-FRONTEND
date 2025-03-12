import React, { useState, useEffect } from 'react';
// Assuming you have a ProjectModal component
import AdminNavbar from '../AdminNavbar';
// import axios from 'axios';

const ViewAllcoworking = () => {
    const [projects, setProjects] = useState([]);
    const [toggleStatus, setToggleStatus] = useState({}); // Store the toggle status for each property
    
    useEffect(() => {
        fetch('https://cfrecpune.com/coworking')
            .then((response) => response.json())
            .then((data) => {
                // Ensure data is processed based on 'id'
                const projectsWithIds = data.filter((item) => item.id); // Ensure only items with an 'id' are processed
                setProjects(projectsWithIds);
    
                const initialToggleState = {};
                projectsWithIds.forEach((project) => {
                    initialToggleState[project.id] = true; // Use 'id' as the key
                });
                setToggleStatus(initialToggleState);
                console.log('Projects fetched:', projectsWithIds);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, []);
    
    const handleToggle = (id) => {
        setToggleStatus((prev) => ({
            ...prev,
            [id]: !prev[id], // Use 'id' as the key for toggling
        }));
    };
    
    const handleDeleteClick = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this coworking space?");
        if (confirmDelete) {
            try {
                console.log(`Deleting coworking space with id: ${id}`);
    
                const response = await fetch(`https://cfrecpune.com/coworking/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                        'Content-Type': 'application/json'
                    },
                });
    
                if (response.ok) {
                    // Remove project from state
                    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
                    alert("Coworking space deleted successfully!");
                } else {
                    const errorData = await response.json().catch(() => null);
                    throw new Error(`Failed to delete: ${errorData ? JSON.stringify(errorData) : response.statusText}`);
                }
            } catch (error) {
                console.error("Error deleting coworking space:", error);
                alert("There was an error deleting the coworking space. Please try again.");
            }
        }
    };
    
    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto p-8">
                <h2 className="text-base font-bold leading-7 text-gray-900 text-center" style={{ fontSize: '20px' }}>
                    All Coworking
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                {projects.map((project, index) => (
                    <div
                        key={project.id} // Better to use actual ID instead of index
                        className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border"
                        style={{ borderColor: '#d84a48', borderWidth: '1px' }} // Light border color
                    >
                        <p className="text-gray-700 mb-2">
                            <strong>Coworking Name:</strong> {project.coworkingName}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>Location:</strong> {project.location}
                        </p>
                        <p className="text-gray-700 mb-2">
                            <strong>City:</strong> {project.city}
                        </p>
                      
                        {/* Edit and Delete Icons */}
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleDeleteClick(project.id)} // Use project.id instead of project.slug
                                className="text-red-600 hover:text-red-900"
                            >
                                <i className="fas fa-trash"></i> Delete
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
};

export default ViewAllcoworking;