import React, { useState } from 'react';
import Header from '../Header/header.jsx';

const SellYourProperty = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    spaceType: '',
    userDetails: {
      fullName: '',
      email: '',
      phoneNumber: '',
    },
    localityDetails: {
      buildingName: '',
      locality: '',
      city: '',
    },
    propertyDetails: {
      carpetArea: '',
      buildUpArea: '',
      floorNumber: '',
      unitNo: '',
      rentPerMonth: '',
    },
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      userDetails: {
        ...formData.userDetails,
        [name]: value,
      },
    });
  };

  const handleLocalityChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      localityDetails: {
        ...formData.localityDetails,
        [name]: value,
      },
    });
  };

  const handlePropertyChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      propertyDetails: {
        ...formData.propertyDetails,
        [name]: value,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="flex container mx-auto p-6">
        <div className="w-1/4">
          <div className="bg-gray-100 rounded-lg shadow p-4">
            <h2 className="text-lg font-bold mb-4">Overview</h2>
            <div className="mb-2">
              <span className={`block p-2 rounded-lg ${step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                1. Space Type
              </span>
            </div>
            <div className="mb-2">
              <span className={`block p-2 rounded-lg ${step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                2. User Details
              </span>
            </div>
            <div className="mb-2">
              <span className={`block p-2 rounded-lg ${step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                3. Locality Details
              </span>
            </div>
            <div className="mb-2">
              <span className={`block p-2 rounded-lg ${step === 4 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                4. Property Details
              </span>
            </div>
          </div>
        </div>
        <div className="w-3/4 ml-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Sell Your Property</h2>
            {step === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">What type of space are you looking to rent?</h3>
                <div className="flex gap-4 mb-4">
                  <label className="flex items-center border border-gray-300 rounded-lg p-4 cursor-pointer">
                    <input
                      type="radio"
                      name="spaceType"
                      value="Office Space"
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span className="text-lg">Office Space</span>
                  </label>
                  <label className="flex items-center border border-gray-300 rounded-lg p-4 cursor-pointer">
                    <input
                      type="radio"
                      name="spaceType"
                      value="Retail Space"
                      className="hidden"
                      onChange={handleChange}
                    />
                    <span className="text-lg">Retail Space</span>
                  </label>
                </div>
                <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">User Details</h3>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.userDetails.fullName}
                  onChange={handleUserChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.userDetails.email}
                  onChange={handleUserChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.userDetails.phoneNumber}
                  onChange={handleUserChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <div className="flex justify-between">
                  <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Previous</button>
                  <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Locality Details</h3>
                <input
                  type="text"
                  name="buildingName"
                  placeholder="Building Name"
                  value={formData.localityDetails.buildingName}
                  onChange={handleLocalityChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="locality"
                  placeholder="Locality"
                  value={formData.localityDetails.locality}
                  onChange={handleLocalityChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.localityDetails.city}
                  onChange={handleLocalityChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <div className="flex justify-between">
                  <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Previous</button>
                  <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Next</button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Property Details</h3>
                <input
                  type="text"
                  name="carpetArea"
                  placeholder="Carpet Area (sq. ft.)"
                  value={formData.propertyDetails.carpetArea}
                  onChange={handlePropertyChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="buildUpArea"
                  placeholder="Build Up Area (sq. ft.)"
                  value={formData.propertyDetails.buildUpArea}
                  onChange={handlePropertyChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="floorNumber"
                  placeholder="Floor Number"
                  value={formData.propertyDetails.floorNumber}
                  onChange={handlePropertyChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="unitNo"
                  placeholder="Unit No"
                  value={formData.propertyDetails.unitNo}
                  onChange={handlePropertyChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <input
                  type="text"
                  name="rentPerMonth"
                  placeholder="Rent Per Month"
                  value={formData.propertyDetails.rentPerMonth}
                  onChange={handlePropertyChange}
                  className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
                />
                <button onClick={handlePrev} className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Previous</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SellYourProperty;
