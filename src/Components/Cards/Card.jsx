import React from 'react';
import { useNavigate } from 'react-router-dom';
import primeImage from './primeOpction.png';
import sellImage from './sellProperty.png';

const Card = () => {

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigate = () => {
    navigate('/third-card'); // Replace with the actual route to the ThirdCards component
  };

  return (
    <div className="max-w-8xl mx-auto mb-12 ml-10 mr-5"> {/* Increased max width and margin */}
      <div className="grid md:grid-cols-2 gap-8 mt-8"> {/* Increased gap and margin */}
        {/* Card 1 with background image */}
        <div
          className="text-white p-16 w-full rounded-lg bg-cover bg-center bg-[#84A7B7] flex flex-col justify-between"
          style={{
            backgroundImage: `url(${primeImage})`,
            backgroundSize: 'cover', // Ensures the image covers the container
            backgroundPosition: 'center', // Centers the image
            height: '400px', // Increased height
          }}
        >
          <div>
            <h2 className="text-3xl font-bold">Sell your Commercial Property with Zero Hassle</h2> {/* Increased font size */}
            <p className="text-sm leading-relaxed mt-6">
              Our wide network of investors enables us to find the right buyer for you.
            </p>
          </div>
          <button
            type="button"
            onClick={handleNavigate}
            className="mt-8 w-48 px-6 py-4 rounded-lg text-sm tracking-wider border-none outline-none bg-gray-600 hover:bg-gray-700"
          >
            List Your Property
          </button>
        </div>

        {/* Card 2 with background image */}
        <div
          className="text-white p-16 w-full rounded-lg bg-cover bg-center bg-[#84b7a8] flex flex-col justify-between"
          style={{
            backgroundImage: `url(${sellImage})`,
            backgroundSize: 'cover', // Ensures the image covers the container
            backgroundPosition: 'center', // Centers the image
            height: '400px', // Increased height
          }}
        >
          <div>
            <h2 className="text-3xl font-bold">Prime Office Spaces that Perfectly Fit Your Requirements</h2> {/* Increased font size */}
            <p className="text-sm leading-relaxed mt-6">
              Choose from a curated list of office spaces and find an ideal space for your business operations.
            </p>
          </div>
          <button
            type="button"
            className="mt-8 w-40 px-6 py-4 rounded-lg text-sm tracking-wider border-none outline-none bg-gray-600 hover:bg-gray-700"
          >
            View Options
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
