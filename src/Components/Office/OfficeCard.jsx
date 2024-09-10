import React from 'react';
import { FaWhatsapp, FaShareAlt } from 'react-icons/fa'; // Importing Share icon from react-icons
import Image from './Office space image.jpg';

const OfficeCard = ({ property, onEnquireClick }) => {
    const shareUrl = `https://cfrecpune.com/cfreproperties/${property.id}`;
    const title = property.title;

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };


    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-300 hover:scale-[1.02] relative transition-transform duration-300">
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

            <div className="relative">
                <img className="w-full h-48 object-cover" src={Image} alt="Office" />
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl">Commercial Office Space for {property.availableFor} {property.buArea} Sq.Ft {property.furnishing} </div>
                <div className='grid grid-flow-col'>
                    <p className="text-gray-700 text-base">
                        {property.location}
                    </p>
                </div>
            </div>

            <div className="px-6 flex text-center items-center">
                <p className="text-gray-800 text-base ml-10">
                    Monthly rental: ₹{property.rentPerMonth}
                </p>
            </div>
            <div className="px-6 pt-1 pb-2 flex justify-between items-center">
                <button 
                    className="bg-[#d84a48] hover:bg-[#a33735] text-white font-bold py-2 px-8 rounded w-4/5"
                    onClick={onEnquireClick}
                >
                    Enquire
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-1 rounded flex items-center h-10 w-10"
                 onClick={handleWhatsAppClick}>
                    <FaWhatsapp className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default OfficeCard;
