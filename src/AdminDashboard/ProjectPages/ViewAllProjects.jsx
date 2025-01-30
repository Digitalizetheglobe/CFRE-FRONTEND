import React, { useState, useEffect } from 'react';
// Assuming you have a ProjectModal component
import AdminNavbar from '../AdminNavbar';
import axios from 'axios';

const ProjectModal = ({ project, onSave, onClose }) => {
    const [editedProject, setEditedProject] = useState({
        ...project,
        projectPlans: Array.isArray(project?.projectPlans) ? project.projectPlans : [], // Ensure projectPlans is an array
    });
    const [projectImages, setProjectImages] = useState([]); // State for project images
    const [loading, setLoading] = useState(false);
   


    useEffect(() => {
        if (project) {
            setEditedProject({
                ...project,
                projectPlans: Array.isArray(project.projectPlans) ? project.projectPlans : [], // Ensure projectPlans is an array
            });
            setProjectImages(project.projectImages || []); // Pre-fill with existing images
        }
    }, [project]);

    const handleProjectPlansChange = (e, index, field) => {
        let value = e.target.value;

        if (field === 'UnitCost' && (isNaN(value) || value < 0)) {
            value = 0; // Reset invalid values
        }

        const newProjectPlans = [...editedProject.projectPlans];
        newProjectPlans[index][field] = value;
        setEditedProject((prev) => ({ ...prev, projectPlans: newProjectPlans }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProject((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024); // Example: max 5MB

    if (validFiles.length !== files.length) {
        alert('Some files were not valid images or exceeded the size limit.');
    }

    setProjectImages(validFiles);
    setEditedProject((prev) => ({
        ...prev,
        projectImages: validFiles,
    }));
};


const handleSave = async () => {
    const formData = new FormData();

    // Add non-file fields to FormData
    formData.append("projectName", editedProject.projectName);
    formData.append("projectDetails", editedProject.projectDetails);
    formData.append("reraRegdNo", editedProject.reraRegdNo);
    formData.append("specification", editedProject.specification);
    formData.append("area", editedProject.area);
    formData.append("projectArea", editedProject.projectArea);
    formData.append("seoTitle", editedProject.seoTitle);
    formData.append("seoDescription", editedProject.seoDescription);
    formData.append("seoKeywords", editedProject.seoKeywords);
    formData.append("city", editedProject.city);
    formData.append("location", editedProject.location);
    formData.append("slug", editedProject.slug);

    // Add project plans
    formData.append("projectPlans", JSON.stringify(editedProject.projectPlans));

    // Add images to FormData
    projectImages.forEach((image, index) => {
        formData.append(`projectImages[${index}]`, image);
    });

    try {
        const response = await fetch(`https://cfrecpune.com/cfreprojects/${editedProject.id}`, {
            method: 'PUT',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to update project. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Project updated successfully:', data);
        onSave(data);
    } catch (error) {
        console.error('Error updating project:', error);
    }
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

                    {/* <div className="mb-4">
                        <label className="block text-gray-700">Total Area:</label>
                        <input
                            type="text"
                            name="area"
                            value={editedProject.area || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div> */}

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
                            multiple
                            className="w-full p-2 border rounded"
                        />
                        <div className="mt-2">
                            {projectImages.map((img, index) => (
                                <div key={index} className="relative w-20 h-20 mr-2 inline-block">
                                    <img
                                        src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                                        alt="Project"
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

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
                                {Array.isArray(editedProject.projectPlans) && editedProject.projectPlans.map((plan, index) => (
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
                            Add Project Plan
                        </button>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className={`bg-[#d84a48] hover:bg-[#c34543] text-white px-4 py-2 rounded ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ml-4"
                    >
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
        fetch('https://cfrecpune.com/cfreprojects/')
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
    
    const handleEditClick = (project) => {
        console.log('Selected project:', project);
        setSelectedProject(project);
        setShowModal(true);
    };
    
    const handleSaveChanges = async (updatedProject) => {
        console.log('Updated Project111:', updatedProject); // Debugging
        console.log('Updated Project ID:', updatedProject.project.id); // Debugging
        
        // Check if the project ID exists
        if (!updatedProject.project.id) {
            alert('Invalid project ID. Please refresh and try again.');
            return;
        }
    
        try {
            const response = await fetch(`https://cfrecpune.com/cfreprojects/${updatedProject.project.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Removed 'Authorization' header
                },
                body: JSON.stringify(updatedProject),
            });
    
            // Handle non-success responses
            if (!response.ok) {
                throw new Error(`Failed to update project. Status: ${response.status}`);
            }
    
            const data = await response.json();
    
            // Update the projects state with the new data
            setProjects((prev) =>
                prev.map((project) => (project.id === data.id ? data : project))
            );
            setShowModal(false);
        } catch (error) {
            console.error('Error updating project:', error);
            alert('Failed to save changes. Please try again.');
        }
    };
    
    
    
    const handleDeleteClick = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (confirmDelete) {
            try {
                console.log(`Deleting project with id: ${id}`);
    
                const response = await fetch(`https://cfrecpune.com/cfreprojects/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                });
    
                if (response.ok) {
                    // Remove project from state
                    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== id));
                } else {
                    throw new Error('Failed to delete the project.');
                }
            } catch (error) {
                console.error("Error deleting project:", error);
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
            {/* <h3 className="text-gray-700 mt-2 mb-2">{project.buildingName}</h3> */}
            <p className="text-gray-700 mb-2">
                <strong>Project Name:</strong> {project.projectName}
            </p>
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
                <button
                            onClick={() => handleDeleteClick(project.slug, index)}
                            className="text-red-600 hover:text-red-900"
                        >
                            <i className="fas fa-trash"></i> Delete
                        </button>
            </div>
        </div>
    ))}
</div>


                {/* Modal for editing property */}
                {showModal && selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onSave={handleSaveChanges}
                        onClose={() => setShowModal(false)}
                    />
                )}

            </div>
        </>
    );
};

export default ViewAllProjects;
