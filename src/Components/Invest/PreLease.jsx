import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error';
import Pagination from '@mui/material/Pagination';
import Header from '../Header/header.jsx';

const Prelease = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null); 

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
                setProperties(response.data);
                
                // Filter for pre-leased properties and set them
                setFilteredProperties(
                    response.data
                        .filter(property => property.propertySubtype === "preLeased")
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by date (latest first)
                );
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
        let filtered = properties.filter(property => property.propertySubtype === "preLeased");

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(property =>
                property.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort by price if selected
        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.cost - b.cost);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.cost - a.cost);
        } else {
            // If no price sorting is applied, sort by latest date by default
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        setFilteredProperties(filtered);
    };

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const indexOfLastProperty = currentPage * propertiesPerPage;
    const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
    const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <Header />
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <h1 className="text-4xl">Pre-Leased Properties</h1>
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                        <input
                            type="text"
                            placeholder="Search by location..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={sortOrder}
                            onChange={handleSort}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Sort by Price</option>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredProperties.length === 0 ? (
                        <p className="text-center w-full">No pre-leased properties found.</p>
                    ) : (
                        currentProperties.map(property => (
                            <PropertyCard key={property.id} property={property} onEnquire={handleButtonClick} />
                        ))
                    )}
                </div>

                <div className='flex justify-center mt-6'>
                    <Pagination
                        count={Math.ceil(filteredProperties.length / propertiesPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color='primary'
                        size='large'
                    />
                </div>

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
        </>
    );
};

export default Prelease;
