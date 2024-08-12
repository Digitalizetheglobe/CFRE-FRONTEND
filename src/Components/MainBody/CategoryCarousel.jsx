import React from 'react';
import Office from './office.jpg';
import { Link } from 'react-router-dom';
import Showroom from './showroom.jpg';

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
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105">
        <img src={category.imageUrl} alt={category.name} className="w-full h-56 object-cover" />
        <div className="p-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
            <p className="text-gray-600">{category.description}</p>
        </div>
    </div>
    </Link>
);

const CategoryDisplay = () => {
    return (

        <div className="w-full max-w-5xl mx-auto py-10 px-5">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Preleased Commercial Properties</h2>
            <p className="text-lg text-gray-700 mb-10 text-center">
                Explore our top categories for smart investments in pre-leased properties.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDisplay;
