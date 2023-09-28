import React from "react";

export default function Companythird() {
    return (
        <div className="flex flex-col gap-5 p-5 md:p-10 lg:py-10 lg:p-24">
            <p className='text-[#AE0908] text-xl md:text-2xl lg:text-4xl font-bold'>Where we are located</p>
            <div className="flex gap-5 text-center text-white text-2xl overflow-x-scroll hide-scroll rounded-lg w-full justify-between">
                <div className="product-container bg-[url('../images/companythird1.jpeg')] bg-no-repeat h-72 flex flex-col justify-end relative">
                    <div className="w-52 h-14 md:w-72 bg-[#AE0908]">
                        <p className="text-lg md:text-xl lg:text-2xl">Florencio Varela</p>
                        <p className="text-xs md:text-sm lg:text-base">Gabriela Mistral Plant 2235</p>
                    </div>
                </div>
                <div className="product-container bg-[url('../images/companythird2.jpeg')] bg-no-repeat h-72 flex flex-col justify-end relative">
                    <div className="w-52 h-14 md:w-72 bg-[#AE0908]">
                        <p className="text-lg md:text-xl lg:text-2xl">Avellaneda Plant</p>
                        <p className="text-xs md:text-sm lg:text-base">Tte. Col. lafuente 740</p>
                    </div>
                </div>
                <div className="product-container bg-[url('../images/companythird3.jpeg')] bg-no-repeat h-72 flex flex-col justify-end relative">
                    <div className="w-52 h-14 md:w-72 bg-[#AE0908]">
                        <p className="text-lg md:text-xl lg:text-2xl">Deposit</p>
                        <p className="text-xs md:text-sm lg:text-base">Velez Satfield 1545</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
