import React, { useState } from "react";
import axios from "axios";
import Banner from "./CFRE BLOG BANNER (72 x 20 in).jpg";
import Image from "./Blog3.jpg";
import gifmodal from "../../Components/assets/double-check.gif";
import Header from '../Header/header.jsx'
function Blog1() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the current field when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Handle validation on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // Field validation
  const validateField = (name, value) => {
    let error = "";

    if (name === "phone") {
      const phoneRegex = /^[0-9]{10}$/; // Example: for a 10-digit phone number
      error = phoneRegex.test(value)
        ? ""
        : "Invalid phone number, must be 10 digits.";
    } else if (name === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      error = emailRegex.test(value)
        ? ""
        : "Please enter a valid email address.";
    }

    // Update the specific field's error
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submitting
    let allValid = true;
    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const value = formData[field];
      let error = "";

      if (field === "phone") {
        const phoneRegex = /^[0-9]{10}$/;
        error = phoneRegex.test(value)
          ? ""
          : "Invalid phone number, must be 10 digits.";
      } else if (field === "email") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        error = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
      }

      if (error) {
        allValid = false;
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (allValid) {
      console.log("Form submitted successfully:", formData);

      // Show success modal
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Please correct the errors in the form.");
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
    <Header />
      <div className="relative mb-8">
        {/* Banner Image */}
        <img
          src={Banner} // Use src attribute for the image
          alt="Blog Banner"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        {/* Text on Banner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white md:text-4xl  bg-black bg-opacity-50 px-4 py-2 rounded">
            Find Your Perfect Workspace
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Blog Heading */}
        <h1 className="md:text-4xl font-bold mb-4">
          Find Your Perfect Workspace at Amar Business Zone with CFRE Realty!
        </h1>

        {/* Email and Date */}
        <div className="flex items-center justify-between text-gray-600 mb-6">
          <span>By cfrerealtypune@gmail.com </span>
          <span> July 6, 2024</span>
        </div>

        {/* Blog Content */}
        {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Heading 2 Title</h2> */}
        <p className="text-base text-gray-800 mb-6">
          Are you a growing business seeking a dynamic and collaborative
          environment? Do you need a professional space to impress clients
          without the hassle of setting up furniture and infrastructure? Look no
          further than Amar Business Zone, Pune’s premier commercial hub,
          brought to you by CFRE Realty, your trusted partner in commercial real
          estate.
        </p>
        {/* Banner Image */}
        <div className="mb-8">
          <img
            src={Image} // Use src attribute for the image
            alt="Blog Banner"
            className="w-full h-98 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          At Amar Business Zone, we offer a variety of options to suit your
          needs:
        </h2>
        <p className="text-base text-gray-800 mb-6">
          Furnished Offices for Rent: Get started quickly and efficiently with
          our move-in-ready furnished offices. These spaces come complete with
          stylish furniture, high-speed internet, and all the amenities you need
          to focus on your business.{" "}
        </p>


        <div className="max-w-6xl mx-auto px-8 py-4 rounded-xl shadow-xl mt-20 mb-12 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://readymadeui.com/cardImg.webp"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Content */}
      <div className="relative max-w-lg mx-auto text-center z-10">
        <h4 className="text-white text-2xl font-bold mb-2 z-10">
          Navigating Every Aspect of Commercial Real Estate
        </h4>

        <form onSubmit={handleSubmit} className="space-y-6 z-10 relative">
          {/* Grid Layout for Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                placeholder="Enter your phone number"
                required
              />
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                placeholder="Enter your Email"
                required
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>
            <div>
              <input
                id="message"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full text-gray-800 bg-white text-sm px-4 py-3 border rounded outline-none"
                placeholder="Message"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-8 py-3 text-sm font-semibold text-white bg-[#d84a48] rounded hover:bg-gray-400 transition-all"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Success Message */}
      {isSubmitted && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg text-center relative z-50">
            <img
              src={gifmodal}
              alt="Verified"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Success!</h2>
            <p>Your form has been submitted successfully.</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>


        <h2 className="text-xl font-semibold mt-8 mb-4">Pros:</h2>
        <p className="text-base text-gray-800 mb-6">
          Move-in Ready: Start operating immediately without the wait or hassle
          of setting up furniture and equipment.{" "}
        </p>
        {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Ongoing Infrastructure Development</h2> */}
        <p className="text-base text-gray-800 mb-6">
          Cost-Effective: Eliminates upfront furniture costs and simplifies
          budgeting.{" "}
        </p>
        {/* <h2 className="text-2xl font-semibold mt-8 mb-4">High Rental Yields and Cost Efficiency</h2> */}
        <p className="text-base text-gray-800 mb-6">
          Professional Appearance: Provides a stylish and well-equipped space to
          impress clients.{" "}
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Cons:</h2>
        <p className="text-base text-gray-800 mb-6">
          Limited Customization: Less flexibility to personalize the workspace
          to fit your brand identity.
        </p>
        {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2> */}
        <p className="text-base text-gray-800 mb-6">
          Potentially Higher Rent: Furnished offices may come at a slight
          premium compared to unfurnished options.
        </p>
        <p className="text-base text-gray-800 mb-6">
          Unfurnished Office Space: For businesses seeking a blank canvas to
          personalize their workspace, we offer unfurnished office spaces.
          Design your dream office and create a space that reflects your brand
          identity.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Pros:</h2>
        <p className="text-base text-gray-800 mb-6">
          Complete Design Freedom: Create a space that reflects your company
          culture and brand personality.{" "}
        </p>
        <p className="text-base text-gray-800 mb-6">
          Potentially Lower Rent: May offer a more cost-effective option,
          especially for long-term leases.
        </p>
        <h2 className="text-xs font-semibold mt-8 mb-4"></h2>
        <p className="text-base text-gray-800 mb-6">
          Furniture Ownership: Provides the opportunity to invest in furniture
          that suits your specific needs.
        </p>
        <h2 className="text-xl font-semibold mt-8 mb-4">Cons:</h2>
        <p className="text-base text-gray-800 mb-6">
          Start-up Time: Requires additional time and resources to purchase and
          set up furniture and equipment.
        </p>
        <p className="text-base text-gray-800 mb-6">
          Upfront Investment: Furniture costs can add up quickly, impacting
          initial budgeting. Pros:
        </p>
        <p className="text-base text-gray-800 mb-6">
          Co-working Space Available: Enjoy the benefits of a vibrant and
          collaborative atmosphere with our co-working space options. Network
          with other professionals, access shared resources, and benefit from
          the flexibility of co-working without the commitment of a traditional
          lease.
        </p>
        <p className="text-lg text-gray-800 mb-6"></p>
        {/* Leave a Comment Section */}
        <h3 className="text-2xl font-bold mt-12 mb-6">Leave a Comment</h3>
        <form className="space-y-6">
          <div>
            <textarea
              className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your comment"
            ></textarea>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Blog1;
