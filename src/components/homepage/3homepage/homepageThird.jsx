import React from "react";

export default function Homethird() {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-5 lg:gap-10 p-5 md:p-10 lg:py-10 lg:p-24">
            <div className="flex flex-col gap-2 justify-center">
                <p className="text-[#AE0908] text-xl md:text-2xl">FUEL YOUR DAY</p>
                <p className="font-bold text-2xl md:text-3xl lg:text-5xl">
                    Together to build better products
                </p>
                <p className="text-sm md:text-base lg:text-lg">
                    Our premium quality cuts of meat are meticulously crafted to fill
                    every day with unforgettable meals.
                </p>
                <div>
                    <button className="border border-[#AE0908] rounded-full py-2 px-5 text-base lg:text-xl text-[#AE0908]">
                        Catalogue
                    </button>
                </div>
            </div>
            <div>
                <img src="src/assets/images/homethird.svg" alt="" />
            </div>
        </div>
    );
}
