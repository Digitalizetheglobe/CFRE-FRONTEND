import React, { useState } from 'react';

function EditPropertyForm({ initialData, onSubmit }) {
  const [editedProperty, setEditedProperty] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setEditedProperty((prev) => ({ ...prev, multiplePropertyImages: files }));
  };

  const handleRemoveImage = (index) => {
    setEditedProperty((prev) => ({
      ...prev,
      multiplePropertyImages: prev.multiplePropertyImages.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in editedProperty) {
      if (key === 'multiplePropertyImages' && Array.isArray(editedProperty[key])) {
        editedProperty[key].forEach((file) => formData.append('multiplePropertyImages', file));
      } else {
        formData.append(key, editedProperty[key]);
      }
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-screen-lg max-h-screen overflow-y-auto">
        <h2 className="text-xl font-bold text-center mb-4">Edit Property Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Dynamic form fields */}
            {Object.keys(initialData).map((key) => {
              if (key === 'multiplePropertyImages') {
                return (
                  <div key={key} className="mb-4">
                    <label className="block text-gray-700">Property Images:</label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="w-full p-2 border rounded"
                    />
                    <div className="flex flex-wrap gap-4 mt-2">
                      {Array.isArray(editedProperty[key]) &&
                        editedProperty[key].map((image, index) => {
                          const imageUrl =
                            image instanceof File ? URL.createObjectURL(image) : image;
                          return (
                            <div key={index} className="relative">
                              <img
                                src={imageUrl}
                                alt={`property-${index}`}
                                className="border rounded"
                                style={{
                                  width: '70px',
                                  height: '70px',
                                  objectFit: 'cover',
                                }}
                              />
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(index)}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                              >
                                x
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              }
              return (
                <div key={key} className="mb-4">
                  <label className="block text-gray-700">{key}:</label>
                  <input
                    type="text"
                    name={key}
                    value={editedProperty[key] || ''}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPropertyForm;
