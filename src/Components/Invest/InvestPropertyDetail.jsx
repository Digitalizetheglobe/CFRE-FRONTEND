import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import ContactForm from '../MainBody/ContactForm';
import defaultImage from '../assets/ABZ.jpg';
import Header from '../Header/header.jsx';
import Image from '../assets/ABC.jpeg';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import Modal from "react-modal";
const InvestPropertyDetail = () => {
    // const { id } = useParams();
    const { slug } = useParams();
    const [property, setProperty] = useState(null);
    const [recentProperties, setRecentProperties] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [showAllDetails, setShowAllDetails] = useState(false);
    const [loading, setLoading] = useState(false); 
    const [selectedImage, setSelectedImage] = useState(null);
    const images = Array.isArray(property?.multiplePropertyImages)
    ? property.multiplePropertyImages
    : Object.values(property?.multiplePropertyImages || {});
  
    const navigate = useNavigate(); // Initialize the navigate hook
   
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
    const openModal = (index) => {
      setSelectedImageIndex(index); // Set the clicked image index before opening modal
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    
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
                const response = await axios.get(`https://cfrecpune.com/cfreproperties/${slug}`);
                const propertyData = response.data;
    
                // Check if the multiplePropertyImages is a string and parse it
                if (typeof propertyData.multiplePropertyImages === 'string') {
                    propertyData.multiplePropertyImages = JSON.parse(propertyData.multiplePropertyImages);
                }
    
                setProperty(propertyData);
            } catch (error) {
                console.error('Error fetching property:', error);
            }
        };
    
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
                // Filter properties based on required conditions
                const filteredProperties = response.data
                    .filter(
                        (property) =>
                            property.availableFor === "Invest" &&
                            property.propertySubtype === "preLeased"
                    )
                    .slice(0, 5); // Get the recent 5 properties
                setRecentProperties(filteredProperties);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
    
        fetchProperty();
        fetchProperties();
    }, [slug]);
    
    

    if (!property) return <p className="text-center text-gray-500 mt-4">Property not found</p>;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    const handlePropertyClick = (propertySlug) => {
        setLoading(true); // Set loading to true
        setTimeout(() => {
            navigate(`/property-detail/${propertySlug}`);
            setLoading(false); // Set loading to false after navigation
        }, 2000); // Delay of 2 seconds (2000 ms)
    };
    
    

// Function to determine if a value is valid
function isValidValue(value) {
    return value !== null && value !== undefined && value !== '';
}

