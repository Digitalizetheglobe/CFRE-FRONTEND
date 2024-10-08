import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar';

// Modal Component
const PropertyModal = ({ property, onSave, onClose }) => {
  const [editedProperty, setEditedProperty] = useState(property);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProperty); // Save the updated property
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-lg max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-center mb-4">Edit Property Details</h2>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">Building Name:</label>
            <input
              type="text"
              name="buildingName"
              value={editedProperty.buildingName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700">Property Images:</label>
            <input
              type="file"
              name="propertyImages"
              value={editedProperty.propertyImages}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Unit No:</label>
            <input
              type="text"
              name="unitNo"
              value={editedProperty.unitNo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>




          <div className="mb-4">
            <label className="block text-gray-700">Property Type:</label>
            <select
              type="text"
              name="propertyType"
              value={editedProperty.propertyType}
              onChange={handleChange}
              className="w-full p-2 border rounded">
              <option value="">Select Property Type</option>
              <option value="OfficeSpace">Office Space</option>
              <option value="Showroom">Showroom Space</option>
              <option value="Hospital">Hospital</option>
              <option value="Independent Building">Independant Building</option>
              <option value="Warehouse / Godown">Warehouse / Godown Space</option>
              <option value="Industrial Factory">Industrial Factory</option>
              <option value="Industrial Lands / Plot">Industrial Lands / Plot</option>
              <option value="Commercial Lands / Plot">Commercial Lands / Plot</option>
              <option value="Restaurant Space">Restaurant Space</option>
              <option value="Banquet Hall">Banquet Hall</option>
              <option value="Commercial Row House">Commercial Row House</option>
              <option value="Hotel Resort">Hotel / Resort</option>
              <option value="Resdential Land / Plot">Residential Lands / Plot</option>
              <option value="Fractional Investment">Fractional investment</option>
            </select>

          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Available For:</label>
            <select
              type="text"
              name="availableFor"
              value={editedProperty.availableFor}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Invest">Sale</option>
              <option value="Rent">Rent</option>

            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Property Subtype:</label>
            <select
              type="text"
              name="propertySubtype"
              value={editedProperty.propertySubtype}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="preLeased">Pre Leased</option>
              <option value="unLeased">Un Leased</option>

            </select>
          </div>


          <div className="mb-4">
            <label className="block text-gray-700">Floor:</label>
            <input
              type="text"
              name="floor"
              value={editedProperty.floor}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              value={editedProperty.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={editedProperty.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>









          <div className="mb-4">
            <label className="block text-gray-700">Carpet Area:</label>
            <input
              type="text"
              name="carpetArea"
              value={editedProperty.carpetArea}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Car Parking:</label>
            <input
              type="text"
              name="carParking"
              value={editedProperty.carParking}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Bike Parking:</label>
            <input
              type="text"
              name="bikeParking"
              value={editedProperty.bikeParking}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">DG Backup:</label>
            <input
              type="text"
              name="dgBackup"
              value={editedProperty.dgBackup}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Cafeteria:</label>
            <input
              type="text"
              name="cafeteria"
              value={editedProperty.cafeteria}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Furnishing Status:</label>
            <select
              type="text"
              name="furnishing"
              value={editedProperty.furnishing}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="Furnished">Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
              <option value="Coworking">Coworking / Managed Spaces</option>

            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Workstations:</label>
            <input
              type="text"
              name="ws"
              value={editedProperty.ws}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Cabins:</label>
            <input
              type="text"
              name="cabin"
              value={editedProperty.cabin}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Conference Room:</label>
            <input
              type="text"
              name="conferenceRoom"
              value={editedProperty.conferenceRoom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Meeting Room:</label>
            <input
              type="text"
              name="meetingRoom"
              value={editedProperty.meetingRoom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Other Furniture:</label>
            <input
              type="text"
              name="otherFurniture"
              value={editedProperty.otherFurniture}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Furniture Done By:</label>
            <input
              type="text"
              name="furnitureDoneBy"
              value={editedProperty.furnitureDoneBy}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Other Amenities:</label>
            <input
              type="text"
              name="amenities"
              value={editedProperty.amenities}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Chargeable Area (in sq. ft.):</label>
            <input
              type="text"
              name="buArea"
              value={editedProperty.buArea}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Rent Per Sq. Ft.:</label>
            <input
              type="text"
              name="rentPerMonthRsPerSqFt"
              value={editedProperty.rentPerMonthRsPerSqFt}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Rent Per Month:</label>
            <input
              type="text"
              name="rentPerMonth"
              value={editedProperty.rentPerMonth}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Rent Start From:</label>
            <input
              type="text"
              name="rentStartFrom"
              value={editedProperty.rentStartFrom}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Base Price:</label>
            <input
              type="text"
              name="basePrice"
              value={editedProperty.basePrice}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Maintenance per sq. ft. (On Chargeable Area):</label>
            <input
              type="text"
              name="maintenancePerSqFt"
              value={editedProperty.maintenancePerSqFt}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Deposit:</label>
            <input
              type="text"
              name="deposit"
              value={editedProperty.deposit}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Yearly Escalation:</label>
            <input
              type="text"
              name="yearlyEscalation"
              value={editedProperty.yearlyEscalation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Agreement Period:</label>
            <input
              type="text"
              name="agreementPeriod"
              value={editedProperty.agreementPeriod}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Lock-in Period:</label>
            <input
              type="text"
              name="lockingPeriod"
              value={editedProperty.lockingPeriod}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Multiple Property Images:</label>
            <input
              type="file"
              multiple
              name="multiplePropertyImages"

              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Property Images:</label>
            <input
              type="file"
              name="multiplePropertyImages"
              multiple
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>




          <div className="mb-4">
            <label className="block text-gray-700">Property Tax:</label>
            <input
              type="text"
              name="propertyTax"
              value={editedProperty.propertyTax}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>


          <div className="mb-4">
            <label className="block text-gray-700">Goverment Taxes:</label>
            <input
              type="text"
              name="govermentTaxes"
              value={editedProperty.govermentTaxes}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">GST On Rent:</label>
            <input
              type="text"
              name="gstOnRent"
              value={editedProperty.gstOnRent}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Agreement Charges:</label>
            <input
              type="text"
              name="agreementCharges"
              value={editedProperty.agreementCharges}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Slug:</label>
            <input
              type="text"
              name="slug"
              value={editedProperty.slug}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="seoTitle"
              value={editedProperty.seoTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <input
              type="text"
              name="seoDiscription"
              value={editedProperty.seoDiscription}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Seo Keywords:</label>
            <input
              type="text"
              name="seoKeywords"
              value={editedProperty.seoKeywords}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Add more form fields as needed */}

        <div className="flex justify-between mt-4">
          <button onClick={handleSave} className="bg-[#d84a48] hover:bg-[#c34543] text-white px-4 py-2 rounded">
            Update
          </button>
          <button onClick={onClose} className="bg-gray-500  hover:bg-gray-700 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </div>


  );
};

const ViewAllProperty = () => {
  const [properties, setProperties] = useState([]);
  const [toggleStatus, setToggleStatus] = useState({}); // Store the toggle status for each property
  const [selectedProperty, setSelectedProperty] = useState(null); // For editing modal
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  useEffect(() => {
    fetch('https://cfrecpune.com/cfreproperties')
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        const initialToggleState = {};
        data.forEach((property, index) => {
          initialToggleState[index] = true; // Initially all toggles are "On"
        });
        setToggleStatus(initialToggleState);
      })
      .catch((error) => {
        console.error('Error fetching properties:', error);
      });
  }, []);

  const handleToggle = (index) => {
    setToggleStatus({
      ...toggleStatus,
      [index]: !toggleStatus[index], // Toggle the state
    });
  };

  const handleEditClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleSaveChanges = (updatedProperty) => {
    // Send PUT request to update the property
    fetch(`https://cfrecpune.com/cfreproperties/${updatedProperty.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProperty),
    })
      .then((response) => response.json())
      .then((data) => {
        setProperties((prev) => prev.map((p) => (p.id === data.id ? data : p))); // Update the properties in state
        setShowModal(false); // Close modal
      })
      .catch((error) => {
        console.error('Error updating property:', error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-8">
        <h2 className="text-base font-bold leading-7 text-gray-900 text-center " style={{ fontSize: '20px' }}>All Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 border"
              style={{ borderColor: '#d84a48', borderWidth: '1px' }} // Light border color
            >
              <h3 className="text-xl font-bold mb-2">{property.buildingName}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Location:</strong> {property.location}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>City:</strong> {property.city}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Carpet Area:</strong> {property.carpetArea} sq. ft.
              </p>

              {/* Toggle Button */}
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <span className="mr-2 text-gray-700">Available</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-indigo-600"
                    checked={toggleStatus[index]} // Default is "On"
                    onChange={() => handleToggle(index)}
                  />
                </label>
                <span className={`ml-4 text-sm ${toggleStatus[index] ? 'text-green-500' : 'text-red-500'}`}>
                  {toggleStatus[index] ? 'On' : 'Off'}
                </span>
              </div>

              {/* Edit Icon */}
              <div className="text-right mt-4">
                <button onClick={() => handleEditClick(property)} className="text-gray-600 hover:text-gray-900">
                  <i className="fas fa-edit"></i> Edit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for editing property */}
        {showModal && selectedProperty && (
          <PropertyModal
            property={selectedProperty}
            onSave={handleSaveChanges}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default ViewAllProperty;
