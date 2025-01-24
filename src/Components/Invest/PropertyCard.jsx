import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'; // Importing Share icon from react-icons\
import { Link } from 'react-router-dom'; // Import Link for navigation
import Image from '../assets/ABC.jpeg'

const PropertyCard = ({ property, onEnquire }) => {
    const shareUrl = `https://cfrecpune.com/cfreproperties/${property.slug}`;
    const title = property.title;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-400  hover:scale-[1.02] relative">
            {/* Share button */}
            <div className="absolute top-0 right-0 z-10 p-2 ">
                <a
                    href={`https://wa.me/?text=${encodeURIComponent(title + ' ' + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  text-white font-normal py-2 px-2 rounded flex items-center"
                >
                    <FaShareAlt className=' hover:scale-125' size={18} />
                </a>
            </div>
        
            <Link to={`/property-detail-invest/${property.slug}`} className="relative">
            <img
                className="w-full md:h-48 h-32 object-cover"
                src={
                    property.multiplePropertyImages && property.multiplePropertyImages.length > 0
                    ? `https://cfrecpune.com/${property.multiplePropertyImages[0]}`
                    : Image
                }
                alt="Property"
                />

                
            </Link>

            <Link to={`/property-detail-invest/${property.slug}`}  className="px-6 py-4">
                {/* Property cost */}
                <div className="font-bold md:text-xl text-gray-800 ml-4"> {property.aboutProperty} % ROI | 
                Commercial {property.propertyType} for {property.availableFor} {property.buArea}sq.ft 
                    </div>

                <div className="text-gray-600 md:mt-1 ml-4">{property.location}, {property.city}</div>
            </Link>


            <div className="px-6 md:pt-1 pb-4 flex justify-between items-center">
                <Link className="bg-[#d84a48] hover:bg-black-700 text-white font-bold py-2  px-8 rounded w-4/5"
                    to={`/property-detail-invest/${property.slug}`}
                >
                    View Details
                </Link>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded flex items-center h-10 w-10">
                    <FaWhatsapp className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
