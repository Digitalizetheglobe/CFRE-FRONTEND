import React, { useState } from 'react';
import axios from 'axios';

const AddProject = () => {
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.cfrerealty.com/projects', formData);
      console.log('Project created successfully:', response.data);
      // Reset form
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
      console.error('There was an error creating the project!', error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Project Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="reraRegdNo"
            value={formData.reraRegdNo}
            onChange={handleChange}
            placeholder="RERA REGD. NO"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="builderName"
            value={formData.builderName}
            onChange={handleChange}
            placeholder="Builder Name"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Project Details"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="Area"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="projectArea"
            value={formData.projectArea}
            onChange={handleChange}
            placeholder="Project Area"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="possession"
            value={formData.possession}
            onChange={handleChange}
            placeholder="Possession"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="commencementCertificate"
            value={formData.commencementCertificate}
            onChange={handleChange}
            placeholder="Commencement Certificate"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="occupancyCertificate"
            value={formData.occupancyCertificate}
            onChange={handleChange}
            placeholder="Occupancy Certificate"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="approvedBy"
            value={formData.approvedBy}
            onChange={handleChange}
            placeholder="Approved By"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="specification"
            value={formData.specification}
            onChange={handleChange}
            placeholder="Specification"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="projectPlans"
            value={formData.projectPlans}
            onChange={handleChange}
            placeholder="Project Plans (Type, Area Carpet, Unit Cost)"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            placeholder="Amenities"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="floorPlanImages"
            value={formData.floorPlanImages}
            onChange={handleChange}
            placeholder="FloorPlan Images"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="YouTube Video Link"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="virtualVideoTour"
            value={formData.virtualVideoTour}
            onChange={handleChange}
            placeholder="Virtual Video Tour Link"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
