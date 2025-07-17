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
        maintenancePersqf: '',
        occupancyCertificate: '',
        approvedBy: '',
        specification: '',
        projectPlans: [{ type: '', unitCost: '', area: '' }], // Changed to lowercase to match API
        slug: '',
        seoTitle: '',
        seoDescription: '',
        seoKeywords: '',
        floorPlanImages: null,
        ProjectImages: null,
        video: '',
        virtualVideoTour: '',
        availableFor: '',
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
     const [images, setImages] = useState([]);

    const convertToSlug = (text) => {
        return text
            .toString()  // Convert to string
            .toLowerCase()  // Convert to lowercase
            .normalize("NFD")  // Normalize special characters
            .replace(/[\u0300-\u036f]/g, "")  // Remove accents
            .replace(/[^a-z0-9\s-]/g, "")  // Remove invalid characters
            .replace(/\s+/g, "-")  // Replace spaces with hyphens
            .replace(/-+/g, "-");  // Replace multiple hyphens with a single hyphen
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => {
            const updatedData = { ...prevData, [name]: value };
            // If Project Name changes, auto-generate the Slug
            if (name === 'projectName') {
                updatedData.slug = convertToSlug(value);
            }

            if (['projectArea', 'price'].includes(name)) {
              const { projectArea, price } = updatedData;
              if (projectArea && price) {
                  // Example calculation: price per square foot
                  updatedData.maintenancePersqf = (price / projectArea).toFixed(2);
              } else {
                  updatedData.maintenancePersqf = ''; // Clear if not calculable
              }
          }
            return updatedData;
        });
    };
    
    
    const handleProjectPlansChange = (e, index, field) => {
        const updatedPlans = [...formData.projectPlans];
        updatedPlans[index][field] = e.target.value;
        setFormData({ ...formData, projectPlans: updatedPlans });
    };

    const addProjectPlan = () => {
        setFormData({
            ...formData,
            projectPlans: [...formData.projectPlans, { type: '', unitCost: '', area: '' }], // Changed to lowercase
        });
    };
    const handleFileChange1 = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
          file,
          url: URL.createObjectURL(file),
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
      };
    
      const removeImage = (url) => {
        setImages((prevImages) => prevImages.filter((img) => img.url !== url));
      };
      const [floorPlanImages, setFloorPlanImages] = useState([]);



const removeFloorPlanImage = (url) => {
  setFloorPlanImages((prev) => prev.filter((image) => image.url !== url));
};

const handleFileChange = (e) => {
    const { name } = e.target;
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
        file,
        url: URL.createObjectURL(file),
    }));

    if (name === 'floorPlanImages') {
        setFloorPlanImages((prevImages) => [...prevImages, ...newImages]);
    } else if (name === 'ProjectImages') {
        setImages((prevImages) => [...prevImages, ...newImages]);
    }
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!formData.projectName || !formData.slug) {
        setMessage('Project Name and Slug are required.');
        setLoading(false);
        return;
    }

    try {
        // Create FormData object
        const formDataToSend = new FormData();

        // Append text fields
        Object.keys(formData).forEach((key) => {
            if (key !== "floorPlanImages" && key !== "ProjectImages") {
                if (key === "projectPlans") {
                    // Convert projectPlans array to JSON string
                    formDataToSend.append(key, JSON.stringify(formData[key]));
                } else {
                    formDataToSend.append(key, formData[key]);
                }
            }
        });

        // Append images
        floorPlanImages.forEach((image) => {
            formDataToSend.append('floorPlanImages', image.file);
        });

        images.forEach((image) => {
            formDataToSend.append('ProjectImages', image.file);
        });

        // Send data using fetch
        const response = await fetch('https://cfrecpune.com/cfreprojects/', {
            method: 'POST',
            body: formDataToSend,
        });

        const responseData = await response.json();

        if (response.ok) {
            setMessage('Project data submitted successfully!');
            console.log('Server Response:', responseData);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } else {
            setMessage('Failed to submit project data: ' + (responseData.message || 'Unknown error'));
            console.error('Server Error:', responseData);
        }
    } catch (error) {
        setMessage('An error occurred while submitting the form.');
        console.error('Submission Error:', error);
    }

    setLoading(false);
};

    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Project Submission Form</h2>

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
  <label className="block text-sm font-semibold mb-2">Floor Plan Images:</label>
  <input
    type="file"
    multiple
    name="floorPlanImages"
    onChange={handleFileChange}
    className="w-full p-2 border border-gray-300 rounded-md"
  />
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
    {floorPlanImages.map((image) => (
      <div
        key={image.url}
        style={{
          position: 'relative',
          width: '70px',
          height: '70px',
        }}
      >
        <img
          src={image.url}
          alt="uploaded"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '4px',
          }}
        />
        <button
          type="button"
          onClick={() => removeFloorPlanImage(image.url)}
          style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          ×
        </button>
      </div>
    ))}
  </div>
</div>

                <div>
      <div className="sm:col-span-3">
        <label
          htmlFor="ProjectImages"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Multiple Project Images
        </label>
        <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange1}
      />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((image) => (
          <div
            key={image.url}
            style={{
              position: 'relative',
              width: '70px',
              height: '70px',
            }}
          >
            <img
              src={image.url}
              alt="uploaded"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
            />
            <button
              type="button"
              onClick={() => removeImage(image.url)}
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>

      <div className="sm:col-span-3">
  <label htmlFor="availableFor" className="block text-sm font-medium leading-6 text-gray-900">
    Available For
  </label>
  <select
    id="availableFor"
    name="availableFor"
    
    onChange={handleChange}
    // required
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
  >
    <option value="">Select Available For - Sale / Rent</option>
    <option value="Unit-Cost"> Sale</option>
    <option value="Rent">Rent</option>
  </select>
</div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Project Plans:</label>
                    {formData.projectPlans.map((plan, index) => (
                        <div key={index} className="mb-2 p-4 border border-gray-300 rounded-md">
                            <div className="mb-2">
                                <label className="block text-xs text-gray-600 mb-1">Type (e.g., 1BHK, 2BHK):</label>
                                <input
                                    type="text"
                                    placeholder="Type"
                                    value={plan.type}
                                    onChange={(e) => handleProjectPlansChange(e, index, 'type')}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block text-xs text-gray-600 mb-1">Unit Cost (e.g., ₹75 Lakhs):</label>
                                <input
                                    type="text"
                                    placeholder="Unit Cost"
                                    value={plan.unitCost}
                                    onChange={(e) => handleProjectPlansChange(e, index, 'unitCost')}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            
                            <div className="mb-2">
                                <label className="block text-xs text-gray-600 mb-1">Area (e.g., 1200 sq.ft.):</label>
                                <input
                                    type="text"
                                    placeholder="Area"
                                    value={plan.area}
                                    onChange={(e) => handleProjectPlansChange(e, index, 'area')}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
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