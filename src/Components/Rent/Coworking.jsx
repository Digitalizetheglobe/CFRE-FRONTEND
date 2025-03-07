import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from '../MainBody/ContactForm';
import Error from '../Error/Error';
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';
import PropertyCardCoworking from './PropertyCardCoworking.jsx';

const Coworking = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties, setProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get("https://cfrecpune.com/coworking");
                setProperties(response.data); // Store all properties
            } catch (err) {
                setError("Error fetching properties");
            }
        };
        fetchProperties();
    }, []);

    

    if (error) {
        return <Error />;
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSort = (event) => {
        setSortOrder(event.target.value);
    };

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    // Filter and sort properties dynamically
    const filteredAndSortedProperties = properties
        .filter(property => 
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortOrder === 'asc') return a.cost - b.cost;
            if (sortOrder === 'desc') return b.cost - a.cost;
            return 0;
        });

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
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select
                            value={sortOrder}
                            onChange={handleSort}
                            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                           
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredAndSortedProperties.length === 0 ? (
                        <p className="text-center w-full">No properties found.</p>
                    ) : (
                        filteredAndSortedProperties.map(property => (
                            <PropertyCardCoworking   
                                key={property.id} 
                                property={property} 
                                onEnquire={handleButtonClick} 
                            />
                        ))
                    )}
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

export default Coworking;
