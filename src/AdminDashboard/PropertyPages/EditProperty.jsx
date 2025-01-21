import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProperty = ({ propertyId, onClose }) => {
    const [propertyData, setPropertyData] = useState({});
    const [editedProperty, setEditedProperty] = useState({});
    const [projectImages, setProjectImages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPropertyDetails();
    }, [propertyId]);

    const fetchPropertyDetails = async () => {
        try {
            const response = await axios.get(`https://cfrecpune.com/cfreproperties/${propertyId.id}`);
            setPropertyData(response.data);
            setEditedProperty(response.data);
            setProjectImages(response.data.propertyImages || []);
        } catch (error) {
            alert('Failed to fetch property details. Please try again later.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProperty({ ...editedProperty, [name]: value });
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setProjectImages([...projectImages, ...files]);
    };

    const handleProjectPlansChange = (e, index, field) => {
        const updatedPlans = [...editedProperty.projectPlans];
        updatedPlans[index][field] = e.target.value;
        setEditedProperty({ ...editedProperty, projectPlans: updatedPlans });
    };

    const addProjectPlan = () => {
        setEditedProperty({
            ...editedProperty,
            projectPlans: [...(editedProperty.projectPlans || []), { Type: '', UnitCost: '', CarpetArea: '' }],
        });
    };

    const removeProjectPlan = (index) => {
        const updatedPlans = editedProperty.projectPlans.filter((_, i) => i !== index);
        setEditedProperty({ ...editedProperty, projectPlans: updatedPlans });
    };

    const handleSave = async () => {
        setLoading(true);
        const formData = new FormData();
        Object.keys(editedProperty).forEach((key) => {
            if (key === 'propertyImages') {
                projectImages.forEach((img) => {
                    if (typeof img !== 'string') formData.append('propertyImages', img);
                });
            } else if (key === 'projectPlans') {
                formData.append(key, JSON.stringify(editedProperty[key]));
            } else {
                formData.append(key, editedProperty[key]);
            }
        });

        try {
            await axios.put(`https://cfrecpune.com/cfreproperties/${propertyId.id}`, formData);
            alert('Property updated successfully!');
            onClose();
        } catch (error) {
            alert('Failed to update property. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-lg max-h-screen overflow-y-auto">
                <h2 className="text-xl font-bold text-center mb-4">Edit Property Details</h2>

                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700">RERA Registration No:</label>
                        <input
                            type="text"
                            name="reraRegdNo"
                            value={editedProperty.reraRegdNo || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Other input fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700">Project Name:</label>
                        <input
                            type="text"
                            name="projectName"
                            value={editedProperty.projectName || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Project Details:</label>
                        <input
                            type="text"
                            name="projectDetails"
                            value={editedProperty.projectDetails || ''}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Repeat for other fields */}

                    <div className="mb-4">
                        <label className="block text-gray-700">Property Images:</label>
                        <input
                            type="file"
                            name="propertyImages"
                            onChange={handleFileChange}
                            multiple
                            className="w-full p-2 border rounded"
                        />
                        <div className="mt-2">
                            {projectImages.map((img, index) => (
                                <div key={index} className="relative w-20 h-20 mr-2 inline-block">
                                    <img
                                        src={typeof img === 'string' ? img : URL.createObjectURL(img)}
                                        alt="Property"
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                            ))}
                        </div>
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

                <div className="mt-6 text-center">
                    <button
                        onClick={handleSave}
                        disabled={loading}
                        className={`bg-[#d84a48] hover:bg-[#c34543] text-white px-4 py-2 rounded ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded ml-4"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProperty;
