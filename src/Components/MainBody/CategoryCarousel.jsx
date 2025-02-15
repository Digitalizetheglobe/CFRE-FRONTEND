import React from "react";
import Office from "../assets/download (2).jpeg";
import { Link } from "react-router-dom";
import Showroom from "./showroom1.jpg";

const categories = [
  {
    name: "Offices",
    description: "Invest in pre-leased offices",
    imageUrl: Office,
    path: "/preleased",
  },
  {
    name: "Showrooms",
    description: "Invest in pre-leased showrooms",
    imageUrl: Showroom,
    path: "/preleased",
  },
];

const CategoryCard = ({ category }) => (
  <Link to={category.path} className="block">
    <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 max-w-xl mx-auto">
      <img
        src={category.imageUrl}
        alt={category.name}
        className="md:w-full md:h-72 w-full h-32 object-cover"
      />
      <div className="p-6">
        <h3 className="md:text-2xl font-semibold text-gray-800 mb-1">
          {category.name}
        </h3>
        <p className="text-gray-600 md:text-base">{category.description}</p>
      </div>
    </div>
  </Link>
);

const CategoryDisplay = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg md:text-3xl font-bold text-gray-900 mb-4 text-center">
        Preleased Commercial Properties
      </h2>
      <p className="text-xs md:text-lg text-gray-700 mb-8 text-center">
        Explore our top categories for Smart Investments in Properties.
      </p>
      <div className="flex justify-center">
        {/* Flexbox to center-align the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDisplay;
