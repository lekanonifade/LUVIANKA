import React from "react";

export default function Recipessecondprops(props) {
    return (
        <div className="flex flex-col w-52 md:w-64 lg:w-96">
            <img src={props.image} alt="" className="rounded-t-3xl" />
            <div className="flex flex-col gap-1 bg-white rounded-b-3xl p-5">
                <p className="text-sm md:text-base lg:text-2xl text-[#AE0908]">{props.title}</p>
                <p className="text-xs md:text-base lg:text-lg text-[#858484]">{props.subtitle}</p>
                <p className="text-xs md:text-sm lg:text-base">{props.note}</p>
                <p className="text-xs md:text-sm lg:text-base">Weight: <span className="font-bold">{props.kg}kg</span></p>
                <p className="text-xs md:text-sm lg:text-base">Price: <span className="font-bold">${props.price}</span></p>
            </div>
        </div>
    )
}