import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OfficeCard from './OfficeCard';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error';
import Header from '../Header/header.jsx'
import Pagination from '@mui/material/Pagination'; // Import MUI Pagination
import { Helmet } from 'react-helmet-async';


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


      // Pagination-related state
      const [currentPage, setCurrentPage] = useState(1);
      const propertiesPerPage = 8; 

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

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;

    // Slice the filtered properties for the current page
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    // Handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
        <Header />
        <Helmet>
                    <title>Premium Office Spaces for Rent and Sale – CFRE Realty</title>
                    <meta name="description" content="Explore a wide range of premium office spaces for rent and sale at CFRE Realty. Discover prime locations, flexible leasing options, and top-tier amenities. Find the perfect office space to elevate your business with CFRE Realty." />
                    <meta property="og:description" content="Explore a wide range of premium office spaces for rent and sale at CFRE Realty. Discover prime locations, flexible leasing options, and top-tier amenities. Find the perfect office space to elevate your business with CFRE Realty." />
                    <meta property="og:url" content="https://www.cfrerealty.com/office" />
                    </Helmet>
        <div className="relative overflow-hidden">
            {/* Video background */}
            <div className="absolute inset-0 md:w-full md:h-[75vh] h-[25vh]  overflow-hidden">
                <video
                    className="md:w-full md:h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/Office design video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="md:text-6xl text-white">Office Properties</h1>
                </div>
            </div>

            {/* Filter Section - Below the Banner */}
            <div className="relative container mx-auto p-4 md:mt-[80vh] mt-[25vh] md:ml-16">
                <div className="flex flex-col-1 md:flex-row items-center justify-between  md:space-y-0 md:space-x-4 ">
                    <div className="flex-1 ">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            value={filters.city}
                            onChange={handleFilterChange}
                            className="shadow appearance-none md:text-sm text-xs border rounded md:w-full  w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                            className="shadow appearance-none md:text-sm text-xs border rounded md:w-full w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter location"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Sort By Price
                        </label>
                        <div className="flex md:space-x-4 space-x-1">
                            <button
                                className={`md:py-2  md:px-4 rounded md:text-sm text-xs ${sortOrder === 'low-to-high' ? 'bg-[#d84a48] text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setSortOrder('low-to-high')}
                            >
                                High to Low
                            </button>
                            <button
                                className={`md:py-2 md:px-4 rounded md:text-sm text-xs ${sortOrder === 'high-to-low' ? 'bg-[#d84a48] text-white' : 'bg-gray-200 text-gray-700'}`}
                                onClick={() => setSortOrder('high-to-low')}
                            >
                                Low to High
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative container mx-auto p-4 mt-5 md:ml-14">
    {error ? (
        <Error message={error} /> // Render Error component if there's an error
    ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentProperties.length > 0 ? (
                currentProperties.map(property => (
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
  {/* Pagination Component */}
  <div className="flex justify-center mt-6">
                <Pagination
                    count={Math.ceil(filteredProperties.length / propertiesPerPage)} // Total page count
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                />
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