// Format Indian currency style
function formatIndianPrice(price) {
    if (price >= 10000000) {
        return `${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
        return `${(price / 100000).toFixed(2)} Lac`;
    } else {
        return `₹${price.toLocaleString("en-IN")}`;
    }
}


// sonali changes 15 feb .
const allDetails = [
    { label: 'Location', value: property.location ? `${property.location}, ${property.city}` : null },
    { label: 'Property Type', value: property.propertyType },
    { label: 'Unit No.', value: property.unitNo },
    { label: 'Purpose', value: 'Sale' },
    { label: 'Rent per Month', value: property.rentPerMonth ? formatIndianPrice(property.rentPerMonth) : null },
    { label: 'Tenant Name', value: property.Roi },
    { label: 'Floor', value: property.floor },
    { label: 'Car Parking', value: property.carParking },
    { label: 'Bike Parking', value: property.bikeParking },
    { label: 'DG Back Up', value: property.dgBackup },
    { label: 'Rent/SqFt Built Up Area', value: property.rentPerSqFtBuiltUpArea ? formatIndianPrice(property.rentPerSqFtBuiltUpArea): null },
    { label: 'Maintenance/SqFt on Built-up', value: property.maintenancePersqft }, 
    { label: 'Security Deposit', value: property.deposit ? formatIndianPrice(property.deposit) : null },
    { label: 'Yearly Escalation (on rent)', value: property.yearlyEscalation },
    { label: 'Maintenance Per Month', value: 'To be borne by Licensee' },
    { label: 'Agreement Period', value: `${property.agreementPeriod} year` },
    { label: 'Lock-In Period', value: `${property.lockingPeriod} year` },
    { label: 'Rent Start From', value: property.rentStartFrom },
    { label: 'Property Taxes', value: property.propertyTax },
    { label: 'GST on rent and maintenance', value: property.gstOnRent },
    { label: 'Furniture Done by', value: property.furnitureDoneBy },
];

const filteredDetails = allDetails.filter(
    detail => detail.value && detail.value.toLowerCase() !== 'null'
  );
  
  const displayedDetails = showAllDetails ? filteredDetails : filteredDetails.slice(0, 6);
  
// Render logic or UI rendering follows.




    return (
        <>
            <Helmet>
                <title>{property?.seoTitle || 'Top Real Estate Services: Corporate Offices & Retail Spaces for Sale & rent'}</title>
                <meta name="description" content={property.seoDiscription} />
                <meta property="og:description" content={property.seoDiscription} />

            </Helmet>
            <Header />

            {/* Show Loader when loading is true */}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-white" />
                </div>
            )}


            {/* <div className="bg-white p-6 rounded-lg shadow-lg max-w-8xl mx-auto"> */}
            <div className="sticky md:top-28 top-16 bg-white  shadow-md flex justify-center space-x-4 py-2 z-90">
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

            <div className=" rounded-lg  bg-white p-4 max-w-8xl mx-auto mt-5 flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-2/3 pr-0 lg:pr-4 mb-4 lg:mb-0">
                    <div ref={overviewRef} className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
                        <div className="flex flex-wrap lg:flex-nowrap">
                        <div className="w-full lg:w-1/2 pr-0 lg:pr-4 mb-4 lg:mb-0 ">
                       <div className="property-images">
  {property?.multiplePropertyImages?.length > 1 ? (
    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
      {property.multiplePropertyImages.map((image, index) => (
        <div key={index} onClick={() => openModal(index)} className="cursor-pointer">
          <img
            src={`https://cfrecpune.com/${image}`}
            alt={`Property ${index + 1}`}
            className="w-full h-48 md:h-72 object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </Slider>
  ) : property?.multiplePropertyImages?.length === 1 ? (
    <img
      src={`https://cfrecpune.com/${property.multiplePropertyImages[0]}`}
      alt="Property"
      className="w-full h-48 md:h-72 object-cover rounded-lg shadow-md"
    />
  ) : (
    <img
      src={Image} // Provide a default image path
      alt="Property"
      className="w-full h-48 md:h-72 object-cover rounded-lg shadow-md"
    />
  )}
