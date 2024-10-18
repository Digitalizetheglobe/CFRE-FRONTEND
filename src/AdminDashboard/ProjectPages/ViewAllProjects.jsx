import React, { useState, useEffect } from 'react';
// Assuming you have a ProjectModal component
import AdminNavbar from '../AdminNavbar';
import axios from 'axios';

const ProjectModal = ({ project, onSave, onClose }) => {
    const [editedProject, setEditedProject] = useState(project || {});
    const [projectImages, setProjectImages] = useState([]); // State for project images

    useEffect(() => {
        if (project) {
            setEditedProject(project);
            setProjectImages(project.projectImages || []); // Pre-fill with existing images
        }
    }, [project]);

    const handleProjectPlansChange = (e, index, field) => {
        const newProjectPlans = [...editedProject.projectPlans];
        newProjectPlans[index][field] = e.target.value;
        setEditedProject((prev) => ({ ...prev, projectPlans: newProjectPlans }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setProjectImages(files); // Store the selected files
        setEditedProject((prev) => ({
            ...prev,
            projectImages: files.map((file) => file.name), // Store only the file names or update logic as needed
        }));
    };

    const handleSave = () => {
        onSave({ ...editedProject, projectImages }); // Include images in the save
    };

    const addProjectPlan = () => {
        setEditedProject((prev) => ({
            ...prev,
            projectPlans: [
                ...prev.projectPlans,
                { Type: '', UnitCost: '', CarpetArea: '' },
            ],
        }));
    };

    const removeProjectPlan = (index) => {
        const updatedPlans = editedProject.projectPlans.filter((_, i) => i !== index);
        setEditedProject((prev) => ({
            ...prev,
            projectPlans: updatedPlans,
        }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-lg max-h-screen overflow-y-auto">
                <h2 className="text-xl font-bold text-center mb-4">Edit Project Details</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">RERA Registration No:</label>
                        <input
                            type="text"
                            name="reraRegdNo"
                            value={editedProject.reraRegdNo || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Project Name:</label>
                        <input
                            type="text"
                            name="projectName"
                            value={editedProject.projectName || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Project Details:</label>
                        <input
                            type="text"
                            name="projectDetails"
                            value={editedProject.projectDetails || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Specification:</label>
                        <input
                            type="text"
                            name="specification"
                            value={editedProject.specification || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={editedProject.city || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Location:</label>
                        <input
                            type="text"
                            name="location"
                            value={editedProject.location || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Total Area:</label>
                        <input
                            type="text"
                            name="area"
                            value={editedProject.area || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Project Area:</label>
                        <input
                            type="text"
                            name="projectArea"
                            value={editedProject.projectArea || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Slug:</label>
                        <input
                            type="text"
                            name="slug"
                            value={editedProject.slug || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Seo Title:</label>
                        <input
                            type="text"
                            name="seoTitle"
                            value={editedProject.seoTitle || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Description:</label>
                        <input
                            type="text"
                            name="seoDescription"
                            value={editedProject.seoDescription || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Seo Keywords:</label>
                        <input
                            type="text"
                            name="seoKeywords"
                            value={editedProject.seoKeywords || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Property Images:</label>
                        <input
                            type="file"
                            name="propertyImages"
                            onChange={handleFileChange}
                            multiple // Allow multiple file uploads
                            className="w-full p-2 border rounded"
                        />
                        <div className="mt-2">
                            {projectImages.map((img, index) => (
                                <div key={index} className="text-gray-600">
                                    {img.name || img} {/* Show file name or object if necessary */}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Plans Section */}
                    <div className="mb-4 col-span-2">
                        <label className="block text-sm font-semibold mb-2">Project Plans:</label>
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 p-2 text-left">Type</th>
                                    <th className="border border-gray-300 p-2 text-left">Unit Cost</th>
                                    <th className="border border-gray-300 p-2 text-left">Carpet Area</th>
                                    <th className="border border-gray-300 p-2 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {editedProject.projectPlans.map((plan, index) => (
                                    <tr key={index}>
                                        <td className="border border-gray-300 p-2">
                                            <input
                                                type="text"
                                                placeholder="Type"
                                                value={plan.Type}
                                                onChange={(e) => handleProjectPlansChange(e, index, 'Type')}
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                            <input
                                                type="number"
                                                placeholder="Unit Cost"
                                                value={plan.UnitCost}
                                                onChange={(e) => handleProjectPlansChange(e, index, 'UnitCost')}
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                            <input
                                                type="text"
                                                placeholder="Carpet Area"
                                                value={plan.CarpetArea}
                                                onChange={(e) => handleProjectPlansChange(e, index, 'CarpetArea')}
                                                className="w-full border border-gray-300 rounded-md p-2"
                                            />
                                        </td>
                                        <td className="border border-gray-300 p-2">
                                            <button
                                                type="button"
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                                onClick={() => removeProjectPlan(index)}
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                            onClick={addProjectPlan}
                        >
                            Add Another Plan
                        </button>
                    </div>

                </div>

                <div className="flex justify-between mt-4">
                    <button onClick={handleSave} className="bg-[#d84a48] hover:bg-[#c34543] text-white px-4 py-2 rounded">
                        Update
                    </button>
                    <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    
    );
};

const ViewAllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [toggleStatus, setToggleStatus] = useState({}); // Store the toggle status for each property
    const [selectedProject, setSelectedProject] = useState(null); // For editing modal
    const [showModal, setShowModal] = useState(false); // Modal visibility state

    useEffect(() => {
        fetch('https://cfrecpune.com/projects')
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                const initialToggleState = {};
                data.forEach((property, index) => {
                    initialToggleState[index] = true; // Initially, all toggles are "On"
                });
                setToggleStatus(initialToggleState);
                console.log('Projects fetched:', data);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const handleToggle = (index) => {
        setToggleStatus({
            ...toggleStatus,
            [index]: !toggleStatus[index], // Toggle the state
        });
    };

    const handleEditClick = (project) => {
        setSelectedProject(project);
        setShowModal(true);
    };

    const handleSaveChanges = (updatedProject) => {
        // Send PUT request to update the property
        fetch(`https://cfrecpune.com/projects/${updatedProject.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProject),
        })
            .then((response) => response.json())
            .then((data) => {
                setProjects((prev) => prev.map((p) => (p.id === data.id ? data : p))); // Update the projects in state
                setShowModal(false); // Close modal
            })
            .catch((error) => {
                console.error('Error updating property:', error);
            });
    };

    const handleDeleteClick = async (projectId, index) => {
        // Show confirmation dialog if necessary
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (confirmDelete) {
            try {
                // Make a DELETE request to the API
                await axios.delete(`https://cfrecpune.com/projects/${projectId}`);
                
                // Update the state to remove the deleted project
                setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
            } catch (error) {
                console.error("Error deleting project:", error);
                // Optionally, show an error message to the user
                alert("There was an error deleting the project. Please try again.");
            }
        }
    };
    return (
        <>
            <AdminNavbar />
            <div className="container mx-auto p-8">
                <h2 className="text-base font-bold leading-7 text-gray-900 text-center" style={{ fontSize: '20px' }}>
                    All Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
    {projects.map((project, index) => (
        <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border"
            style={{ borderColor: '#d84a48', borderWidth: '1px' }} // Light border color
        >
            <h3 className="text-xl font-bold mb-2">{project.buildingName}</h3>
            <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {project.location}
            </p>
            <p className="text-gray-700 mb-2">
                <strong>City:</strong> {project.city}
            </p>
            <p className="text-gray-700 mb-4">
                <strong>Area:</strong> {project.area} sq. ft.
            </p>

            {/* Toggle Button */}
            <div className="flex items-center justify-between mb-4">
                <label className="inline-flex items-center">
                    <span className="mr-2 text-gray-700">Available</span>
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={toggleStatus[index]} // Default is "On"
                        onChange={() => handleToggle(index)}
                    />
                </label>
                <span className={`ml-4 text-sm ${toggleStatus[index] ? 'text-green-500' : 'text-red-500'}`}>
                    {toggleStatus[index] ? 'On' : 'Off'}
                </span>
            </div>

            {/* Edit and Delete Icons */}
            <div className="flex justify-between mt-4">
                <button onClick={() => handleEditClick(project)} className="text-gray-600 hover:text-green-600">
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button onClick={() => handleDeleteClick(project.id, index)} className="text-red-600 hover:text-red-900">
                    <i className="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    ))}
</div>


                {/* Modal for editing property */}
                {showModal && selectedProject && (
                    <ProjectModal
                        project={selectedProject} // Pass the selected project correctly
                        onSave={handleSaveChanges}
                        onClose={() => setShowModal(false)}
                    />
                )}
            </div>
        </>
    );
};

export default ViewAllProjects;
