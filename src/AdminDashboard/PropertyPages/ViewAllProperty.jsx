import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar';
import { FaSearch } from "react-icons/fa";

// Modal Component
const PropertyModal = ({ property, onSave, onClose }) => {
  const [editedProperty, setEditedProperty] = useState({ ...property });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [multiplePropertyImages, setMultiplePropertyImages] = useState([]);

  // Initialize property data and images when the modal opens
  useEffect(() => {
    setEditedProperty({ ...property });
    
    // Handle images - ensure it's always an array
    if (Array.isArray(property.multiplePropertyImages)) {
      setMultiplePropertyImages(property.multiplePropertyImages);
    } else if (property.multiplePropertyImages) {
      setMultiplePropertyImages([property.multiplePropertyImages]);
    } else {
      setMultiplePropertyImages([]);
    }
  }, [property]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(prev => [...prev, ...files]);
    
    // Create object URLs for preview
    const fileObjects = files.map(file => file);
    setMultiplePropertyImages(prev => [...prev, ...fileObjects]);
  };

  // Handle image removal
  const handleRemoveImage = (indexToRemove) => {
    setMultiplePropertyImages(prev =>
      prev.filter((_, index) => index !== indexToRemove)
    );

    // Also remove from selectedFiles if it was newly added
    if (indexToRemove < selectedFiles.length) {
      setSelectedFiles(prev =>
        prev.filter((_, index) => index !== indexToRemove)
      );
    }
  };

  // Save changes
  const handleSave = () => {
    // Create updated property with all form fields and current images
    const updatedProperty = {
      ...editedProperty,
      multiplePropertyImages: multiplePropertyImages
    };

    onSave(updatedProperty, selectedFiles);
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
              value={editedProperty.buildingName || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Property Images:</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Display Uploaded & API Response Images */}
          <div className="flex flex-wrap gap-4">
            {multiplePropertyImages?.map((image, index) => {
              // Handle both string paths and File objects
              const imageUrl = typeof image === "string"
                ? `https://cfrecpune.com/${image}`
                : URL.createObjectURL(image);

              return (
                <div key={index} className="relative w-20 h-20">
                  <img
                    src={imageUrl}
                    alt={`property-${index}`}
                    className="w-full h-full object-cover rounded border"
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded"
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>

          {/* All fields - with null/undefined checks */}
          <div className="mb-4">
            <label className="block text-gray-700">Unit No:</label>
            <input
              type="text"
              name="unitNo"
              value={editedProperty.unitNo || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Property Type:</label>
            <select
              name="propertyType"
              value={editedProperty.propertyType || ""}
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
              name="availableFor"
              value={editedProperty.availableFor || ""}
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
              name="propertySubtype"
              value={editedProperty.propertySubtype || ""}
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
              value={editedProperty.floor || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700">ROI:</label>
            <input
              type="text"
              name="aboutProperty"
              value={editedProperty.aboutProperty || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location:</label>
            <input
              type="text"
              name="location"
              value={editedProperty.location || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">City:</label>
            <input
              type="text"
              name="city"
              value={editedProperty.city || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Carpet Area:</label>
            <input
              type="text"
              name="carpetArea"
              value={editedProperty.carpetArea || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Car Parking:</label>
            <input
              type="text"
              name="carParking"
              value={editedProperty.carParking || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Bike Parking:</label>
            <input
              type="text"
              name="bikeParking"
              value={editedProperty.bikeParking || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">DG Backup:</label>
            <input
              type="text"
              name="dgBackup"
              value={editedProperty.dgBackup || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Cafeteria:</label>
            <input
              type="text"
              name="cafeteria"
              value={editedProperty.cafeteria || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Furnishing Status:</label>
            <select
              name="furnishing"
              value={editedProperty.furnishing || ""}
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
              value={editedProperty.ws || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Cabins:</label>
            <input
              type="text"
              name="cabin"
              value={editedProperty.cabin || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Conference Room:</label>
            <input
              type="text"
              name="conferenceRoom"
              value={editedProperty.conferenceRoom || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Meeting Room:</label>
            <input
              type="text"
              name="meetingRoom"
              value={editedProperty.meetingRoom || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Other Furniture:</label>
            <input
              type="text"
              name="otherFurniture"
              value={editedProperty.otherFurniture || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Furniture Done By:</label>
            <input
              type="text"
              name="furnitureDoneBy"
              value={editedProperty.furnitureDoneBy || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Other Amenities:</label>
            <input
              type="text"
              name="amenities"
              value={editedProperty.amenities || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Chargeable Area (in sq. ft.):</label>
            <input
              type="text"
              name="buArea"
              value={editedProperty.buArea || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Rent Per Sq. Ft.:</label>
            <input
              type="text"
              name="rentPerMonthRsPerSqFt"
              value={editedProperty.rentPerMonthRsPerSqFt || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Rent Per Month:</label>
            <input
              type="text"
              name="rentPerMonth"
              value={editedProperty.rentPerMonth || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Rent Start From:</label>
            <input
              type="text"
              name="rentStartFrom"
              value={editedProperty.rentStartFrom || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Base Price:</label>
            <input
              type="text"
              name="basePrice"
              value={editedProperty.basePrice || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Maintenance per sq. ft. (On Chargeable Area):</label>
            <input
              type="text"
              name="maintenancePersqft"
              value={editedProperty.maintenancePersqft || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Deposit:</label>
            <input
              type="text"
              name="deposit"
              value={editedProperty.deposit || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Yearly Escalation:</label>
            <input
              type="text"
              name="yearlyEscalation"
              value={editedProperty.yearlyEscalation || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Agreement Period:</label>
            <input
              type="text"
              name="agreementPeriod"
              value={editedProperty.agreementPeriod || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Lock-in Period:</label>
            <input
              type="text"
              name="lockingPeriod"
              value={editedProperty.lockingPeriod || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Property Tax:</label>
            <input
              type="text"
              name="propertyTax"
              value={editedProperty.propertyTax || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Government Taxes:</label>
            <input
              type="text"
              name="govermentTaxes"
              value={editedProperty.govermentTaxes || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">GST On Rent:</label>
            <input
              type="text"
              name="gstOnRent"
              value={editedProperty.gstOnRent || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Agreement Charges:</label>
            <input
              type="text"
              name="agreementCharges"
              value={editedProperty.agreementCharges || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Slug:</label>
            <input
              type="text"
              name="slug"
              value={editedProperty.slug || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="seoTitle"
              value={editedProperty.seoTitle || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <input
              type="text"
              name="seoDescription"
              value={editedProperty.seoDescription || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Seo Keywords:</label>
            <input
              type="text"
              name="seoKeywords"
              value={editedProperty.seoKeywords || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleSave}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ViewAllProperty = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://cfrecpune.com/cfreproperties');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setProperties(data);
        setFilteredProperties(data);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
      setError(error.message);
      setProperties([]);
      setFilteredProperties([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value?.toLowerCase() || "";
    setSearchQuery(query);

    // Filter properties safely
    const filtered = properties.filter((property) => {
      return (
        (property.buildingName || "").toLowerCase().includes(query) ||
        (property.location || "").toLowerCase().includes(query) ||
        (property.city || "").toLowerCase().includes(query) ||
        (property.propertySubtype || "").toLowerCase().includes(query) ||
        (property.propertyType || "").toLowerCase().includes(query) ||
        (property.availableFor || "").toLowerCase().includes(query)
      );
    });

    setFilteredProperties(filtered);
  };

  const handleSaveChanges = async (updatedProperty, newFiles) => {
    try {
      const formData = new FormData();
      
      // Append all property fields to FormData
      Object.entries(updatedProperty).forEach(([key, value]) => {
        // Skip multiplePropertyImages as we'll handle it separately
        if (key !== "multiplePropertyImages") {
          // Only append defined values
          if (value !== undefined && value !== null) {
            formData.append(key, value);
          }
        }
      });
      
      // Handle existing images (as string paths)
      const existingImages = updatedProperty.multiplePropertyImages
        .filter(img => typeof img === "string")
        .map(img => img.replace('https://cfrecpune.com/', ''));
      
      // Append existing images as JSON string
      formData.append("existingImages", JSON.stringify(existingImages));
      
      // Append each new file separately
      newFiles.forEach(file => {
        formData.append("propertyImages", file);
      });
      
      // Debug what we're sending
      console.log("Property ID:", updatedProperty.id);
      console.log("Existing images:", existingImages);
      console.log("New files count:", newFiles.length);
      
      const response = await fetch(`https://cfrecpune.com/cfreproperties/${updatedProperty.id}`, {
        method: "PUT",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const updatedData = await response.json();
      
      // Update local state with the server response
      setProperties(prev => 
        prev.map(p => p.id === updatedData.id ? updatedData : p)
      );
      
      setFilteredProperties(prev => 
        prev.map(p => p.id === updatedData.id ? updatedData : p)
      );
      
      setShowModal(false);
      alert("Property updated successfully!");
      
    } catch (error) {
      console.error("Error updating property:", error);
      alert("Failed to update property. Please try again.");
    }
  };

  const deletePropertyById = async (id) => {
    if (!id) return;
    
    try {
      const response = await fetch(`https://cfrecpune.com/cfreproperties/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      // Update state after successful deletion
      setProperties(prev => prev.filter(property => property.id !== id));
      setFilteredProperties(prev => prev.filter(property => property.id !== id));
      
      alert("Property deleted successfully.");
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("Failed to delete property. Please try again.");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-8">
        <div className="flex justify-center mb-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by Building Name, Location, or City"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full border rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring focus:border-blue-300"
            />
            <FaSearch className="absolute top-3 right-3 text-gray-400" />
          </div>
        </div>
        
        <h2 className="text-base font-bold leading-7 text-gray-900 text-center" style={{ fontSize: '20px' }}>
          All Properties
        </h2>
        
        {isLoading ? (
          <div className="text-center py-8">Loading properties...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">Error: {error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <div key={property.id} className="bg-white shadow-md rounded-lg p-6 border">
                  <h3 className="text-xl font-bold mb-2">{property.buildingName}</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Location:</strong> {property.location}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>City:</strong> {property.city}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Carpet Area:</strong> {property.carpetArea}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Price:</strong> {property.rentPerMonth || property.basePrice}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Available For:</strong> {property.availableFor}
                  </p>
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => handleEditClick(property)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to delete this property?")) {
                          deletePropertyById(property.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-gray-600">
                No properties found. {searchQuery ? "Try a different search term." : ""}
              </div>
            )}
          </div>
        )}

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