</div>


      {/* Modal for Enlarged Images */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Enlarged Property Images"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          content: {
            width: "700px",
            height: "400px",
            margin: "auto",
            marginTop: "100px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "0",
            overflow: "hidden",
          },
        }}
      >
        {property?.multiplePropertyImages?.length > 0 && (
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            initialSlide={selectedImageIndex} // Move inside return block to avoid issues
          >
            {property.multiplePropertyImages.map((image, index) => (
              <div key={index}>
                <img
                  src={`https://cfrecpune.com/${image}`}
                  alt={`Property ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        )}
        <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-black p-2 rounded-full">
          ✕
        </button>
      </Modal>
    </div>


                            <div className="w-full lg:w-1/2">
                                {/* <div className="md:text-2xl font-bold text-gray-900 mb-4">
                                    {property?.rentPerMonthRsPerSqFt && (
                                        <>
                                            <span className="md:text-base font-normal">{property.rentPerMonthRsPerSqFt}/sqft</span>
                                            <span className="bg-green-100 text-green-800 text-xs font-semibold ml-4 px-2.5 py-0.5 rounded">
                                                Verified on Site
                                            </span>
                                        </>
                                    )}
                                </div> */}

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6  text-xs md:text-sm text-gray-700">
                                    {property?.buArea && (
                                        <div>
                                            <div className="font-semibold">Built-up Area</div>
                                            <div className="font-bold">{property.buArea} sqft</div>
                                            {/* <div className="text-gray-500">{property.rentPerMonthRsPerSqFt}/sqft</div> */}
                                        </div>
                                    )}
                                    {property?.carpetArea && (
                                        <div>
                                            <div className="font-semibold">Carpet Area</div>
                                            <div className="font-bold">{property.carpetArea} sqft</div>
                                            {/* <div className="text-gray-500">{property.rentPerMonthRsPerSqFt}/sqft</div> */}
                                        </div>
                                    )}
                                    {property?.floor && (
                                        <div>
                                            <div className="font-semibold">Floor</div>
                                            <div className="font-bold">{property.floor}</div>
                                        </div>
                                    )}
                                    {property?.conferenceRoom && (
                                        <div>
                                            <div className="font-semibold">Conference Room</div>
                                            <div className="font-bold">{property.conferenceRoom}</div>
                                        </div>
                                    )}
                                    {property?.cabin && (
                                        <div>
                                            <div className="font-semibold">Cabin</div>
                                            <div className="font-bold">{property.cabin}</div>
                                        </div>
                                    )}
                                    {property?.ws && (
                                        <div>
                                            <div className="font-semibold">Work Station</div>
                                            <div className="font-bold">{property.ws}</div>
                                        </div>
                                    )}
                                    {property?.bikeParking && (
                                        <div>
                                            <div className="font-semibold">Bike Parking</div>
                                            <div className="font-bold">{property.bikeParking}</div>
                                        </div>
                                    )}
                                    {property?.carParking && (
                                        <div>
                                            <div className="font-semibold">Car Parking</div>
                                            <div className="font-bold">{property.carParking}</div>
                                        </div>
                                    )}
                                    {property?.rentPerMonth && (
                                        <div>
                                            <div className="font-semibold"> 
                                                {property.availableFor?.toLowerCase() === "rent" ? (
                                                    <>
                                                        Rent
                                                        <div className="font-bold">
                                                            {formatIndianPrice(property.rentPerMonth)}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        Price
                                                        <div className="font-bold">
                                                            {formatIndianPrice(property.basePrice)}
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            
                                        </div>
                                        )}

                                </div>

                                <div className="flex space-x-2 mt-6">
                                    <button
                                        className="bg-[#d84a48] text-white w-full md:py-2 py-1 md:px-4  px-2 rounded-md text-md hover:bg-[#a53938] transition-colors duration-300"
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

                        <div ref={moreDetailsRef} className="mt-8 bg-white p-6 rounded-lg">
                            <h4 className="md:text-xl font-semibold mb-6">More Details</h4>
                            <div className="space-y-4 divide-y divide-gray-200">
                                {displayedDetails.map((detail, index) => (
                                    <div key={index} className="grid grid-cols-3 gap-x-4 py-2">
                                        <span className="font-semibold text-gray-700 text-xs md:text-sm">{detail.label}</span>
                                        <span className="col-span-2 font-bold text-gray-900 text-xs md:text-sm">{detail.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* SEO Description */}
                            {/* <span className="text-xs text-gray-500 block mt-4">{property.seoDiscription}</span> */}

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
    <h3 className="md:text-2xl text-xl font-semibold text-gray-900 mb-4">
        Recent Preleased Properties 
    </h3>
    <div className="space-y-4">
        {recentProperties.map((recentProperty, index) => {
            let imageUrl = defaultImage;
            if (recentProperty.multiplePropertyImages) {
                let images = recentProperty.multiplePropertyImages;
                if (typeof images === 'string') {
                    try {
                        images = JSON.parse(images);
                    } catch (e) {
                        images = [];
                    }
                }
                if (Array.isArray(images) && images.length > 0) {
                    imageUrl = `https://cfrecpune.com/${images[0]}`;
                }
            }
            return (
                <div
                    key={index}
                    className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer"
                    onClick={() => handlePropertyClick(recentProperty.slug)}
                >
                    <img
                        src={imageUrl}
                        alt={recentProperty.title}
                        className="md:w-24 w-20 h-20 md:h-24 object-cover rounded-md mr-4"
                    />
                    <div>
                        <div className="md:text-lg text-sm font-bold text-gray-800">
                            {recentProperty.carpetArea} sq.ft
                        </div>
                        <div className="text-gray-600 md:text-lg text-sm">
                            Available for <b>{recentProperty.availableFor}</b> in <b>{recentProperty.location}</b>
                        </div>
                        <div className="text-gray-900 font-semibold mt-2 md:text-lg text-sm">
                            {formatIndianPrice(property.rentPerMonth)}
                        </div>
                    </div>
                </div>
            );
        })}
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
            {/* </div> */}
        </>
    );
};

export default InvestPropertyDetail;