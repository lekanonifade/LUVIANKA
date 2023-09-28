import React from "react";

export default function Productsfirst() {
    return (
        <div className="bg-[url('../images/productsfirstbg.svg')] md:bg-[url('../images/productsfirstbglg.svg')] bg-no-repeat bg-center bg-cover min-h-[75vh] lg:min-h-screen min-w-screen flex flex-col items-left lg:justify-center text-white gap-5">
            <div className="flex flex-col gap-5 lg:gap-10 md:w-1/2 p-5 md:p-10 lg:py-10 lg:p-24 mt-20 lg:mt-0">
                <p className="text-3xl lg:text-6xl font-bold">Products</p>
                <p className="text-base lg:text-xl">
                    At Fiambres Luvianka, we are dedicated to providing high-quality meat selections.
                    Our products are 100% health certified and sourced from reputable local farms.
                </p>
            </div>
        </div>
    )
}