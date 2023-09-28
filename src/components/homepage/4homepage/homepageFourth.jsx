import React from "react";

export default function Homefourth() {
    return (
        <div className="bg-[url('../images/homefourth.svg')] bg-no-repeat bg-center bg-cover min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] min-w-screen flex flex-col items-center justify-center text-center text-white gap-10 p-14">
            <p className="font-bold text-2xl md:text-4xl lg:text-6xl">
                NO ADDED TRANS FAT, MSG, ARTIFICIAL FLAVORS, OR COLORS
            </p>
            <p className="text-sm md:text-xl lg:text-2xl">
                Find out how deli should be done. Discover the world of wonderful pork
                meat from fiambres luvianka
            </p>
            <button className="border rounded-full py-2 px-5 text-base md:text-xl lg:text-2xl">
                Catalogue
            </button>
        </div>
    );
}
