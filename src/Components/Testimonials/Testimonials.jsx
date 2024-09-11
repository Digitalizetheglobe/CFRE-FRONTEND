import React from 'react';
import Image from './How to Get Started As A Commercial Real Estate Broker in 2023.jpeg';
import BackgroundImage from './Background1.jpg';

function Testimonials() {
    return (
        <div
            className="flex flex-col lg:flex-row items-center lg:items-center justify-between max-w-7xl mx-auto p-8 shadow-lg rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }} // Set background image
        >
            {/* Image Section */}
            <div className="w-full lg:w-1/3  lg:mb-0">
                <img
                    src={Image}
                    alt="Person"
                    className="w-full h-[500px] object-cover rounded-lg shadow-md" // Custom height for taller image
                />
            </div>

            {/* Testimonial Section */}
            <div className="w-full lg:w-2/3 lg:pl-12 flex flex-col justify-center bg-opacity-90 text-white rounded-lg p-8"> 
                <div className="flex items-center mb-4">
                    <p className="text-lg lg:text-xl font-light leading-relaxed text-white">
                        Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.
                    </p>
                </div>

                {/* Person's Info */}
                <div className="mt-6">
                    <p className="font-semibold text-lg text-white">Judith Black</p>
                    <p className="text-gray-400">CEO of Workcation</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
