import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Image from '../assets/ABC.jpeg';

const PropertyCard = ({ property = {}, onEnquire }) => {
    const shareUrl = `https://cfrecpune.com/cfreproperties/${property.slug || property.id || ''}`;
    const title = property.buildingName || 'Property';
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] transition-transform duration-300 ease-in-out relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className="hover:scale-125 transition-transform duration-200" size={18} />
                </a>
            </div>

            <div className="relative">
                {/* Property image with a link to detailed view */}
                <Link to={`/property-detail/${property.slug || property.id || ''}`}>
                    <img
                        className="w-full md:h-48 h-36 object-cover"
                        src={property.multiplePropertyImages && property.multiplePropertyImages.length > 0 ? `https://cfrecpune.com/${property.multiplePropertyImages[0]}` : Image}
                        alt={title}
                    />
                </Link>
            </div>

            <div className="px-6 py-4">
                {/* Property cost */}
                <div className="font-bold md:text-xl text-gray-800">
                Commercial {property.propertyType} for {property.availableFor} {property.buArea} sq.ft {property.furnishing}
                </div>

                {/* Location and city */}
                <div className="text-gray-600 mt-1">{property.location || 'Unknown Location'}, {property.city || 'Unknown City'}</div>
            </div>

            <div className="px-6 pb-4 flex justify-between items-center">
                <Link
                    to={`/property-detail/${property.slug || property.id || ''}`}
                    className="bg-[#d84a48] hover:bg-[#c74b4a] text-white font-bold md:py-2 py-1 px-3 md:px-6 rounded transition-colors duration-200 w-4/5"
                    onClick={onEnquire} // Uncomment if you need onEnquire
                >
                    View Details
                </Link>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded-full flex items-center justify-center h-10 w-10"
                    onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
