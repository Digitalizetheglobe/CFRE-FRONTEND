import React, { useState } from 'react';

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
        specification: '',
        projectPlans: [{ Type: '', UnitCost: '', CarpetArea: '' }],
        floorPlanImages: null,
        multiplePropertyImages: null,
        video: '',
        virtualVideoTour: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(`Updated ${name}:`, value);
    };

    // Function to handle specification change
    const handleSpecificationChange = (e, index) => {
        const updatedSpecifications = [...formData.specification];
        updatedSpecifications[index] = e.target.value;
        setFormData({ ...formData, specification: updatedSpecifications });
        console.log('Updated specification:', updatedSpecifications);
    };

    // Function to handle project plan changes
    const handleProjectPlansChange = (e, index, field) => {
        const updatedProjectPlans = [...formData.projectPlans];
        updatedProjectPlans[index][field] = e.target.value;
        setFormData({ ...formData, projectPlans: updatedProjectPlans });
        console.log(`Updated project plan ${index} field ${field}:`, updatedProjectPlans[index]);
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        console.log('Form data on submit:', formData);

        // Post request to the API
        try {
            const response = await fetch('https://cfrecpune.com/projects/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage('Project data submitted successfully!');
                console.log('API response:', await response.json());
            } else {
                setMessage('Failed to submit project data.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while submitting the form.');
        }

        setLoading(false);
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Property Submission Form</h2>

            <form onSubmit={handleSubmit}>
                {/* Project Name */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Project Name:</label>
                    <input
                        type="text"
                        name="projectName"
                        value={formData.projectName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300"
                    />
                </div>

                {/* RERA Registration No */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">RERA Registration No:</label>
                    <input
                        type="text"
                        name="reraRegdNo"
                        value={formData.reraRegdNo}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Builder Name */}
                {/* <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Builder Name:</label>
                    <input
                        type="text"
                        name="builderName"
                        value={formData.builderName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div> */}

                {/* Project Details */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Project Details:</label>
                    <input
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Specification:</label>
                    <textarea
                        name="specification"
                        value={formData.specification}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Cost:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">City:</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Total Area:</label>
                    <input
                        type="number"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Project Area:</label>
                    <input
                        type="number"
                        name="projectArea"
                        value={formData.projectArea}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">floor Plan Image:</label>
                    <input
                        type="file"
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
                        name="multiplePropertyImages"
                        value={formData.multiplePropertyImages}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                {/* <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Project Area:</label>
          <input
            type="number"
            name="projectArea"
            value={formData.projectArea}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Project Area:</label>
          <input
            type="number"
            name="projectArea"
            value={formData.projectArea}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div> */}

                {/* Project Plans */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Project Plans:</label>
                    {formData.projectPlans.map((plan, index) => (
                        <div key={index} className="mb-2">
                            <input
                                type="text"
                                placeholder="Type"
                                value={plan.Type}
                                onChange={(e) => handleProjectPlansChange(e, index, 'Type')}
                                className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="number"
                                placeholder="Unit Cost"
                                value={plan.UnitCost}
                                onChange={(e) => handleProjectPlansChange(e, index, 'UnitCost')}
                                className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Carpet Area"
                                value={plan.CarpetArea}
                                onChange={(e) => handleProjectPlansChange(e, index, 'CarpetArea')}
                                className="w-full p-2 mb-2 border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() =>
                            setFormData({
                                ...formData,
                                projectPlans: [...formData.projectPlans, { Type: '', UnitCost: '', CarpetArea: '' }],
                            })
                        }
                    >
                        Add Another Plan
                    </button>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg w-full font-semibold"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>

                {/* Message Display */}
                {message && (
                    <div className={`mt-4 p-4 ${message.includes('successfully') ? 'bg-green-200' : 'bg-red-200'} text-gray-800 rounded-md`}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ProjectForm;
