import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error'; // Import the Error component
import Header from '../Header/header.jsx'
import { Helmet } from 'react-helmet-async';

const Coworking = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null); // Error state

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
    
                // Filter properties by furnishing ("Coworking") and availability for rent
                setFilteredProperties(
                    response.data.filter(
                        property => property.furnishing === 'Coworking' && property.availableFor === 'Rent'
                    )
                );
    
                console.log('111111===>', response.data);
            } catch (error) {
                setError('Error fetching properties. Please try again later.'); // Set error message
                console.error('Error fetching properties:', error);
            }
        };
        fetchProperties();
    }, []);

    useEffect(() => {
        if (!error) { // Only filter and sort if there's no error
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
        let filtered = properties.filter(property => property.furnishing === 'Coworking');

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

    if (error) {
        return <Error />; // Render the Error component if there's an error
    }

    return (
        <>
        <Header />
        <Helmet>
                    <title>Dynamic Coworking Spaces in Pune - CFRE Realty</title>
                    <meta name="description" content="Unlock your potential with CFRE Realty's coworking spaces in Pune. Enjoy amenities, networking opportunities, and a vibrant work environment. Sign up for a tour today!" />
                    <meta property="og:description" content="Unlock your potential with CFRE Realty's coworking spaces in Pune. Enjoy amenities, networking opportunities, and a vibrant work environment. Sign up for a tour today!" />
                    <meta property="og:url" content="https://www.cfrerealty.com/Coworking" />
                    </Helmet>
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 space-y-4 md:space-y-0">
                <h1 className="md:text-4xl text-lg font-bold">Coworking Spaces</h1>
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

            // Filter only "Coworking" properties within the selected area range
            const filtered = properties.filter(property =>
                property.furnishing === 'Coworking' && 
                property.availableFor === 'Rent' &&
                property.carpetArea >= min && 
                (max === null || property.carpetArea <= max)
            );
            setFilteredProperties(filtered);
        }}
    >
        <option value="">Sort by Area in sq ft.</option>
        <hr />
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
                    <p className="text-center w-full">No Coworking and Managed office properties found.</p>
                ) : (
                    filteredProperties.map(property => (
                        <PropertyCard 
                            key={property.id} 
                            property={property} 
                            onEnquire={handleButtonClick}  // Pass the handler
                        />
                    ))
                )}
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

export default Coworking;
