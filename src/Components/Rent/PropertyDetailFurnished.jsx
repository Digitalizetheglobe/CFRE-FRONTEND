import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ContactForm from '../MainBody/ContactForm';
import Header from '../Header/header.jsx';

const PropertyDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [property, setProperty] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);
    const [showAllDetails, setShowAllDetails] = useState(false);

    // References for smooth scrolling
    const overviewRef = useRef(null);
    const moreDetailsRef = useRef(null);
    const nearbyPropertiesRef = useRef(null);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    const toggleDetails = () => {
        setShowAllDetails(!showAllDetails);
    };

    const handleScrollTo = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`https://api.cfrerealty.com/cfreproperties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) return <p>Property not found</p>;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    // Define all details to be shown
    const allDetails = [
        { label: 'Location', value: `${property.location}, ${property.city}` },
        { label: 'Property Type', value: property.propertyType },
        { label: 'Purpose', value: property.availableFor },
        { label: 'Floor/Unit No', value: `${property.floor}, ${property.unitNo}` },
        { label: 'Car Parking', value: property.carParking },
        { label: 'Bike Parking', value: property.bikeParking },
        { label: 'Possession', value: 'Within 60 days from the date of agreement' },
        { label: 'DG Back Up', value: property.dgBackup },
        { label: 'Rent/SqFt Built Up Area', value: property.rentPerSqFtBuiltUpArea },
        { label: 'Maintenance/SqFt on Carpet', value: property.maintenancePersqft },
        { label: 'Security Deposit', value: property.deposit },
        { label: 'Escalation (on rent)', value: '5% Every Year' },
        { label: 'Agreement Period', value: property.agreementPeriod },
        { label: 'Locking Period', value: property.lockingPeriod },
        { label: 'Maintenance Per Month', value: 'To be borne by Licensee' },
        { label: 'Property Taxes', value: 'To be borne by Licensor' },
        { label: 'GST on rent and maintenance', value: 'To be borne by Licensee' },
        { label: 'Electricity Charges / Water Charges', value: 'Borne by the Licensee as per usage directly to Authority' },
        { label: 'Agreement charges', value: 'Equally by both the parties' },
    ];

    // Get only the first six details or all details based on `showAllDetails` state
    const displayedDetails = showAllDetails ? allDetails : allDetails.slice(0, 6);

    return (
        <>
        <Header />
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-8xl mx-auto">

            {/* Sticky Header */}
            <div className="sticky top-0 bg-white z-10 shadow-md flex justify-center space-x-4">
                <button
                    className="text-gray-700 font-semibold px-4 py-2 hover:text-[#d84a48] focus:outline-none"
                    onClick={() => handleScrollTo(overviewRef)}
                >
                    Overview
                </button>
                <button
                    className="text-gray-700 font-semibold px-4 py-2 hover:text-[#d84a48] focus:outline-none"
                    onClick={() => handleScrollTo(moreDetailsRef)}
                >
                    More Details
                </button>
                <button
                    className="text-gray-700 font-semibold px-4 py-2 hover:text-[#d84a48] focus:outline-none"
                    onClick={() => handleScrollTo(nearbyPropertiesRef)}
                >
                    Nearby Properties
                </button>
            </div>

            {/* Overview Section */}
            <div ref={overviewRef} className="border border-gray-300 rounded-lg shadow-sm bg-white p-4 max-w-5xl mx-auto mt-5">
                <div className="flex flex-wrap lg:flex-nowrap">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/3 pr-0 lg:pr-4 mb-4 lg:mb-0">
                        <img
                            src="/path_to_property_image.jpg"
                            alt="Property"
                            className="w-full h-72 object-cover rounded-lg shadow-md"
                        />
                    </div>

                    {/* Center Section */}
                    <div className="w-full lg:w-1/2 px-0 lg:px-4">
                        <div className="text-2xl font-bold text-gray-900 mb-4">
                            ₹{property.price} <span className="text-base font-normal">₹{property.pricePerSqFt}/sqft</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold ml-4 px-2.5 py-0.5 rounded">Verified on Site</span>
                        </div>

                        {/* Details */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
                            {/* Display the property details similar to PropertyDetailInRent */}
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex space-x-2 mt-6">
                            <button
                                className="bg-[#d84a48] text-white w-full py-2 px-4 rounded-md text-md hover:bg-[#a53938] transition-colors duration-300"
                                onClick={handleButtonClick}
                            >
                                Contact Us
                            </button>
                            <button
                                onClick={handleWhatsAppClick}
                                className="bg-green-500 text-white w-full py-2 px-4 rounded-md text-md flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Details Section */}
            <div ref={moreDetailsRef} className="max-w-5xl mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-300 ml-8">
                <h4 className="text-xl font-semibold mb-6">More Details</h4>
                <div className="space-y-4 divide-y divide-gray-200">
                    {displayedDetails.map((detail, index) => (
                        <div key={index} className="grid grid-cols-3 gap-x-4 py-2">
                            <span className="font-semibold text-gray-700">{detail.label}</span>
                            <span className="col-span-2 font-bold text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>

                {/* Button to show or hide more details */}
                <button
                    className="mt-4 text-[#d84a48] hover:underline"
                    onClick={toggleDetails}
                >
                    {showAllDetails ? 'Hide More Details' : 'See More Details'}
                </button>
            </div>

            {/* Form Overlay */}
            {isFormVisible && (
                <div
                    className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
                    onClick={handleCloseForm}
                >
                    <div
                        className="relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div></>
    );
};

export default PropertyDetails;
