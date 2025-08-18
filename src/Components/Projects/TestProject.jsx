import React, { useState } from 'react';
import axios from 'axios';

const TestNewproject = () => {
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
    slug: '',
    description: '',
    keyword: '',
    title: '',
    video: '',
    virtualVideoTour: '',
  });

  const [projectImages, setProjectImages] = useState([]);
  const [floorPlanImages, setFloorPlanImages] = useState([]);
  const [response, setResponse] = useState(null);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file inputs
  const handleFileChange = (e, setImages) => {
    setImages(e.target.files);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    // Append text fields
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    // Append Project Images
    if (projectImages.length > 0) {
      Array.from(projectImages).forEach((file) => {
        form.append('ProjectImages', file);
      });
    }

    // Append Floor Plan Images
    if (floorPlanImages.length > 0) {
      Array.from(floorPlanImages).forEach((file) => {
        form.append('floorPlanImages', file);
      });
    }

    try {
      const res = await axios.post('https://api.cfrerealty.com/cfreprojects/', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResponse(res.data);
      console.log('Response:', res.data);
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      setResponse({ error: error.response?.data || 'Failed to submit' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Text Fields */}
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="border p-2 rounded"
            />
          </div>
        ))}

        {/* File Uploads */}
        <div>
          <label className="font-medium">Project Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, setProjectImages)}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="font-medium">Floor Plan Images</label>
          <input
            type="file"
            multiple
            onChange={(e) => handleFileChange(e, setFloorPlanImages)}
            className="border p-2 rounded"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Display API Response */}
      {/* {response && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="text-lg font-bold">API Response:</h3>
          <pre className="text-sm">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
};

export default TestNewproject;