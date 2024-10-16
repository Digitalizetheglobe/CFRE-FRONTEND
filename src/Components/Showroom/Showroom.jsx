import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowroomCard from './ShowroomCard';
import ContactForm from '../MainBody/ContactForm';
import ShowroomVideo from './showroomvideo.mp4'; // Import your video file
import Error from '../Error/Error'; // Import the Error component
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';

const Showroom = () => {
    const [properties, setProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [error, setError] = useState(null); // State for error handling

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
                const showroomProperties = response.data.filter(property => property.propertyType === 'Showroom'); // Filter for Showroom properties
                setProperties(showroomProperties);
                setError(null); // Clear error if data fetch is successful
            } catch (error) {
                console.error('Error fetching showroom properties:', error);
                setError('Failed to load showroom properties. Please try again later.'); // Set error message
            }
        };

        fetchProperties();
    }, []);

    return (
        <>
            <Header />
            <Helmet>
                    <title>Premium Showrooms for Lease in Pune | CFRE Realty</title>
                    <meta name="description" content="Discover premium showroom spaces for lease in prime locations of Pune with CFRE Realty. Ideal for businesses seeking high-visibility retail spaces. Contact us for availability, pricing, and more details." />
                    <meta property="og:description" content="Discover premium showroom spaces for lease in prime locations of Pune with CFRE Realty. Ideal for businesses seeking high-visibility retail spaces. Contact us for availability, pricing, and more details." />
                    <meta property="og:url" content="https://www.cfrerealty.com/Showroom" />
                    </Helmet>
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 w-full md:h-[75vh] h-[25vh] overflow-hidden">
                    <video
                        className="md:w-full md:h-full object-cover"
                        src={ShowroomVideo}
                        autoPlay
                        loop
                        muted
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                        <h1 className="text-xl md:text-4xl text-white">Showroom Properties</h1>
                    </div>
                </div>

                <div className="relative container mx-auto p-4 md:mt-[80vh] mt-[25vh]">
                    {error ? (
                        <Error message={error} /> // Render Error component if there's an error
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {properties.length === 0 ? (
                                <p>No showroom properties found.</p>
                            ) : (
                                properties.map(property => (
                                    <ShowroomCard
                                        key={property.id}
                                        property={property}
                                        onEnquire={handleButtonClick} // Pass the handler
                                    />
                                ))
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
                            <ContactForm onClose={handleCloseForm} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Showroom;
