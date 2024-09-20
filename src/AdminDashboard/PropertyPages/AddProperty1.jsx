import React, { useState } from 'react';

function AddProperty1() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        ownerName: '',
        requestDate: '',
        transactionType: '',
        propertyType: '',
        transaction: '',
        furnishing: '',
        suitableFor: '',
        uniqueFeature: '',
        channel: '',
        description: '',
        remark: '',
        internalNote: '',
        verifiedDocuments: false,
        completedVisit: false,
        address: '',
        lat: '',
        long: '',
        officeNo: '',
        propertyDeveloper: '',
        builder: '',
        street: '',
        landmark: '',
        pinCode: '',
        city: '',
        locality: '',
        area: '',
        builtUpArea: '',
        carpetArea: '',
        terraceArea: '',
        areaRangeFrom: '',
        areaRangeTo: '',
        plotArea: '',
        plotDimension: '',
        propertyDimension: {
            height: '',
            width: '',
            depth: ''
        },
        areaUnit: 'sqft' // or 'sqmt'
    });
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <>
        
        <div className="flex items-center">
            {/* <div className="flex items-start max-md:flex-col gap-y-6 gap-x-3 max-w-screen-sm mx-auto px-4 ">
                <div className="w-full">
                    <div className={`w-full h-1 rounded-xl ${step >= 1 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className="mt-2 mr-4 flex">
                        <div className="ml-2">
                            <h6 className={`text-base font-bold ${step >= 1 ? 'text-green-500' : 'text-gray-400'}`}>
                                Contact Information
                            </h6>
                            <p className={`text-xs ${step >= 1 ? 'text-green-500' : 'text-gray-400'}`}>
                                {step > 1 ? 'Completed' : 'Pending'}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className={`w-full h-1 rounded-xl ${step >= 2 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <div className="mt-2 mr-4 flex">
                        <div className="ml-2">
                            <h6 className={`text-base font-bold ${step >= 2 ? 'text-green-500' : 'text-gray-400'}`}>
                                Basic Information
                            </h6>
                            <p className={`text-xs ${step >= 2 ? 'text-green-500' : 'text-gray-400'}`}>
                                {step > 2 ? 'Completed' : 'Pending'}
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* Stepper */}
            <div className="w-max my-4">
                <div className="flex flex-col items-center">
                    {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
                        <div key={stepNumber} className="flex items-center flex-col">
                            <div
                                className={`w-6 h-6 shrink-0 mx-[-1px] ring-2 ring-gray-300 ring-offset-4 ${step >= stepNumber ? 'bg-green-500' : ''
                                    } p-1 flex items-center justify-center rounded-full`}
                            >
                                {step >= stepNumber ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 24 24">
                                        <path
                                            d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                ) : (
                                    <span className="text-base text-gray-500 font-bold">{stepNumber}</span>
                                )}
                            </div>
                            <div className="my-4 text-center max-w-[200px]">
                                <h6 className={`text-base font-bold ${step >= stepNumber ? 'text-green-500' : 'text-gray-400'}`}>
                                    {stepNumber === 1 && 'Contact Information'}
                                    {stepNumber === 2 && 'Basic Information'}
                                    {stepNumber === 3 && 'Location'}
                                    {stepNumber === 4 && 'Area and Pricing'}
                                    {stepNumber === 5 && 'Other Details'}
                                    {stepNumber === 6 && 'Save and Publish'}
                                </h6>
                            </div>
                            {stepNumber < 6 && <div className="w-1 h-24 bg-gray-300 rounded-xl"></div>}
                        </div>
                    ))}
                </div>
            </div>


            {/* Step 1: Contact Information */}
            {step === 1 && (
                <div className="mt-4 w-full flex justify-center">
                    <div className="w-full max-w-md">
                        <label className="block text-sm font-medium text-gray-700">Owner/Landlord Name</label>
                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <button
                            onClick={nextStep}
                            className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Step 2: Basic Information */}
            {step === 2 && (
                <div className="mt-4 w-full flex justify-center">
                    <div className="w-full max-w-md">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Request Date</label>
                            <input
                                type="date"
                                name="requestDate"
                                value={formData.requestDate}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Transaction Type</label>
                            <select
                                name="transactionType"
                                value={formData.transactionType}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select</option>
                                <option value="rent">Rent</option>
                                <option value="sale">Sale</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Property Type</label>
                            <input
                                type="text"
                                name="propertyType"
                                value={formData.propertyType}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Transaction</label>
                            <select
                                name="transaction"
                                value={formData.transaction}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select</option>
                                <option value="new">New</option>
                                <option value="resale">Resale</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Furnishing</label>
                            <select
                                name="furnishing"
                                value={formData.furnishing}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select</option>
                                <option value="furnished">Furnished</option>
                                <option value="un-Furnished">Un-Furnished</option>
                                <option value="semi-Furnished">Semi-Furnished</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Suitable For</label>
                            <textarea
                                name="suitableFor"
                                value={formData.suitableFor}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Unique Feature</label>
                            <textarea
                                name="uniqueFeature"
                                value={formData.uniqueFeature}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Channel</label>
                            <select
                                name="channel"
                                value={formData.channel}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="">Select</option>
                                <option value="direct">Direct</option>
                                <option value="agent">Agent</option>
                                <option value="builder">Builder</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Remark</label>
                            <textarea
                                name="remark"
                                value={formData.remark}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Internal Note</label>
                            <textarea
                                name="internalNote"
                                value={formData.internalNote}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                name="verifiedDocuments"
                                checked={formData.verifiedDocuments}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label className="ml-2 block text-sm font-medium text-gray-700">Verified Documents</label>
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                name="completedVisit"
                                checked={formData.completedVisit}
                                onChange={handleInputChange}
                                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label className="ml-2 block text-sm font-medium text-gray-700">Completed Visit</label>
                        </div>
                        <div className="flex justify-between">
                            <button
                                onClick={prevStep}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-green-500 text-white py-2 px-4 rounded-md"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Location */}
            {step === 3 && (
                <div className="mt-4 w-full flex flex-col items-center">
                    {/* Google Map Embed */}
                    <div className="w-full max-w-3xl mb-6">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.667582467897!2d-122.08385108468188!3d37.38605177982586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b8e0d76a0b%3A0x947a0f7d0f0a54f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631312153210!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                            className="border-none"
                        ></iframe>
                    </div>

                    {/* Form Fields */}
                    <div className="w-full max-w-md">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Latitude</label>
                            <input
                                type="text"
                                name="lat"
                                value={formData.lat}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Longitude</label>
                            <input
                                type="text"
                                name="long"
                                value={formData.long}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Office/Unit No</label>
                            <input
                                type="text"
                                name="officeNo"
                                value={formData.officeNo}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Property Developer Name</label>
                            <input
                                type="text"
                                name="propertyDeveloper"
                                value={formData.propertyDeveloper}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Builder/Tower/Project</label>
                            <input
                                type="text"
                                name="builder"
                                value={formData.builder}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Street</label>
                            <input
                                type="text"
                                name="street"
                                value={formData.street}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Landmark</label>
                            <input
                                type="text"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">PinCode</label>
                            <input
                                type="text"
                                name="pinCode"
                                value={formData.pinCode}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Locality</label>
                            <input
                                type="text"
                                name="locality"
                                value={formData.locality}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevStep}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-green-500 text-white py-2 px-4 rounded-md"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}




            {/* Step 4: Area Pricing */}
            {step === 4 && (
                <div className="mt-4 w-full flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-4">Area and Pricing Information</h2>
                    <div className="w-full max-w-md">
                        {/* Area */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Area</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="area"
                                    value={formData.area}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter area"
                                />
                                <select
                                    name="areaUnit"
                                    value={formData.areaUnit}
                                    onChange={handleInputChange}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="sqft">Sq.ft</option>
                                    <option value="sqm">Sq.Mt</option>
                                </select>
                            </div>
                        </div>

                        {/* Built-up Area */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Built-up Area</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="builtUpArea"
                                    value={formData.builtUpArea}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter built-up area"
                                />
                                <select
                                    name="builtUpAreaUnit"
                                    value={formData.builtUpAreaUnit}
                                    onChange={handleInputChange}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="sqft">Sq.ft</option>
                                    <option value="sqm">Sq.Mt</option>
                                </select>
                            </div>
                        </div>

                        {/* Carpet Area */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Carpet Area</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="carpetArea"
                                    value={formData.carpetArea}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter carpet area"
                                />
                                <select
                                    name="carpetAreaUnit"
                                    value={formData.carpetAreaUnit}
                                    onChange={handleInputChange}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="sqft">Sq.ft</option>
                                    <option value="sqm">Sq.Mt</option>
                                </select>
                            </div>
                        </div>

                        {/* Terrace Area */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Terrace Area</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="terraceArea"
                                    value={formData.terraceArea}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter terrace area"
                                />
                                <select
                                    name="terraceAreaUnit"
                                    value={formData.terraceAreaUnit}
                                    onChange={handleInputChange}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="sqft">Sq.ft</option>
                                    <option value="sqm">Sq.Mt</option>
                                </select>
                            </div>
                        </div>

                        {/* Area Range */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Area Range</label>
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    name="areaRangeFrom"
                                    value={formData.areaRangeFrom}
                                    onChange={handleInputChange}
                                    placeholder="From"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <input
                                    type="number"
                                    name="areaRangeTo"
                                    value={formData.areaRangeTo}
                                    onChange={handleInputChange}
                                    placeholder="To"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <select
                                name="areaRangeUnit"
                                value={formData.areaRangeUnit}
                                onChange={handleInputChange}
                                className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="sqft">Sq.ft</option>
                                <option value="sqm">Sq.Mt</option>
                            </select>
                        </div>

                        {/* Plot Area */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Plot Area</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="plotArea"
                                    value={formData.plotArea}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter plot area"
                                />
                                <select
                                    name="plotAreaUnit"
                                    value={formData.plotAreaUnit}
                                    onChange={handleInputChange}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="sqft">Sq.ft</option>
                                    <option value="sqm">Sq.Mt</option>
                                </select>
                            </div>
                        </div>

                        {/* Plot Dimension */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Plot Dimension</label>
                            <div className="flex">
                                <input
                                    type="number"
                                    name="plotDimension"
                                    value={formData.plotDimension}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Enter plot dimension"
                                />
                                <select
                                    name="plotDimensionUnit"
                                    value={formData.plotDimensionUnit}
                                    onChange={handleInputChange}
                                    className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="sqft">Sq.ft</option>
                                    <option value="sqm">Sq.Mt</option>
                                </select>
                            </div>
                        </div>

                        {/* Property Dimension */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Property Dimension</label>
                            <div className="flex flex-col gap-4">
                                <div className="flex">
                                    <input
                                        type="number"
                                        name="propertyHeight"
                                        value={formData.propertyHeight}
                                        onChange={handleInputChange}
                                        placeholder="Height"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <select
                                        name="propertyHeightUnit"
                                        value={formData.propertyHeightUnit}
                                        onChange={handleInputChange}
                                        className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="ft">Ft</option>
                                        <option value="m">M</option>
                                    </select>
                                </div>

                                <div className="flex">
                                    <input
                                        type="number"
                                        name="propertyWidth"
                                        value={formData.propertyWidth}
                                        onChange={handleInputChange}
                                        placeholder="Width"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <select
                                        name="propertyWidthUnit"
                                        value={formData.propertyWidthUnit}
                                        onChange={handleInputChange}
                                        className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="ft">Ft</option>
                                        <option value="m">M</option>
                                    </select>
                                </div>

                                <div className="flex">
                                    <input
                                        type="number"
                                        name="propertyDepth"
                                        value={formData.propertyDepth}
                                        onChange={handleInputChange}
                                        placeholder="Depth"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    <select
                                        name="propertyDepthUnit"
                                        value={formData.propertyDepthUnit}
                                        onChange={handleInputChange}
                                        className="ml-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="ft">Ft</option>
                                        <option value="m">M</option>
                                    </select>
                                </div>
                            </div>
                        </div>




                        <div className="flex justify-between mt-4">
                            <button
                                onClick={prevStep}
                                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                            >
                                Previous
                            </button>
                            <button
                                onClick={nextStep}
                                className="bg-green-500 text-white py-2 px-4 rounded-md"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 4: Other Details */}
            {step === 5 && (
                <div className="mt-4 w-full flex flex-col items-center">
                    <h2 className="text-lg font-semibold mb-4">Other Detail</h2>

                </div>
            )}
        </div></>
    );
}

export default AddProperty1;
