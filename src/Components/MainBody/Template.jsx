import React from 'react'

function Template() {
    return (
        <div class="flex flex-col md:flex-row bg-gray-100 p-8 rounded-lg shadow-lg mb-10">
            {/* Left Side - Buttons */}
            <div class="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 p-4">
                <p>TagLine</p>
                <button class="bg-[#d84a48] text-white font-semibold py-3 px-6 rounded-lg w-full md:w-auto hover:bg-[#9c2f2d]">
                    Office Space
                </button>
                <button class="bg-[#d84a48] text-white font-semibold py-3 px-6 rounded-lg w-full md:w-auto hover:bg-[#9c2f2d]">
                    Commercial Properties
                </button>
            </div>

            {/* Right Side - Form */}
            <div class="w-full md:w-1/2 bg-[#1C2439] p-8 rounded-lg shadow-md space-y-4">
                <h2 class="text-2xl font-bold text-white">Hey there,</h2>
                <p class="text-white">How can we serve you today?</p>

                <div class="space-y-4">
                    <label class="flex items-center space-x-3">
                        <input type="radio" name="service" class="h-5 w-5 text-blue-600" />
                        <span class="text-white">I want to buy/sell a commercial property</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="radio" name="service" class="h-5 w-5 text-blue-600" />
                        <span class="text-white">I want to lease my property out</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="radio" name="service" class="h-5 w-5 text-text-[#d84a48]" />
                        <span class="text-white">Something else</span>
                    </label>
                </div>

                <textarea class="w-full h-32 p-4 mt-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600" placeholder="Tell us your requirements..."></textarea>

                <button class="w-full bg-[#d84a48] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#9c2f2d]">
                    Submit
                </button>
            </div>
        </div>

    )
}

export default Template
