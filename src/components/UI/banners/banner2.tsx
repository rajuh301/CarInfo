"use client";

import Image from "next/image";
import bannerImage from "../../../../public/document.png"; // Replace with the correct path to your image

const Banner2 = () => {
    return (
        <div className="bg-blue-600 dark:bg-gray-800 text-white p-8">
            {/* Header Text */}
            <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                    Never buy a used car without knowing its history!
                </h1>
                <p className="text-sm md:text-base">
                    Watch out for these issues revealed by over 500,000 free vehicle history reports.
                </p>
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-blue-500 dark:bg-gray-700 p-4 rounded-md shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-4">
                {/* Text Content */}
                <div className="flex-1 text-sm md:text-base">
                    <p>
                        1 in every 5 cars is a <span className="font-bold">SALVAGED</span> car
                    </p>
                    <p>
                        1 in every 15 cars is <span className="font-bold">REBUILT</span>
                    </p>
                    <p>
                        1 in every 25 cars has been involved in an{" "}
                        <span className="font-bold">ACCIDENT</span>
                    </p>
                    <p>
                        1 in every 50 cars has a <span className="font-bold">TAMPERED ODOMETER</span>
                    </p>
                    <p>
                        1 in every 100 cars has been <span className="font-bold">DAMAGED BY FLOOD</span>
                    </p>
                </div>

                {/* Image */}
                <div className="flex-shrink-0">
                    <Image
                        src={bannerImage}
                        alt="Vehicle History Report"
                        className="rounded-md"
                        width={300}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner2;
