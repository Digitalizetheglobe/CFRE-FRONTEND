import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error';
import Pagination from '@mui/material/Pagination';
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';

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
                
                // Sort properties by date (latest first) without filtering
                const allProperties = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
                setProperties(allProperties);
                setFilteredProperties(allProperties); // Default view
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
         <Helmet>
                    <title>Pre-Leased Commercial Office Spaces | CFRE Realty</title>
                    <meta name="description" content="Explore our selection of pre-leased commercial office spaces at CFRE Realty. Secure reliable investments with established tenants in prime locations. Discover your next opportunity today!" />
                    <meta property="og:url" content="https://www.cfrerealty.com/preleased" />
                    </Helmet>
            <Header />
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 space-y-4 md:space-y-0">
                    <h1 className="md:text-4xl font-bold text-lg">Pre-Leased Properties</h1>
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                        <input
                            type="text"
                            placeholder="Search by location..."
                            value={searchTerm}
                            onChange={handleSearch}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {/* <select
                            value={sortOrder}
                            onChange={handleSort}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Sort by Price</option>
                            <option value="asc">Price: Low to High</option>
                            <option value="desc">Price: High to Low</option>
                        </select> */}
                        <div className="mb-6">
    <select
        className="w-full p-2 border rounded-lg focus:outline-none bg-white hover:bg-gray-200 transition duration-300"
        onChange={(e) => {
            const selectedRange = e.target.value.split("-"); // Splitting min and max
            const min = parseInt(selectedRange[0], 10);
            const max = selectedRange[1] === "Above" ? null : parseInt(selectedRange[1], 10);

            // Filter only pre-leased properties based on carpet area
            const filtered = properties.filter(property =>
                property.carpetArea >= min && (max === null || property.carpetArea <= max)
            );
            setFilteredProperties(filtered);
        }}
    >
        <option value="">Sort by Area in sq ft.</option>
        <hr></hr>
        <option value="0-1500">0-1500</option>
        <option value="1500-3000">1500-3000</option>
        <option value="3000-5000">3000-5000</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-Above">Above 10000</option>
    </select>
</div>


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
