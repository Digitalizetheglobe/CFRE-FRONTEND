import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OfficeCard from './OfficeCard';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error';
import Header from '../Header/header.jsx'
const Office = () => {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [filters, setFilters] = useState({
        price: '',
        city: '',
        location: '',
    });
    const [sortOrder, setSortOrder] = useState('');
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                setProperties(response.data);
                setFilteredProperties(response.data);
                setError(null); // Clear error if data fetch is successful
            } catch (error) {
                console.error('Error fetching properties:', error);
                setError('Failed to load properties. Please try again later.'); // Set error message
            }
        };
        fetchProperties();
    }, []);

    const handleEnquireClick = (property) => {
        setSelectedProperty(property);
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
        setSelectedProperty(null);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const applyFilters = () => {
        let filtered = properties;

        if (filters.price) {
            filtered = filtered.filter(property => property.rentPerMonth <= filters.price);
        }

        if (filters.city) {
            filtered = filtered.filter(property => property.city.toLowerCase().includes(filters.city.toLowerCase()));
        }

        if (filters.location) {
            filtered = filtered.filter(property => property.location.toLowerCase().includes(filters.location.toLowerCase()));
        }

        // Apply sorting
        if (sortOrder === 'low-to-high') {
            filtered = filtered.sort((a, b) => a.rentPerMonth - b.rentPerMonth);
        } else if (sortOrder === 'high-to-low') {
            filtered = filtered.sort((a, b) => b.rentPerMonth - a.rentPerMonth);
        }

        setFilteredProperties(filtered);
    };

    useEffect(() => {
        applyFilters();
    }, [filters, sortOrder]);

    return (
        <>
        <Header />
        <div className="relative overflow-hidden">
            {/* Video background */}
            <div className="absolute inset-0 w-full h-[75vh] overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/Office design video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-6xl text-white">Office Properties</h1>
                </div>
            </div>

            {/* Filter Section - Below the Banner */}
            <div className="relative container mx-auto p-4 mt-[80vh] md:ml-16">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={filters.city}
                            onChange={handleFilterChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter city"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            value={filters.location}
                            onChange={handleFilterChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Sort By Price
                        </label>
                        <div className="flex space-x-4">
                            <button
                                className={`py-2 px-4 rounded ${sortOrder === 'low-to-high' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setSortOrder('low-to-high')}
                            >
                                High to Low
                            </button>
                            <button
                                className={`py-2 px-4 rounded ${sortOrder === 'high-to-low' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setSortOrder('high-to-low')}
                            >
                                Low to High
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content - Below the Filter Section */}
            <div className="relative container mx-auto p-4 mt-5 md:ml-14">
                {error ? (
                    <Error message={error} /> // Render Error component if there's an error
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredProperties.length > 0 ? (
                            filteredProperties.map(property => (
                                <OfficeCard
                                    key={property.id}
                                    property={property}
                                    onEnquireClick={() => handleEnquireClick(property)}
                                />
                            ))
                        ) : (
                            <p className="text-center text-xl">No properties available</p>
                        )}
                    </div>
                )}
            </div>

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
                        <ContactForm onClose={handleCloseForm} property={selectedProperty} />
                    </div>
                </div>
            )}
        </div></>
    );
};

export default Office;
