import React from 'react';
import Banner from './CFRE BLOG BANNER (72 x 20 in).jpg';
import Image from './Blog3.jpg'

function Blog1() {
    return (
        <>
    <div className="relative mb-8">
    {/* Banner Image */}
    <img
        src={Banner} // Use src attribute for the image
        alt="Blog Banner"
        className="w-full h-64 object-cover rounded-lg shadow-lg"
    />
    {/* Text on Banner */}
    <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl  bg-black bg-opacity-50 px-4 py-2 rounded">
        Find Your Perfect Workspace
        </h1>
    </div>
</div>
            


        <div className="max-w-4xl mx-auto p-6">
           

            {/* Blog Heading */}
            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Workspace at Amar Business Zone with CFRE Realty!</h1>

            {/* Email and Date */}
            <div className="flex items-center justify-between text-gray-600 mb-6">
                <span>By cfrerealtypune@gmail.com </span>
                <span> July 6, 2024</span>
            </div>

            {/* Blog Content */}
            {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Heading 2 Title</h2> */}
            <p className="text-base text-gray-800 mb-6">
            Are you a growing business seeking a dynamic and collaborative environment? Do you need a professional space to impress clients without the hassle of setting up furniture and infrastructure? Look no further than Amar Business Zone, Pune’s premier commercial hub, brought to you by CFRE Realty, your trusted partner in commercial real estate.

            </p>
            {/* Banner Image */}
            <div className="mb-8">
                <img
                    src={Image} // Use src attribute for the image
                    alt="Blog Banner"
                    className="w-full h-98 object-cover rounded-lg shadow-lg"
                />
            </div>



            <h2 className="text-xl font-semibold mt-8 mb-4">At Amar Business Zone, we offer a variety of options to suit your needs:</h2>
            <p className="text-base text-gray-800 mb-6">
            Furnished Offices for Rent: Get started quickly and efficiently with our move-in-ready furnished offices. These spaces come complete with stylish furniture, high-speed internet, and all the amenities you need to focus on your business.            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Pros:</h2>
            <p className="text-base text-gray-800 mb-6">
            Move-in Ready: Start operating immediately without the wait or hassle of setting up furniture and equipment.            </p>
            {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Ongoing Infrastructure Development</h2> */}
            <p className="text-base text-gray-800 mb-6">
            Cost-Effective: Eliminates upfront furniture costs and simplifies budgeting.            </p>
            {/* <h2 className="text-2xl font-semibold mt-8 mb-4">High Rental Yields and Cost Efficiency</h2> */}
            <p className="text-base text-gray-800 mb-6">
            Professional Appearance: Provides a stylish and well-equipped space to impress clients.            </p>
            <h2 className="text-xl font-semibold mt-8 mb-4">Cons:</h2>
            <p className="text-base text-gray-800 mb-6">Limited Customization: Less flexibility to personalize the workspace to fit your brand identity.
            </p>
            {/* <h2 className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2> */}
            <p className="text-base text-gray-800 mb-6">Potentially Higher Rent: Furnished offices may come at a slight premium compared to unfurnished options.
            </p>
            <p className="text-base text-gray-800 mb-6">Unfurnished Office Space: For businesses seeking a blank canvas to personalize their workspace, we offer unfurnished office spaces. Design your dream office and create a space that reflects your brand identity.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-4">Pros:</h2>
            <p className="text-base text-gray-800 mb-6">
            Complete Design Freedom: Create a space that reflects your company culture and brand personality.            </p>
            <p className="text-base text-gray-800 mb-6">
            Potentially Lower Rent: May offer a more cost-effective option, especially for long-term leases.
            </p>
            <h2 className="text-xs font-semibold mt-8 mb-4"></h2>
            <p className="text-base text-gray-800 mb-6">
            Furniture Ownership: Provides the opportunity to invest in furniture that suits your specific needs.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-4">Cons:</h2>
            <p className="text-base text-gray-800 mb-6">
            Start-up Time: Requires additional time and resources to purchase and set up furniture and equipment.
            </p>
            <p className="text-base text-gray-800 mb-6">
            Upfront Investment: Furniture costs can add up quickly, impacting initial budgeting. Pros:
            </p>
            <p className="text-base text-gray-800 mb-6">
            Co-working Space Available: Enjoy the benefits of a vibrant and collaborative atmosphere with our co-working space options. Network with other professionals, access shared resources, and benefit from the flexibility of co-working without the commitment of a traditional lease.
            </p>
            <p className="text-lg text-gray-800 mb-6">
            </p>
            {/* Leave a Comment Section */}
            <h3 className="text-2xl font-bold mt-12 mb-6">Leave a Comment</h3>
            <form className="space-y-6">
                <div>
                    <textarea
                        className="w-full h-32 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your comment"
                    ></textarea>
                </div>
                <div>
                    <input
                        type="text"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
                    >
                        Post Comment
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Blog1;
