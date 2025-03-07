import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Image from '../assets/ABC.jpeg';

const PropertyCardCoworking = ({ property = {}, onEnquire }) => {
    const shareUrl = `https://www.cfrerealty.com/coworking}`;
    const title = property.buildingName || 'Property';
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };
    const imageArray = Array.isArray(property.multiplePropertyImages)
    ? property.multiplePropertyImages
    : property.multiplePropertyImages?.startsWith("[")
    ? JSON.parse(property.multiplePropertyImages)
    : property.multiplePropertyImages?.split(",") || [];

// Get the first image or fallback image bhavik
const firstImage = imageArray.length > 0 ? `https://cfrecpune.com/${imageArray[0].trim()}` : Image;


const handleViewDetails = (pdfUrl) => {
    if (pdfUrl) {
        const fullUrl = `https://cfrecpune.com/${pdfUrl}`;
        window.open(fullUrl, "_blank"); // Opens the PDF in a new tab
    } else {
        alert("PDF not available");
    }
};


// Debugging (optional)
console.log("Parsed Image Array:", imageArray);
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
                {/* <Link to={`/property-detail/${property.slug || property.id || ''}`}> */}
                    {/* <img
                        className="w-full md:h-48 h-36 object-cover"
                        src={property.multiplePropertyImages && property.multiplePropertyImages.length > 0 ? `https://cfrecpune.com/${property.multiplePropertyImages[0]}` : Image}
                        alt={title}
                    /> */}
                    <img className="w-full md:h-48 h-36 object-cover" src={firstImage} alt={title} />

                
            </div>

            <div className="px-6 py-4">
                {/* Property cost */}
                <div className="font-bold md:text-xl text-gray-800">
                 {property.coworkingName}
                </div>
                        <p className='text-gray-600'>Coworking</p>
                        <p className='text-gray-600'>1 - 1000 Seats Available</p>

                {/* Location and city */}
                <div className="text-gray-600 mt-1">{property.location || 'Unknown Location'}, {property.city || 'Unknown City'}</div>
            </div>

            <div className="px-6 pb-4 flex justify-between items-center">
            <div
                        className="bg-[#d84a48] hover:bg-[#c74b4a] text-white font-bold md:py-2 py-1 px-3 md:px-6 rounded transition-colors duration-200 w-4/5 cursor-pointer"
                        onClick={() => handleViewDetails(property.pdf)}
                    >
                        View Details
                    </div>
                <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded-full flex items-center justify-center h-10 w-10"
                    onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default PropertyCardCoworking;
