"use client";

const banner3 = () => {
    return (
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8">
            {/* Header Section */}
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                     VIN Check and VIN Lookup in 3 Easy Steps
                </h1>
                <p className="text-sm md:text-base max-w-2xl mx-auto">
                    <span className="text-blue-600 font-medium cursor-pointer">
                        VinCheck.info
                    </span>{" "}
                    provides free access to comprehensive vehicle information sourced from trusted
                    channels. Users can lookup and search for vehicle records by VIN, regardless
                    of the make or model, across all 50 states in under a minute, absolutely free!
                </p>
            </div>

            {/* Steps Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full mb-4">
                        {/* Replace with an actual icon/image */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 17l-5-5m0 0l5-5m-5 5h12"
                            />
                        </svg>
                    </div>
                    <h2 className="font-bold text-lg">Step 1: Look for the VIN.</h2>
                    <p className="text-sm mt-2">
                        Look for the VIN. It is typically found on the inside of the driver's door
                        jamb and windshield.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full mb-4">
                        {/* Replace with an actual icon/image */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </div>
                    <h2 className="font-bold text-lg">Step 2: Start the VIN search.</h2>
                    <p className="text-sm mt-2">
                        Enter the VIN into the search box. Hit “Continue” and wait for the system to
                        find the VIN in the database.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                    <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-full mb-4">
                        {/* Replace with an actual icon/image */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm4 12h-8m4-8v8"
                            />
                        </svg>
                    </div>
                    <h2 className="font-bold text-lg">Step 3: Get Vehicle History.</h2>
                    <p className="text-sm mt-2">
                        Browse the 10-page report or enter an email address to receive a copy via
                        email.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default banner3;
