import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase, AiFillRead } from "react-icons/ai";
import ContactForm from '../MainBody/ContactForm';


const PropertyDetailInRent = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // State to manage the property data
    const [property, setProperty] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);


    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://192.168.0.105:8000/addproperty/${id}`);
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
        <div className="bg-white py-8 px-4 sm:px-10">
            <div className="max-w-8xl mx-auto">
                {/* Photo and Details Section */}
                <div className="relative mb-8">
                    {/* Cross Button */}
                    <button
                        onClick={() => navigate('/')}
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl mt-11"
                    >
                        &times;
                    </button>

                    {/* Building Name and Photo Section */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Photo Section */}
                        <div className="relative flex-none w-full lg:w-3/5">
                            {/* Image Section */}
                            <div className="relative w-full h-96">
                                <img
                                    className="w-full h-full object-cover"
                                    src="/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg"
                                    alt="Property"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                                {/* View All Images Button */}
                                <button
                                    className="absolute bottom-4 left-2/4 transform -translate-x-1/2 bg-transparent text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                                    onClick={() => navigate('/property-images')}
                                >
                                    View All Images
                                </button>
                            </div>
                        </div>


                        {/* Details Section */}
                        <div className="flex-1 w-full lg:w-2/5 mt-11">
                            <div className="bg-white border border-gray-500 shadow-md shadow-slate-700 rounded-lg overflow-hidden p-4">
                                {/* Building Name */}
                                <h2 className="text-3xl font-bold mb-4">{property.buildingName}</h2>

                                {/* Price and Location Section */}
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-2xl font-bold">₹{property.cost} Lacs</h3>
                                    <div className="flex items-center mt-1">
                                        <MdOutlinePinDrop className="text-gray-500 mr-1" />
                                        <p className="text-gray-500">{property.location},{property.city}</p>
                                    </div>
                                </div>

                                <div className="flex justify-between mb-4">
                                    <div className="p-2 border border-gray-500 rounded-md text-right">
                                        <p className="text-gray-500 text-xs">Avg. Rental Yield:</p>
                                        <p className="text-lg font-semibold">{property.yield}10%</p>
                                    </div>
                                    <div className="p-2 border border-gray-500 rounded-md text-right">
                                        <p className="text-gray-500 text-xs">Monthly Rental:</p>
                                        <p className="text-lg font-semibold">₹{property.rental} 4.5L</p>
                                    </div>
                                </div>

                                <div className="flex space-x-2 mb-4">
                                    <button
                                        className="bg-blue-600 text-white flex-1 py-2 px-4 rounded-md text-lg hover:bg-blue-800 transition-colors duration-300"
                                        onClick={() => handleButtonClick()}
                                    >
                                        Contact Us
                                    </button>
                                    <button
                                        onClick={handleWhatsAppClick}
                                        className="bg-green-500 text-white flex-none py-2 px-4 rounded-full flex items-center justify-center text-sm hover:bg-green-600 transition-colors duration-300"
                                    >
                                        <FaWhatsapp style={{ fontSize: '20px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Details and Amenities Section */}
                <div className="w-full bg-white border border-gray-500 shadow-md rounded-lg overflow-hidden p-6 ">
                    {/* Description Section */}
                    <div className="mb-20">
                        <h4 className="text-xl font-semibold mb-2">About Property</h4>
                        <p className="text-gray-700">The property benefits from [additional features, e.g., ample parking, proximity to major highways/public transport, high foot traffic area], making it a strategic location for businesses looking to [business goals, e.g., expand operations, enhance brand visibility].</p>
                    </div>

                    {/* Property Insight Table */}
                    <div className="mb-20">
                        <div className="flex items-center mb-4">
                            <RiProgress2Line className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Property Insights</h4>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Builtup Area:</p>
                                <p className="text-lg font-medium">{property.buArea}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Carpet Area:</p>
                                <p className="text-lg font-medium">{property.carpetArea}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Furnishing:</p>
                                <p className="text-lg font-medium">{property.furnishing}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Building Type:</p>
                                <p className="text-lg font-medium">{property.propertyType}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Current Status:</p>
                                <p className="text-lg font-medium">{property.purpose}</p>
                            </div>
                            {/* <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Building Configuration:</p>
                                <p className="text-lg font-medium">{property.configuration}</p>
                            </div> */}
                        </div>
                    </div>


                    <div className="mb-20">
                        <div className="flex items-center mb-4">
                            <AiFillDatabase className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Amenites</h4>
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Bike Parking:</p>
                                <p className="text-lg font-medium">{property.bikeParking}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Car Parking
                                    :</p>
                                <p className="text-lg font-medium">{property.carParking
                                }</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Cafeteria:</p>
                                <p className="text-lg font-medium">{property.cafeteria} Available</p>
                            </div>
                            {/*  <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Building Type:</p>
                                <p className="text-lg font-medium">{property.propertyType}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Current Status:</p>
                                <p className="text-lg font-medium">{property.purpose}</p>
                            </div>
                            <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                <p className="text-gray-500 text-xs font-semibold">Building Configuration:</p>
                                <p className="text-lg font-medium">{property.configuration}</p>
                            </div> */}
                        </div>
                    </div>

                    <div className="mb-20">
                        {/* <div className="flex items-center mb-4">
                            <AiFillDatabase className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Amenities</h4>
                        </div> */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {property.amenities.map((amenity, index) => (
                                <div
                                    key={index}
                                    className="flex-1 min-w-auto p-2 rounded-md flex items-center"
                                >
                                    <AiFillRead className="text-gray-500 text-lg mr-2" />
                                    <p className="text-gray-700">{amenity}</p>
                                </div>
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Render ContactForm only if isFormVisible is true */}
{isFormVisible && (
                <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'>
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                    <button onClick={handleCloseForm} className='absolute inset-0'></button>
                </div>
            )}
        </div>
    );
};

export default PropertyDetailInRent;