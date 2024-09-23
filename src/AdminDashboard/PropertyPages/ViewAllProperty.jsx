import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar';

// Modal Component
const PropertyModal = ({ property, onSave, onClose }) => {
  const [editedProperty, setEditedProperty] = useState(property);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProperty); // Save the updated property
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Property</h2>
        <div className="mb-4">
            
          <label className="block text-gray-700">Building Name:</label>
          <input
            type="text"
            name="buildingName"
            value={editedProperty.buildingName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            value={editedProperty.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">City:</label>
          <input
            type="text"
            name="city"
            value={editedProperty.city}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Carpet Area:</label>
          <input
            type="text"
            name="carpetArea"
            value={editedProperty.carpetArea}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-between">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewAllProperty = () => {
  const [properties, setProperties] = useState([]);
  const [toggleStatus, setToggleStatus] = useState({}); // Store the toggle status for each property
  const [selectedProperty, setSelectedProperty] = useState(null); // For editing modal
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  useEffect(() => {
    fetch('https://cfrecpune.com/cfreproperties')
      .then((response) => response.json())
      .then((data) => {
        setProperties(data); 
        const initialToggleState = {};
        data.forEach((property, index) => {
          initialToggleState[index] = true; // Initially all toggles are "On"
        });
        setToggleStatus(initialToggleState);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const handleToggle = (index) => {
    setToggleStatus({
      ...toggleStatus,
      [index]: !toggleStatus[index], // Toggle the state
    });
  };

  const handleEditClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleSaveChanges = (updatedProperty) => {
    // Send PUT request to update the property
    fetch(`https://cfrecpune.com/cfreproperties/${updatedProperty.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProperty),
    })
      .then((response) => response.json())
      .then((data) => {
        setProperties((prev) => prev.map((p) => (p.id === data.id ? data : p))); // Update the properties in state
        setShowModal(false); // Close modal
      })
      .catch((error) => {
        console.error('Error updating property:', error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-8">
      <h2 className="text-base font-bold leading-7 text-gray-900 text-center " style={{fontSize:'20px'}}>All Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border"
              style={{ borderColor: '#d84a48', borderWidth: '1px' }} // Light border color
            >
              <h3 className="text-xl font-bold mb-2">{property.buildingName}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {property.location}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>City:</strong> {property.city}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Carpet Area:</strong> {property.carpetArea} sq. ft.
              </p>

              {/* Toggle Button */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <span className="mr-2 text-gray-700">Available</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    checked={toggleStatus[index]} // Default is "On"
                    onChange={() => handleToggle(index)}
                  />
                </label>
                <span className={`ml-4 text-sm ${toggleStatus[index] ? 'text-green-500' : 'text-red-500'}`}>
                  {toggleStatus[index] ? 'On' : 'Off'}
                </span>
              </div>

              {/* Edit Icon */}
              <div className="text-right mt-4">
                <button onClick={() => handleEditClick(property)} className="text-gray-600 hover:text-gray-900">
                  <i className="fas fa-edit"></i> Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for editing property */}
        {showModal && selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onSave={handleSaveChanges}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default ViewAllProperty;
