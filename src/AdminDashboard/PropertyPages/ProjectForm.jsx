import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../AdminNavbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        projectPlans: '',
        amenities: '',
        floorPlanImages: '',
        video: '',
        virtualVideoTour: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://cfrecpune.com/projects', formData);
            alert('Project submitted successfully!');
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
                specification: '',
                projectPlans: '',
                amenities: '',
                floorPlanImages: '',
                video: '',
                virtualVideoTour: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('Submission failed, please try again.');
        }
    };

    return (
        <>
            < AdminNavbar />
            <div className="space-y-12 pl-10 pr-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center mt-10">Add New Project</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        {/* Project Name */}
                        <div className="sm:col-span-3">
                            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">Project Name</label>
                            <input
                                type="text"
                                id="projectName"
                                name="projectName"
                                value={formData.projectName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* RERA Registration Number */}
                        <div className="sm:col-span-3">
                            <label htmlFor="reraRegdNo" className="block text-sm font-medium text-gray-700">RERA Regd No</label>
                            <input
                                type="text"
                                id="reraRegdNo"
                                name="reraRegdNo"
                                value={formData.reraRegdNo}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Builder Name */}
                        <div className="sm:col-span-3">
                            <label htmlFor="builderName" className="block text-sm font-medium text-gray-700">Builder Name</label>
                            <input
                                type="text"
                                id="builderName"
                                name="builderName"
                                value={formData.builderName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Project Details */}
                        <div className="sm:col-span-3">
                            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">Project Details</label>
                            <textarea
                                id="projectDetails"
                                name="projectDetails"
                                value={formData.projectDetails}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Price */}
                        <div className="sm:col-span-3">
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Area */}
                        <div className="sm:col-span-3">
                            <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area</label>
                            <input
                                type="text"
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Project Area */}
                        <div className="sm:col-span-3">
                            <label htmlFor="projectArea" className="block text-sm font-medium text-gray-700">Project Area</label>
                            <input
                                type="text"
                                id="projectArea"
                                name="projectArea"
                                value={formData.projectArea}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Possession */}
                        <div className="sm:col-span-3">
                            <label htmlFor="possession" className="block text-sm font-medium text-gray-700">Possession</label>
                            <input
                                type="text"
                                id="possession"
                                name="possession"
                                value={formData.possession}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* City */}
                        <div className="sm:col-span-3">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Location */}
                        <div className="sm:col-span-3">
                            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Commencement Certificate */}
                        <div className="sm:col-span-3">
                            <label htmlFor="commencementCertificate" className="block text-sm font-medium text-gray-700">Commencement Certificate</label>
                            <input
                                type="text"
                                id="commencementCertificate"
                                name="commencementCertificate"
                                value={formData.commencementCertificate}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Occupancy Certificate */}
                        <div className="sm:col-span-3">
                            <label htmlFor="occupancyCertificate" className="block text-sm font-medium text-gray-700">Occupancy Certificate</label>
                            <input
                                type="text"
                                id="occupancyCertificate"
                                name="occupancyCertificate"
                                value={formData.occupancyCertificate}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Approved By */}
                        <div className="sm:col-span-3">
                            <label htmlFor="approvedBy" className="block text-sm font-medium text-gray-700">Approved By</label>
                            <input
                                type="text"
                                id="approvedBy"
                                name="approvedBy"
                                value={formData.approvedBy}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Specification */}
                        <div className="sm:col-span-3">
                            <label htmlFor="specification" className="block text-sm font-medium text-gray-700">Specification</label>
                            <textarea
                                id="specification"
                                name="specification"
                                value={formData.specification}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Project Plans */}
                        <div className="sm:col-span-3">
                            <label htmlFor="projectPlans" className="block text-sm font-medium text-gray-700">Project Plans</label>
                            <textarea
                                id="projectPlans"
                                name="projectPlans"
                                value={formData.projectPlans}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Amenities */}
                        <div className="sm:col-span-3">
                            <label htmlFor="amenities" className="block text-sm font-medium text-gray-700">Amenities</label>
                            <input
                                type="text"
                                id="amenities"
                                name="amenities"
                                value={formData.amenities}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Floor Plan Images */}
                        <div className="sm:col-span-3">
                            <label htmlFor="floorPlanImages" className="block text-sm font-medium text-gray-700">Floor Plan Images</label>
                            <input
                                type="text"
                                id="floorPlanImages"
                                name="floorPlanImages"
                                value={formData.floorPlanImages}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Video */}
                        <div className="sm:col-span-3">
                            <label htmlFor="video" className="block text-sm font-medium text-gray-700">Video</label>
                            <input
                                type="text"
                                id="video"
                                name="video"
                                value={formData.video}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        {/* Virtual Video Tour */}
                        <div className="sm:col-span-3">
                            <label htmlFor="virtualVideoTour" className="block text-sm font-medium text-gray-700">Virtual Video Tour</label>
                            <input
                                type="text"
                                id="virtualVideoTour"
                                name="virtualVideoTour"
                                value={formData.virtualVideoTour}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        

                        <div className="mt-15 flex items-center justify-center gap-x-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md bg-[#d84a48] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#b03b3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pl-3"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </>
    );
};

export default ProjectForm;
