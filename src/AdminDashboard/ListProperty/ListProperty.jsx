import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSound from 'use-sound';
import AdminNavbar from '../AdminNavbar';
import notificationSound from '../../Components/assets/ringtone/notification.mp3'; // Import your notification sound
import { Link } from 'react-router-dom';

const ListProperty = ({ id }) => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [play] = useSound(notificationSound);
  const [expandedProperties, setExpandedProperties] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState(null);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (id && isModalOpen) {
      fetchPropertyDetails(id);
    }
  }, [id, isModalOpen]);

  const fetchPropertyDetails = async (propertyId) => {
    try {
      const response = await axios.get(`https://api.cfrerealty.com/api/customer-properties/${propertyId}`);
      setPropertyDetails(response.data);
    } catch (err) {
      console.error('Failed to fetch property details:', err);
    }
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://api.cfrerealty.com/api/customer-properties');
        const sortedProperties = Array.isArray(response.data) ? response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];
        setProperties(sortedProperties);
        setLoading(false);
        play(); // Play sound when properties are fetched
      } catch (err) {
        setError('Failed to fetch properties');
        setLoading(false);
      }
    };

    fetchProperties();
  }, [play]);

  // Render loading or error messages
  if (loading) return <p className="text-center text-lg text-[#d84a48]">Loading properties...</p>;
  if (error) return <p className="text-center text-[#d84a48]">{error}</p>;

  // Handle individual delete
  const handleDelete = (id) => {
    setProperties((prevProperties) => prevProperties.filter(property => property.id !== id));
  };

  // Handle delete all
  const handleDeleteAll = () => {
    setProperties([]); // Add a confirmation prompt here if needed
  };

  // Toggle message visibility
  const toggleMessageVisibility = (id) => {
    setExpandedProperties((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-center text-[#d84a48]">
            Property Listings
          </h2>

          {/* Delete All Button */}
          {/* <button
            onClick={handleDeleteAll}
            className="bg-[#d84a48] text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Delete All List Properties
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => {
            const isExpanded = expandedProperties[property.id];
            const messagePreview = property.message?.length > 100 ? `${property.message.slice(0, 100)}...` : property.message;

            return (
              <div key={property.id} className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#d84a48] mb-2">{property.full_name}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium text-gray-800">Email:</span> {property.email}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium text-gray-800">Mobile:</span> {property.mobile_number}
                </p>

                <p className="text-gray-700 mb-4">
                  <span className="font-medium text-gray-800">Message:</span> {isExpanded ? property.message : messagePreview}
                </p>

                {/* See More / See Less Button */}
                {property.message?.length > 100 && (
                  <button
                    onClick={() => toggleMessageVisibility(property.id)}
                    className="text-[#d84a48] hover:text-[#c34543] transition duration-300 text-sm"
                  >
                    {isExpanded ? 'See Less' : 'See More'}
                  </button>
                )}

                <p className="text-gray-500 text-sm mt-4">
                  {new Date(property.createdAt).toLocaleString()}
                </p>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => {
                      openModal();
                      fetchPropertyDetails(property.id); // Fetch property details when opening modal
                    }}
                    className="bg-[#d84a48] text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  >
                    View All
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && propertyDetails && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
            {/* Modal Header */}
            <div className="flex items-center pb-3 border-b border-gray-300">
              <h3 className="text-gray-800 text-xl font-bold flex-1">Property Details</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                viewBox="0 0 320.591 320.591"
                onClick={closeModal}
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                ></path>
              </svg>
            </div>

            {/* Modal Body */}
            <div className="mt-4">
              {propertyDetails ? (
                <div>
                  <p><strong>Selected Property:</strong> {propertyDetails.selected_property}</p>
                  <p><strong>Property Subtype:</strong> {propertyDetails.property_subtype}</p>
                  <p><strong>Full Name:</strong> {propertyDetails.full_name}</p>
                  <p><strong>Email:</strong> {propertyDetails.email}</p>
                  <p><strong>Mobile Number:</strong> {propertyDetails.mobile_number}</p>
                  <p><strong>Building Name:</strong> {propertyDetails.building_name}</p>
                  <p><strong>Location:</strong> {propertyDetails.location}</p>
                  <p><strong>City:</strong> {propertyDetails.city}</p>
                  <p><strong>Carpet Area:</strong> {propertyDetails.carpet_area} sq.ft.</p>
                  <p><strong>Built-Up Area:</strong> {propertyDetails.built_up_area} sq.ft.</p>
                  <p><strong>Floor Number:</strong> {propertyDetails.floor_number}</p>
                  <p><strong>Unit Number:</strong> {propertyDetails.unit_number}</p>
                  <p><strong>Rent per Month:</strong> ₹{propertyDetails.rent_per_month}</p>
                  <p><strong>Cost:</strong> ₹{propertyDetails.cost}</p>
                  <p><strong>Message:</strong> {propertyDetails.message}</p>
                </div>
              ) : (
                <p>Loading property details...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListProperty;
