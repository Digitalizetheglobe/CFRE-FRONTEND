import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'; // Importing Share icon from react-icons
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import Image from './Office space image.jpg';

const OfficeCard = ({ property, onEnquireClick }) => {
    // Filter logic
    if (
        property.availableFor !== "Invest" || 
        property.propertyType !== "OfficeSpace" || 
        property.propertySubtype !== "preLeased"
    ) {
        return null; // Skip rendering this property
    }

    const shareUrl = `https://cfrecpune.com/cfreproperties/${property.slug}`;
    const title = property.title;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 hover:scale-[1.02] relative transition-transform duration-300">
            {/* Share button */}
            <div className="absolute top-0 right-2 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className='hover:scale-125' size={14} />
                </a>
            </div>

            <div className="relative">
                <Link to={`/property-detail/${property.slug}`}> {/* Link to the property details page */}
                    <img
                        className="w-full md:h-48 h-40 object-cover"
                        src={property.multiplePropertyImages.length > 0 ? `https://cfrecpune.com/${property.multiplePropertyImages[0]}` : Image}
                        alt="Office"
                    />
                </Link>
            </div>

            <div className="px-6 py-4">
                <Link to={`/property-detail/${property.slug}`}> {/* Link to the property details page */}
                    <div className="font-bold md:text-xl cursor-pointer"> {/* Added cursor pointer for better UX */}
                        Commercial Office Space for {property.availableFor} {property.buArea} Sq.Ft {property.furnishing}
                    </div>
                </Link>
                <div className='grid grid-flow-col'>
                    <p className="text-gray-700 text-base">
                        {property.location}
                    </p>
                </div>
            </div>

            <div className="px-6 pt-1 pb-2 flex justify-between items-center">
                <button 
                    className="bg-[#d84a48] hover:bg-[#a33735] text-white font-bold md:py-2 py-1 px-4 md:px-8 rounded w-4/5"
                    onClick={onEnquireClick}
                >
                    Enquire
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold md:py-2 md:px-1 rounded flex items-center md:h-10 h-8 w-8 md:w-10"
                 onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default OfficeCard;
