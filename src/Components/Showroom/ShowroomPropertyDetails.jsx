import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { RiProgress2Line } from "react-icons/ri";
import ContactForm from '../MainBody/ContactForm';

const ShowroomPropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // State to manage the showroom property data
    const [showroomProperty, setShowroomProperty] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchShowroomProperty = async () => {
            try {
                const response = await axios.get(`https://cfrecpune.com/showroomproperties/${id}`);
                setShowroomProperty(response.data);
            } catch (error) {
                console.error('Error fetching showroom property:', error);
            }
        };

        fetchShowroomProperty();
    }, [id]);

    if (!showroomProperty) return <p>Showroom property not found</p>;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-full mx-auto">
            {/* Price and Location */}
            <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-6">
                <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-3">
                        <p className="text-xl font-semibold text-gray-800">{showroomProperty.buildingName}</p>
                        <p className="text-md text-gray-700">{showroomProperty.location}, {showroomProperty.city}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                {/* Main Image */}
                <div className="relative w-full lg:w-1/2">
                    <img
                        src="/ShowroomImage.jpeg"
                        alt="Showroom Property"
                        className="w-full h-64 object-cover rounded-md"
                    />
                    {/* View All Images Button */}
                    <button
                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white py-1 px-3 rounded-md hover:bg-[#d84a48]/80 transition-colors duration-300"
                        onClick={() => navigate('/showroom-images')}
                    >
                        View All Images
                    </button>
                </div>

                {/* Showroom Property Details */}
                <div className="lg:w-1/2 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Name:</span>
                            <p className="text-base text-gray-800 font-bold">{showroomProperty.buildingName}</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Location:</span>
                            <p className="text-base text-gray-800 font-bold">{showroomProperty.location}</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Builtup Area:</span>
                            <p className="text-base text-gray-800 font-bold">{showroomProperty.buArea} Sq.Ft</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Carpet Area:</span>
                            <p className="text-base text-gray-800 font-bold">{showroomProperty.carpetArea} Sq.Ft</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Car Parking</span>
                            <p className="text-base text-gray-800 font-bold">{showroomProperty.carParking}</p>
                        </div>
                        <div className="text-gray-600">
                            <span className="block font-semibold text-sm">Bike Parking</span>
                            <p className="text-base text-gray-800 font-bold">{showroomProperty.bikeParking}</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="flex space-x-2">
                        <button
                            className="bg-[#d84a48] text-white flex-1 py-1.5 px-3 rounded-md text-md hover:bg-[#d84a48]/90 transition-colors duration-300"
                            onClick={() => handleButtonClick()}
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={handleWhatsAppClick}
                            className="bg-green-500 text-white flex-none py-1.5 px-3 rounded-full flex items-center justify-center text-xs hover:bg-green-600 transition-colors duration-300"
                        >
                            <FaWhatsapp style={{ fontSize: '18px' }} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mb-20">
                <div className="flex items-center mb-4 mt-8">
                    <RiProgress2Line className="text-xl text-[#d84a48] mr-2" />
                    <h4 className="text-xl font-semibold">More Details</h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* First Table */}
                    <table className="w-full table-auto border border-gray-400 rounded-md">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Bike Parking</td>
                                <td className="border px-4 py-2 text-lg font-bold">{showroomProperty.bikeParking}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Car Parking</td>
                                <td className="border px-4 py-2 text-lg font-bold">{showroomProperty.carParking}</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Cafeteria</td>
                                <td className="border px-4 py-2 text-lg font-bold">{showroomProperty.cafeteria} Available</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">DG Backup</td>
                                <td className="border px-4 py-2 text-lg font-bold">Available</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Rent per sq. ft. on built-up area</td>
                                <td className="border px-4 py-2 text-lg font-bold">{showroomProperty.rate}/Sq.Ft</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Maintenance per sq. ft. on built-up area</td>
                                <td className="border px-4 py-2 text-lg font-bold">{showroomProperty.maintenanceRate}/Sq.Ft</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Second Table */}
                    <table className="w-full table-auto border border-gray-400 rounded-md">
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Deposit</td>
                                <td className="border px-4 py-2 text-lg font-bold">6 months rent</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Yearly Escalation</td>
                                <td className="border px-4 py-2 text-lg font-bold">5%</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Agreement period</td>
                                <td className="border px-4 py-2 text-lg font-bold">5 years</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Lock-in period</td>
                                <td className="border px-4 py-2 text-lg font-bold">3 years</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Agreement charges</td>
                                <td className="border px-4 py-2 text-lg font-bold">Borne by both parties equally</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Brokerage</td>
                                <td className="border px-4 py-2 text-lg font-bold">1 month rent applicable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {isFormVisible && <ContactForm onClose={handleCloseForm} />}
        </div>
    );
};

export default ShowroomPropertyDetails;
