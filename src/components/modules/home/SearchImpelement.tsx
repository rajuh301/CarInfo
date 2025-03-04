"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/src/assets/icons";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

const  SearchImplement: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const router = useRouter(); // Move this inside the component

    // Handle input change
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Handle search button click
    const handleSearchClick = () => {
        if (searchTerm.trim() !== "") {
            // Navigate to the payment page with the search term as a query parameter
            router.push(`${encodeURIComponent(searchTerm)}`);
        } else {
            alert("Please enter a VIN to search."); // Alert user if input is empty
        }
    };


    

    return (
        <div className="relative w-full">
            <div className="flex w-8/12 mx-auto bg-white p-4 rounded-md bg-opacity-40">
                {/* Input Field */}
                <Input
                    required
                    aria-label="Search"
                    classNames={{
                        inputWrapper: "border-none rounded-none",
                        input: "text-sm text-white",
                    }}
                    placeholder="ENTER VIN"
                    startContent={
                        <SearchIcon className="text-base text-gray-400 pointer-events-none flex-shrink-0" />
                    }
                    type="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {/* Search Button */}
                <Button
                    onPress={handleSearchClick} // Attach the click handler
                    className="bg-blue-600 text-white px-4 py-2 rounded-none hover:bg-blue-700 transition-colors"
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default SearchImplement;
