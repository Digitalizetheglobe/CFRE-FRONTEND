import React from 'react';
import { useNavigate } from 'react-router-dom';
import primeImage from './img3.png';
import sellImage from './img2.png';
import ContactForm from '../MainBody/ContactForm';
import  { useState } from 'react';

const Card = () => {

  const navigate = useNavigate(); // Initialize the navigate hook
  const [isFormVisible, setFormVisible] = useState(false);

  const handleNavigate = () => {
    navigate('/third-card'); // Replace with the actual route to the ThirdCards component
  };

  const handleButtonClick = () => {
    setFormVisible(true);
};

const handleCloseForm = () => {
    setFormVisible(false);
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
            <h2 className="text-3xl font-bold">"List, sell, relax – we’ll handle the rest."</h2> {/* Increased font size */}
            {/* <p className="text-sm leading-relaxed mt-6">
              
"Our extensive network of investors connects you with the perfect buyer for your property."
            </p> */}
          </div>
          <button
            type="button"
            onClick={handleNavigate}
            className="mt-8 w-48 px-6 py-4 rounded-lg text-sm tracking-wider border-none outline-none bg-[#d84a48] hover:bg-[#ca3c39]"
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
            <h2 className="text-3xl font-bold">Office Spaces That Work for You</h2> {/* Increased font size */}
            <p className="text-lg leading-relaxed mt-6">
            "Explore a curated selection of premium office spaces tailored to elevate your business operations."
            </p>
          </div>
          <button
            type="button"
            className="mt-8 w-40 px-6 py-4 rounded-lg text-sm tracking-wider border-none outline-none bg-[#d84a48] hover:bg-[#ca3c39]"
            onClick={handleButtonClick}
          >
            Contact Us
          </button>
        </div>
      </div>
      {isFormVisible && (
                    <div
                        className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                        onClick={handleCloseForm}
                    >
                        <div
                            className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ContactForm onClose={handleCloseForm} />
                        </div>
                    </div>
                )}
    </div>
  );
};

export default Card;
