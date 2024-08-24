import React, { useState } from 'react';

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        buildingName: '',
        unitNumber: '',
        floor: '',
        location: '',
        builtUpArea: '',
        carpetArea: '',
        reservedCarParking: '',
        reserved2WheelerParking: '',
        amenities: '', 
        dgBackup: '',
        cafeteria: '',
        furnished: 'unfurnished',
        workstation: '',
        cabin: '',
        conferenceRoom: '',
        otherFurniture: '',
        rentPerSqFt: '',
        maintenancePerSqFt: '',
        deposit: '6 months rent',
        yearlyEscalation: '5%',
        agreementPeriod: '5 years',
        lockInPeriod: '3 years',
        agreementCharges: 'Borne by both parties equally',
    });

    const [status, setStatus] = useState(''); // For success/error messages

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log('0000000000====>', formData);

    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log('Submitting Form Data:', formData);
        try {
            const response = await fetch('http://192.168.0.105:8000/rent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Response Status:', response.status);
            console.log('Response Headers:', response.headers);
            const result = await response.json();
            console.log('Response Body:', result);

            if (response.ok) {
                setStatus('Property details submitted successfully!');
            } else {
                setStatus('Failed to submit property details.');
            }
        } catch (error) {
            setStatus('An error occurred while submitting property details.');
            console.error('Submit Error:', error);
        }
    };
    return (
        <form className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md space-y-6" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Property Details</h2>
            {/* ID Field */}
            <div>
                <label className="block text-gray-700 font-medium">ID</label>
                <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter property ID"
                />
            </div>

            {/* Common Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium">Building Name</label>
                    <input
                        type="text"
                        name="buildingName"
                        value={formData.buildingName}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter building name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">unit Number.</label>
                    <input
                        type="text"
                        name="unitNumber"
                        value={formData.unitNumber}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter unit number"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Floor</label>
                    <input
                        type="text"
                        name="floor"
                        value={formData.floor}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter floor"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter location"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Built Up Area</label>
                    <input
                        type="number"
                        name="builtUpArea"
                        value={formData.builtUpArea}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter built up area (sq. ft.)"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Carpet Area</label>
                    <input
                        type="number"
                        name="carpetArea"
                        value={formData.carpetArea}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter carpet area (sq. ft.)"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Reserved Car Parking</label>
                    <input
                        type="text"
                        name="reservedCarParking"
                        value={formData.reservedCarParking}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter details"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Reserved 2 Wheeler Parking</label>
                    <input
                        type="text"
                        name="reserved2WheelerParking"
                        value={formData.reserved2WheelerParking}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter details"
                    />
                </div>
                    {/* Amenities Field */}
            <div>
                <label className="block text-gray-700 font-medium">Amenities</label>
                <textarea
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter amenities (e.g., Wi-Fi, Air Conditioning, etc.)"
                    rows="4"
                />
            </div>
                <div>
                    <label className="block text-gray-700 font-medium">DG Back-up</label>
                    <input
                        type="text"
                        name="dgBackup"
                        value={formData.dgBackup}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter details"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Cafeteria</label>
                    <input
                        type="text"
                        name="cafeteria"
                        value={formData.cafeteria}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter details"
                    />
                </div>
            </div>

            {/* Dropdown for Furnished/Unfurnished */}
            <div>
                <label className="block text-gray-700 font-medium">Furnished/Unfurnished</label>
                <select
                    name="furnished"
                    value={formData.furnished}
                    onChange={handleInputChange}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                    <option value="unfurnished">Unfurnished</option>
                    <option value="furnished">Furnished</option>
                </select>
            </div>

            {/* Furnished Specific Fields */}
            {formData.furnished === 'furnished' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Workstation</label>
                        <input
                            type="number"
                            name="workstation"
                            value={formData.workstation}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter number of workstations"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Cabin</label>
                        <input
                            type="number"
                            name="cabin"
                            value={formData.cabin}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter number of cabins"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Conference Room</label>
                        <input
                            type="number"
                            name="conferenceRoom"
                            value={formData.conferenceRoom}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter number of conference rooms"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium">Any Other Furniture</label>
                        <input
                            type="text"
                            name="otherFurniture"
                            value={formData.otherFurniture}
                            onChange={handleInputChange}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter details of other furniture"
                        />
                    </div>
                </div>
            )}

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Commercial Details</h2>

            {/* Commercial Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-medium">Rent per sq. ft. on built-up area</label>
                    <input
                        type="text"
                        name="rentPerSqFt"
                        value={formData.rentPerSqFt}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter rent per sq. ft."
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Maintenance per sq. ft. on built-up area</label>
                    <input
                        type="text"
                        name="maintenancePerSqFt"
                        value={formData.maintenancePerSqFt}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter maintenance per sq. ft."
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Deposit</label>
                    <input
                        type="text"
                        name="deposit"
                        value={formData.deposit}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter deposit amount"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Yearly Escalation</label>
                    <input
                        type="text"
                        name="yearlyEscalation"
                        value={formData.yearlyEscalation}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter yearly escalation percentage"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Agreement Period</label>
                    <input
                        type="text"
                        name="agreementPeriod"
                        value={formData.agreementPeriod}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter agreement period"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Lock-in Period</label>
                    <input
                        type="text"
                        name="lockInPeriod"
                        value={formData.lockInPeriod}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter lock-in period"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium">Agreement Charges</label>
                    <input
                        type="text"
                        name="agreementCharges"
                        value={formData.agreementCharges}
                        onChange={handleInputChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter details of agreement charges"
                    />
                </div>
            </div>

            <div className="mt-8">
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Submit Property Details
                </button>
            </div>
            {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
        </form>
    );
};

export default PropertyForm;
