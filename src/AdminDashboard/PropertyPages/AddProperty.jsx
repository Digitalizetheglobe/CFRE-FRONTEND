import React, { useState } from 'react';
import axios from 'axios';

const AddProperty = () => {
  const [formData, setFormData] = useState({
    buildingName: '',
    unitNumber: '',
    floor: '',
    location: '',
    builtUpArea: '',
    carpetArea: '',
    reservedCarParking: '',
    reserved2WheelerParking: '',
    amenities: '',
    workstation: '',
    cabin: '',
    conferenceRoom: '',
    otherFurniture: '',
    rentPerSqFt: '',
    deposit: '',
    yearlyEscalation: '',
    agreementPeriod: '',
    lockInPeriod: '',
    agreementCharges: '',
    bannerImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      bannerImage: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:8000/properties/rent', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Property added successfully:', response.data);
    } catch (error) {
      console.error('There was an error adding the property:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Add New Property</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="buildingName">Building Name</label> 
          <input type="text" name="buildingName" id="buildingName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.buildingName} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="unitNumber">Unit Number</label>
          <input type="text" name="unitNumber" id="unitNumber" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.unitNumber} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="floor">Floor</label>
          <input type="text" name="floor" id="floor" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.floor} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
          <input type="text" name="location" id="location" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.location} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="builtUpArea">Built-Up Area</label>
          <input type="text" name="builtUpArea" id="builtUpArea" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.builtUpArea} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="carpetArea">Carpet Area</label>
          <input type="text" name="carpetArea" id="carpetArea" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.carpetArea} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="reservedCarParking">Reserved Car Parking</label>
          <input type="text" name="reservedCarParking" id="reservedCarParking" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.reservedCarParking} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="reserved2WheelerParking">Reserved 2-Wheeler Parking</label>
          <input type="text" name="reserved2WheelerParking" id="reserved2WheelerParking" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.reserved2WheelerParking} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="amenities">Amenities</label>
          <input type="text" name="amenities" id="amenities" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.amenities} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="workstation">Workstation</label>
          <input type="text" name="workstation" id="workstation" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.workstation} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="cabin">Cabin</label>
          <input type="text" name="cabin" id="cabin" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.cabin} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="conferenceRoom">Conference Room</label>
          <input type="text" name="conferenceRoom" id="conferenceRoom" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.conferenceRoom} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="otherFurniture">Other Furniture</label>
          <input type="text" name="otherFurniture" id="otherFurniture" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.otherFurniture} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="rentPerSqFt">Rent per Sq Ft</label>
          <input type="text" name="rentPerSqFt" id="rentPerSqFt" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.rentPerSqFt} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="deposit">Deposit</label>
          <input type="text" name="deposit" id="deposit" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.deposit} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="yearlyEscalation">Yearly Escalation</label>
          <input type="text" name="yearlyEscalation" id="yearlyEscalation" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.yearlyEscalation} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="agreementPeriod">Agreement Period</label>
          <input type="text" name="agreementPeriod" id="agreementPeriod" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.agreementPeriod} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="lockInPeriod">Lock-In Period</label>
          <input type="text" name="lockInPeriod" id="lockInPeriod" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.lockInPeriod} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="agreementCharges">Agreement Charges</label>
          <input type="text" name="agreementCharges" id="agreementCharges" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.agreementCharges} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="bannerImage">Banner Image</label>
          <input type="file" name="bannerImage" id="bannerImage" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" onChange={handleFileChange} />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
