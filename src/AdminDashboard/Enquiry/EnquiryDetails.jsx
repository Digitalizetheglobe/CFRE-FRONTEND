import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSound from 'use-sound'; // Import useSound
import AdminNavbar from '../AdminNavbar';
import notificationSound from '../../Components/assets/ringtone/notification.mp3'; // Import your notification sound

const EnquiryDetails = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [play] = useSound(notificationSound);
  const [expandedEnquiries, setExpandedEnquiries] = useState({});

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get('https://cfrecpune.com/contactforms');
        const sortedEnquiries = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setEnquiries(sortedEnquiries);
        setLoading(false);
        play(); // Play sound when enquiries are fetched
      } catch (err) {
        setError('Failed to fetch enquiries');
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [play]);

  // Render loading or error messages
  if (loading) return <p className="text-center text-lg text-[#d84a48]">Loading enquiries...</p>;
  if (error) return <p className="text-center text-[#d84a48]">{error}</p>;

  // Handle individual delete
  const handleDelete = (id) => {
    // Call the API or logic to delete the specific enquiry by id
    setEnquiries((prevEnquiries) => prevEnquiries.filter(enquiry => enquiry.id !== id));
  };

  // Handle delete all
  const handleDeleteAll = () => {
    // Call the API or logic to delete all enquiries
    setEnquiries([]); // You might want to add a confirmation prompt here
  };

  // Toggle the message visibility
  const toggleMessageVisibility = (id) => {
    setExpandedEnquiries((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
  <h2 className="text-2xl font-bold text-center text-[#d84a48]">
    Enquiry Details
  </h2>
  
  {/* Delete All Button */}
  <button
    onClick={handleDeleteAll}
    className="bg-[#d84a48] text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
  >
    Delete All Enquiries
  </button>
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {enquiries.map((enquiry) => {
            const isExpanded = expandedEnquiries[enquiry.id];
            const messagePreview = enquiry.message.length > 100 ? `${enquiry.message.slice(0, 100)}...` : enquiry.message;

            return (
              <div key={enquiry.id} className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#d84a48] mb-2">{enquiry.name}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium text-gray-800">Email:</span> {enquiry.email}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium text-gray-800">Mobile:</span> {enquiry.mobileNumber}
                </p>
                
                <p className="text-gray-700 mb-4">
                  <span className="font-medium text-gray-800">Message:</span> {isExpanded ? enquiry.message : messagePreview}
                </p>

                {/* See More / See Less Button */}
                {enquiry.message.length > 100 && (
                  <button
                    onClick={() => toggleMessageVisibility(enquiry.id)}
                    className="text-[#d84a48] hover:text-[#c34543] transition duration-300 text-sm"
                    aria-label={isExpanded ? 'See less message' : 'See more message'}
                  >
                    {isExpanded ? 'See Less' : 'See More'}
                  </button>
                )}

                <p className="text-gray-500 text-sm mt-4">
                  <span className="font-medium"></span> {new Date(enquiry.createdAt).toLocaleString()}
                </p>
                
                {/* Delete Button for individual enquiry */}
                <button
                  onClick={() => handleDelete(enquiry.id)}
                  className="mt-4 bg-[#d84a48] text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  aria-label={`Delete enquiry from ${enquiry.name}`}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EnquiryDetails;
