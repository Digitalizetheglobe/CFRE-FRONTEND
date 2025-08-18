import React, { useState, useEffect } from 'react';

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]); // To store the list of properties
  const [selectedProperty, setSelectedProperty] = useState(null); // To store the selected property details
  const [loading, setLoading] = useState(false); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch all properties on component mount
  useEffect(() => {
    fetch('https://api.cfrerealty.com/api/customer-properties')
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => setError('Failed to fetch properties.'));
  }, []);

  // Fetch property details by ID
  const fetchPropertyDetailsById = (id) => {
    setLoading(true);
    fetch(`https://api.cfrerealty.com/api/customer-properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedProperty(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch property details.');
        setLoading(false);
      });
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">Property List</h2>
      
      {/* Display Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display List of Properties */}
      {properties.length > 0 ? (
        <ul className="mb-4">
          {properties.map((property) => (
            <li key={property.id} className="mb-2">
              <button
                className="text-indigo-600 underline"
                onClick={() => fetchPropertyDetailsById(property.id)}
              >
                View Details for Property ID: {property.id}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading properties...</p>
      )}

      {/* Display Loading State */}
      {loading && <p>Loading property details...</p>}

      {/* Display Selected Property Details */}
      {selectedProperty && !loading && (
        <div className="border p-4 rounded shadow-md">
          <h3 className="text-lg font-bold mb-2">Property Details</h3>
          <p><strong>Selected Property:</strong> {selectedProperty.selected_property}</p>
          <p><strong>Subtype:</strong> {selectedProperty.property_subtype}</p>
          <p><strong>Full Name:</strong> {selectedProperty.full_name}</p>
          <p><strong>Email:</strong> {selectedProperty.email}</p>
          <p><strong>Mobile Number:</strong> {selectedProperty.mobile_number}</p>
          <p><strong>Building Name:</strong> {selectedProperty.building_name}</p>
          <p><strong>Location:</strong> {selectedProperty.location}</p>
          <p><strong>City:</strong> {selectedProperty.city}</p>
          <p><strong>Carpet Area:</strong> {selectedProperty.carpet_area} sq. ft.</p>
          <p><strong>Built-up Area:</strong> {selectedProperty.built_up_area} sq. ft.</p>
          <p><strong>Floor Number:</strong> {selectedProperty.floor_number}</p>
          <p><strong>Unit Number:</strong> {selectedProperty.unit_number}</p>
          <p><strong>Rent per Month:</strong> ₹{selectedProperty.rent_per_month}</p>
          <p><strong>Cost:</strong> ₹{selectedProperty.cost}</p>
          <p><strong>Message:</strong> {selectedProperty.message}</p>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
