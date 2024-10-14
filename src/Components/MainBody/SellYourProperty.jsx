import React, { useState, useEffect } from 'react';
import Header from '../Header/header.jsx';
import axios from 'axios';
import { FaBuilding, FaStore, FaBriefcase, FaUser, FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';

const SellYourProperty = () => {
  const [step, setStep] = useState(1);
  const [selectedSpaceType, setSelectedSpaceType] = useState('');
  const [formData, setFormData] = useState({
    type_of_space: '',
    userDetails: {
      full_name: '',
      email: '',
      phone_number: '',
    },
    localityDetails: {
      building_name: '',
      locality: '',
      city: '',
    },
    propertyDetails: {
      carpet_area: '',
      build_up_area: '',
      floor_number: '',
      unit_no: '',
      rent_per_month: '',
    },
  });

  const [stepsCompleted, setStepsCompleted] = useState({
    overview: false,
    userDetails: false,
    localityDetails: false,
    propertyDetails: false,
  });

  // Function to check if each step is completed
  const validateSteps = () => {
    setStepsCompleted({
      overview: formData.type_of_space !== '',
      userDetails:
        formData.userDetails.full_name !== '' &&
        formData.userDetails.email !== '' &&
        formData.userDetails.phone_number !== '',
      localityDetails:
        formData.localityDetails.building_name !== '' &&
        formData.localityDetails.locality !== '' &&
        formData.localityDetails.city !== '',
      propertyDetails:
        formData.propertyDetails.carpet_area !== '' &&
        formData.propertyDetails.build_up_area !== '' &&
        formData.propertyDetails.floor_number !== '' &&
        formData.propertyDetails.unit_no !== '' &&
        formData.propertyDetails.rent_per_month !== '',
    });
  };

  // Use effect to validate steps every time the form data changes
  useEffect(() => {
    validateSteps();
  }, [formData]);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
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
  
  const handleChanges = (event) => {
    setSelectedSpaceType(event.target.value);
    setFormData({
      ...formData,
      type_of_space: event.target.value,
    });
  };
  
  console.log('11111==>',formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.105:8001/api/listyourproperty', formData);
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
      
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-8 border rounded-lg shadow-lg md:mt-12 bg-white">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-8">
            {/* Sidebar with Steps */}
            <div className="hidden md:block w-1/4">
              <div className="rounded-lg p-6 relative">
                <div className="absolute top-12 bottom-12 left-[50px] border-l-2 border-gray-300"></div>

                {/* Step 1: Overview */}
                <div className="relative z-10 mb-20 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${step === 1 ? stepsCompleted.overview ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Overview</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.overview ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.overview ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Step 2: User Details */}
                <div className="relative z-10 mb-20 flex items-center gap-4">
                  
                  <div className={`p-3 rounded-lg ${step === 2 ? stepsCompleted.userDetails ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaUser className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">User Details</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.userDetails ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.userDetails ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Step 3: Locality Details */}
                <div className="relative z-10 mb-20 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${step === 3 ? stepsCompleted.localityDetails ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Locality Details</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.localityDetails ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.localityDetails ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>

                {/* Step 4: Property Details */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${step === 4 ? stepsCompleted.propertyDetails ? 'bg-green-500 text-white' : 'bg-red-500 text-white' : 'bg-gray-300'}`}>
                    <FaClipboardList className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Property Details</h3>
                    <span className={`text-sm font-semibold ${stepsCompleted.propertyDetails ? 'text-green-500' : 'text-yellow-500'}`}>
                      {stepsCompleted.propertyDetails ? 'Completed' : 'Pending'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form Section */}
            <div className="md:w-3/4 w-full md:content-center">
              <div className="bg-white rounded-lg p-8">
                {step === 1 && (
                  <div className="flex flex-col items-center gap-6 md:mb-6">
                  <h2 className="text-xl md:text-3xl text-center font-bold">What type of space are you looking to rent?</h2>
                  <h3 className='hidden md:block md:text-base text-center'>We currently assist in leasing out the following type of spaces</h3>
                  <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-6 w-full">
                    {/* Office Space Option */}
                    <label className={`flex items-center border rounded-lg p-4 cursor-pointer hover:bg-blue-50 gap-2 ${selectedSpaceType === 'Office Space' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}>
                      <input type="radio" name="type_of_space" value="Office Space" className="hidden" onChange={handleChanges} />
                      <span className="text-4xl mb-2">🏢</span>
                      <span className="font-bold">Office Space</span>
                    </label>
                    {/* Showroom Option */}
                    <label className={`flex items-center border rounded-lg p-4 cursor-pointer hover:bg-blue-50 gap-2 ${selectedSpaceType === 'Showroom' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}>
                      <input type="radio" name="type_of_space" value="Showroom" className="hidden" onChange={handleChanges} />
                      <span className="text-4xl mb-2">🏬</span>
                      <span className="font-bold">Showroom</span>
                    </label>
                    {/* Warehouse Option */}
                    <label className={`flex items-center border rounded-lg p-4 cursor-pointer hover:bg-blue-50 gap-2 ${selectedSpaceType === 'Warehouse' ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}>
                      <input type="radio" name="type_of_space" value="Warehouse" className="hidden" onChange={handleChanges} />
                      <span className="text-4xl mb-2">🏪</span>
                      <span className="font-bold">Warehouse</span>
                    </label>
                  </div>
                </div>
                
                )}

                {/* Step 2: User Details */}
                {step === 2 && (
                  <div>
                    <h2 className="md:text-3xl text-center font-bold mb-4">Tell us a little about yourself</h2>
                    <h3 className='text-xs text-center mb-5'>We will use this information to contact you once we find prospects for your property.</h3>
                    <label>
                      Full Name:
                      <input type="text" name="full_name" value={formData.userDetails.full_name} onChange={handleUserChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      Email:
                      <input type="email" name="email" value={formData.userDetails.email} onChange={handleUserChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      Phone Number:
                      <input type="tel" name="phone_number" value={formData.userDetails.phone_number} onChange={handleUserChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                  </div>
                )}

                {/* Step 3: Locality Details */}
                {step === 3 && (
                  <div>
                    <h2 className="text-3xl text-center font-bold mb-4">Where's your office space located?</h2>
                    <label>
                      Building Name:
                      <input type="text" name="building_name" value={formData.localityDetails.building_name} onChange={handleLocalityChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      Locality:
                      <input type="text" name="locality" value={formData.localityDetails.locality} onChange={handleLocalityChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                    <label>
                      City:
                      <input type="text" name="city" value={formData.localityDetails.city} onChange={handleLocalityChange} required className="w-full border border-gray-300 rounded px-4 py-2 mb-4" />
                    </label>
                  </div>
                )}

                {/* Step 4: Property Details */}
                {step === 4 && (
                  <div>
                    <h2 className="md:text-3xl text-center font-bold mb-4">Share more details for a quicker tenant match</h2>
                    <label>
                      Carpet Area:
                      <input type="number" name="carpet_area" value={formData.propertyDetails.carpet_area} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2 " />
                    </label>
                    <label>
                      Build-up Area:
                      <input type="number" name="build_up_area" value={formData.propertyDetails.build_up_area} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                    <label>
                      Floor Number:
                      <input type="text" name="floor_number" value={formData.propertyDetails.floor_number} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                    <label>
                      Unit Number:
                      <input type="text" name="unit_no" value={formData.propertyDetails.unit_no} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                    <label>
                      Rent per Month:
                      <input type="number" name="rent_per_month" value={formData.propertyDetails.rent_per_month} onChange={handlePropertyChange} required className="w-full border border-gray-300 rounded px-4 py-2" />
                    </label>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button type="button" onClick={handlePrev} className={`bg-gray-500 text-white rounded px-4 py-2 ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={step === 1}>
                    Previous
                  </button>
                  {step < 4 ? (
                    <button type="button" onClick={handleNext} className={`bg-[#d84a48] text-white rounded px-4 py-2 ${!stepsCompleted.overview || (step === 2 && !stepsCompleted.userDetails) || (step === 3 && !stepsCompleted.localityDetails) ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!stepsCompleted.overview || (step === 2 && !stepsCompleted.userDetails) || (step === 3 && !stepsCompleted.localityDetails)}>
                      Next
                    </button>
                  ) : (
                    <button type="submit" className={`bg-green-500 text-white rounded px-4 py-2 ${!stepsCompleted.propertyDetails ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!stepsCompleted.propertyDetails}>
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SellYourProperty;
