import React, { useState } from "react";
import axios from "axios";
import Banner from "./CFRE BLOG BANNER (72 x 20 in).jpg";
import Image from "./blog1.jpg";
import { Link } from "react-router-dom";
import gifmodal from '../../Components/assets/double-check.gif'

function Blog1() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the current field when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Handle validation on blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // Field validation
  const validateField = (name, value) => {
    let error = '';

    if (name === 'phone') {
      const phoneRegex = /^[0-9]{10}$/; // Example: for a 10-digit phone number
      error = phoneRegex.test(value) ? '' : 'Invalid phone number, must be 10 digits.';
    } else if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      error = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
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
      let error = '';

      if (field === 'phone') {
        const phoneRegex = /^[0-9]{10}$/;
        error = phoneRegex.test(value) ? '' : 'Invalid phone number, must be 10 digits.';
      } else if (field === 'email') {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        error = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
      }

      if (error) {
        allValid = false;
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (allValid) {
      console.log('Form submitted successfully:', formData);

      // Show success modal
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    } else {
      console.log('Please correct the errors in the form.');
    }
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsSubmitted(false);
  };

  return (
    <>
      <div className="relative mb-8 d-flex">
        {/* Banner Image */}
        <img
          src={Banner} // Use src attribute for the image
          alt="Blog Banner"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        {/* Text on Banner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl bg-black bg-opacity-50 px-4 py-2 rounded">
            Why Commercial Property ?
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 ">
        {/* Blog Heading */}
        <h1 className="text-4xl font-bold mb-4">
          Why Commercial Property in Baner is a Prime Choice for Business
          Growth?
        </h1>

        {/* Email and Date */}
        <div className="flex items-center justify-between text-gray-600 mb-6">
          <span>By cfrerealtypune@gmail.com </span>
          <span> July 6, 2024</span>
        </div>

        {/* Blog Content */}
        {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Heading 2 Title</h2> */}
        <p className="text-base text-gray-800 mb-6">
          If you’re considering expanding or relocating your business,
          commercial property in Baner should be at the top of your list. Baner,
          a rapidly growing locality in Pune, offers a wealth of opportunities
          for businesses looking to thrive in a vibrant and strategic
          environment. As a leading service provider in the commercial real
          estate sector, Commercial Field Real Estate (CFRE) is here to explain
          why Baner is the ideal location for your next commercial property
          investment and how it can drive your business forward.
        </p>
        {/* Banner Image */}
        <div className="mb-8">
          <img
            src={Image} // Use src attribute for the image
            alt="Blog Banner"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Strategic Location and Excellent Connectivity
        </h2>
        <p className="text-base text-gray-800 mb-6">
          One of the most compelling reasons to invest in commercial property in
          Baner is its strategic location. Baner is conveniently situated just
          off the Pune-Mumbai Expressway, providing seamless connectivity to
          major business hubs and residential areas. The locality’s proximity to
          Pune’s key IT parks, such as Hinjewadi and Magarpatta, ensures that
          businesses benefit from a steady flow of potential clients and talent.
          Additionally, Baner boasts excellent public transportation options,
          including buses and local trains, enhancing accessibility for both
          employees and customers. This prime location not only facilitates
          daily business operations but also positions your company in a
          thriving commercial environment.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          A Flourishing Business Ecosystem
        </h2>
        <p className="text-base text-gray-800 mb-6">
          Baner has established itself as a bustling commercial district with a
          diverse range of industries. The area is home to numerous IT
          companies, tech startups, and established businesses, creating a
          dynamic business ecosystem. This thriving environment generates strong
          demand for high-quality commercial spaces, making Baner an attractive
          option for businesses seeking office space or retail outlets.
          Investing in commercial property in Baner means becoming part of a
          vibrant community, which can lead to valuable networking opportunities
          and business growth.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Ongoing Infrastructure Development
        </h2>
        <p className="text-base text-gray-800 mb-6">
          Infrastructure development is a key factor driving the appeal of
          commercial property in Baner. The locality benefits from
          well-maintained roads, modern office complexes, and state-of-the-art
          facilities. Current infrastructure projects, such as road widening and
          improved public amenities, are set to enhance Baner’s attractiveness
          even further. These developments contribute to higher property values
          and a more conducive business environment. For businesses looking to
          relocate or expand, Baner’s ongoing infrastructure improvements offer
          long-term benefits and operational advantages.
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

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          High Rental Yields and Cost Efficiency
        </h2>
        <p className="text-base text-gray-800 mb-6">
          Commercial property in Baner offers competitive rental rates, making
          it a cost-effective choice for businesses. The high demand for
          commercial spaces in the area ensures that businesses can secure
          leases that provide both value and visibility. This cost efficiency
          allows companies to manage their real estate expenses effectively
          while benefiting from Baner’s prime location and business-friendly
          environment. Whether you’re looking to lease office space or retail
          space, Baner provides an attractive option for optimizing your real
          estate budget.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Growing Residential Appeal and Market Potential
        </h2>
        <p className="text-base text-gray-800 mb-6">
          In addition to its commercial benefits, Baner is also a desirable
          residential area. The growing residential appeal enhances the local
          market potential, offering businesses access to a ready customer base.
          With numerous residential projects and an expanding population, there
          is increasing demand for retail and service-oriented businesses in
          Baner. Investing in commercial property in Baner aligns with this
          residential growth trend, allowing businesses to tap into a
          well-established and evolving market.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
        <p className="text-base text-gray-800 mb-6">
          Investing in commercial property in Baner represents a strategic move
          for business development and relocation. The locality’s prime
          location, thriving business ecosystem, ongoing infrastructure
          development, and competitive rental rates make it an ideal choice for
          companies looking to expand or establish a presence in Pune. With its
          growing residential appeal and dynamic market, Baner offers a wealth
          of opportunities for businesses to flourish.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          At Commercial Field Real Estate (CFRE), we specialize in helping
          businesses find the perfect commercial property in Baner. Our
          expertise and market knowledge ensure that you receive the best advice
          and solutions tailored to your needs. Whether you’re seeking to
          relocate, expand, or invest, Baner stands out as a top choice for your
          commercial property requirements.
        </p>
        <p className="text-base text-gray-800 mb-6">
          For more information on commercial property in Baner and how CFRE can
          assist with your business needs, contact us today. With our guidance,
          you can make an informed decision and position your business for
          success in one of Pune’s most promising commercial locales.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4"></h2>
        <p className="text-lg text-gray-800 mb-6"></p>
        <h2 className="text-2xl font-semibold mt-8 mb-4"></h2>
        <p className="text-lg text-gray-800 mb-6"></p>
        <h2 className="text-2xl font-semibold mt-8 mb-4"></h2>
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
