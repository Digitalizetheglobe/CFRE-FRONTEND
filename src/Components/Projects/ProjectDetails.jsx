import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlinePinDrop } from 'react-icons/md';
import { RiProgress2Line } from "react-icons/ri";
import { AiFillDatabase, AiFillRead } from "react-icons/ai";
import Image from './ABZ-1-1.jpg';
import ContactForm from '../MainBody/ContactForm';
import Header from '../Header/header';
import cpFP1 from './cpFP1.jpg';
import cpFP2 from './cpFP2.jpg';
import { GiElectric, GiWaterDrop } from 'react-icons/gi';
import { FaUtensils } from 'react-icons/fa';
import { BsShieldLock } from 'react-icons/bs';
import { MdOutlineVisibility } from 'react-icons/md';


const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(true);
    };

    const handleCloseForm = () => {
        setFormVisible(false);
    };

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`https://cfrecpune.com/projects/${id}`);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project:', error);
            }
        };
        fetchProject();
    }, [id]);

    if (!project) return <p>Project not found</p>;

    // Handle WhatsApp button click
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/918149977661', '_blank');
    };

    // Parse the amenities JSON string
    const amenities = JSON.parse(JSON.parse(project.amenities));
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
                            onClick={() => navigate('/')}
                            className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            &times;
                        </button>

                        <div className="flex flex-col lg:flex-row gap-8 p-4">
                            {/* Image Section */}
                            <div className="relative flex-none w-full lg:w-3/5">
                                <div className="relative w-full h-40 md:h-96 overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                                        src={Image}
                                        alt="Project"
                                    />
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="flex-1 w-full lg:w-2/5">
                                <div className="bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden p-6 flex flex-col justify-between h-full">
                                    <div>
                                        <h2 className="text-xl font-bold mb-2">{project.projectName}</h2>
                                        <div className="flex flex-col mb-4">
                                            <h3 className="text-2xl font-bold text-[#d84a48]">₹{project.price}</h3>
                                            <div className="flex items-center mt-1">
                                                <MdOutlinePinDrop className="text-gray-500 mr-1" />
                                                <p className="text-gray-500">{project.location}, {project.city}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Buttons Section */}
                                    <div className="flex space-x-2 mt-auto">
                                        <button
                                            className="bg-[#d84a48] text-white flex-1 py-2 px-4 rounded-md text-lg hover:bg-black-800 transition-colors duration-300"
                                            onClick={handleButtonClick}
                                        >
                                            Contact Us
                                        </button>
                                        <button
                                            onClick={handleWhatsAppClick}
                                            className="bg-green-500 text-white flex-none py-2 px-4 rounded-full flex items-center justify-center text-sm hover:bg-green-600 transition-colors duration-300"
                                        >
                                            <FaWhatsapp style={{ fontSize: '20px' }} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Details and Amenities Section */}
                    <div className="w-full bg-white border border-gray-500 shadow-md rounded-lg overflow-hidden p-6">
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold mb-2">About Project</h4>
                            <p className="text-gray-700">
                                This commercial project is designed to meet the dynamic needs of modern businesses. Located in a prime business district, it offers excellent visibility and accessibility.
                            </p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <RiProgress2Line className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="text-xl font-semibold">Project Insights</h4>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-4 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Project Area:</p>
                                    <p className="text-lg font-medium">{project.projectArea}</p>
                                </div>
                                <div className="p-4 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Area:</p>
                                    <p className="text-lg font-medium">{project.area}</p>
                                </div>
                                <div className="p-4 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Basic Price:</p>
                                    <p className="text-lg font-medium">{project.price}</p>
                                </div>
                                <div className="p-4 border border-gray-400 rounded-md">
                                    <p className="text-gray-500 text-xs font-semibold">Building Type:</p>
                                    <p className="text-lg font-medium">{project.propertyType} Commercial</p>
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
                                    <GiElectric className="text-lg text-[#d84a48] mr-2" /> {/* Icon for Power Backup */}
                                    <span>100% Power Backup</span>
                                </div>
                                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                                    <BsShieldLock className="text-lg text-[#d84a48] mr-2" /> {/* Icon for Security */}
                                    <span>24/7 Security</span>
                                </div>
                                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                                    <FaUtensils className="text-lg text-[#d84a48] mr-2" /> {/* Icon for Cafeteria */}
                                    <span>Common Cafeteria</span>
                                </div>
                                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                                    <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                                    <span>Grand Lobby</span>
                                </div>
                                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                                    <MdOutlineVisibility className="text-lg text-[#d84a48] mr-2" /> {/* Icon for Glass Facade */}
                                    <span>Glass Facade Building</span>
                                </div>
                                <div className="flex items-center p-4 bg-gray-100 rounded shadow-md">
                                    <GiWaterDrop className="text-lg text-[#d84a48] mr-2" /> {/* Icon for Water Supply */}
                                    <span>24/7 Water Supply</span>
                                </div>
                            </div>
                        </div>


                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="text-xl font-semibold">Available Areas</h4>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="py-2 px-4 border border-gray-300">Type</th>
                                            <th className="py-2 px-4 border border-gray-300">Unit Cost</th>
                                            <th className="py-2 px-4 border border-gray-300">Area</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project.projectPlans && project.projectPlans.length > 0 ? (
                                            project.projectPlans.map((plan, index) => (
                                                <tr key={index} className="text-center">
                                                    <td className="py-2 px-4 border border-gray-300">{plan.Type}</td>
                                                    <td className="py-2 px-4 border border-gray-300">{plan["Unit Cost"]}</td>
                                                    <td className="py-2 px-4 border border-gray-300">{plan["Carpet Area"]}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="3" className="py-4 px-4 text-center text-gray-700">
                                                    No project plans available
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Floor Plans Section */}
                        <div className="mb-6">
                            <div className="flex items-center mb-4">
                                <AiFillRead className="text-xl text-[#d84a48] mr-2" />
                                <h4 className="text-xl font-semibold">Floor Plans</h4>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Image 1 */}
                                <div className="relative w-full md:w-1/2">
                                    <img src={cpFP1} alt="Floor Plan 1 " className="w-full h-56 rounded-md shadow-md blur-sm" />
                                </div>
                                {/* Image 2 */}
                                <div className="relative w-full md:w-1/2">
                                    <img src={cpFP2} alt="Floor Plan 2" className="w-full h-56 rounded-md shadow-md blur-sm" />
                                </div>
                            </div>
                        </div>



                        <div className="md:mb-6 ">
    <div className="flex items-center ">
        <AiFillRead className="text-xl text-[#d84a48] mr-2" />
        <h4 className="md:text-xl font-semibold">Specifications</h4>
    </div>

    <div className=" p-4 rounded ">
        <ul className="list-disc pl-5">
            {Object.entries(specification).map(([category, details]) => (
                <li key={category} className="py-1">
                    <span className="font-medium">{category}:</span> {details}
                </li>
            ))}
        </ul>
    </div>
</div>


                        <div className="md:mb-20 mb-4">
                            <h4 className="text-xl font-semibold mb-2">Rera Register No</h4>
                            <p className="text-gray-700 text-xl">{project.reraRegdNo}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                {isFormVisible && (
                    <div
                        className='fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-50'
                        onClick={handleCloseForm}
                    >
                        <div
                            className='relative bg-white p-10 rounded-lg shadow-lg max-w-[500px] w-full'
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
