import { useState } from "react";
import axios from "axios";
import Navbar from "../AdminNavbar";   

const CoworkingProperty = () => {
  const [formData, setFormData] = useState({
    coworkingName: "",
    city: "",
    location: "",
    slug: "",
    title: "",
    description: "",
    keywords: "",
    pdf: null,
    multipleImage: [],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "pdf") {
      setFormData({ ...formData, pdf: files[0] });
    } else {
      setFormData({ ...formData, multipleImage: files });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "multipleImage") {
        Array.from(formData.multipleImage).forEach((file) => {
          data.append("multipleImage", file);
        });
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("https://cfrecpune.com/coworking/add", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
      setShowPopup(true);
    } catch (error) {
      setMessage("Error adding coworking property");
    }
    setLoading(false);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setFormData({
      coworkingName: "",
      city: "",
      location: "",
      slug: "",
      title: "",
      description: "",
      keywords: "",
      pdf: null,
      multipleImage: [],
    });
  };

  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Coworking Property</h2>
      {message && <p className="mb-4 text-green-600 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium">Coworking Name</label>
          <input type="text" name="coworkingName" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.coworkingName} required />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">City</label>
            <input type="text" name="city" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.city} required />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Location</label>
            <input type="text" name="location" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.location} required />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Slug</label>
          <input type="text" name="slug" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.slug} required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input type="text" name="title" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.title} required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea name="description" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.description} required></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Keywords</label>
          <input type="text" name="keywords" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={handleChange} value={formData.keywords} required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Upload PDF (Max: 50MB)</label>
          <input type="file" name="pdf" className="w-full p-3 border rounded-lg" onChange={handleFileChange} required />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Upload Multiple Images (At least 10)</label>
          <input type="file" name="multipleImage" className="w-full p-3 border rounded-lg" onChange={handleFileChange} multiple required />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Property"}
        </button>
         </form>
         {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">{message || "Property added successfully!"}</p>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default CoworkingProperty;