import React, { useState, useEffect } from 'react';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already made a choice
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        // Save user's consent choice
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // You can also trigger any additional functionality for accepting cookies here
    };

    const handleReject = () => {
        // Save user's rejection choice
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
        // You can also trigger any additional functionality for rejecting cookies here
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50">
            <p className="mb-4 md:mb-0">We use cookies to enhance your browsing experience. By continuing to use our site, you accept our use of cookies.</p>
            <div className="flex space-x-4">
                <button
                    onClick={handleAccept}
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                >
                    Accept All
                </button>
                <button
                    onClick={handleReject}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-colors duration-300"
                >
                    Reject
                </button>
            </div>
        </div>
    );
};

export default Cookies;
