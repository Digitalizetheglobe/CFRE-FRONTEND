import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Error() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">

                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Improving your experience – we'll be back online shortly!
                </h1>
                <p className="mt-6 text-xl leading-7 text-gray-600">
                    Connect with our experts – Expert insights for your property needs!
                </p>

                <div className="mt-8 flex items-center justify-center space-x-3">
                    <Phone className="w-6 h-6 text-gray-600" />
                    <div>
                        <p className="text-base font-medium text-gray-800">Office Number</p>
                        <a
                            href="tel:+918149977661"
                            className="text-gray-700 hover:text-[#d84a48] hover:underline"
                        >
                            +91 8149977661
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        to="/"
                        className="rounded-md bg-[#d84a48] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#ac3533] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                    >
                        Go back home
                    </Link>
                    <Link
                        to="/contactUs"
                        className="rounded-md bg-[#d84a48] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#ac3533] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
