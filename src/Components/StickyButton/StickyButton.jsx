import React from 'react';
import { Link } from 'react-router-dom';

function StickyButton() {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden md:block">
      <Link
        to="/emiCalculator"
        className="bg-black text-white text-xs px-4 py-2  rounded-lg hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg  transition-colors duration-300 ease-in-out"
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright',  animation: 'pulse 1s linear infinite',  }}
      >
        EMICalculator
      </Link>
    </div>
  );
}

export default StickyButton;
