import React from 'react';
// import BackgroundImage from './CFRERealtyTagline.jpg';

function Tagline1() {
  return (
    <div
      style={{
        // backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex flex-col  lg:flex-row items-center lg:items-center justify-between max-w-7xl max-h-72 mx-auto p-8 shadow-lg rounded-lg mt-10"
    >
      <div className="max-lg:order-1 max-lg:text-center sm:p-12 p-4">
        <h2 className="text-black lg:text-5xl text-3xl font-bold lg:!leading-[56px]">
          Elevate Your Experience with Modern Elegance
        </h2>
        <p className="text-gray-800 mt-6 text-xl leading-relaxed">
          Unlock Your Business Potential with Premium Offices
        </p>
      </div>
    </div>
  );
}

export default Tagline1;
