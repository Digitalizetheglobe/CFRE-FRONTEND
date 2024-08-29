import { useState } from 'react';

export default function AddNewProperty() {
  const [formData, setFormData] = useState({
    buildingName: '',
    unitNo: '',
    propertyType: '',
    propertySubtype: '',
    floor: '',
    location: '',
    city: '',
    buArea: '',
    carpetArea: '',
    carParking: '',
    bikeParking: '',
    dgBackup: '',
    cafeteria: '',
    furnishing: '',
    meetingRoom:'',
    ws: '',
    cabin: '',
    conferenceRoom: '',
    otherFurniture: '',
    furnitureDoneBy: '',
    propertyImage: '',
    agreementPeriod: '',
    lockInPeriod: '',
    rentStartFrom: '',
    lockingPeriod:'',
    rentPerMonthRsPerSqFt: '',
    deposit: '',
    yearlyEscalation: '',
    rentPerSqFtBuiltUpArea: '',
    maintenancePerSqFt: '',
    agreementCharges: '',
    propertyTax: '',
    gstOnRent: '',
    basePrice: '',
    govermentTaxes: '',
    slug: '',
    seoKeywords: '',
    seoDiscription: '',
    seoTitle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cfrecpune.com/cfreproperties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 pl-10 pr-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900 text-center mt-10">Add New Property</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="buildingName" className="block text-sm font-medium leading-6 text-gray-900">
                Building Name
              </label>
              <input
                id="buildingName"
                name="buildingName"
                type="text"
                value={formData.buildingName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="unitNo" className="block text-sm font-medium leading-6 text-gray-900">
                Unit No
              </label>
              <input
                id="unitNo"
                name="unitNo"
                type="text"
                value={formData.unitNo}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="propertyType" className="block text-sm font-medium leading-6 text-gray-900">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              >
                <option value="">Select Property Type - Invest / Rent</option>
                <option value="Invest">Invest</option>
                <option value="Rent">Rent</option>
              </select>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="propertySubtype" className="block text-sm font-medium leading-6 text-gray-900">
                Property Subtype
              </label>
              <select
                id="propertySubtype"
                name="propertySubtype"
                value={formData.propertySubtype}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              >
                <option value="" disabled>Select a subtype - Pre Leased / Un Leased</option>
                <option value="preLeased">Pre Leased</option>
                <option value="unLeased">Un Leased</option>
              </select>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">
                Floor
              </label>
              <input
                id="floor"
                name="floor"
                type="text"
                value={formData.floor}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="buArea" className="block text-sm font-medium leading-6 text-gray-900">
                Built-up Area (in sq. ft.)
              </label>
              <input
                id="buArea"
                name="buArea"
                type="text"
                value={formData.buArea}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="carpetArea" className="block text-sm font-medium leading-6 text-gray-900">
                Carpet Area (in sq. ft.)
              </label>
              <input
                id="carpetArea"
                name="carpetArea"
                type="text"
                value={formData.carpetArea}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="carParking" className="block text-sm font-medium leading-6 text-gray-900">
                Car Parking
              </label>
              <input
                id="carParking"
                name="carParking"
                type="text"
                value={formData.carParking}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="bikeParking" className="block text-sm font-medium leading-6 text-gray-900">
                Bike Parking
              </label>
              <input
                id="bikeParking"
                name="bikeParking"
                type="text"
                value={formData.bikeParking}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dgBackup" className="block text-sm font-medium leading-6 text-gray-900">
                DG Backup
              </label>
              <input
                id="dgBackup"
                name="dgBackup"
                type="text"
                value={formData.dgBackup}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cafeteria" className="block text-sm font-medium leading-6 text-gray-900">
                Cafeteria
              </label>
              <input
                id="cafeteria"
                name="cafeteria"
                type="text"
                value={formData.cafeteria}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            {/* Furnishing details */}
            <div className="sm:col-span-3">
              <label htmlFor="furnishing" className="block text-sm font-medium leading-6 text-gray-900">
                Furnishing Status
              </label>
              <select
                id="furnishing"
                name="furnishing"
                value={formData.furnishing}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              >
                <option value="">Select Furnishing Status - Furnished / Unfurnished</option>
                <option value="Furnished">Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
                <option value="Coworking">Coworking / Managed Spaces</option>
              </select>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="ws" className="block text-sm font-medium leading-6 text-gray-900">
                Workstations
              </label>
              <input
                id="ws"
                name="ws"
                type="text"
                value={formData.ws}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cabin" className="block text-sm font-medium leading-6 text-gray-900">
                Cabins
              </label>
              <input
                id="cabin"
                name="cabin"
                type="text"
                value={formData.cabin}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="conferenceRoom" className="block text-sm font-medium leading-6 text-gray-900">
                Conference Room
              </label>
              <input
                id="conferenceRoom"
                name="conferenceRoom"
                type="text"
                value={formData.conferenceRoom}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="meetingRoom" className="block text-sm font-medium leading-6 text-gray-900">
                Meeting Room
              </label>
              <input
                id="meetingRoom"
                name="meetingRoom"
                type="text"
                value={formData.meetingRoom}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="otherFurniture" className="block text-sm font-medium leading-6 text-gray-900">
                Other Furniture
              </label>
              <input
                id="otherFurniture"
                name="otherFurniture"
                type="text"
                value={formData.otherFurniture}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="furnitureDoneBy" className="block text-sm font-medium leading-6 text-gray-900">
              Furniture Done By
              </label>
              <input
                id="furnitureDoneBy"
                name="furnitureDoneBy"
                type="text"
                value={formData.furnitureDoneBy}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>


            {/* Commercial details */}
            <div className="sm:col-span-3">
              <label htmlFor="rentPerMonthRsPerSqFt" className="block text-sm font-medium leading-6 text-gray-900">
                Rent Per Month RS Per sq. ft.
              </label>
              <input
                id="rentPerMonthRsPerSqFt"
                name="rentPerMonthRsPerSqFt"
                type="text"
                value={formData.rentPerMonthRsPerSqFt}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="rentStartFrom" className="block text-sm font-medium leading-6 text-gray-900">
                Rent Strat From 
              </label>
              <input
                id="rentStartFrom"
                name="rentStartFrom"
                type="text"
                value={formData.rentStartFrom}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="basePrice" className="block text-sm font-medium leading-6 text-gray-900">
                Base Price
              </label>
              <input
                id="basePrice"
                name="basePrice"
                type="text"
                value={formData.basePrice}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="maintenancePerSqFt" className="block text-sm font-medium leading-6 text-gray-900">
                Maintenance per sq. ft.
              </label>
              <input
                id="maintenancePerSqFt"
                name="maintenancePerSqFt"
                type="text"
                value={formData.maintenancePerSqFt}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="rentPerSqFtBuiltUpArea" className="block text-sm font-medium leading-6 text-gray-900">
                Rent Per sq. ft. Build Up Area  
              </label>
              <input
                id="rentPerSqFtBuiltUpArea"
                name="rentPerSqFtBuiltUpArea"
                type="text"
                value={formData.rentPerSqFtBuiltUpArea}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="deposit" className="block text-sm font-medium leading-6 text-gray-900">
                Deposit
              </label>
              <input
                id="deposit"
                name="deposit"
                type="text"
                value={formData.deposit}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="yearlyEscalation" className="block text-sm font-medium leading-6 text-gray-900">
                Yearly Escalation
              </label>
              <input
                id="yearlyEscalation"
                name="yearlyEscalation"
                type="text"
                value={formData.yearlyEscalation}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="agreementPeriod" className="block text-sm font-medium leading-6 text-gray-900">
                Agreement Period
              </label>
              <input
                id="agreementPeriod"
                name="agreementPeriod"
                type="text"
                value={formData.agreementPeriod}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>




            <div className="sm:col-span-3">
              <label htmlFor="lockingPeriod" className="block text-sm font-medium leading-6 text-gray-900">
                Lock-in Period
              </label>
              <input
                id="lockingPeriod"
                name="lockingPeriod"
                type="text"
                value={formData.lockingPeriod}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="propertyTax" className="block text-sm font-medium leading-6 text-gray-900">
                Property Tax
              </label>
              <input
                id="propertyTax"
                name="propertyTax"
                type="text"
                value={formData.propertyTax}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="govermentTaxes" className="block text-sm font-medium leading-6 text-gray-900">
                Goverment Taxes
              </label>
              <input
                id="govermentTaxes"
                name="govermentTaxes"
                type="text"
                value={formData.govermentTaxes}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="gstOnRent" className="block text-sm font-medium leading-6 text-gray-900">
                GST On Rent
              </label>
              <input
                id="gstOnRent"
                name="gstOnRent"
                type="text"
                value={formData.gstOnRent}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="agreementCharges" className="block text-sm font-medium leading-6 text-gray-900">
                Agreement Charges
              </label>
              <input
                id="agreementCharges"
                name="agreementCharges"
                type="text"
                value={formData.agreementCharges}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="propertyImage" className="block text-sm font-medium leading-6 text-gray-900">
                Property Image
              </label>
              <input
                id="propertyImage"
                name="propertyImage"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, propertyImage: e.target.files[0] })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="slug" className="block text-sm font-medium leading-6 text-gray-900">
                Slug
              </label>
              <input
                id="slug"
                name="slug"
                type="text"
                value={formData.slug}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="seoTitle" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <input
                id="seoTitle"
                name="seoTitle"
                type="text"
                value={formData.seoTitle}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="seoDiscription" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <input
                id="seoDiscription"
                name="seoDiscription"
                type="text"
                value={formData.seoDiscription}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="seoKeywords" className="block text-sm font-medium leading-6 text-gray-900">
                Seo Keywords
              </label>
              <input
                id="seoKeywords"
                name="seoKeywords"
                type="text"
                value={formData.seoKeywords}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-[#d84a48] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#b03b3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 pl-3"
        >
          Save
        </button>
      </div>
    </form>
  );
}
