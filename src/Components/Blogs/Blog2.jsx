import React, { useState } from "react";
import axios from "axios";
import Banner from "./CFRE BLOG BANNER (72 x 20 in).jpg";
import Image from "./Blog2.jpg";
import gifmodal from "../../Components/assets/double-check.gif";

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
            Investing in Commercial Property
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Blog Heading */}
        <h1 className="md:text-4xl font-bold mb-4">
          Investing in Commercial Property in Balewadi: A Smart Choice for 2024
        </h1>

        {/* Email and Date */}
        <div className="flex items-center justify-between text-gray-600 mb-6">
          <span>By cfrerealtypune@gmail.com </span>
          <span> July 6, 2024</span>
        </div>

        {/* Blog Content */}
        {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Heading 2 Title</h2> */}
        <p className="text-base text-gray-800 mb-6">
          Balewadi, a rapidly growing locality in Pune, is swiftly establishing
          itself as a premier destination for commercial real estate
          investments. With its strategic location, vibrant business
          environment, and ongoing infrastructure enhancements, Balewadi
          presents numerous opportunities for businesses aiming to set up or
          expand their operations. As we approach 2024, investing in commercial
          property in Balewadi is becoming increasingly appealing. Here’s why
          this locality stands out as a smart choice and which types of
          properties offer the best investment potential for the coming year,
          with insights from CFRE, a leading real estate provider.
        </p>
        {/* Banner Image */}
        <div className="mb-8">
          <img
            src={Image} // Use src attribute for the image
            alt="Blog Banner"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Strategic Location and Connectivity
        </h2>
        <p className="text-base text-gray-800 mb-6">
          One of Balewadi’s standout features is its strategic location in
          northwestern Pune. The area benefits from proximity to the Pune-Mumbai
          Expressway, which ensures excellent connectivity to both major cities.
          This connectivity is crucial for businesses that require easy access
          to key markets and transportation hubs. Additionally, Balewadi’s
          nearness to Hinjewadi, home to numerous IT parks and technology
          companies, creates a steady flow of potential clients and skilled
          professionals. The locality is also well-serviced by public transport,
          including buses and local trains, further enhancing its accessibility
          for employees and customers.{" "}
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Thriving Business Environment
        </h2>
        <p className="text-base text-gray-800 mb-6">
          Balewadi has evolved into a bustling commercial hub, attracting a
          diverse range of industries. The area is home to a multitude of IT
          firms, startups, and established businesses, contributing to a dynamic
          and vibrant business ecosystem. This thriving environment translates
          into a strong demand for various types of commercial spaces, including
          office buildings, retail outlets, and service centers. For investors,
          this means tapping into a market with significant potential for growth
          and networking opportunities. The robust business activity in Balewadi
          supports high occupancy rates and offers a favorable climate for
          commercial investments.{" "}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Infrastructure Development
        </h2>
        <p className="text-base text-gray-800 mb-6">
          The ongoing infrastructure development in Balewadi is a key factor
          enhancing its attractiveness for commercial investments. The locality
          boasts well-maintained roads, modern office complexes, and
          state-of-the-art facilities. Recent and upcoming infrastructure
          projects, such as road widening, improved public amenities, and new
          commercial developments, are set to further boost the area’s appeal.
          These developments not only improve the business environment but also
          contribute to rising property values, offering long-term benefits for
          investors. As Balewadi continues to develop, investors can expect
          their property values to appreciate, making it a lucrative option for
          the future.{" "}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">High Rental Yields</h2>
        <p className="text-base text-gray-800 mb-6">
          Investors are often drawn to Balewadi due to the competitive rental
          yields offered by commercial properties in the area. The high demand
          for commercial spaces allows property owners to command favorable
          rental rates. The presence of multinational companies and high-end
          businesses further drives rental income potential. With Balewadi’s
          vibrant business scene and strategic location, investing in commercial
          property provides an opportunity for steady cash flow and substantial
          financial returns.{" "}
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
          Best Investment Options in Balewadi for 2024
        </h2>
        <h3 className="text-xl font-semibold mt-8 mb-4">1.Office Spaces </h3>
        <p className="text-base text-gray-800 mb-6">
          As Balewadi’s reputation as a business hub grows, office spaces remain
          a solid investment choice for 2024. The influx of IT companies and
          startups in the area creates a continuous demand for modern office
          environments. Properties located in established business parks or
          newly developed office complexes, equipped with amenities such as
          high-speed internet, conference rooms, and ample parking, are
          particularly attractive to businesses seeking professional workspaces.{" "}
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">2.Retail Outlets </h3>
        <p className="text-base text-gray-800 mb-6">
          The expanding residential population and the vibrant commercial
          environment in Balewadi make retail outlets a promising investment.
          With a growing community and an increasing number of residential
          projects, there is a rising demand for retail spaces catering to daily
          needs, dining, and entertainment. Investing in retail properties in
          high-traffic areas or within commercial complexes can offer
          significant returns as businesses aim to capture the local market.{" "}
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">
          3.Mixed-Use Developments{" "}
        </h3>
        <p className="text-base text-gray-800 mb-6">
          Mixed-use developments that integrate commercial and residential
          spaces are gaining popularity in Balewadi. These properties offer a
          diverse investment opportunity by combining office spaces, retail
          outlets, and residential units within the same development. Such
          developments cater to the increasing demand for convenience and
          integrated living and working environments. Investing in mixed-use
          properties can provide multiple revenue streams and attract a broad
          range of tenants.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-4">
          4.Co-Working Spaces{" "}
        </h3>
        <p className="text-base text-gray-800 mb-6">
          The rise of remote work and flexible working arrangements has spiked
          demand for co-working spaces. Balewadi’s growing business ecosystem
          and entrepreneurial spirit make it an ideal location for co-working
          facilities. Investing in or developing co-working spaces can offer a
          high return on investment, as these facilities cater to freelancers,
          startups, and small businesses seeking flexible and cost-effective
          office solutions.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-4">5.Business Parks </h3>
        <p className="text-base text-gray-800 mb-6">
          Business parks that offer a mix of office spaces, warehouses, and
          support facilities present another viable investment option. These
          parks provide a comprehensive solution for companies requiring
          well-equipped, scalable work environments. Investing in business parks
          can attract a diverse range of businesses and benefit from the area’s
          strategic location and infrastructure improvements.
        </p>

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
