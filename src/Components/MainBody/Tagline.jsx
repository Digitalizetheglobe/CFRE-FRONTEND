import React, { useState } from 'react';
import Image from './1.png'; // Import the image
import ContactForm from '../MainBody/ContactForm';
import { Button } from 'react-scroll';

const Tagline = () => {

    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };
    return (
        <div
            className="p-8 rounded-lg flex justify-between items-center text-white max-w-8xl mx-auto bg-cover bg-center ml-7 mr-5 mb-10 mt-16"
            style={{
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover', // Ensures the image covers the container
                backgroundPosition: 'center', // Centers the image
                height: '500px', // Increased height
            }}
        >
            <div className="w-2/3"> {/* Adjusted width */}
                <h1 className="text-3xl font-bold mb-6"> {/* Increased text size */}
                    Find The Best Space For Your Business Operations With US !
                </h1>
                <ul className="space-y-3 mb-6"> {/* Increased spacing */}
                    <li className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span> {/* Increased dot size */}
                        Speedy Service

                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span> {/* Increased dot size */}
                        Personalized Support

                    </li>
                    <li className="flex items-center">
                        <span className="inline-block w-3 h-3 bg-white rounded-full mr-3"></span>
                        Strategic Solutions*
                    </li>
                </ul>
                <button
                    onClick={handleButtonClick}
                    className="bg-white text-[#d84a48] font-semibold px-6 py-3 rounded-full inline-flex items-center hover:bg-black"

                > {/* Increased padding */}

                    Enquire Now!
                    {/* <span className="ml-3 bg-[#d84a48] text-white px-3 py-1 rounded-full">FREE!</span> Increased padding */}
                </button>
            </div>


            {isFormVisible && (
                <div
                    className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                    onClick={handleCloseForm} // Close on overlay click
                >
                    <div
                        className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the form from closing it
                    >
                        <ContactForm onClose={handleCloseForm} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tagline;
