import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faUpload, faBuilding, faEye, faComments } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../AdminDashboard/AdminNavbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6 text-gray-800 text-center">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Add Property Manually */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faPlusCircle} size="3x" className="text-[#d84a48] mb-4 " />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Property Manually</h2>
              <p className="text-gray-600 mb-4">Add new property details manually to the database.</p>
              <Link 
                to="/addnewproperty" 
                className="inline-block bg-[#d84a48] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                Go to Form
              </Link>
            </div>

            {/* Card 2: Bulk Property */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faUpload} size="3x" className="text-[#d84a48] mb-4 " />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Bulk Property</h2>
              <p className="text-gray-600 mb-4">Upload multiple property details in one go.</p>
              <Link 
                to="/bulkproperty" 
                className="inline-block bg-[#d84a48] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                Upload Bulk Data
              </Link>
            </div>

            {/* Card 3: Add Project */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faBuilding} size="3x" className="text-[#d84a48] mb-4 " />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Project</h2>
              <p className="text-gray-600 mb-4">Create and manage new projects for properties.</p>
              <Link 
                to="/addnewproject" 
                className="inline-block bg-[#d84a48] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                Add New Project
              </Link>
            </div>

            {/* Card 4: View All Property */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faEye} size="3x" className="text-[#d84a48] mb-4 " />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">View All Property</h2>
              <p className="text-gray-600 mb-4">View and manage all listed properties.</p>
              <Link 
                to="/ViewAllProperty" 
                className="inline-block bg-[#d84a48] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                View All
              </Link>
            </div>

            {/* Card 5: View All Projects */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faEye} size="3x" className="text-[#d84a48] mb-4 " />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">View All Projects</h2>
              <p className="text-gray-600 mb-4">View and manage all listed projects.</p>
              <Link 
                to="/ViewAllProjects" 
                className="inline-block bg-[#d84a48] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                View All
              </Link>
            </div>

            {/* Card 6: Latest Enquiry */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <FontAwesomeIcon icon={faComments} size="3x" className="text-[#d84a48] mb-4 " />
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Latest Enquiry</h2>
              <p className="text-gray-600 mb-4">View the latest property inquiries.</p>
              <Link 
                to="/enquirydetails" 
                className="inline-block bg-[#d84a48] text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
