import React, { useState, useRef } from "react";
import Header from "../Header/header";
import { FaCalculator } from "react-icons/fa";
import FAQs from "../../FAQs";

const EmiCalculator = () => {
    const [loanAmount, setLoanAmount] = useState(2000000);
    const [loanTenure, setLoanTenure] = useState(5);
    const [interestRate, setInterestRate] = useState(8.5);
    const [emi, setEmi] = useState(0);
    const [interestAmount, setInterestAmount] = useState(0);

    const inputSectionRef = useRef(null);

    const calculateEMI = () => {
        let principal = loanAmount;
        let rateOfInterest = interestRate / 12 / 100; // monthly interest
        let numberOfMonths = loanTenure * 12;

        let emiAmount =
            (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfMonths)) /
            (Math.pow(1 + rateOfInterest, numberOfMonths) - 1);

        let totalInterest = emiAmount * numberOfMonths - principal;

        setEmi(emiAmount.toFixed(2));
        setInterestAmount(totalInterest.toFixed(2));
    };

    const handleGetStarted = () => {
        if (inputSectionRef.current) {
            inputSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Header />

            <div className="bg-gray-800 w-full font-[sans-serif]">
                <div className="grid md:grid-cols-2 items-center md:max-h-[475px] overflow-hidden">
                    <div className="p-8">
                        <h1 className="sm:text-4xl text-2xl font-bold text-white">EMI <span className="text-[#d84a48]">Calculator</span></h1>
                        <p className="mt-4 text-sm text-gray-300">Commercial Property Ownership Made Easier with Smart Financing</p>
                        <p className="mt-2 text-sm text-gray-300">"Commercial Property Ownership Made Easier with Smart Financing" emphasizes how innovative financing solutions simplify acquiring and managing commercial real estate...</p>
                        <button 
                            type="button"
                            onClick={handleGetStarted}
                            className="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-[#d84a48] hover:bg-[#9c2f2d]">
                            Get started
                        </button>
                    </div>
                    <img src="https://readymadeui.com/team-image.webp" className="w-full h-full object-cover shrink-0" />
                </div>
            </div>

            <div ref={inputSectionRef} className="max-w-5xl mx-auto my-10 p-8 bg-white rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Input Section */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                    <div className="flex items-center mb-6 space-x-3">
                        <FaCalculator className="text-[#d84a48] text-4xl" />
                        <h2 className="text-3xl font-bold text-gray-800">EMI Calculator</h2>
                    </div>

                    {/* Loan Amount Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Loan Amount</label>
                        <input
                            type="number"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    {/* Loan Tenure Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Loan Tenure (years)</label>
                        <select
                            value={loanTenure}
                            onChange={(e) => setLoanTenure(Number(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                        >
                            <option value="5">5 years</option>
                            <option value="10">10 years</option>
                            <option value="15">15 years</option>
                            <option value="20">20 years</option>
                        </select>
                    </div>

                    {/* Interest Rate Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-600">Interest Rate (%)</label>
                        <input
                            type="number"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <button
                        onClick={calculateEMI}
                        className="w-full bg-[#d84a48] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#9c2f2d] transition duration-300"
                    >
                        Recalculate Your EMI
                    </button>
                </div>

                {/* EMI Details Section */}
                <div className="p-8 bg-indigo-50 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold mb-8 text-center text-[#d84a48]">
                        EMI Amount: <span className="text-green-600">₹{emi.toLocaleString('en-IN')}</span>
                    </h2>

                    <div className="flex justify-center items-center space-x-16 mb-8">
                        {/* Loan Amount */}
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 flex items-center justify-center rounded-full mb-2">
                                <span className="text-xl font-bold text-green-700">₹{loanAmount.toLocaleString('en-IN')}</span>
                            </div>
                            <span className="text-base font-bold text-gray-700">Loan Amount</span>
                        </div>

                        {/* Interest Amount */}
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 flex items-center justify-center rounded-full mb-2">
                                <span className="text-xl font-bold text-yellow-700">₹{interestAmount.toLocaleString('en-IN')}</span>
                            </div>
                            <span className="text-base font-bold text-gray-700">Interest Amount</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-inner">
                        <h3 className="text-base font-semibold mb-4 text-[#d84a48]">Empowering Business Growth with Affordable EMI Plans</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Offers from 14+ Banks</li>
                            <li>Lowest Interest Rates</li>
                            <li>Highest Loan Value</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FAQs/>
        </>
    );
};

export default EmiCalculator;
