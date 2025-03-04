'use client';
import { useGetSingleCarInfo } from '@/src/hooks/post.hook';
import { useParams } from 'next/navigation';
import React from 'react';
import { Loader } from 'react-feather'; // Optional: Loader for loading state

export default function CarInfo() {
    const params = useParams(); // Extract params from the URL
    const id = params.id; // Assuming params contains the VIN ID as `id`

    const { data: vinInfo, isLoading, error } = useGetSingleCarInfo(id as string); // Use the `id` fetched from params

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader className="animate-spin text-blue-600" size={50} />
                <span className="ml-2 text-lg">Loading...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-5">
                <p className="text-red-500 text-xl">Failed to fetch car info. Please try again.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-5">
            <h1 className="text-2xl font-semibold mb-4 text-center text-blue-600">Car Information</h1>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="font-semibold">VIN:</span>
                    <span>{vinInfo?.vin}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Country:</span>
                    <span>{vinInfo?.country}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Manufacturer:</span>
                    <span>{vinInfo?.manufacturer}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Model:</span>
                    <span>{vinInfo?.model}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Class:</span>
                    <span>{vinInfo?.class}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Region:</span>
                    <span>{vinInfo?.region}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">WMI:</span>
                    <span>{vinInfo?.wmi}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">VDS:</span>
                    <span>{vinInfo?.vds}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">VIS:</span>
                    <span>{vinInfo?.vis}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Year:</span>
                    <span>{vinInfo?.year}</span>
                </div>
            </div>
        </div>
    );
}
