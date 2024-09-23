import React from 'react';
import { Link } from 'react-router-dom';

function StickyButton() {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 hidden md:block">
      <Link
        to="/emiCalculator"
        className="bg-[#d84a48] text-white  text-base px-2 py-6  hover:bg-black hover:text-white  hover:scale-105  hover:shadow-xl transition-all duration-300 ease-in-out"
        style={{ writingMode: 'vertical-rl', animation: 'pulse 1s linear infinite' }}
      >
        EMI Calculator
      </Link>
    </div>
  );
}

export default StickyButton;
