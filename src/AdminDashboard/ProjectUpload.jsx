import React, { useState } from 'react';
import axios from 'axios';

const ProjectUpload = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    builderName: '',
    projectDetails: '',
    // Add any other fields needed for the project
  });
  const [images, setImages] = useState([]);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image file changes
  const handleImageChange = (e) => {
    setImages(e.target.files); // Set the file list directly
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a form data object to send files and project data
    const data = new FormData();
    data.append('projectName', formData.projectName);
    data.append('builderName', formData.builderName);
    data.append('projectDetails', formData.projectDetails);

    // Append each image file to the form data
    for (let i = 0; i < images.length; i++) {
      data.append('multipleProjectImages', images[i]); // Changed to 'multipleProjectImages'
    }

    try {
      // Send POST request to the API at localhost:8001
      const response = await axios.post('http://localhost:8001/projects', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResponseMessage('Project uploaded successfully!');
      console.log('Server response:', response.data);
    } catch (error) {
      setResponseMessage('Failed to upload project.');
      console.error('Error uploading project:', error);
    }
  };

  return (
    <div>
      <h1>Upload New Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name:</label>
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Builder Name:</label>
          <input
            type="text"
            name="builderName"
            value={formData.builderName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Project Details:</label>
          <input
            type="text"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label>Upload Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit">Upload Project</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ProjectUpload;
