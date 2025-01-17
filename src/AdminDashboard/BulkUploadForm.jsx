import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import AdminNavbar from '../AdminDashboard/AdminNavbar';

const BulkUploadForm = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [columns, setColumns] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      
      // Extract all columns for consistency
      const allColumns = Array.from(
        new Set(jsonData.flatMap(Object.keys)) // To get all unique columns across rows
      );
      setColumns(allColumns);

      // Normalize data to ensure every row has all columns
      const normalizedData = jsonData.map(row => {
        const normalizedRow = {};
        allColumns.forEach(col => {
          normalizedRow[col] = row[col] || 'N/A'; // Default missing data to "N/A"
        });
        return normalizedRow;
      });

      setData(normalizedData);
    };
    reader.readAsBinaryString(selectedFile);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    // admin bulk upload
    try {
      const response = await axios.post('https://cfrecpune.com/cfreproperties/bulk-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('File uploaded successfully.');
    } catch (error) {
      setMessage('Error uploading file. Please try again.');
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-6 px-4">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-7xl">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-700">Bulk Property Upload</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="file">Upload Excel/CSV File:</label>
              <input
                type="file"
                id="file"
                accept=".xlsx, .xls, .csv"
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
            </div>
            {data.length > 0 && (
              <>
                <h2 className="text-xl font-semibold mb-2 text-gray-700">Preview Data:</h2>
                <div className="overflow-auto max-h-64 mb-4 border border-gray-200 rounded">
                  <table className="min-w-full bg-white border border-gray-300">
                    <thead className="bg-gray-50 border-b border-gray-300">
                      <tr>
                        {columns.map((col, idx) => (
                          <th
                            key={idx}
                            className="text-left p-3 font-medium text-gray-500 border-r border-gray-300"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-300">
                          {columns.map((col, index) => (
                            <td
                              key={index}
                              className="p-3 text-gray-700 border-r border-gray-300"
                            >
                              {row[col]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  type="button"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-green-700  transition duration-200"
                  onClick={handleUpload}
                >
                  Upload Properties
                </button>
              </>
            )}
          </form>
          {message && <p className="mt-4 text-center text-white bg-green-700">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default BulkUploadForm;
 