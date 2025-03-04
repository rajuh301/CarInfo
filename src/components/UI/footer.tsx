"use client";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            {/* Container */}
            <div className="container mx-auto px-4">
                {/* Flex container for layout */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    {/* Logo and Brand Info */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold mb-2">CAR INFO</h2>
                        <p className="text-sm text-gray-400">
                            Check your vehicle history with ease and confidence.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center md:justify-end gap-4">
                        <a
                            href="#home"
                            className="text-sm text-gray-300 hover:text-blue-500 transition"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-sm text-gray-300 hover:text-blue-500 transition"
                        >
                            About Us
                        </a>
                        <a
                            href="#services"
                            className="text-sm text-gray-300 hover:text-blue-500 transition"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-sm text-gray-300 hover:text-blue-500 transition"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-4">
                        {/* Replace '#' with actual links */}
                        <a
                            href="#"
                            className="text-gray-300 hover:text-blue-500 transition"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12v-9.294H9.293V11.41H12V9.23c0-2.683 1.633-4.147 4.014-4.147 1.142 0 2.121.084 2.405.122v2.788l-1.652.001c-1.296 0-1.547.616-1.547 1.519v1.992h3.095l-.404 3.296H15.22V24h7.455c.729 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-blue-500 transition"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557a9.902 9.902 0 01-2.828.775 4.937 4.937 0 002.165-2.723c-.95.555-2.005.959-3.127 1.184A4.92 4.92 0 0016.846 3c-2.737 0-4.948 2.209-4.948 4.936 0 .386.044.761.127 1.124-4.11-.206-7.754-2.173-10.2-5.165-.426.73-.667 1.58-.667 2.49 0 1.717.874 3.23 2.204 4.12a4.935 4.935 0 01-2.247-.621v.063c0 2.396 1.704 4.395 3.965 4.848a4.935 4.935 0 01-2.237.085 4.936 4.936 0 004.604 3.419A9.876 9.876 0 010 19.541a13.935 13.935 0 007.548 2.211c9.051 0 14.001-7.496 14.001-13.986 0-.213-.004-.425-.014-.637A9.935 9.935 0 0024 4.557z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:text-blue-500 transition"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.23 0H1.77C.791 0 0 .774 0 1.727v20.545C0 23.226.791 24 1.77 24h20.46C23.209 24 24 23.226 24 22.273V1.727C24 .774 23.209 0 22.23 0zM7.119 20.452H3.648V9h3.47v11.452zM5.385 7.684A2.01 2.01 0 013.373 5.68c0-1.104.883-2 1.989-2s1.989.896 1.989 2a2.01 2.01 0 01-1.989 2.004zm14.973 12.768h-3.471v-5.841c0-1.391-.028-3.182-1.939-3.182-1.942 0-2.24 1.515-2.24 3.081v5.942h-3.471V9h3.338v1.561h.048c.464-.88 1.596-1.807 3.28-1.807 3.505 0 4.151 2.306 4.151 5.309v6.389z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-600"></div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} VinCheck. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
