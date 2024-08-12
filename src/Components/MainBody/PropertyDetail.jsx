import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { AiFillRead } from "react-icons/ai";


const PropertyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // Updated properties array with additional properties
    const properties = [
        {
            id: '1',
            image: '/ATP-Ongoing.jpg',
            price: 9,
            location: 'Baner',
            yield: 8.33,
            rental: 7.09,
            name: 'Baner Business Center',
            description: 'Spacious office space located in the heart of Baner. Ideal for startups and established businesses.',
            builtUpArea: '2000 sq ft',
            carpetArea: '1500 sq ft',
            seats: '50',
            buildingType: 'Commercial',
            status: 'Available',
            configuration: 'Open Plan',
            amenities: [
                'High-Speed Internet',
                '24/7 Security',
                'Conference Rooms',
                'Parking',
                'Air Conditioning',
                'CCTV Surveillance',
                'Power Backup',
                'Elevators',
                'Fire Safety',
                'Cleaning Services'
            ],
            moreInfo: 'This property is designed with state-of-the-art facilities that cater to both startups and established businesses. The location offers easy access to public transportation and local amenities.',
            nearby: ['Hinjewadi IT Park', 'Balewadi Sports Complex', 'Westend Mall']
        },
        {
            id: '2',
            image: '/ATP-Ongoing.jpg',
            price: 12,
            location: 'Hinjewadi',
            yield: 7.75,
            rental: 5.50,
            name: 'Hinjewadi IT Park',
            description: 'Modern office space with excellent connectivity and infrastructure.',
            builtUpArea: '2500 sq ft',
            carpetArea: '1800 sq ft',
            seats: '60',
            buildingType: 'Commercial',
            status: 'Available',
            configuration: 'Private Offices',
            amenities: [
                'High-Speed Internet',
                'Gym',
                'Cafeteria',
                'Parking',
                '24/7 Security',
                'Power Backup',
                'Fire Safety',
                'Recreational Zones',
                'Elevators',
                'CCTV Surveillance'
            ],
            moreInfo: 'The IT Park offers world-class facilities with various food courts and recreational zones. It is well connected to major highways and the city center.',
            nearby: ['Pune University', 'Rajiv Gandhi IT Park', 'Blue Ridge']
        },
        {
            id: '3',
            image: '/ATP-Ongoing.jpg',
            price: 15,
            location: 'Viman Nagar',
            yield: 9.00,
            rental: 8.20,
            name: 'Viman Nagar Business Hub',
            description: 'Prime office space with great visibility and accessibility.',
            builtUpArea: '3000 sq ft',
            carpetArea: '2200 sq ft',
            seats: '80',
            buildingType: 'Commercial',
            status: 'Occupied',
            configuration: 'Open Plan',
            amenities: [
                'High-Speed Internet',
                'Reception',
                'Meeting Rooms',
                'Parking',
                'Air Conditioning',
                '24/7 Security',
                'CCTV Surveillance',
                'Power Backup',
                'Fire Safety',
                'Elevators'
            ],
            moreInfo: 'Located in a bustling commercial district, this hub offers proximity to retail centers and dining options, making it an ideal location for business operations.',
            nearby: ['Phoenix Market City', 'Kalyani Nagar', 'Aga Khan Palace']
        },
        // Additional properties...
    ];
    

    const property = properties.find(prop => prop.id === id);

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
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', formData);
        // Close modal after submission
        setIsModalOpen(false);
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
                            <div
                                className="relative w-full h-96 bg-cover bg-center"
                                style={{ backgroundImage: `url(${property.image})` }}
                            >
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
                <div className="w-full bg-white border border-gray-500 shadow-md rounded-lg overflow-hidden p-6 ">
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
                                <p className="text-gray-500 text-xs font-semibold">Builtup Area:</p>
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

                    <div className="mb-20">
    <div className="flex items-center mb-4">
        <AiFillDatabase className="text-xl text-[#d84a48] mr-2" />
        <h4 className="text-xl font-semibold">Amenities</h4>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {property.amenities.map((amenity, index) => (
            <div
                key={index}
                className="flex-1 min-w-auto p-2 rounded-md flex items-center"
            >
                <AiFillRead className="text-gray-500 text-lg mr-2" />
                <p className="text-gray-700">{amenity}</p>
            </div>
        ))}
    </div>
</div>

                    <div className="mb-20">
                        <div className="flex items-center mb-4">
                            <AiFillDatabase className="text-xl text-[#d84a48] mr-2" />
                            <h4 className="text-xl font-semibold">Nearby Properties</h4>
                        </div>
                        <div className="grid  grid-flow-col gap-4">
                            {property.nearby.map((place, index) => (
                                <div
                                    key={index}
                                    className="flex-1 min-w-auto p-2  rounded-md flex items-center"
                                >
                                    <MdOutlinePinDrop className="text-gray-500 text-lg mr-2" />
                                    <p className="text-gray-700">{place}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* More About Property Section */}
                    <div className="mb-20">
                        <div className='flex item-centre mb-4'>
                        <AiFillRead  className=' text-xl text-[#d84a48] mr-2'/>
                        <h4 className="text-xl font-semibold ">More About Property</h4>
                        </div>
                        <p className="text-gray-700">{property.moreInfo}</p>
                    </div>

                </div>

                {/* Modal for Contact Form */}
                {isModalOpen && (                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsModalOpen(false)}
                                        className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400"
                                    >
                                        Cancel
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
        </div>
    );
};

export default PropertyDetail;
