import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetails = () => {
    const { id } = useParams();
    const [property, setProperty] = React.useState(null);

    React.useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`http://192.168.0.105:8000/addproperty/${id}`);
                setProperty(response.data);
            } catch (error) {
                console.error('Error fetching property details:', error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) return <p>Loading...</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold">{property.projectName}</h1>
            <p className="text-lg mt-2">Location: {property.location}</p>
            <p className="text-lg mt-2">RERA REGD: {property.reraRegdNo}</p>
            {/* Add more property details here */}
        </div>
    );
};

export default PropertyDetails;
