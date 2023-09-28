import React from "react";
import Homesecondprop from "./homepageSecondProps";
import homepageSecondData from "./homepageSecondData";

export default function Homesecond() {
    const homepageSecond = homepageSecondData.map((item, index) => (
        <div key={index} className="">
            <Homesecondprop title={item.title} text={item.text} />
        </div>
    ));

    return (
        <div className="flex flex-col gap-10 p-5 md:p-10 lg:py-10 lg:p-24">
            <p className="text-xl md:text-4xl text-[#AE0908] text-center font-bold">
                Featured Products
            </p>
            <div className="flex flex-col md:flex-row gap-10">{homepageSecond}</div>
        </div>
    );
}
