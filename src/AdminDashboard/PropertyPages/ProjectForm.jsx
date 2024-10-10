import React, { useState } from 'react';
import AdminNavbar from '../AdminNavbar'; 
import axios from 'axios';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        reraRegdNo: '',
        builderName: '',
        projectDetails: '',
        price: '',
        area: '',
        projectArea: '',
        possession: '',
        city: '',
        location: '',
        commencementCertificate: '',
        occupancyCertificate: '',
        approvedBy: '',
        specification: [],
        projectPlans: [{ Type: '', UnitCost: '', CarpetArea: '' }],
        floorPlanImages: null,
        propertyImage: null,
        video: '',
        virtualVideoTour: ''
    });

    // Handle general input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle changes for the project plans fields
    const handleProjectPlansChange = (index, e) => {
        const { name, value } = e.target;
        const updatedPlans = [...formData.projectPlans];
        updatedPlans[index][name] = value;
        setFormData((prevData) => ({
            ...prevData,
            projectPlans: updatedPlans,
        }));
    };

    // Add a new project plan field
    const addProjectPlanField = () => {
        setFormData((prevData) => ({
            ...prevData,
            projectPlans: [...prevData.projectPlans, { Type: '', UnitCost: '', CarpetArea: '' }]
        }));
    };

    // Remove a project plan field
    const removeProjectPlanField = (index) => {
        const updatedPlans = formData.projectPlans.filter((_, i) => i !== index);
        setFormData((prevData) => ({
            ...prevData,
            projectPlans: updatedPlans,
        }));
    };

    // Handle file uploads
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files.length > 0 ? files[0] : null // Ensure it's set to null if no file is selected
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Form Data Before Submission:', formData); // Log form data before submission

        // Create a new FormData object
        const data = new FormData();
        
        // Append simple fields to the FormData
        Object.keys(formData).forEach(key => {
            if (Array.isArray(formData[key])) {
                if (key === 'specification') {
                    formData[key].forEach((spec, index) => {
                        if (spec) data.append(`specification[${index}]`, spec); // Append only if not null
                    });
                } else if (key === 'projectPlans') {
                    formData[key].forEach((plan, index) => {
                        if (plan.Type) data.append(`projectPlans[${index}][Type]`, plan.Type);
                        if (plan.UnitCost) data.append(`projectPlans[${index}][UnitCost]`, plan.UnitCost);
                        if (plan.CarpetArea) data.append(`projectPlans[${index}][CarpetArea]`, plan.CarpetArea);
                    });
                }
            } else {
                if (formData[key]) data.append(key, formData[key]); // Append only if not null or empty
            }
        });

        // Log FormData contents for debugging
        for (let [key, value] of data.entries()) {
            console.log(key, value);
        }

        try {
            const response = await axios.post('https://cfrecpune.com/projects/', data, {
                headers: {
                    'Content-Type': 'multipart/form-data', 
                },
            });
            console.log('Project created successfully:', response.data);
            // Reset form after successful submission
            setFormData({
                projectName: '',
                reraRegdNo: '',
                builderName: '',
                projectDetails: '',
                price: '',
                area: '',
                projectArea: '',
                possession: '',
                city: '',
                location: '',
                commencementCertificate: '',
                occupancyCertificate: '',
                approvedBy: '',
                specification: [],
                projectPlans: [{ Type: '', UnitCost: '', CarpetArea: '' }],
                floorPlanImages: null,
                propertyImage: null,
                video: '',
                virtualVideoTour: ''
            });
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-2xl font-semibold mb-6">Project Form</h1>
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Project Details Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Project Name" className="border p-2 rounded w-full" />
                        <input type="text" name="reraRegdNo" value={formData.reraRegdNo} onChange={handleChange} placeholder="RERA Registration Number" className="border p-2 rounded w-full" />
                        <input type="text" name="builderName" value={formData.builderName} onChange={handleChange} placeholder="Builder Name" className="border p-2 rounded w-full" />
                        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded w-full" />
                        <input type="text" name="area" value={formData.area} onChange={handleChange} placeholder="Area" className="border p-2 rounded w-full" />
                        <input type="text" name="projectArea" value={formData.projectArea} onChange={handleChange} placeholder="Project Area" className="border p-2 rounded w-full" />
                        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border p-2 rounded w-full" />
                        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded w-full" />
                    </div>

                    {/* Dynamic Specifications Section */}
                    <h2 className="text-xl font-semibold mt-4">Specifications</h2>
                    <textarea
                        value={formData.specification.join(', ')} // Join the array into a string for display
                        onChange={(e) => {
                            const specs = e.target.value.split(',').map(spec => spec.trim()); // Split and trim to create an array
                            setFormData(prevData => ({
                                ...prevData,
                                specification: specs // Update the specification array
                            }));
                        }}
                        placeholder="Enter specifications separated by commas"
                        className="border p-2 rounded w-full h-24"
                    />

                    {/* Dynamic Project Plans Section */}
                    <h2 className="text-xl font-semibold mt-4">Project Plans</h2>
                    {formData.projectPlans.map((plan, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <input type="text" name="Type" value={plan.Type} onChange={(e) => handleProjectPlansChange(index, e)} placeholder="Type" className="border p-2 rounded w-full" />
                            <input type="text" name="UnitCost" value={plan.UnitCost} onChange={(e) => handleProjectPlansChange(index, e)} placeholder="Unit Cost" className="border p-2 rounded w-full" />
                            <input type="text" name="CarpetArea" value={plan.CarpetArea} onChange={(e) => handleProjectPlansChange(index, e)} placeholder="Carpet Area" className="border p-2 rounded w-full" />
                            <button type="button" onClick={() => removeProjectPlanField(index)} className="text-red-500">Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addProjectPlanField} className="bg-blue-500 text-white p-2 rounded mt-2">Add Project Plan</button>

                    {/* File Upload Fields */}
                    <h2 className="text-xl font-semibold mt-4">Upload Images</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-semibold mb-2">Upload Property Image</label>
                            <input type="file" name="propertyImage" onChange={handleFileChange} className="border p-2 rounded w-full" />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Upload Floor Plans Images</label>
                            <input type="file" name="floorPlanImages" onChange={handleFileChange} className="border p-2 rounded w-full" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="bg-[#d84a48] text-white p-3 rounded mt-4 hover:bg-[#c34543]">Submit</button>
                </form>
            </div>
        </>
    );
};

export default ProjectForm;
