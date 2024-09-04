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
                const response = await axios.get(`https://cfrecpune.com/cfreproperties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) return <p>Property not found</p>;


    // Function to handle form submission


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
    {/* Main Image */}
    <div className="relative w-full lg:w-1/2">
        <img
            src="/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg"
            alt="Property"
            className="w-full h-64 object-cover rounded-md"
        />
        {/* View All Images Button */}
        <button
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2  text-white py-1 px-3 text-sm rounded hover:bg-[#d84a48]/80 transition-colors duration-300"
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
            <div className="text-gray-600">
                <span className="block font-semibold text-sm">Furnishing:</span>
                <p className="text-base font-medium">{property.furnishing}</p>
            </div>
            <div className="text-gray-600">
                <span className="block font-semibold text-sm">Cabin:</span>
                <p className="text-base font-medium">{property.cabin}</p>
            </div>
            <div className="text-gray-600">
                <span className="block font-semibold text-sm">Conference Room:</span>
                <p className="text-base font-medium">{property.conferenceRoom}</p>
            </div>
            <div className="text-gray-600">
                <span className="block font-semibold text-sm">Bike Parking:</span>
                <p className="text-base font-medium">{property.reserved2WheelerParking}</p>
            </div>
            <div className="text-gray-600">
                <span className="block font-semibold text-sm">Car Parking:</span>
                <p className="text-base font-medium">{property.reservedCarParking}</p>
            </div>
            {/* Add more property details as needed */}
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


<div className="mb-20">
    <div className="flex items-center mb-4 mt-8">
        <RiProgress2Line className="text-lg text-[#d84a48] mr-2" />
        <h4 className="text-lg font-semibold">More Details</h4>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Table */}
        <table className="w-full table-auto border border-gray-300 rounded-md text-sm">
            <tbody>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Work Stations</td>
                    <td className="border px-2 py-1 text-base font-bold">{property.workstation}</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Meeting Room</td>
                    <td className="border px-2 py-1 text-base font-bold">{property.conferenceRoom}</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Cafeteria</td>
                    <td className="border px-2 py-1 text-base font-bold">{property.cafeteria}</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">DG Backup</td>
                    <td className="border px-2 py-1 text-base font-bold">100%</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Rent per sq. ft. on built-up area</td>
                    <td className="border px-2 py-1 text-base font-bold">Sq.Ft</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Maintenance per sq. ft. on built-up area</td>
                    <td className="border px-2 py-1 text-base font-bold">Sq.Ft</td>
                </tr>
            </tbody>
        </table>

        {/* Second Table */}
        <table className="w-full table-auto border border-gray-300 rounded-md text-sm">
            <tbody>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Deposit</td>
                    <td className="border px-2 py-1 text-base font-bold">6 months rent</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Yearly Escalation</td>
                    <td className="border px-2 py-1 text-base font-bold">5%</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Agreement period</td>
                    <td className="border px-2 py-1 text-base font-bold">5 years</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Lock-in period</td>
                    <td className="border px-2 py-1 text-base font-bold">3 years</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Government Taxes</td>
                    <td className="border px-2 py-1 text-base font-bold">Extra At Actual, will be borne by the purchaser</td>
                </tr>
                <tr>
                    <td className="border px-2 py-1 text-gray-500 text-xs font-semibold">Maintenance:</td>
                    <td className="border px-2 py-1 text-lg font-bold">Borne by the licensee</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>



{/* 
            <div className="mt-4">
                <button
                    onClick={toggleDetails}
                    className="bg-[#d84a48] text-white py-2 px-6 rounded-full hover:bg-[#d84a48]/80 transition-colors duration-300"
                >
                    {showAllDetails ? "Hide Details" : "View All Details"}
                </button>
            </div>
        </div> */}



            {/* Render ContactForm only if isFormVisible is true */}
            {isFormVisible && (
                <div
                    className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleCloseForm} // Close on overlay click
                >
                    <div
                        className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyDetailInInvest;
