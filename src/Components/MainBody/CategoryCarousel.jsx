import React from 'react';
import Office from './officeSpace.jpg';
import { Link } from 'react-router-dom';
import Showroom from './showroom1.jpg';

const categories = [
    {
        name: 'Offices',
        description: 'Invest/Rent in pre-leased offices',
        imageUrl: Office,
        path: '/office'
    },
    {
        name: 'Showrooms',
        description: 'Invest/Rent in pre-leased showrooms',
        imageUrl: Showroom,
        path: '/Showroom'
    }
];

const CategoryCard = ({ category }) => (
    <Link to={category.path} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 max-w-xl mx-auto"> {/* Increased width */}
            <img 
                src={category.imageUrl} 
                alt={category.name} 
                className="w-full h-72 object-cover" 
            />
            <div className="p-6"> {/* Increased padding */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-1">{category.name}</h3> {/* Increased font size */}
                <p className="text-gray-600 text-base">{category.description}</p> {/* Increased font size */}
            </div>
        </div>
    </Link>
);

const CategoryDisplay = () => {
    return (
        <div className="w-full mx-auto py-12 px-6"> {/* Adjusted padding */}
            <h2 className="text-4xl font-bold text-gray-900 mb-4 ml-5">Preleased Commercial Properties</h2> {/* Increased font size */}
            <p className="text-lg text-gray-700 mb-10 ml-5"> {/* Increased font size */}
                Explore our top categories for Smart Investments in Properties.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 "> {/* Adjusted gap */}
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryDisplay;


// import React from 'react';
// import Office from './office.jpg';
// import { Link } from 'react-router-dom';
// import Showroom from './showroom.jpg';

// const categories = [
//     {
//         name: 'Offices',
//         description: 'Invest/Rent in pre-leased offices',
//         imageUrl: Office,
//         path: '/office'
//     },
//     {
//         name: 'Showrooms',
//         description: 'Invest/Rent in pre-leased showrooms',
//         imageUrl: Showroom,
//         path: '/Showroom'
//     }
// ];

// const CategoryCard = ({ category }) => (
//     <Link to={category.path} className="block flex-shrink-0  h-full mx-2 "> {/* Adjust width and margin here */}
//         <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105">
//             <img 
//                 src={category.imageUrl} 
//                 alt={category.name} 
//                 className="w-full h-48  object-cover" // Adjusted size here
//             />
//             <div className="p-4">
//                 <h3 className="text-md font-semibold text-gray-800 mb-2">{category.name}</h3>
//                 <p className="text-gray-600 text-sm">{category.description}</p>
//             </div>
//         </div>
//     </Link>
// );

// const CategoryDisplay = () => {
//     return (
//         <div className="w-full mx-auto py-10 px-5 ml-10 mb-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">Commercial Properties</h2>
//             <p className="text-base text-gray-700 mb-8">
//                 Explore our top categories for smart investments in properties.
//             </p>
//             <div className="flex overflow-x-auto space-x-4"> {/* Use flex for horizontal layout */}
//                 {categories.map((category, index) => (
//                     <CategoryCard key={index} category={category} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CategoryDisplay;
