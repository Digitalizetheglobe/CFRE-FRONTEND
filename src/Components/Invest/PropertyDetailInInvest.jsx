
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { RiProgress2Line } from "react-icons/ri";
import ContactForm from '../MainBody/ContactForm';

const PropertyDetailInInvest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFormVisible, setFormVisible] = useState(false);
    const [property, setProperty] = useState(null);

    // Fetching property details
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`https://cfrecpune.com/cfreproperties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) return <p>Property not found</p>;

    // Handle WhatsApp click
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    // Handle Contact Form visibility
    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-full mx-auto">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-3">
                <div>
                    <h1>
                        <p className="text-2xl font-semibold">{property.buildingName}</p>
                        <p className="text-gray-700 text-sm">{property.location}, {property.city}</p>
                    </h1>
                </div>
                <div className="text-xs text-gray-600">
                    {/* Additional text or info */}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* Main Image */}
                <div className="relative w-full lg:w-1/2">
                    <img
                        src={property.image || '/fallback-image.jpg'} // Use dynamic image source
                        alt={property.buildingName}
                        className="w-full h-64 object-cover rounded-md"
                    />
                    <button
                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white py-1 px-3 text-sm rounded hover:bg-[#d84a48]/80 transition-colors duration-300"
                        onClick={() => navigate('/property-images')}
                    >
                        View All Images
                    </button>
                </div>
                
                {/* Property Details */}
                <div className="lg:w-1/2 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Built-up Area:</span>
                            <p className="text-base font-medium">{property.buArea} Sq.Ft</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Carpet Area:</span>
                            <p className="text-base font-medium">{property.carpetArea} Sq.Ft</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Location:</span>
                            <p className="text-base font-medium">{property.location}</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-3">
                        <button
                            className="bg-[#d84a48] text-white flex-1 py-2 px-3 rounded text-base hover:bg-black-800 transition-colors duration-300"
                            onClick={() => handleButtonClick()}
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

            {/* More Details Section */}
            <div className="mb-20">
                <div className="flex items-center mb-4 mt-8">
                    <RiProgress2Line className="text-lg text-[#d84a48] mr-2" />
                    <h4 className="text-lg font-semibold">More Details</h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <table className="w-full table-auto border border-gray-300 rounded-md text-sm">
                        <tbody>
                            <tr>
                                <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Work Stations</td>
                                <td className="border px-2 py-1 text-base font-bold">{property.workstation}</td>
                            </tr>
                            {/* Add more rows as per data available */}
                        </tbody>
                    </table>

                    <table className="w-full table-auto border border-gray-300 rounded-md text-sm">
                        <tbody>
                            <tr>
                                <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Deposit</td>
                                <td className="border px-2 py-1 text-base font-bold">6 months rent</td>
                            </tr>
                            {/* Add more rows */}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Contact Form Modal */}
            {isFormVisible && (
                <div
                    className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleCloseForm}
                >
                    <div
                        className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyDetailInInvest;
