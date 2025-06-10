import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePinDrop } from "react-icons/md";
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase, AiFillRead } from "react-icons/ai";
import Image from "./Screensh.png";
import ContactForm from "../MainBody/ContactForm";
import Header from "../Header/header";
import cpFP1 from "./cpFP1.jpg";
import cpFP2 from "./cpFP2.jpg";
import { GiElectric, GiWaterDrop } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
import { FiWifi } from "react-icons/fi"; // For Wi-Fi (Internet Connection)
import { MdOutlineSmokeFree } from "react-icons/md"; // For Fire Detection and Alarm System
import { FaParking } from "react-icons/fa"; // For Parking
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const { slug } = useParams(); // Get slug from URL params
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [showAllDetails, setShowAllDetails] = useState(false); // Added this line
  const overviewRef = useRef(null);
  const moreDetailsRef = useRef(null);
  const nearbyPropertiesRef = useRef(null);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  const toggleDetails = () => {
    setShowAllDetails(!showAllDetails);
  };

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Phone number must be exactly 10 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim())
      newErrors.message = "Message content is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://cfrecpune.com/contactform",
          formData,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log("Form submitted successfully:", response.data);
        setIsSubmitted(true);
        setFormData({ name: "", mobileNumber: "", email: "", message: "" });
        setErrors({});
        setShowModal(false);
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `https://cfrecpune.com/cfreprojects/${slug}`
        );
        setProject(response.data);
        console.log("Project Data:", response.data);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchProject();
  }, [slug]);

  if (!project) return <p>Project not found</p>;

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918149977661", "_blank");
  };

  let amenities = [];
  try {
    if (typeof project.amenities === "string") {
      amenities = JSON.parse(project.amenities);
    } else {
      amenities = project.amenities;
    }
  } catch (error) {
    console.error("Error parsing amenities:", error);
    amenities = [];
  }

  const specification = project.specification;

  return (
    <>
      <Header />

      <div className="bg-white py-10 px-6 md:px-12">
        <div className="max-w-8xl mx-auto">
          {/* Photo and Details Section */}
          <div className="relative mb-10">
            {/* Close Button */}
            <button
              onClick={() => navigate("/")}
              className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row gap-8 p-4">
              {/* Image Section */}
              <div className="relative flex-none w-full lg:w-3/5">
                <div className="relative w-full h-40 md:h-96 overflow-hidden rounded-lg shadow-lg">
                  {project?.ProjectImages?.length > 0 ? (
                    <Slider {...settings}>
                      {project.ProjectImages.map((image, index) => (
                        <div key={index}>
                          <img
                            src={`https://cfrecpune.com/${image}`}
                            alt={`Project ${index + 1}`}
                            className="w-full md:h-72 object-cover rounded-lg shadow-md"
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <img
                      src={Image}
                      alt="Project Image"
                      className="w-full md:h-72 object-cover rounded-lg shadow-md"
                    />
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="flex-1 w-full lg:w-2/5">
                <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="md:text-xl font-bold mb-2">
                      {project.projectName}
                    </h2>
                    <div className="flex flex-col mb-4">
                      {/* <h3 className="md:text-2xl font-bold text-[#d84a48]">₹{project.price} Cr</h3> */}
                      <div className="flex items-center mt-1">
                        <MdOutlinePinDrop className="text-gray-500 mr-1" />
                        <p className="text-gray-500">
                          {project.location}, {project.city}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons Section */}
                  <div className="flex space-x-2 mt-auto">
                    <button
                      className="bg-[#d84a48] text-white flex-1 md:py-2 md:px-4 rounded-md text-lg hover:bg-black-800 transition-colors duration-300"
                      onClick={handleButtonClick}
                    >
                      Contact Us
                    </button>
                    <button
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 text-white flex-none py-2 px-4 rounded-full flex items-center justify-center text-sm hover:bg-green-600 transition-colors duration-300"
                    >
                      <FaWhatsapp style={{ fontSize: "20px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Details and Amenities Section */}
          <div className="w-full bg-white border border-gray-500 shadow-md rounded-lg overflow-hidden p-6">
            <div className="mb-6">
              <h4 className="md:text-xl font-semibold mb-2">
                {" "}
                Project Details
              </h4>
              <p className="text-gray-700 md:text-base text-sm">
                {project.projectDetails}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <RiProgress2Line className="md:text-xl text-[#d84a48] mr-2" />
                <h4 className="md:text-xl font-semibold">Project Insights</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-gray-400 rounded-md">
                  <p className="text-gray-500 text-xs font-semibold">
                    Project Area:
                  </p>
                  <p className="md:text-lg font-medium">
                    {project.projectArea}Sq.ft
                  </p>
                </div>
                {/* <div className="p-4 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Area:</p>
                                    <p className="md:text-lg font-medium">{project.area}Sq.ft</p>
                                </div> */}
                {/* <div className="p-4 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Basic Price:</p>
                                    <p className="md:text-lg font-medium">{project.price} Cr</p>
                                </div> */}
                <div className="p-4 border border-gray-400 rounded-md">
                  <p className="text-gray-500 text-xs font-semibold">
                    Building Type:
                  </p>
                  <p className="md:text-lg font-medium">
                    {project.propertyType} Commercial
                  </p>
                </div>
              </div>
            </div>

            {/* Amenities Section */}
            <div className="md:mb-12 mb-4">
              <div className="flex items-center mb-4">
                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                <h4 className="md:text-xl font-semibold">Amenities</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <GiElectric className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Power Backup */}
                  <span>100% Power Backup</span>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <BsShieldLock className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Security */}
                  <span>24/7 Security</span>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <FaUtensils className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Cafeteria */}
                  <span>Common Cafeteria</span>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <AiFillRead className="md:text-xl text-[#d84a48] mr-2" />
                  <span>Grand Lobby</span>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <MdOutlineVisibility className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Glass Facade */}
                  <span>Glass Facade Building</span>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <GiWaterDrop className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Water Supply */}
                  <span>24/7 Water Supply</span>
                </div>

                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <MdOutlineSmokeFree className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Fire Detection */}
                  <span>Fire Detection and Alarm System</span>
                </div>
                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                  <FaParking className="md:text-lg text-[#d84a48] mr-2" />{" "}
                  {/* Icon for Parking */}
                  <span>Parking</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-4">
                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                <h4 className="md:text-xl font-semibold">Available Areas</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border border-gray-300">Type kjasnd</th>
                      <th className="py-2 px-4 border border-gray-300">
                        Unit Cost
                      </th>
                      <th className="py-2 px-4 border border-gray-300">Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(project.projectPlans) &&
                    project.projectPlans.length > 0 ? (
                      project.projectPlans.map((plan, index) => (
                        <tr key={index} className="text-center">
                          <td className="py-2 px-4 border border-gray-300 text-sm md:text-base">
                            {plan.type || plan.Type || "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-gray-300 text-sm md:text-base">
                            {plan.unitCost ||
                              plan.UnitCost ||
                              plan["Unit Cost"] ||
                              "N/A"}
                          </td>
                          <td className="py-2 px-4 border border-gray-300 text-sm md:text-base">
                            {plan.area ||
                              plan.CarpetArea ||
                              plan["Carpet Area"] ||
                              "N/A"}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="3"
                          className="py-4 px-4 text-center text-gray-700"
                        >
                          No project plans available
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Floor Plans Section */}
            <button onClick={() => setShowModal(true)}>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                  <h4 className="md:text-xl font-semibold">Floor Plans</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* Image Section */}
                  {project?.floorPlanImages?.length > 0 ? (
                    <div className="flex flex-wrap gap-4">
                      {project.floorPlanImages.map((image, index) => (
                        <div key={index} className="flex-shrink-0">
                          <img
                            src={`https://cfrecpune.com/${image}`}
                            alt={`Project ${index + 1}`}
                            className="w-[300px] h-[220px] object-cover rounded-lg shadow-md"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-4">
                      <img
                        src={cpFP1}
                        alt="Floor Plan 1"
                        className="w-[300px] h-[220px] object-cover rounded-md shadow-md"
                      />
                      <img
                        src={cpFP2}
                        alt="Floor Plan 2"
                        className="w-[300px] h-[220px] object-cover rounded-md shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            </button>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="bg-white p-6 rounded-lg w-full max-w-md">
                  <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="p-2 w-full border rounded"
                    />
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}

                    <input
                      type="number"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="p-2 w-full border rounded"
                    />
                    {errors.mobileNumber && (
                      <p className="text-red-500">{errors.mobileNumber}</p>
                    )}

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="p-2 w-full border rounded"
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="p-2 w-full border rounded"
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}

                    <button
                      type="submit"
                      className="bg-[#d84a48] text-white py-2 px-4 rounded hover:bg-[#ab3c3b]"
                    >
                      Send Message
                    </button>
                  </form>
                  <button
                    onClick={() => setShowModal(false)}
                    className="mt-4 text-red-500"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="md:mb-6">
              <div className="flex items-center">
                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                <h4 className="md:text-xl font-semibold">Specifications</h4>
              </div>

              <div className="p-4 rounded">
                <ul className="list-disc pl-5">
                  {project.specification &&
                    project.specification.split(",").map((spec, index) => (
                      <li key={index} className="py-1">
                        {spec.trim()}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <div className="md:mb-20 mb-4">
              <h4 className="md:text-xl font-semibold mb-2">
                Rera Register No
              </h4>
              <p className="text-gray-700 md:text-xl">{project.reraRegdNo}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {isFormVisible && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleCloseForm}
          >
            <div
              className="relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ContactForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectDetails;
