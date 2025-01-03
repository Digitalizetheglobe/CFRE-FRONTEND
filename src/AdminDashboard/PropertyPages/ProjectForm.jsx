import React, { useState } from 'react';
import Navbar from '../AdminNavbar';

const ProjectForm = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        reraRegdNo: '',
        builderName: '',
        projectDetails: '',
        price: '',
        projectArea: '',
        possession: '',
        city: '',
        location: '',
        commencementCertificate: '',
        occupancyCertificate: '',
        approvedBy: '',
        specification: '',
        projectPlans: [{ Type: '', UnitCost: '', CarpetArea: '' }],
        slug: '',
        seoTitle: '',
        seoDescription: '',
        seoKeywords: '',
        floorPlanImages: null,
        multiplePropertyImages: null,
        video: '',
        virtualVideoTour: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProjectPlansChange = (e, index, field) => {
        const updatedPlans = [...formData.projectPlans];
        updatedPlans[index][field] = e.target.value;
        setFormData({ ...formData, projectPlans: updatedPlans });
    };

    const addProjectPlan = () => {
        setFormData({
            ...formData,
            projectPlans: [...formData.projectPlans, { Type: '', UnitCost: '', CarpetArea: '' }],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await fetch('https://cfrecpune.com/cfreprojects/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Project data submitted successfully!');
            } else {
                setMessage('Failed to submit project data.');
            }
        } catch (error) {
            setMessage('An error occurred while submitting the form.');
        }

        setLoading(false);
    };

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Property Submission Form</h2>

                <form onSubmit={handleSubmit}>
                    {[
                        { label: 'Project Name', name: 'projectName' },
                        { label: 'RERA Registration No', name: 'reraRegdNo' },
                        { label: 'Project Details', name: 'projectDetails' },
                        { label: 'Specification', name: 'specification' },
                        { label: 'City', name: 'city' },
                        { label: 'Location', name: 'location' },
                        { label: 'Project Area', name: 'projectArea', type: 'number' },
                        { label: 'Slug', name: 'slug' },
                        { label: 'SEO Title', name: 'seoTitle' },
                        { label: 'SEO Description', name: 'seoDescription' },
                        { label: 'SEO Keywords', name: 'seoKeywords' },
                    ].map(({ label, name, type = 'text' }) => (
                        <div key={name} className="mb-4">
                            <label className="block text-sm font-semibold mb-2">{label}:</label>
                            <input
                                type={type}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                            />
                        </div>
                    ))}

<div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">floor Plan Image:</label>
                    <input
                        type="file"
                        multiple
                        name="floorPlanImages"
                        value={formData.floorPlanImages}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Project Images:</label>
                    <input
                        type="file"
                        mu
                        name="multiplePropertyImages"
                        value={formData.multiplePropertyImages}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Project Plans:</label>
                        {formData.projectPlans.map((plan, index) => (
                            <div key={index} className="mb-2">
                                {['Type', 'UnitCost', 'CarpetArea'].map((field) => (
                                    <input
                                        key={field}
                                        type={field === 'UnitCost' ? 'number' : 'text'}
                                        placeholder={field}
                                        value={plan[field]}
                                        onChange={(e) => handleProjectPlansChange(e, index, field)}
                                        className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                                    />
                                ))}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                            onClick={addProjectPlan}
                        >
                            Add Another Plan
                        </button>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full font-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>

                    {message && (
                        <div className={`mt-4 p-4 ${message.includes('successfully') ? 'bg-green-200' : 'bg-red-200'} text-gray-800 rounded-md`}>
                            {message}
                        </div>
                    )}
                </form>
            </div>
        </>
    );
};

export default ProjectForm;