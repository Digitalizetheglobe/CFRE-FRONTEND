import React, { useState, useEffect } from 'react';
import image from './disclaimerImage.jpg'; // Import the image
import Logo from '../Header/cfre-logo.png';

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  // Show popup after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Ensures 10 digits
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!phone) {
      validationErrors.phone = 'Phone number is required';
    } else if (!validatePhone(phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(validationErrors);

    // If no errors, form can be submitted
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic
      alert('Form submitted successfully');
      handleClosePopup(); // Close the popup after submission
    }
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg overflow-hidden relative flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img src={image} alt="Commercial Real Estate" className="h-full w-full object-cover" />
            </div>

            {/* Disclaimer and Form Section */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              {/* Header Section */}
              <div className="text-black mb-4">
                <div className="flex items-center space-x-4 mb-3">
                  <img src={Logo} alt="Logo" className="h-10 w-10" />
                  <h2 className="text-xl font-bold">Get In Touch</h2>
                </div>
                <p className="text-base text-gray-600">
                  We’d love to hear from you. Please fill out the form below, and we'll connect with you.
                </p>
              </div>

              {/* Form Section */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d84a48] transition-all duration-300`}
                  />
                  <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">👤</span>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d84a48] transition-all duration-300`}
                  />
                  <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">✉️</span>
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#d84a48] transition-all duration-300`}
                  />
                  <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">📞</span>
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="w-full bg-[#d84a48] hover:bg-[#b93b3b] text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
                  >
                    Get In Touch
                  </button>
                  <a
                    href="tel:+918149977661" // Replace with your phone number
                    className="bg-gray-200 text-gray-600 hover:bg-gray-300 py-3 px-4 rounded-lg text-xl font-bold flex items-center justify-center"
                  >
                    📞
                  </a>
                </div>
              </form>

              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                onClick={handleClosePopup}
              >
                &times; {/* This is the cross symbol */}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisclaimerPopup;
