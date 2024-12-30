import React, { useState } from 'react';
import axios from 'axios';

const NewprojectForm = () => {
  // Define state variables for the form fields
  const [projectName, setProjectName] = useState('');
  const [reraRegdNo, setReraRegdNo] = useState('');
  const [builderName, setBuilderName] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [projectArea, setProjectArea] = useState('');
  const [possession, setPossession] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [video, setVideo] = useState('');
  const [virtualVideoTour, setVirtualVideoTour] = useState('');
  const [projectImages, setProjectImages] = useState([]);
  const [projectSlug, setProjectSlug] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectKeyword, setProjectKeyword] = useState('');

  const handleFileChange = (e) => {
    setProjectImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data to send with the request
    const formData = new FormData();
    formData.append('projectName', projectName);
    formData.append('reraRegdNo', reraRegdNo);
    formData.append('builderName', builderName);
    formData.append('projectDetails', projectDetails);
    formData.append('price', price);
    formData.append('area', area);
    formData.append('projectArea', projectArea);
    formData.append('possession', possession);
    formData.append('city', city);
    formData.append('location', location);
    formData.append('video', video);
    formData.append('virtualVideoTour', virtualVideoTour);
    formData.append('projectSlug', projectSlug);
    formData.append('projectTitle', projectTitle);
    formData.append('projectDescription', projectDescription);
    formData.append('projectKeyword', projectKeyword);

    // Append images to the form data
    for (let i = 0; i < projectImages.length; i++) {
      formData.append('projectImages', projectImages[i]);
    }

    try {
      const response = await axios.post('http://192.168.1.7:8001/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Project created successfully:', response.data);
      alert('Project created successfully!');
    } catch (error) {
      console.error('Error creating project:', error);
      alert('Failed to create project');
    }
  };

  return (
    <div className="container">
      <h1>Create Project</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div>
          <label>RERA Registered No</label>
          <input
            type="text"
            value={reraRegdNo}
            onChange={(e) => setReraRegdNo(e.target.value)}
          />
        </div>
        <div>
          <label>Builder Name</label>
          <input
            type="text"
            value={builderName}
            onChange={(e) => setBuilderName(e.target.value)}
          />
        </div>
        <div>
          <label>Project Details</label>
          <textarea
            value={projectDetails}
            onChange={(e) => setProjectDetails(e.target.value)}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Area</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
        </div>
        <div>
          <label>Project Area</label>
          <input
            type="text"
            value={projectArea}
            onChange={(e) => setProjectArea(e.target.value)}
          />
        </div>
        <div>
          <label>Possession</label>
          <input
            type="text"
            value={possession}
            onChange={(e) => setPossession(e.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Project Slug</label>
          <input
            type="text"
            value={projectSlug}
            onChange={(e) => setProjectSlug(e.target.value)}
          />
        </div>
        <div>
          <label>Project Title</label>
          <input
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Project Description</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Project Keyword</label>
          <input
            type="text"
            value={projectKeyword}
            onChange={(e) => setProjectKeyword(e.target.value)}
          />
        </div>
        <div>
          <label>Project Images</label>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewprojectForm;