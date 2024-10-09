import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error'; // Import the Error component
import PropertyCard from '../Invest/PropertyCard';
import Header from '../Header/header.jsx'
import Pagination from '@mui/material/Pagination'; // Import MUI Pagination
import { Link } from 'react-router-dom';


const ExploreInvestProperty = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null); 

    // Pagination-related state
    const [currentPage, setCurrentPage] = useState(1);
    const propertiesPerPage = 8; 

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                const sortedProperties = response.data
                    .filter(property => property.availableFor === "Rent")
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by latest date
                setProperties(sortedProperties);
                setFilteredProperties(sortedProperties);
            } catch (error) {
                setError('Error fetching properties. Please try again later.');
                console.error('Error fetching properties:', error);
            }
        };
        fetchProperties();
    }, []);
    

    useEffect(() => {
        if (!error) { 
            filterAndSortProperties(searchTerm, sortOrder);
        }
    }, [searchTerm, sortOrder, properties, error]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (event) => {
        setSortOrder(event.target.value);
    };

    const filterAndSortProperties = (searchTerm, sortOrder) => {
        let filtered = properties.filter(property => property.availableFor === "Rent");

        if (searchTerm) {
            filtered = filtered.filter(property =>
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.cost - b.cost);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.cost - a.cost);
        }

        setFilteredProperties(filtered);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    // Calculate the properties to display on the current page
    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    if (error) {
        return <Error />; // Render the Error component if there's an error
    }

    return (
        <>
        <Header />
        <div className="container mx-auto p-4">
            <div className="flex md:flex-col flex-col-1  justify-between items-center mb-6 space-y-4 md:space-y-0">
                <h1 className="md:text-4xl text-lg ">Office Spaces Properties</h1>
                <div className="flex md:flex-col flexcol-1 sm:flex-row items-center space-x-0 md:space-x-4 md:space-y-4">
                    <input
                        type="text"
                        placeholder="location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-md px-4 py-2 md:w-full w-28 sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* <select
                        value={sortOrder}
                        onChange={handleSort}
                        className="border border-gray-300 rounded-md md:px-4 md:py-2 md:w-full w-20 sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select> */}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentProperties.length === 0 ? (
                    <p className="text-center w-full">No properties found.</p>
                ) : (
                    currentProperties.map(property => (
                        <PropertyCard key={property.id} property={property} onEnquire={handleButtonClick} />
                    ))
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
        </div></>
    );
};

export default ExploreInvestProperty;
