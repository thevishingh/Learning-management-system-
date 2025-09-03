import React from 'react';

export default function PricingPages() {
    return (
        <>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-10">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full font-clash bg-teal-accent-400">
                            Borcella LMS Plans
                        </p>
                    </div>
                    <h2 className="max-w-7xl font-syne capitalize mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                fill="currentColor"
                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <circle cx="1" cy="1" r=".7" />
                            </svg>
                            <span className="relative font-mont-alt">Simple</span>
                        </span>{' '}
                        pricing built for Indian educators
                    </h2>
                    <p className="text-base font-mont font-medium capitalize text-gray-700 md:text-lg">
                        Launch, scale, and monetize your courses with transparent pricing.
                        Pay only for what you need  nothing more.
                    </p>
                </div>

                <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                    {/* Starter Plan */}
                    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-xl shadow-xl sm:items-center hover:shadow">
                        <div className="text-center">
                            <div className="text-lg font-semibold font-clash">Starter</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-4xl font-bold font-syne">Free</div>
                            </div>
                            <div className="mt-4 font-mont font-medium capitalize space-y-3">
                                <div className="text-gray-700">Up to 50 students</div>
                                <div className="text-gray-700">1 Course</div>
                                <div className="text-gray-700">Basic certificates</div>
                                <div className="text-gray-700">Community support</div>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex font-mont-alt capitalize items-center justify-center w-full h-12 px-6 mt-6 font-medium text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:outline-none"
                            >
                                Start Free
                            </a>
                            <p className="mt-6 font-mont text-xs text-gray-600 sm:text-sm sm:text-center">
                                Perfect for new creators starting their journey.
                            </p>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border-2 rounded-xl shadow-md sm:items-center hover:shadow border-purple-500">
                        <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                            <div className="inline-block font-mont-alt px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-green-600">
                                Most Popular
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold font-clash">Pro</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-4xl font-bold font-syne">₹2,999</div>
                                <div className="text-gray-700 font-mont-alt">/ mo</div>
                            </div>
                            <div className="mt-4 font-mont font-medium capitalize space-y-3">
                                <div className="text-gray-700">Up to 500 students</div>
                                <div className="text-gray-700">10 Courses</div>
                                <div className="text-gray-700">Branded certificates</div>
                                <div className="text-gray-700">Email + chat support</div>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium text-white transition duration-200 bg-green-700 font-mont-alt capitalize rounded shadow-md hover:bg-purple-700 focus:outline-none"
                            >
                                Upgrade to Pro
                            </a>
                            <p className="mt-6 font-mont text-xs text-gray-600 sm:text-sm sm:text-center">
                                Ideal for creators looking to scale and monetize effectively.
                            </p>
                        </div>
                    </div>

                    {/* Business Plan */}
                    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-xl shadow-xl sm:items-center hover:shadow">
                        <div className="text-center">
                            <div className="text-lg font-semibold font-clash">Business</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-4xl font-bold font-syne">₹7,999</div>
                                <div className="text-gray-700 font-mont-alt">/ mo</div>
                            </div>
                            <div className="mt-4 font-mont font-medium capitalize space-y-3">
                                <div className="text-gray-700">Unlimited students</div>
                                <div className="text-gray-700">Unlimited courses</div>
                                <div className="text-gray-700">Custom domain + white label</div>
                                <div className="text-gray-700">24/7 Premium support</div>
                            </div>
                        </div>
                        <div>
                            <a
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium text-white transition duration-200 bg-gray-800 font-mont-alt capitalize rounded shadow-md hover:bg-gray-900 focus:outline-none"
                            >
                                Go Business
                            </a>
                            <p className="mt-6 font-mont text-xs text-gray-600 sm:text-sm sm:text-center">
                                Best suited for institutions, academies & coaching brands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
