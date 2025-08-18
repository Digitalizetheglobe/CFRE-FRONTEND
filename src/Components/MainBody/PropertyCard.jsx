import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaPhoneAlt, FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from '../assets/ABC.jpeg'; // Your previously imported image
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function PropertyCard({ property }) {
    const navigate = useNavigate();

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+918149977661';
    };

    const handleImageClick = () => {
        navigate(`/property-detail/${property.id}`);
    };

 const handleSearch = () => {
    navigate('/exploreproperty'); 
};
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.01] relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent('Check out this property: ' + property.image)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className="hover:scale-125" size={18} />
                </a>
            </div>

            <div className="relative">
                <img className="w-full h-52 object-cover" 
                src={property.image || Image} 
                alt="Property" />
            </div>

            <div className="px-6 py-4">
                <h3 className="font-bold text-base ">Prelease Property</h3>
                <div className="text-gray-700 text-sm ">
                    <p className="mb-1 flex justify-between">
                        Property Type
                        <span className="font-semibold">{property.propertyType}</span>
                    </p>
                    <p className="mb-1 flex justify-between">
                        Location
                        <span className="font-semibold">{property.location}</span>
                    </p>
                    <p className="mb-1 flex justify-between">
                        Builtup Area
                        <span className="font-semibold">{property.buArea}</span>
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
                    className="bg-[#d84a48] hover:bg-[#b03b3a] text-white font-bold py-1 px-4 rounded w-full">
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

function PropertyList() {
    const [properties, setProperties] = useState([]);
    const swiperRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://api.cfrerealty.com/cfreproperties/');
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };
        fetchProperties();
    }, []);

    const handleSearch = () => {
        navigate('/exploreproperty');
    };

    return (
        <div className='my-8 h-full mx-12 '>
            <div className="flex justify-between items-center mb-5 mr-0">
                <h1 className="md:text-4xl font-semibold mx-2 mb-2">
                    Office Spaces For Your Business
                </h1>
                <button
                    className="md:text-xl font-semibold text-[#d84a48] hover:text-[#b03b3a] transform hover:scale-105 transition duration-300 ease-in-out mr-14"
                    // onClick={handleSearch}
                    onClick={handleSearch}
                >
                    Explore Properties
                </button>
            </div>

            <Swiper
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 3,
                    },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {properties.map(property => (
                    <SwiperSlide key={property.id}>
                        <div
                            onMouseEnter={() => swiperRef.current.autoplay.stop()}
                            onMouseLeave={() => swiperRef.current.autoplay.start()}
                        >
                            <PropertyCard
                                property={property}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PropertyList;
