import { Search } from 'lucide-react';
import BannerVideo from './bannerVideo.mp4'; // Import your video
// import BannerVideo1 from './bannerVideo1.mp4';

function Hero() {
    return (
        <div className="flex justify-center items-center my-8 mx-4">
            <div className="relative w-full h-[75vh] rounded-lg overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover  bg-black bg-opacity-50"
                    autoPlay
                    loop
                    muted
                >
                    {/* <source src={BannerVideo1} type="video/mp4" /> */}
                    <source src={BannerVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-2 text-center">
                        End-to-End Commercial Real Estate Platform
                    </h1>
                    <p className="hidden md:flex text-lg sm:text-xl md:text-2xl lg:text-xl text-white mb-6 text-center">
                        Invest, Sell and Rent Commercial Real Estate backed by verified data.
                    </p>
                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full sm:w-2/3 md:w-3/4 lg:w-2/3 space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-2 w-full sm:w-auto">
                            <label htmlFor="city" className="text-sm sm:text-base lg:text-lg">
                                City
                            </label>
                            <select
                                id="city"
                                className="border p-2 rounded w-full sm:w-auto flex-1 sm:flex-none"
                            >
                                <option>Pune</option>
                                <option>Mumbai</option>
                                <option>Bangalore</option>
                                <option>Hyderabad</option>
                                {/* Add other city options here */}
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder="What locations do you prefer?"
                            className="border p-2 rounded w-full flex-1"
                        />
                        <button className="p-2 rounded border border-gray-500 w-full sm:w-auto flex justify-center items-center">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;


// import { Search } from 'lucide-react';

// function Hero() {
//     return (
//         <div className="flex justify-center items-center my-8 mx-4 md:mx-8">
//             <div
//                 className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center rounded-lg"
//                 style={{ backgroundImage: "url('/yibei-geng--UdYbiywGeg-unsplash.jpg')" }}
//             >
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12">
//                     <h1 className="text-3xl sm:text-2xl md:text-2xl lg:text-6xl text-white font-bold mb-2">
//                         End-to-End Commercial Real Estate Platform
//                     </h1>
//                     <p className="text-lg sm:text-xl md:text-2xl text-white mb-6">
//                         Invest, Sell and Rent Commercial Real Estate backed by verified data.
//                     </p>
//                     <div className="bg-white p-2 sm:p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center w-full max-w-xl">
//                         <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//                             <label htmlFor="city" className="mr-2 text-sm sm:text-base">City</label>
//                             <select id="city" className="border p-2 rounded text-sm sm:text-base">
//                                 <option>Pune</option>
//                                 <option>Mumbai</option>
//                                 <option>Bangalore</option>
//                                 <option>Hyderabad</option>
//                                 {/* Add other city options here */}
//                             </select>
//                         </div>
//                         <input
//                             type="text"
//                             placeholder="What locations do you prefer?"
//                             className="border p-2 rounded ml-0 sm:ml-4 flex-1 text-sm sm:text-base"
//                         />
//                         <button className="p-2 rounded ml-0 sm:ml-4 border-gray-900 mt-2 sm:mt-0">
//                             <Search size={20} />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Hero;
