import React from 'react'
import Header from './Components/Header/header';
import { Helmet } from 'react-helmet-async';

function FAQs() {
  return (
    <>
    <Header/>
    <Helmet>
                    <title>FAQs | CFRE Realty - Real Estate Solutions for Corporate Offices & Retail Spaces</title>
                    <meta name="description" content="Explore frequently asked questions about real estate services offered by CFRE Realty. Learn more about corporate office spaces, retail properties for rent and sale, investment opportunities, and client services. Find all the answers you need for your property solutions." />
                    <meta property="og:description" content="Explore frequently asked questions about real estate services offered by CFRE Realty. Learn more about corporate office spaces, retail properties for rent and sale, investment opportunities, and client services. Find all the answers you need for your property solutions." />
                    <meta property="og:url" content="https://www.cfrerealty.com/fAQs" />
                    </Helmet>
    <section class="bg-[#1D1D1D] text-gray-100 py-32 min-h-screen">
    <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <h2 class="mb-12 md:text-4xl text-xl font-bold leadi text-center ">Frequently Asked Questions</h2>
      <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. How much do I have to pay to list my property on CFRE?
          </summary>
          <div class="px-4 pb-4">
            <p>It is completely free to list your property on CFRE. We only charge a brokerage fee of 2% + GST once we successfully sell your property on our marketplace, incentivising us to sell faster and get the best deal possible for you.</p>
          </div>
        </details>
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. Can I list my property on CFRE?</summary>
          <div class="px-4 pb-4">
            <p>Yes! Our marketplace allows owners of commercial properties (office, retail, or land) to list their property. Simply fill out our connect form, and our expert will reach out to you to explain the listing process.</p>
          </div>
        </details>
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. How is CFRE different from other brokers?</summary>
          <div class="px-4 pb-4">
            <p>CFRE distributes your property to more than 1500 verified investors, leading brokers, wealth management firms and financial advisors. Through our ecosystem we generate multiple businesses, a variety of offers, and the best price for your property. Due to our extensive network of investors, we are able to close our deals within weeks rather than months!</p>
          </div>
        </details>
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. What types of commercial properties can I list on your platform?</summary>
          <div class="px-4 pb-4">
            <p>Our platform accepts a wide range of commercial properties, including office spaces, retail stores, industrial warehouses, and land for development. Whether you're looking to buy, sell, or lease, we cater to various types of commercial real estate.</p>
          </div>
        </details>
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. How do I list my commercial property with you?</summary>
          <div class="px-4 pb-4">
            <p>To list your property, simply fill out our online property listing form with details about the property, including location, size, and any other relevant information. Once submitted, a member of our team will contact you to finalize the listing and discuss the next steps.</p>
          </div>
        </details>
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. Do you offer any services for property management?</summary>
          <div class="px-4 pb-4">
            <p>While our primary focus is on buying, selling, and leasing commercial properties, we can connect you with trusted property management services through our network. Please reach out for recommendations and referrals.</p>
          </div>
        </details>
        <details>
          <summary class="py-2 outline-none cursor-pointer focus:underline">Q. What makes your platform different from other commercial real estate websites?</summary>
          <div class="px-4 pb-4">
            <p>Our platform offers a unique combination of cutting-edge technology and personalized service. We leverage advanced analytics and a vast network of industry professionals to ensure that your property receives maximum exposure. Additionally, our dedicated team provides expert guidance throughout the entire process, from listing to closing.</p>
          </div>
        </details>
      </div>
    </div>
  </section>
  </>
  
  )
}

export default FAQs;
