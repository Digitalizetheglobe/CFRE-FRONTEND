

import React, { useState } from 'react';
import axios from 'axios';

const BasicForm = () => {
  const [formData, setFormData] = useState({
    buildingName: '',
    unitNo: '',
    propertyType: '',
    // Add other fields as necessary
  });
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    // Append form data
    for (const [key, value] of Object.entries(formData)) {
      formDataToSend.append(key, value);
    }

    // Append files
    for (const file of files) {
      formDataToSend.append('multiplePropertyImages', file);
    }

    try {
      const response = await axios.post('http://localhost:8081/cfreproperties', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
    } catch (error) {
      // Check if error.response is defined
      if (error.response) {
        console.error('Error:', error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  };


  return (
    <div>
      <h1>Add Property</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Building Name:</label>
          <input type="text" name="buildingName" value={formData.buildingName} onChange={handleChange} required />
        </div>
        <div>
          <label>Unit No:</label>
          <input type="text" name="unitNo" value={formData.unitNo} onChange={handleChange} required />
        </div>
        <div>
          <label>Property Type:</label>
          <input type="text" name="propertyType" value={formData.propertyType} onChange={handleChange} required />
        </div>
        {/* Add other form fields as necessary */}
        <div>
          <label>Multiple Property Images:</label>
          <input type="file" name="multiplePropertyImages" multiple onChange={handleFileChange} />

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BasicForm;
