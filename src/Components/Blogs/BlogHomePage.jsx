import React from 'react';
import { Link } from 'react-router-dom';
import Blog1 from './blog1.jpg';
import Blog2 from './Blog2.jpg';
import Blog3 from './Blog3.jpg';



function BlogHomePage() {
    return (
      <>
        <div className="container mx-auto text-center py-10">
          {/* Heading and View All Blogs Button */}
          <div className="flex flex-col items-center mb-6 relative">
            <h1 className="md:text-3xl text-2xl font-bold ">
              Insights from CFRE Realty
            </h1>
            <div className="absolute top-0 right-0 md:mt-4 mt-12 mr-4">
              <Link
                to="/Latestblog"
                className="px-4 py-2 text-sm rounded text-white bg-[#d84a48] hover:bg-[#9c2f2d] transition-colors"
              >
                View All Blogs
              </Link>
            </div>
          </div>
  
          {/* Paragraph */}
          <p className="text-lg text-gray-600 mb-8 mt-12">
            Stay updated with the latest articles, insights, and stories from our
            team.
          </p>
  
          {/* Card Section */}
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6">
              {/* Card 1 */}
              <div className="bg-white rounded-lg border border-gray-800 transition-shadow duration-300 overflow-hidden flex flex-col h-full w-full">
                <Link to="/commercial-property-in-baner-2">
                  <img
                    src={Blog1}
                    alt="Lovely and cozy apartment"
                    className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6 flex-grow">
                  <Link to="/commercial-property-in-baner-2">
                    <h3 className="text-2xl font-bold mb-2 h-14 hover:text-[#9c2f2d]">
                      Prime Choice for Business Growth?
                    </h3>
                  </Link>
                  <p className="text-gray-600 h-16 mb-2">
                    If you’re considering expanding or relocating your business...
                  </p>
                  <span className="text-sm block text-gray-400 mb-4">
                    1 AUG 2024 | BY CFRE REALITY PUNE
                  </span>
                </div>
                <div className="p-6 pt-0 flex justify-center">
                  <Link to="/commercial-property-in-baner-2">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm rounded text-white bg-[#d84a48] hover:bg-[#9c2f2d] transition-colors w-36"
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
  
              {/* Card 2 */}
              <div className="bg-white rounded-lg border border-gray-800 transition-shadow duration-300 overflow-hidden flex flex-col h-full w-full">
                <Link to="/commercial-property-in-balewadi">
                  <img
                    src={Blog2}
                    alt="Single room in the center of city"
                    className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6 flex-grow">
                  <Link to="/commercial-property-in-balewadi">
                    <h3 className="text-2xl font-bold mb-2 h-14 hover:text-[#9c2f2d]">
                      Investing in Commercial Property
                    </h3>
                  </Link>
                  <p className="text-gray-600 h-16 mb-2">
                    Investing in Commercial Property in Balewadi: A Smart Choice
                    for 2024
                  </p>
                  <span className="text-sm block text-gray-400 mb-4">
                    6 July 2024 | BY CFRE REALITY PUNE
                  </span>
                </div>
                <div className="p-6 pt-0 flex justify-center">
                  <Link to="/commercial-property-in-balewadi">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm rounded text-white bg-[#d84a48] hover:bg-[#9c2f2d] transition-colors w-36"
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
  
              {/* Card 3 */}
              <div className="bg-white rounded-lg border border-gray-800 transition-shadow duration-300 overflow-hidden flex flex-col h-full w-full">
                <Link to="/coworking-space">
                  <img
                    src={Blog3}
                    alt="Independent house bedroom"
                    className="w-full h-52 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6 flex-grow">
                  <Link to="/coworking-space">
                    <h3 className="text-2xl font-bold mb-2 h-14 hover:text-[#9c2f2d]">
                      Find Your Perfect Workspace
                    </h3>
                  </Link>
                  <p className="text-gray-600 h-16 mb-2">
                    Do you need a professional space to impress clients without
                    the hassle of setting...
                  </p>
                  <span className="text-sm block text-gray-400 mb-4">
                    1 AUG 2024 | BY CFRE REALITY PUNE
                  </span>
                </div>
                <div className="p-6 pt-0 flex justify-center">
                  <Link to="/coworking-space">
                    <button
                      type="button"
                      className="px-4 py-2 text-sm rounded text-white bg-[#d84a48] hover:bg-[#9c2f2d] transition-colors w-36"
                    >
                      Read more
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default BlogHomePage;
  