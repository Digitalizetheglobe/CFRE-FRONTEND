import React from 'react'
import { useNavigate } from 'react-router-dom';
import primeImage from './primeOpction.png';
import sellImage from './sellProperty.png';


const Card = () =>  {

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigate = () => {
    navigate('/third-card'); // Replace with the actual route to the ThirdCards component
  };

    return (
    <div className="max-w-6xl mx-auto mb-10">
      

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {/* Card 1 with background image */}
        <div
          className="text-white max-sm:px-8 px-12 py-8 w-full rounded bg-cover bg-center bg-[#84A7B7] flex flex-col justify-between"
         style={{
          backgroundImage: `url(${primeImage})`,
          backgroundSize: 'cover', // Ensures the image covers the container
          backgroundPosition: 'center', // Centers the image
      }}
        >
          <div>
            <h2 className="text-xl font-bold">Sell your Commercial Property with Zero Hassle</h2>
            <p className="text-xs leading-relaxed mt-4">
              Our wide network of investors enables us to find the right buyer for you.
            </p>
          </div>
          <button
            type="button"
            onClick={handleNavigate}
            className="mt-6 w-36 px-4 py-3 rounded text-xs tracking-wider border-none outline-none bg-gray-600 hover:bg-gray-700"
          >
            List Your Property
          </button>
        </div>

        {/* Card 2 with background image */}
        <div
          className="text-white max-sm:px-8 px-12 py-8 w-full rounded bg-cover bg-center bg-[#84b7a8] flex flex-col justify-between"
          style={{
            backgroundImage: `url(${sellImage})`,
            backgroundSize: 'cover', // Ensures the image covers the container
            backgroundPosition: 'center', // Centers the image
        }}
        >
          <div>
            <h2 className="text-xl font-bold">Prime Office Spaces that Perfectly Fit Your Requirements</h2>
            <p className="text-xs leading-relaxed mt-4">
              Choose from a curated list of office spaces and find an ideal space for your business operations.
            </p>
          </div>
          <button
  type="button"
  className="mt-6 w-28 px-4 py-3 rounded text-xs tracking-wider border-none outline-none bg-gray-600 hover:bg-gray-700"
>
  View Options
</button>

        </div>
      </div>
    </div>
  );
};
export default Card