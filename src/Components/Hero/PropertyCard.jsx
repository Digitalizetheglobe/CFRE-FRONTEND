import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OfficeImage from './Office space.jpeg';

const PropertyCard = ({ property }) => {
    const shareUrl = `https://www.cfrerealty.com/property-detail/${property.slug}`;
    const title = property.title;

    // Handle multiplePropertyImages - Convert string to array if necessary
    let images = [];
    if (typeof property.multiplePropertyImages === 'string') {
        try {
            images = JSON.parse(property.multiplePropertyImages.replace(/\\/g, '')); // Remove unnecessary backslashes
        } catch (error) {
            console.error("Error parsing multiplePropertyImages:", error);
            images = [];
        }
    } else if (Array.isArray(property.multiplePropertyImages)) {
        images = property.multiplePropertyImages;
    }

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg border border-gray-400 hover:scale-[1.02] relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className='hover:scale-125' size={18} />
                </a>
            </div>

            {/* Image with link to property detail */}
            <Link to={`/property-detail/${property.slug}`} className="relative block">
                <img
                    className="w-full h-48 object-cover cursor-pointer"
                    src={images.length > 0 ? `https://cfrecpune.com/${images[0]}` : OfficeImage}
                    alt="Property"
                    onError={(e) => { e.target.src = OfficeImage; }} // Fallback to default image on error
                />
            </Link>

            <div className="px-4 py-2">
                <Link to={`/property-detail/${property.slug}`} className="text-sm font-bold text-gray-800 mt-1 block hover:text-[#d84a48] transition-colors duration-300">
                    Commercial Office Space for {property.availableFor} {property.buArea} Sq.Ft {property.furnishing}
                </Link>

                <div className="text-gray-800 text-xs mt-1">{property.location}, {property.city}</div>
                <div className="text-gray-800 text-xs mt-1">Built Up Area: {property.buArea} Sq.Ft</div>
                <div className="text-gray-800 text-xs mt-1">Carpet Area: {property.carpetArea} Sq.Ft</div>
            </div>

            <div className="px-4 pt-1 pb-2 flex justify-between items-center">
                <Link
                    to={`/property-detail/${property.slug}`}
                    className="bg-[#d84a48] hover:bg-[#a33735] text-white font-bold py-1 px-4 rounded text-xs flex-grow text-center"
                >
                    Enquire
                </Link>
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-800 text-white font-bold py-1 px-2 rounded flex items-center h-6 w-8 text-xs ml-2"
                >
                    <FaWhatsapp className="ml-0.5" size={14} />
                </a>
            </div>
        </div>
    );
};

export default PropertyCard;
