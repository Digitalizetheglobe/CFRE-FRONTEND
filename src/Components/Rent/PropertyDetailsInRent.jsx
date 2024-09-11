// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaWhatsapp } from 'react-icons/fa';
// import { RiProgress2Line } from "react-icons/ri";
// import ContactForm from '../MainBody/ContactForm';


// const PropertyDetailInRent = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     // State to manage the property data
//     const [property, setProperty] = useState(null);
//     const [isFormVisible, setFormVisible] = useState(false);
//     const [showAllDetails, setShowAllDetails] = useState(false);


//     const handleButtonClick = () => {
//         setFormVisible(true);
//     };

//     const handleCloseForm = () => {
//         setFormVisible(false);
//     };

//     useEffect(() => {
//         const fetchProperty = async () => {
//             try {
//                 const response = await axios.get(`https://cfrecpune.com/rentproperties/${id}`);
//                 setProperty(response.data);
//             } catch (error) {
//                 console.error('Error fetching property:', error);
//             }
//         };

//         fetchProperty();
//     }, [id]);

//     if (!property) return <p>Property not found</p>;



//     const handleWhatsAppClick = () => {
//         window.open('https://wa.me/918149977661', '_blank');
//     };

//     return (
//         <div className="bg-white p-6 rounded-lg shadow-lg max-w-full mx-auto">
//             {/* Price and Location */}
//             <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-6">
//                 <div className="flex flex-col space-y-1">
//                     <div className="flex items-center space-x-3">
//                         <p className="text-xl font-semibold text-gray-800">{property.buildingName}</p>
//                         <p className="text-md text-gray-700">{property.location}, {property.city}</p>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-4">
//                 {/* Main Image */}
//                 <div className="relative w-full lg:w-1/2 ">
//                     <img
//                         src="/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg"
//                         alt="Property"
//                         className="w-full h-80 object-cover rounded-md"
//                     />
//                     {/* View All Images Button */}
//                     <button
//                         className="absolute bottom-3 left-1/2 transform -translate-x-1/2  text-white py-1 px-3 rounded-md hover:bg-[#d84a48]/80 transition-colors duration-300"
//                         onClick={() => navigate('/property-images')}
//                     >
//                         View All Images
//                     </button>
//                 </div>

//                 {/* Property Details */}
//                 <div className="lg:w-1/2  space-y-3">
//                     <div className="grid grid-cols-2 gap-3">
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Name:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.buildingName}</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Location:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.location}</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Builtup Area:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.buArea} Sq.Ft</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Carpet Area:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.carpetArea} Sq.Ft</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Car Parking</span>
//                             <p className="text-base text-gray-800 font-bold">{property.carParking}</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Bike Parking</span>
//                             <p className="text-base text-gray-800 font-bold">{property.bikeParking}</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Cabin:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.cabin}</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Conference Room:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.conferenceOrMeetingRoom}</p>
//                         </div>
//                         <div className="text-gray-600">
//                             <span className="block font-semibold text-sm">Work Stations:</span>
//                             <p className="text-base text-gray-800 font-bold">{property.ws}</p>
//                         </div>


//                     </div>

//                     {/* Contact Section */}
//                     <div className="flex space-x-2">
//                         <button
//                             className="bg-[#d84a48] text-white w-1/2 py-1.5 px-3 rounded-md text-md hover:bg-[#d84a48]/90 transition-colors duration-300"
//                             onClick={() => handleButtonClick()}
//                         >
//                             Contact Us
//                         </button>
//                         <button
//                             onClick={handleWhatsAppClick}
//                             className="bg-green-500 text-white flex-none py-1.5 px-3 rounded-full flex items-center justify-center text-xs hover:bg-green-600 transition-colors duration-300"
//                         >
//                             <FaWhatsapp style={{ fontSize: '18px' }} />
//                         </button>
//                     </div>

//                 </div>
//             </div>


//             <div className="mb-20">
//                 <div className="flex items-center mb-4 mt-8">
//                     <RiProgress2Line className="text-xl text-[#d84a48] mr-2" />
//                     <h4 className="text-xl font-semibold">More Details</h4>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                     {/* First Table */}
//                     <table className="w-full table-auto border border-gray-400 rounded-md">
//                         <tbody>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Bike Parking</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">{property.bikeParking}</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Car Parking</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">{property.carParking}</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Cafeteria</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">{property.cafeteria}Available</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">DG Backup</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">Available</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Rent per sq. ft. on built-up area</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">{property.rate}/Sq.Ft</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Maintenance per sq. ft. on built-up area</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">{property.rate}/Sq.Ft</td>
//                             </tr>
//                         </tbody>
//                     </table>

