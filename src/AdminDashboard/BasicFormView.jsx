import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BasicFormView = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://api.cfrerealty.com/cfreproperties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties List</h1>
      <ul>
        {properties.map(property => (
          <li key={property.id}>
            <h2>{property.buildingName}</h2>
            <p>Unit No: {property.unitNo}</p>
            <p>Property Type: {property.propertyType}</p>
            <div>
              <h3>Images:</h3>
              {property.multiplePropertyImages && property.multiplePropertyImages.map((image, index) => (
                <img key={index} src={`https://api.cfrerealty.com/${image}`} alt={`Property ${index}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicFormView;
