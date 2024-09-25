import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FaPhoneAlt, FaWhatsapp, FaShareAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "../assets/ABC.jpeg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

function PropertyCardInvest({ property }) {
    const navigate = useNavigate();

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/918149977661", "_blank");
    };

    const handlePhoneClick = () => {
        window.location.href = "tel:+918149977661";
    };

    const handleImageClick = () => {
        navigate(`/property-detail/${property.slug}`); // Update the path as per the routing for investment properties
    };

    const imageUrl = property.multiplePropertyImages && property.multiplePropertyImages.length > 0
        ? `https://cfrecpune.com/${property.multiplePropertyImages[0]}`
        : Image;

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                        "Check out this investment property: " + (property.image || Image)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className="hover:scale-125" size={18} />
                </a>
            </div>

            <div className="relative">
                <img className="w-full h-52 object-cover" 
                src={imageUrl} 
                alt="Property"
                onClick={handleImageClick} />
            </div>

            <div className="px-6 py-4">
                <h3 className="font-bold text-base">Investment Property</h3>
                <div className="text-gray-700 text-sm">
                    <p className="mb-1 flex justify-between">
                        Property Type
                        <span className="font-semibold">{property.propertyType}</span>
                    </p>
                    <p className="mb-1 flex justify-between">
                        Location
                        <span className="font-semibold">{property.location}</span>
                    </p>
                    <p className="mb-1 flex justify-between">
                        Building Type
                        <span className="font-semibold">
                            {property.buildingType} A Grade
                        </span>
                    </p>
                    <p className="mb-1 flex justify-between">
                        Carpet Area
                        <span className="font-semibold">{property.carpetArea}</span>
                    </p>
                </div>
            </div>

            <div className="px-6 pb-2 flex justify-between items-center">
                <button
                    onClick={handleImageClick}
                    className="bg-[#d84a48] hover:bg-[#b03b3a] text-white font-bold py-1 px-4 rounded w-full"
                >
                    Know More
                </button>
                <div className="ml-2 flex space-x-2">
                    <button
                        onClick={handleWhatsAppClick}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded flex items-center"
                    >
                        <FaWhatsapp className="ml-1" />
                    </button>
                    <button
                        onClick={handlePhoneClick}
                        className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-2 rounded flex items-center"
                    >
                        <FaPhoneAlt className="ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function PropertyCardInvestList() {
    const [properties, setProperties] = useState([]);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get(
                    "https://cfrecpune.com/cfreproperties/"
                );
                console.log("Fetched properties:", response.data); // Debugging
                
                // Sort the properties by the date field (createdAt or updatedAt) in descending order
                const sortedProperties = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setProperties(sortedProperties); // Set sorted properties
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);

    const handleSearch = () => {
        navigate("/ExploreRentProperty");
    };

    return (
        <div className="my-8 mx-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="md:text-4xl font-semibold mx-2">
                    Exclusive Properties in India
                </h1>
                <button
                    className="md:text-xl font-semibold text-[#d84a48] hover:text-[#b03b3a] transform hover:scale-105 transition duration-300 ease-in-out md:mr-14 mr-18"
                    onClick={handleSearch}
                >
                    Explore Properties
                </button>
            </div>

            <Swiper
                spaceBetween={30} // Space between each card
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // 1 card for small screens
                    },
                    768: {
                        slidesPerView: 2, // 2 cards for medium screens
                    },
                    1024: {
                        slidesPerView: 3, // 3 cards for larger screens
                    },
                    1280: {
                        slidesPerView: 3, // 3 cards for extra large screens
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {properties.length > 0 ? (
                    properties.map((property) => (
                        <SwiperSlide key={property.id}>
                            <div
                                onMouseEnter={() => swiperRef.current.autoplay.stop()}
                                onMouseLeave={() => swiperRef.current.autoplay.start()}
                            >
                                <PropertyCardInvest property={property} />
                            </div>
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No properties available</p> // Message when there are no properties
                )}
            </Swiper>
        </div>
    );
}

export default PropertyCardInvestList;
