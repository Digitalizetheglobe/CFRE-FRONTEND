import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard'; // Import the PropertyCard component
import Header from '../Header/header.jsx';

const Invest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [properties1, setProperties] = useState([]);
    // const [filteredProperties, setFilteredProperties] = useState([]);
    const [error, setError] = useState(null); // New state for sorting order

    const properties = [
        {
            id: 1,
            imageUrl: "/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg",
            price: 11.00,
            location: "Andheri East, Mumbai",
            rentalYield: "8.33",
            monthlyRental: "7.09"
        },
        {
            id: 2,
            imageUrl: "/Mountain Drive Office, Almaty.jpeg",
            price: 20.00,
            location: "Banglore",
            rentalYield: "8.32",
            monthlyRental: "12.20"
        },
        {
            id: 3,
            imageUrl: "/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg",
            price: 33.31,
            location: "Thane West, Thane",
            rentalYield: "6.55",
            monthlyRental: "7.72"
        },
        {
            id: 4,
            imageUrl: "/Mountain Drive Office, Almaty.jpeg",
            price: 25.20,
            location: "Andheri West, Mumbai",
            rentalYield: "7.67",
            monthlyRental: "16.10"
        },
        {
            id: 5,
            imageUrl: "/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg",
            price: 11.00,
            location: "Banglore",
            rentalYield: "8.33",
            monthlyRental: "7.09"
        },
        {
            id: 6,
            imageUrl: "/Mountain Drive Office, Almaty.jpeg",
            price: 20.00,
            location: "west, Thane",
            rentalYield: "8.32",
            monthlyRental: "12.20"
        },
        {
            id: 7,
            imageUrl: "/Related sells the _Hudson Yards Experience_ at its tech-forward sales gallery.jpeg",
            price: 33.31,
            location: "south, Thane",
            rentalYield: "6.55",
            monthlyRental: "7.72"
        },
        {
            id: 8,
            imageUrl: "/Mountain Drive Office, Almaty.jpeg",
            price: 25.20,
            location: "kothrud, Pune",
            rentalYield: "7.67",
            monthlyRental: "16.10"
        },
    ];

    const [filteredProperties, setFilteredProperties] = useState(properties1);
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get('https://cfrecpune.com/cfreproperties/');
    
                // Filter only invest properties and sort by date (latest first)
                const investProperties = response.data
                    .filter(property => property.propertySubtype === "invest")
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
                setProperties(investProperties);
                setFilteredProperties(investProperties); // Default view
            } catch (error) {
                setError('Error fetching properties. Please try again later.');
                console.error('Error fetching properties:', error);
            }
        };
        fetchProperties();
    }, []);
    

    const handleSearch = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        filterAndSortProperties(searchTerm, sortOrder);
    };

    const handleSort = (event) => {
        const sortOrder = event.target.value;
        setSortOrder(sortOrder);
        filterAndSortProperties(searchTerm, sortOrder);
    };

    const filterAndSortProperties = (searchTerm, sortOrder) => {
        let filtered = properties.filter(property =>
            property.location.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortOrder === 'asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProperties(filtered);
    };

    return (
        <>
        <Header />
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                <h1 className="text-4xl">Properties for Invest</h1>
                <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
                    <input
                        type="text"
                        placeholder="Search by location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* <select
                        value={sortOrder}
                        onChange={handleSort}
                        className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Sort by Price</option>
                        <option value="asc">Price: Low to High</option>
                        <option value="desc">Price: High to Low</option>
                    </select> */}
                    <div className="mb-6">
    <select
        className="w-full p-2 border rounded-lg focus:outline-none bg-white hover:bg-gray-200 transition duration-300"
        onChange={(e) => {
            const selectedRange = e.target.value.split("-"); // Splitting min and max
            const min = parseInt(selectedRange[0], 10);
            const max = selectedRange[1] === "Above" ? null : parseInt(selectedRange[1], 10);

            // Filter only invest properties based on carpet area
            const filtered = properties.filter(property =>
                property.carpetArea >= min && (max === null || property.carpetArea <= max)
            );
            setFilteredProperties(filtered);
        }}
    >
        <option value="">Sort by Area in sq ft.</option>
        <hr></hr>
        <option value="0-1500">0-1500</option>
        <option value="1500-3000">1500-3000</option>
        <option value="3000-5000">3000-5000</option>
        <option value="5000-10000">5000-10000</option>
        <option value="10000-Above">Above 10000</option>
    </select>
</div>

                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            <h1 className="text-4xl mb-4 mt-10">Trading Properties</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
        </>
    );
};

export default Invest;
