"use client";

import React, { useEffect, useState } from "react";

const ServicePage: React.FC = () => {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const status = query.get("status");

        if (status === "success") {
            setMessage("Payment successful! Fetching your vehicle information...");
            // Add VIN lookup functionality here
        } else {
            setMessage("Payment was cancelled. Please try again.");
        }
    }, []);

    return (
        <div className="service-container flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Service Page</h1>
            <p className="text-lg">{message}</p>
        </div>
    );
};

export default ServicePage;
