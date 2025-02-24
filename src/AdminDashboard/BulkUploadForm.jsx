import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import AdminNavbar from '../AdminDashboard/AdminNavbar';

const BulkUploadForm = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      setFile(null);
      setData([]);
      setColumns([]);
      return;
    }
  
    setFile(selectedFile);
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      
      // Read the first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      
      // Convert to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: "" });
  
      // Ensure only the new file data is shown
      setColumns([]);
      setData([]);
      
      if (jsonData.length > 0) {
        setColumns(Object.keys(jsonData[0]));
        setData(jsonData);
      }
    };
  
    reader.readAsBinaryString(selectedFile);
  };

  // Handle file upload to server
  const handleUpload = async () => {
    if (!file) {
      setMessage('No file selected.');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('https://cfrecpune.com/cfreproperties/bulk-upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('✅ File uploaded successfully.');
      setData([]); // Clear preview after upload
      setFile(null);
      setColumns([]);
    } catch (error) {
      setMessage('❌ Error uploading file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6 px-4">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Bulk Property Upload</h1>

          <form>
            {/* File Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="file">
                Upload Excel/CSV File:
              </label>
              <input
                type="file"
                id="file"
                accept=".xlsx, .xls, .csv"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
              {loading && <p className="text-blue-600 text-sm mt-2">Processing file...</p>}
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
            </div>

            {/* Data Preview */}
            {data.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Preview Data:</h2>
                <div className="overflow-auto max-h-64 mb-4 border border-gray-200 rounded">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-50 border-b border-gray-300">
                      <tr>
                        {columns.map((col, idx) => (
                          <th key={idx} className="text-left p-3 font-medium text-gray-600 border-r border-gray-300">
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, idx) => (
                        <tr key={idx} className={`border-b border-gray-300 ${idx % 2 === 0 ? 'bg-gray-50' : ''}`}>
                          {columns.map((col, index) => (
                            <td key={index} className="p-3 text-gray-700 border-r border-gray-300">
                              {row[col]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Upload Button */}
                <button
                  type="button"
                  className={`w-full py-2 rounded transition duration-200 ${
                    uploading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-green-700'
                  }`}
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  {uploading ? 'Uploading...' : 'Upload Properties'}
                </button>
              </>
            )}
          </form>

          {/* Success/Error Message */}
          {message && (
            <p className={`mt-4 text-center p-2 rounded text-white ${message.includes('Error') ? 'bg-red-600' : 'bg-green-700'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default BulkUploadForm;
