// import React from 'react';

// const Card = ({ title, description, imageUrl, button1Text, button2Text }) => {
//     return (
//         <div
//             className="p-8 rounded-lg flex flex-col justify-between text-white bg-cover bg-center mt-15"
//             style={{
//                 backgroundImage: `url(${imageUrl})`,
//                 width: '100%', // Adjust width as needed
//                 height: '400px', // Adjust height as needed
//                 backgroundSize: 'cover', // Ensures the image covers the container
//             }}
//         >
//             <div>
//                 <h2 className="text-2xl font-bold mb-2">{title}</h2>
//                 <p className="text-lg mb-4">{description}</p>
//             </div>
//             <div className="flex space-x-4">
//                 <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-full">
//                     {button1Text}
//                 </button>
//                 <button className="bg-white text-blue-500 font-semibold px-4 py-2 rounded-full">
//                     {button2Text}
//                 </button>
//             </div>
//         </div>
//     );
// };

// const SellProperty = () => {
//     return (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
//             <Card
//                 title="Office Spaces That Work for You"
//                 imageUrl="/path-to-your-image1.jpg" // Update the image URL
//                 button1Text="List Your Property"
//                 // button2Text="View Options"
//             />
//             <Card
//                 title="Prime Office Spaces that Perfectly Fit Your Requirements"
//                 description="Choose from a curated list of office spaces and find an ideal space for your business operations."
//                 imageUrl="/path-to-your-image2.jpg" // Update the image URL
//                 // button1Text="List Your Property"
//                 // button2Text="View Options"
//             />
//         </div>
//     );
// };

// export default SellProperty;
