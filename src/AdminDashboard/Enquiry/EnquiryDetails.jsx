import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSound from 'use-sound'; // Import useSound
import AdminNavbar from '../AdminNavbar'
import notificationSound from '../../Components/assets/ringtone/notification.mp3'; // Import your notification sound

const EnquiryDetails = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use useSound hook to handle sound playback
  const [play] = useSound(notificationSound);

  useEffect(() => {
    // Fetch enquiry data from the API
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get('https://cfrecpune.com/contactforms');
        const sortedEnquiries = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by latest
        setEnquiries(sortedEnquiries); // Set sorted enquiries data
        setLoading(false); // Turn off loading indicator

        // Play notification sound when data is successfully fetched
        play();
      } catch (err) {
        setError('Failed to fetch enquiries');
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [play]);

  if (loading) return <p className="text-center text-lg text-blue-600">Loading enquiries...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <>
    <AdminNavbar />
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8">Enquiry Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {enquiries.map((enquiry) => (
          <div key={enquiry.id} className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{enquiry.name}</h3>
            <p className="text-gray-700 mb-2">
              <span className="font-medium text-gray-800">Email:</span> {enquiry.email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium text-gray-800">Mobile:</span> {enquiry.mobileNumber}
            </p>
            <p className="text-gray-700 mb-4">
              <span className="font-medium text-gray-800">Message:</span> {enquiry.message}
            </p>
            <p className="text-gray-500 text-sm">
              <span className="font-medium"></span> {new Date(enquiry.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default EnquiryDetails;
