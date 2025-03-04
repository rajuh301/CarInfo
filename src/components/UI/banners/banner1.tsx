'use client'

import Image from "next/image"
import car from '../../../../public/car1.jpg'
import SearchImplement from "../../modules/home/SearchImpelement"

export default function banner1() {
    return (
        <div className="relative w-full h-[500px]">
            <Image src={car} alt="carImage" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">
                    <div>
                        <h1 className="text-4xl font-semibold text-white">Check & Decode Any VIN For Free</h1>
                    </div>

                    <div>
                        <h1 className="text-white text-1xl font-bold">Comprehensive Vehicle History, Market Value, Specifications, Car Title Check and More
                        </h1>
                    </div>

                    <div>
                        <SearchImplement />
                    </div>
                </div>


            </div>

        </div>
    )
}
