import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { RiProgress2Line } from "react-icons/ri";
import ContactForm from '../MainBody/ContactForm';

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFormVisible, setFormVisible] = useState(false);
    const [showAllDetails, setShowAllDetails] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    // Toggle Showing All Details
    const toggleDetails = () => {
        setShowAllDetails(!showAllDetails);
    };

    // State to manage the property data
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://192.168.0.105:8001/combinedproperties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) return <p>Property not found</p>;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-full mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-3">
                <div>
                    <h1>
                        <p className="text-2xl font-semibold">{property.buildingName}</p>
                        <p className="text-gray-700 text-sm">{property.location}, {property.city}</p>
                    </h1>
                </div>
                <div className="text-xs text-gray-600">
                    {/* Add any additional text here */}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative w-full lg:w-1/2">
                    <img
                        src="/path_to_property_image.jpg"
                        alt="Property"
                        className="w-full h-64 object-cover rounded-md"
                    />
                    <button
                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white py-1 px-3 text-sm rounded hover:bg-[#d84a48]/80 transition-colors duration-300"
                        onClick={() => navigate('/property-images')}
                    >
                        View All Images
                    </button>
                </div>

                <div className="lg:w-1/2 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Property Details */}
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Built-up Area:</span>
                            <p className="text-base font-medium">{property.buArea} Sq.Ft</p>
                        </div>
                        {/* Add more property details as needed */}
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3">
                        <button
                            className="bg-[#d84a48] text-white flex-1 py-2 px-3 rounded text-base hover:bg-black-800 transition-colors duration-300"
                            onClick={handleButtonClick}
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={handleWhatsAppClick}
                            className="bg-green-500 text-white flex-none py-2 px-3 rounded-full flex items-center justify-center text-sm hover:bg-green-600 transition-colors duration-300"
                        >
                            <FaWhatsapp style={{ fontSize: '18px' }} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <div className="flex items-center mb-4 mt-8">
                    <RiProgress2Line className="text-lg text-[#d84a48] mr-2" />
                    <h4 className="text-lg font-semibold">More Details</h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Add property details table here */}
                </div>
            </div>

            {isFormVisible && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleCloseForm}
                >
                    <div
                        className="relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyDetails;
