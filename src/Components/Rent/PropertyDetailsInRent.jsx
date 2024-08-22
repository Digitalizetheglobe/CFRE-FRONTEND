import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase, AiFillRead } from "react-icons/ai";

const PropertyDetailInRent = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: ''
    });

    // State to manage the property data
    const [property, setProperty] = useState(null);

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

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send a POST request with the form data
            const response = await axios.post('http://192.168.0.105:8000/inquire', formData);
            
            // Log the response for debugging
            console.log('Form submitted successfully', response.data);
            
            // You can also handle the response if needed, e.g., show a success message
            alert('Your inquiry has been submitted successfully!');
            
            // Close modal after successful submission
            setIsModalOpen(false);
        } catch (error) {
            // Handle errors if the request fails
            console.error('Error submitting form:', error);
            
            // Optionally, show an error message to the user
            alert('There was an error submitting your inquiry. Please try again.');
        }
    };

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
                                    <h3 className="text-2xl font-bold">₹{property.cost} Lac</h3>
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

            {/* Contact Form Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-sm sm:text-base" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-sm sm:text-base" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-sm sm:text-base" htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 mb-2 sm:mb-0 sm:mr-2"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
            )}
        </div>
    );
};

export default PropertyDetailInRent;
