import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from 'react-icons/ri';
import { AiFillDatabase, AiFillRead } from 'react-icons/ai';
import Header from '../Header/header.jsx';
import axios from 'axios';

const PropertyDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [property, setProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Fetch property details based on id
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`https://cfrecpune.com/projects/${slug}`);
                setProperty(response.data); // Assuming the API returns the property in the response.data
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };
        fetchProperty();
    }, [slug]);

    if (!property) return <p>Loading property details...</p>;

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', formData);
        setIsModalOpen(false);
    };

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    return (
        <>
            <Header />
            <div className="bg-white py-8 px-4 sm:px-10">
                <div className="max-w-8xl mx-auto">
                    {/* Photo and Details Section */}
                    <div className="relative mb-8">
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
                                <div
                                    className="relative w-full h-96 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${property.image})` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
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
                                    <h2 className="text-3xl font-bold mb-4">{property.name}</h2>

                                    {/* Price and Location Section */}
                                    <div className="flex flex-col mb-4">
                                        <h3 className="text-2xl font-bold">₹{property.price} Cr</h3>
                                        <div className="flex items-center mt-1">
                                            <MdOutlinePinDrop className="text-gray-500 mr-1" />
                                            <p className="text-gray-500">{property.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between mb-4">
                                        <div className="p-2 border border-gray-500 rounded-md text-right">
                                            <p className="text-gray-500 text-xs">Avg. Rental Yield:</p>
                                            <p className="text-lg font-semibold">{property.yield}%</p>
                                        </div>
                                        <div className="p-2 border border-gray-500 rounded-md text-right">
                                            <p className="text-gray-500 text-xs">Monthly Rental:</p>
                                            <p className="text-lg font-semibold">₹{property.rental} L</p>
                                        </div>
                                    </div>

                                    <div className="flex space-x-2 mb-4">
                                        <button
                                            className="bg-blue-600 text-white flex-1 py-2 px-4 rounded-md text-lg hover:bg-blue-800 transition-colors duration-300"
                                            onClick={() => setIsModalOpen(true)}
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
                    <div className="w-full bg-white border border-gray-500 shadow-md rounded-lg overflow-hidden p-6">
                        {/* Description Section */}
                        <div className="mb-20">
                            <h4 className="text-xl font-semibold mb-2">About Property</h4>
                            <p className="text-gray-700">{property.description}</p>
                        </div>

                        {/* Property Insight Table */}
                        <div className="mb-20">
                            <div className="flex items-center mb-4">
                                <RiProgress2Line className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="text-xl font-semibold">Property Insights</h4>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Built-up Area:</p>
                                    <p className="text-lg font-medium">{property.builtUpArea}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Carpet Area:</p>
                                    <p className="text-lg font-medium">{property.carpetArea}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Available Seats:</p>
                                    <p className="text-lg font-medium">{property.seats}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Building Type:</p>
                                    <p className="text-lg font-medium">{property.buildingType}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Current Status:</p>
                                    <p className="text-lg font-medium">{property.status}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Building Configuration:</p>
                                    <p className="text-lg font-medium">{property.configuration}</p>
                                </div>
                            </div>
                        </div>

                        {/* Amenities Section */}
                        <div className="mb-20">
                            <div className="flex items-center mb-4">
                                <AiFillDatabase className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="text-xl font-semibold">Amenities</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {Array.isArray(property.amenities) && property.amenities.length > 0 ? (
                                    property.amenities.map((amenity, index) => (
                                        <div key={index} className="p-2 border border-gray-400 rounded-md">
                                            <p className="text-lg font-medium">{amenity}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No amenities available.</p>
                                )}
                            </div>
                        </div>


                        {/* More Insights Section */}
                        <div className="mb-20">
                            <div className="flex items-center mb-4">
                                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="text-xl font-semibold">More Insights</h4>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Seats:</p>
                                    <p className="text-lg font-medium">{property.seats}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Cabins:</p>
                                    <p className="text-lg font-medium">{property.cabins}</p>
                                </div>
                                <div className="flex-1 min-w-[150px] p-2 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Conference Rooms:</p>
                                    <p className="text-lg font-medium">{property.conferenceRooms}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for Contact Form */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="mr-4 text-gray-500 hover:text-gray-700"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PropertyDetail;
