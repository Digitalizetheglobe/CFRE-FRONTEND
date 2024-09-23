import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar'
const ViewAllProperty = () => {
  const [properties, setProperties] = useState([]);
  const [toggleStatus, setToggleStatus] = useState({}); // Store the toggle status for each property

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

  return (
    <>
    <AdminNavbar />
    
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ViewAllProperty;
