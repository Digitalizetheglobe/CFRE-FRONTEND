import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import AdminNavbar from '../AdminNavbar';
const AddNewProperty = () => {
  const [formData, setFormData] = useState({
    buildingName: "",
    aboutProperty: "",
    unitNo: "",
    propertyType: "",
    propertySubtype: "",
    floor: "",
    location: "",
    city: "",
    buArea: "",
    carpetArea: "",
    carParking: "",
    bikeParking: "",
    dgBackup: "",
    cafeteria: "",
    furnishing: "",
    meetingRoom: "",
    ws: "",
    cabin: "",
    conferenceRoom: "",
    otherFurniture: "",
    furnitureDoneBy: "",
    agreementPeriod: "",
    lockInPeriod: "",
    rentStartFrom: "",
    lockingPeriod: "",
    rentPerMonthRsPerSqFt: "",
    rentPerMonth: "",
    deposit: "",
    yearlyEscalation: "",
    rentPerSqFtBuiltUpArea: "",
    maintenancePersqft: "",
    agreementCharges: "",
    propertyTax: "",
    gstOnRent: "",
    basePrice: "",
    governmentTaxes: "",
    slug: "",
    seoKeywords: "",
    seoDescription: "",
    seoTitle: "",
    amenities: "",
    availableFor: "",
  });

  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevFormData) => {
      let updatedData = { ...prevFormData };

      if (name === "propertyImages") {
        const images = Array.from(files);
        updatedData[name] = images;
      } else {
        updatedData[name] = value;

        if (name === "buildingName") {
          updatedData.slug = value.replace(/\s+/g, "-");
        }

        const buArea = parseFloat(updatedData.buArea) || 0;
        const rentPerMonthRsPerSqFt =
          parseFloat(updatedData.rentPerMonthRsPerSqFt) || 0;

        updatedData.rentPerMonth = buArea * rentPerMonthRsPerSqFt;
      }

      return updatedData;
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
    setFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const removeImage = (url) => {
    setImages((prevImages) => prevImages.filter((img) => img.url !== url));
    setFiles((prevFiles) =>
      prevFiles.filter(
        (file, index) =>
          URL.createObjectURL(file) !== url // Match file URL to remove the correct file
      )
    );
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();

  // Append all form fields
  for (const [key, value] of Object.entries(formData)) {
    formDataToSend.append(key, value);
  }

  // Append all images/files
  for (const file of files) {
    formDataToSend.append("multiplePropertyImages", file);
  }

  // Debug: Log payload before sending
  for (let pair of formDataToSend.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  try {
    const response = await axios.post(
      "https://cfrecpune.com/cfreproperties",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Success:", response.data);

    toast.success("Property added successfully!", {
      position: "top-center",
    });

    // Reset form and state
    setFormData({
      buildingName: "",
      aboutProperty: "",
      unitNo: "",
      propertyType: "",
      propertySubtype: "",
      floor: "",
      location: "",
      city: "",
      buArea: "",
      carpetArea: "",
      carParking: "",
      bikeParking: "",
      dgBackup: "",
      cafeteria: "",
      furnishing: "",
      meetingRoom: "",
      ws: "",
      cabin: "",
      conferenceRoom: "",
      otherFurniture: "",
      furnitureDoneBy: "",
      agreementPeriod: "",
      lockInPeriod: "",
      rentStartFrom: "",
      lockingPeriod: "",
      rentPerMonthRsPerSqFt: "",
      rentPerMonth: "",
      deposit: "",
      yearlyEscalation: "",
      rentPerSqFtBuiltUpArea: "",
      maintenancePersqft: "",
      agreementCharges: "",
      propertyTax: "",
      gstOnRent: "",
      basePrice: "",
      governmentTaxes: "",
      slug: "",
      seoKeywords: "",
      seoDescription: "",
      seoTitle: "",
      amenities: "",
      availableFor: "",
    });
    setFiles([]);
    setImages([]);
  } catch (error) {
    // Handle errors
    if (error.response) {
      console.error("Error:", error.response.data);
      toast.error(
        `Failed to add property: ${error.response.data.message}`,
        {
          position: "top-center",
        }
      );
    } else {
      console.error("Error:", error.message);
      toast.error("Failed to add property. Please try again.", {
        position: "top-center",
      });
    }
  }
};

  return (
    <>
      {/* <AdminNavbar /> */}
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
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>
              
              {/* <div className="sm:col-span-3">
      <label htmlFor="propertyImages" className="block text-sm font-medium leading-6 text-gray-900">
        Property Images
      </label>
      <input
        id="propertyImages"
        name="propertyImages"
        type="file"
        multiple
                  onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
      />
    </div> */}
    <div>
      <div className="sm:col-span-3">
        <label
          htmlFor="multiplePropertyImages"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Multiple Property Images
        </label>
        <input
          id="multiplePropertyImages"
          name="multiplePropertyImages"
          type="file"
          multiple
          onChange={handleFileChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img.url}
              alt={`Uploaded ${index}`}
              className="w-[70px] h-auto rounded shadow"
            />
            <button
              onClick={() => removeImage(img.url)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              X
            </button>
          </div>
        ))}
      </div>
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
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
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
                  // required
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
                  required
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
                  required
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
                  required
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
                    // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                >
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

              <div className="sm:col-span-3">
      <label
        htmlFor="aboutProperty"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        ROI
      </label>
      <input
        id="aboutProperty" // Use consistent ID
        name="aboutProperty" // Name should match the formData key
        type="text"
        value={formData.aboutProperty} // Controlled input
        onChange={handleChange} // Update state on change
        required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
      />
    </div>
              <div className="sm:col-span-3">
  <label htmlFor="availableFor" className="block text-sm font-medium leading-6 text-gray-900">
    Available For
  </label>
  <select
    id="availableFor"
    name="availableFor"
    value={formData.availableFor}
    onChange={handleChange}
    // required
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
  >
    <option value="">Select Available For - Sale / Rent</option>
    <option value="Invest">Sale</option>
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
    // required
    onChange={handleChange}
    disabled={formData.availableFor !== "Invest"} // Disable if not "Invest"
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.availableFor !== "Invest" ? "bg-gray-200" : "bg-white" // Optional: Change background when disabled
    }`}
  >
    <option value="" disabled>Select a subtype - Pre Leased / Un Leased</option>
    <option value="preLeased">Pre Leased</option>
    <option value="unLeased">Un Leased</option>
  </select>
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
    // required
    // disabled={formData.availableFor !== "Rent"} // Disable if not "Rent"
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.availableFor !== "Rent" ? "bg-white" : "bg-white" // Optional: Change background when disabled
    }`}
  >
    <option value="">Select Furnishing Status - Furnished / Unfurnished</option>
    <option value="Furnished">Furnished</option>
    <option value="Unfurnished">Unfurnished</option>
    <option value="Coworking">Coworking / Managed Spaces</option>
  </select>
