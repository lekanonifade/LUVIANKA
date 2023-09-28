import React from "react";

export default function Homefirst() {
    return (
        <div className="p-5 md:p-10 lg:py-10 lg:p-24">
            <div className="bg-[url('src/assets/images/homefirstbg.svg')] lg:bg-[url('src/assets/images/homefirstbgmd.svg')] rounded-3xl bg-no-repeat bg-center bg-cover min-h-screen min-w-screen flex flex-col items-center justify-center text-center text-white gap-5">
                <p className="text-lg md:text-3xl">Elevate Your Everyday,</p>
                <div className="flex flex-col gap-5 text-3xl md:text-6xl font-bold">
                    <div className="flex flex-row gap-1">
                        <p className="py-1">Fill</p>
                        <p className="bg-white text-[#AE0908] rounded-xl py-1 px-3">Every Moment</p>
                    </div>
                    <p>With Flavour</p>
                </div>
                <p className="text-sm md:text-lg">
                    Top quality, A-grade 100% health-certified frozen pork <br />
                    prompt delivery & discount prices
                </p>
                <button className="md:hidden border bg-white rounded-full py-2 px-5 text-sm text-[#AE0908]">
                    Catalogue
                </button>
            </div>
        </div>
    );
}
