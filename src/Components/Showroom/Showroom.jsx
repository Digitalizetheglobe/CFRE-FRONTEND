import React from 'react';
import ShowroomCard from './ShowroomCard';
import ShowroomVideo from './showroomvideo.mp4'; // Import your video file

const Showroom = () => {
    const showroomProperties = [
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
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 w-full h-[75vh] overflow-hidden ">
                <video
                    className="w-full h-full object-cover"
                    src={ShowroomVideo}
                    autoPlay
                    loop
                    muted
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h1 className="text-6xl text-white">Showroom Properties</h1>
                </div>
            </div>

            {/* Main content */}
            <div className="relative container mx-auto p-4 mt-[80vh]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {showroomProperties.map(property => (
                        <ShowroomCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Showroom;