</div>

{/* Workstations */}
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
    // required
    disabled={formData.furnishing !== "Furnished"} // Disable unless "Furnished" is selected
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.furnishing !== "Furnished" ? "bg-gray-200" : "bg-white" // Change background when disabled
    }`}
  />
</div>

{/* Cabins */}
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
    // required
    disabled={formData.furnishing !== "Furnished"} // Disable unless "Furnished" is selected
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.furnishing !== "Furnished" ? "bg-gray-200" : "bg-white" // Change background when disabled
    }`}
  />
</div>

{/* Conference Room */}
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
    // required
    disabled={formData.furnishing !== "Furnished"} // Disable unless "Furnished" is selected
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.furnishing !== "Furnished" ? "bg-gray-200" : "bg-white" // Change background when disabled
    }`}
  />
</div>

{/* Meeting Room */}
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
    // required
    disabled={formData.furnishing !== "Furnished"} // Disable unless "Furnished" is selected
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.furnishing !== "Furnished" ? "bg-gray-200" : "bg-white" // Change background when disabled
    }`}
  />
</div>

{/* Other Furniture */}
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
    // required
    disabled={formData.furnishing !== "Furnished"} // Disable unless "Furnished" is selected
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.furnishing !== "Furnished" ? "bg-gray-200" : "bg-white" // Change background when disabled
    }`}
  />
</div>

{/* Furniture Done By */}
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
    // required
    disabled={formData.furnishing !== "Furnished"} // Disable unless "Furnished" is selected
    className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3 ${
      formData.furnishing !== "Furnished" ? "bg-gray-200" : "bg-white" // Change background when disabled
    }`}
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
                  // required
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
                  // required
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
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="cafeteria" className="block text-sm font-medium leading-6 text-gray-900">
                  Cafeteria
                </label>
                <select
                  id="cafeteria"
                  name="cafeteria"
                  type="text"
                  value={formData.cafeteria}
                  onChange={handleChange}
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                >
                   <option value="">Select Cafeteria </option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
                  </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="amenities" className="block text-sm font-medium leading-6 text-gray-900">
                  Other Amenities
                </label>
                <input
                  id="amenities"
                  name="amenities"
                  type="text"
                  value={formData.amenities}
                  onChange={handleChange}
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>


              {/* Commercial details */}
              <div className="sm:col-span-3">
                <label htmlFor="buArea" className="block text-sm font-medium leading-6 text-gray-900">
                  Chargeable Area (in sq. ft.)
                </label>
                <input
                  id="buArea"
                  name="buArea"
                  type="text"
                  value={formData.buArea}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="rentPerMonthRsPerSqFt" className="block text-sm font-medium leading-6 text-gray-900">
                  Rent Per Sq. Ft.
                </label>
                <input
                  id="rentPerMonthRsPerSqFt"
                  name="rentPerMonthRsPerSqFt"
                  type="text"
                  value={formData.rentPerMonthRsPerSqFt}
                  onChange={handleChange}
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="rentPerMonth" className="block text-sm font-medium leading-6 text-gray-900">
                  Rent Per Month
                </label>
                <input
                  id="rentPerMonth"
                  name="rentPerMonth"
                  type="text"
                  value={formData.rentPerMonth}
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                  readOnly
                />
              </div>


              <div className="sm:col-span-3">
                <label htmlFor="rentStartFrom" className="block text-sm font-medium leading-6 text-gray-900">
                  Rent Start From
                </label>
                <input
                  id="rentStartFrom"
                  name="rentStartFrom"
                  type="text"
                  value={formData.rentStartFrom}
                  onChange={handleChange}
                  // required
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
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="maintenancePersqft" className="block text-sm font-medium leading-6 text-gray-900">
                  Maintenance per sq. ft. (On Chargeable Area)
                </label>
                <input
                  id="maintenancePersqft"
                  name="maintenancePersqft"
                  type="text"
                  value={formData.maintenancePersqft}
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="governmentTaxes" className="block text-sm font-medium leading-6 text-gray-900">
                  Goverment Taxes
                </label>
                <input
                  id="governmentTaxes"
                  name="governmentTaxes"
                  type="text"
                  value={formData.governmentTaxes}
                  onChange={handleChange}
                  // required
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
                  // required
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
                  // required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
                />
              </div>


             
              
              {/* <h2 className="text-base font-semibold leading-7 text-gray-900 text-center mt-10">Seo Details</h2> */}


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
                  // required
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
                  // required
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
                  value={formData.seoDescription}
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
                  // required
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

      <ToastContainer />
    </>
  );
}
export default AddNewProperty;