import React from "react";

export default function Homesecondprop(props) {
    return (
        <div className="bg-white">
            <img src="../images/milanesa.svg" alt="" className="w-full h-full border border-b-black" />
            <div className="p-5 flex flex-col gap-2 rounded-b-3xl">
                <p className="font-bold text-base md:text-xl">{props.title}</p>
                <p className="text-xs md:text-base">{props.text}</p>
                <p>Star</p>
            </div>
        </div>
    );
}
