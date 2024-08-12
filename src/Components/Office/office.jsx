import React from 'react';
import OfficeCard from './OfficeCard';

const Office = () => {
    const officeProperties = [
        // Example properties
        {
            id: 1,
            title: 'Modern Office Space',
            imageUrl: '/Mountain Drive Office, Almaty.jpeg',
            price: '28.00',
            location: 'Andheri East, Mumbai',
            rentalYield: '8.5',
            monthlyRental: '10.00',
        },
        {
            id: 2, // Changed id to avoid duplication
            title: 'Spacious Office Area',
            imageUrl: '/Office space.jpeg',
            price: '25.00',
            location: 'Andheri West, Mumbai',
            rentalYield: '8.5',
            monthlyRental: '10.00',
        },
        // Add more office properties here
    ];

    return (
        <div className="relative overflow-hidden">
            {/* Video background */}
            <div className="absolute inset-0 w-full h-[75vh] overflow-hidden ">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="/Office design video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-6xl text-white">Office Properties</h1>
                </div>
            </div>

            {/* Main content */}
            <div className="relative container mx-auto p-4 mt-[80vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {officeProperties.map(property => (
                        <OfficeCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Office;
