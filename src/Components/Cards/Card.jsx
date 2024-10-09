import React from "react";
import { useNavigate } from "react-router-dom";
import primeImage from "../assets/out.png";
import sellImage from "../assets/out1.png";
import ContactForm from "../MainBody/ContactForm";
import { useState } from "react";
import Header from "../Header/header.jsx";
import cfre from "../assets/icons/cfre-img.jpg";
import cfre1 from "../assets/icons/cfre-img1.jpg";

const Card = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [isFormVisible, setFormVisible] = useState(false);

  const handleNavigate = () => {
    navigate("/third-card"); // Replace with the actual route to the ThirdCards component
  };

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      {/* new  */}
      <div className="max-w-8xl mx-auto mb-12 ml-10 mr-5">
        {" "}
        {/* Increased max width and margin */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {" "}
          {/* Increased gap and margin */}
          {/* Card 1 with background image */}
          <div
            className="text-white p-10 md:p-16 w-full rounded-lg bg-cover bg-center bg-[#84A7B7] flex flex-col justify-between"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cfre})`,
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center", // Centers the image
              height: "370px", // Increased height
            }}
          >
            <div>
              <h2 className="md:text-3xl text-lg font-bold">
                List, sell, relax – we’ll handle the rest.
              </h2>{" "}
              {/* Increased font size */}
              <p className="leading-relaxed mt-2 text-xs md:text-xl">
                Maximize Exposure, Minimize Effort – List Now!
              </p>
            </div>
            <button
              type="button"
              onClick={handleNavigate}
              className="md:mt-8 md:w-48 w-auto px-6 md:py-4 py-2 rounded-lg text-xs border-none outline-none bg-[#d84a48] hover:bg-[#ca3c39]"
            >
              List Your Property
            </button>
          </div>
          {/* Card 2 with background image */}
          <div
            className="text-white p-10 md:p-16 w-full rounded-lg bg-cover bg-center bg-[#84b7a8] flex flex-col justify-between"
            style={{
              backgroundImage:  `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cfre1})`,
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundPosition: "center", // Centers the image
              height: "370px", // Increased height
            }}
          >
            <div>
              <h2 className="md:text-3xl text-lg font-bold ">
                Office Spaces That Work for You
              </h2>{" "}
              {/* Increased font size */}
              <p className="text-xs leading-relaxed mt-6 md:text-xl">
                Explore a curated selection of premium office spaces tailored to
                elevate your business operations.
              </p>
            </div>
            <button
              type="button"
              className="md:mt-8 md:w-40 w-auto md:px-6 md:py-4 py-2 rounded-lg text-sm border-none outline-none bg-[#d84a48] hover:bg-[#ca3c39]"
              onClick={handleButtonClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        {isFormVisible && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseForm}
          >
            <div
              className="relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ContactForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
