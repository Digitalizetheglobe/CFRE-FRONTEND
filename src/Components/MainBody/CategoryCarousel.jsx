import React from 'react';
import Office from '../assets/download (2).jpeg';
import { Link } from 'react-router-dom';
import Showroom from './showroom1.jpg';

const categories = [
    {
        name: 'Offices',
        description: 'Invest/Rent in pre-leased offices',
        imageUrl: Office,
        path: '/office'
    },
    {
        name: 'Showrooms',
        description: 'Invest/Rent in pre-leased showrooms',
        imageUrl: Showroom,
        path: '/Showroom'
    }
];

const CategoryCard = ({ category }) => (
    <Link to={category.path} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 max-w-xl mx-auto"> {/* Increased width */}
            <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-72 object-cover"
            />
            <div className="p-6"> {/* Increased padding */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{category.name}</h3> {/* Increased font size */}
                <p className="text-gray-600 text-base">{category.description}</p> {/* Increased font size */}
            </div>
        </div>
    </Link>
);

const CategoryDisplay = () => {
    return (
        <div className="w-full max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            {/* Adjusted padding and centered flex layout */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
                Preleased Commercial Properties
            </h2>
            {/* Text is centered for all screen sizes */}
            <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">
                Explore our top categories for Smart Investments in Properties.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center">
                {/* Responsive grid layout, centered for medium and large screens */}
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </div>

    );
};

export default CategoryDisplay;