//                     {/* Second Table */}
//                     <table className="w-full table-auto border border-gray-400 rounded-md">
//                         <tbody>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Deposit</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">6 months rent</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Yearly Escalation</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">5%</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Agreement period</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">5 years</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Lock-in period</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">3 years</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Agreement charges</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">Borne by both parties equally</td>
//                             </tr>
//                             <tr>
//                                 <td className="border px-4 py-2 text-gray-500 text-xs font-semibold">Maintenance:</td>
//                                 <td className="border px-4 py-2 text-lg font-bold">Borne by the licensee</td>
//                             </tr>

//                         </tbody>
//                     </table>
//                 </div>
//             </div>


//             {/* Render ContactForm only if isFormVisible is true */}
//             {isFormVisible && (
//                 <div
//                     className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
//                     onClick={handleCloseForm} // Close on overlay click
//                 >
//                     <div
//                         className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
//                         onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
//                     >
//                         <ContactForm onClose={handleCloseForm} />
//                     </div>
//                 </div>
//             )}




//         </div>

//     );
// };

// export default PropertyDetailInRent;


import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import ContactForm from '../MainBody/ContactForm';
import image from '../assets/RecentProperty.jpg';

const PropertyDetailInRent = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [recentProperties, setRecentProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [showAllDetails, setShowAllDetails] = useState(false);

    const navigate = useNavigate(); // Initialize the navigate hook

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
                const response = await axios.get(`https://cfrecpune.com/cfreproperties/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };

        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                setRecentProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperty();
        fetchProperties();
    }, [id]);

    if (!property) return <p className="text-center text-gray-500 mt-4">Property not found</p>;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    const handlePropertyClick = (propertyId) => {
        navigate(`/property-detail/${propertyId}`);
    };

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

    const displayedDetails = showAllDetails ? allDetails : allDetails.slice(0, 6);

    return (
        <>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-8xl mx-auto">
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
                 
                </div>

                <div className="border border-gray-300 rounded-lg shadow-sm bg-white p-4 max-w-8xl mx-auto mt-5 flex flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-2/3 pr-0 lg:pr-4 mb-4 lg:mb-0">
                        <div ref={overviewRef} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                            <div className="flex flex-wrap lg:flex-nowrap">
                                <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4 lg:mb-0">
                                    <img
                                        src="/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg"
                                        alt="Property"
                                        className="w-full h-72 object-cover rounded-lg shadow-md"
                                    />
                                </div>

                                <div className="w-full lg:w-1/2">
                                    <div className="text-2xl font-bold text-gray-900 mb-4">
                                        ₹7.7 Lac <span className="text-base font-normal">{property.rentPerMonthRsPerSqFt}/sqft</span>
                                        <span className="bg-green-100 text-green-800 text-xs font-semibold ml-4 px-2.5 py-0.5 rounded">Verified on Site</span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700">
                                        <div>
                                            <div className="font-semibold">Built-up Area</div>
                                            <div className="font-bold">{property.buArea} sqft</div>
                                            <div className="text-gray-500">{property.rentPerMonthRsPerSqFt}/sqft</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Carpet Area</div>
                                            <div className="font-bold">{property.carpetArea} sqft</div>
                                            <div className="text-gray-500">{property.rentPerMonthRsPerSqFt}/sqft</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Floor</div>
                                            <div className="font-bold">{property.floor}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Conference Room</div>
                                            <div className="font-bold">{property.conferenceRoom}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Cabin</div>
                                            <div className="font-bold">{property.cabin}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Work Station</div>
                                            <div className="font-bold">{property.ws}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Bike Parking</div>
                                            <div className="font-bold">{property.bikeParking}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Car Parking</div>
                                            <div className="font-bold">{property.carParking}</div>
                                        </div>
                                    </div>

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

                            <div ref={moreDetailsRef} className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-300">
                                <h4 className="text-xl font-semibold mb-6">More Details</h4>
                                <div className="space-y-4 divide-y divide-gray-200">
                                    {displayedDetails.map((detail, index) => (
                                        <div key={index} className="grid grid-cols-3 gap-x-4 py-2">
                                            <span className="font-semibold text-gray-700">{detail.label}</span>
                                            <span className="col-span-2 font-bold text-gray-900">{detail.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    className="mt-4 text-[#d84a48] hover:underline"
                                    onClick={toggleDetails}
                                >
                                    {showAllDetails ? 'Hide More Details' : 'See More Details'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3 px-0 lg:px-4">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Recent Properties</h3>
                        <div className="space-y-4">
                            {recentProperties.slice(0, 5).map((recentProperty, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer"
                                    onClick={() => handlePropertyClick(recentProperty.id)} // Navigate on click
                                >
                                    <img
                                        src={image}
                                        alt={recentProperty.title}
                                        className="w-24 h-24 object-cover rounded-md mr-4"
                                    />
                                    <div>
                                        <div className="text-lg font-bold text-gray-800">{recentProperty.carpetArea} sq.ft</div>
                                        <div className="text-gray-600">Available in {recentProperty.location}</div>
                                        <div className="text-gray-900 font-semibold mt-2">₹{recentProperty.rentPerMonth}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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

export default PropertyDetailInRent;
