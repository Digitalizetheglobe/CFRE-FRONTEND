import React from 'react';
import Image from './privacyPolicy.webp'
import Header from '../Header/header.jsx';
import { Helmet } from 'react-helmet-async';


function PrivacyPolicy() {
    return (
        <>
        <Header />
        <Helmet>
                    <title>Privacy Policy | CFRE Realty</title>
                    <meta name="description" content="Review the comprehensive privacy policy of CFRE Realty, which details how we collect, use, and protect your personal information when you visit our site. Learn about our practices and your rights regarding data privacy." />
                    <meta property="og:description" content="Review the comprehensive privacy policy of CFRE Realty, which details how we collect, use, and protect your personal information when you visit our site. Learn about our practices and your rights regarding data privacy." />
                    <meta property="og:url" content="https://www.cfrerealty.com/privacyPolicy" />
                    </Helmet>
            <div
                className="bg-blue-400 text-black py-16 bg-cover bg-center"
                style={{ backgroundImage: `url(${Image})` }}
            >
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <h1 className="text-4xl text-white font-bold text-center">Privacy Policy</h1>
                </div>
            </div>
        <div className="bg-gray-50 py-10">
            {/* Banner Section */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 ">
                <h1 className="text-xl font-extrabold text-gray-800 mb-6">Privacy Policy</h1>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    This privacy policy ("Policy") describes how we collect, protect, and use the personally identifiable information ("Personal Information") you ("User", "you", or "your") provide on the http://www.cfrerealty.com website and any of its products or services (collectively, "Website" or "Services"). It also describes the choices available to you regarding our use of your personal information and how you can access and update this information. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    We may collect the following information:
                </p>
                <ul className="text-sm list-disc list-inside text-gray-700 leading-relaxed mb-8">
                    <li>Your name and contact information</li>
                    <li>Demographic information</li>
                    <li>Information you provide when you publish content or fill out forms on the Website</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Collection of Non-Personal Information</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    When you visit the Website, our servers automatically record information that your browser sends. This data may include your IP address, browser type and version, operating system, language preferences, and more.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Use of Collected Information</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    The information we collect from you may be used to personalize your experience, improve our website, respond to customer queries, and run our Services. Non-personal information is used to identify potential cases of abuse and to generate statistical data.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Children</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    We do not knowingly collect personal information from children under the age of 13. If you are under 13, please do not submit any personal information through our Website or Services.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Newsletters</h2>
                <p className="text-sm  text-gray-700 leading-relaxed mb-8">
                    You may voluntarily subscribe to our newsletters at any time. You can unsubscribe by following the instructions in the emails or contacting us directly.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Cookies</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    The Website uses "cookies" to personalize your online experience. You can accept or decline cookies through your browser settings.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Information Security</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    We secure your personal information on controlled servers protected from unauthorized access. However, no data transmission over the Internet can be guaranteed to be completely secure.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Data Breach</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    In the event of a data breach, we will take reasonable measures to notify affected users if required by law.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Changes and Amendments</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    We reserve the right to update this Policy at any time. When we do, we will notify you via email.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Acceptance of This Policy</h2>
                <p className="text-sm *:text-gray-700 leading-relaxed">
                    By using the Website or its Services, you agree to be bound by this Policy. If you do not agree, you are not authorized to use or access the Website and its Services.
                </p>
            </div>
        </div>
        </>
    );
}

export default PrivacyPolicy;
