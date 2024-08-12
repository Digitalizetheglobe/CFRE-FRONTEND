import React from 'react';
import ShowroomCard from './ShowroomCard';
import Image from './showroom1.jpeg'; // Import your image

const Showroom = () => {
    const showroomProperties = [
        // Example properties
        {
            id: 1,
            title: 'Luxury Showroom Space',
            imageUrl: '/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg',
            price: '22.00',
            location: 'HinjeWadi phase1, Pune',
            rentalYield: '7.5',
            monthlyRental: '8.00',
        },
        {
            id: 2,
            title: 'Luxury Showroom Space',
            imageUrl: '/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg',
            price: '23.00',
            location: 'Baner,Pune',
            rentalYield: '7.5',
            monthlyRental: '8.00',
        },
        // Add more showroom properties here
    ];

    return (
        <div className="container mx-auto p-4">
            <div
                className="relative h-60 bg-cover bg-center"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-4xl text-white">Showroom Properties</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {showroomProperties.map(property => (
                    <ShowroomCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Showroom;
