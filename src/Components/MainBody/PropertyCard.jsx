import React, { useRef } from 'react';
// import ContactForm from './ContactForm';
import { FaPhoneAlt } from 'react-icons/fa';
// import { BsWhatsapp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from '../assets/ABC.jpeg'; // Ensure you import your image correctly
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';

// Sample property data
const properties = [
    {
        id: 1,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 2,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 3,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 4,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 5,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 1,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 2,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 3,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 4,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    {
        id: 5,
        image: Image,
        propertyType: 'Office Space',
        location: 'Baner Pune',
        buildingType: 'A Grade',
        area: '1180 Sq.Ft',
        rent: '--',
        roi: '5.5%'
    },
    // Add more properties here
];

function PropertyCard({ property }) {

    const navigate = useNavigate(); // Initialize useNavigate



    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = 'tel:+918149977661';
    };

    const handleImageClick = () => {
        navigate(`/property/${property.id}`); // Navigate to the property detail page
    };

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
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
                <img className="w-full h-36 object-cover" src={property.image} alt="Property" />
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
                        Building Type
                        <span className="font-semibold">{property.buildingType}</span>
                    </p>
                    <p className="mb-1 flex justify-between">
                        Area
                        <span className="font-semibold">{property.area}</span>
                    </p>
                </div>
            </div>

            <div className="px-6  pb-2 flex justify-between items-center">
                <button
                    onClick={handleImageClick}
                    className="bg-[#d84a48]  hover:bg-[#b03b3a] text-white font-bold py-1 px-4 rounded w-full">
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
    const handleFormSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Handle form submission, e.g., send data to an API
    };

    // Ref to access the Swiper instance
    const swiperRef = useRef(null);

    return (
        <div className='my-8 mx-12 '>
            <div className="flex justify-between items-center mb-5">
                <h1 className="md:text-xl font-semibold mx-2">
                    Trending Rent Properties
                </h1>
                <button className="md:text-xl font-semibold text-[#d84a48] hover:text-[#b03b3a] transform hover:scale-105 transition duration-300 ease-in-out">
                    Explore Properties
                </button>

            </div>


            <Swiper
                spaceBetween={30}
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
                                onFormSubmit={handleFormSubmit}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default PropertyList;