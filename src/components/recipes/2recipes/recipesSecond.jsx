import React, { useState } from "react";
import Select from "react-select";
import recipesSecondData from "./recipesSecondData";
import Recipessecondprops from "./recipesSecondProps";


export default function Recipesssecond() {

    const options = [
        { value: "option1", label: "Grilled Pork" },
        { value: "option2", label: "Fished Pork" },
        { value: "option3", label: "Freelancing Pork" },
        { value: "option4", label: "Diverted Pork" },
        { value: "option5", label: "Nigerian Pork" },
        { value: "option6", label: "British Pork" },
        { value: "option7", label: "Lagos Pork" },
        { value: "option8", label: "Epe Pork" },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const recipesSecond = recipesSecondData.map(item => {
        return (
            <div className="">
                <Recipessecondprops
                    image={item.image}
                    title={item.title}
                    subtitle={item.subtitle}
                    note={item.note}
                    kg={item.kg}
                    price={item.price}
                />
            </div>
        )
    })

    return (
        <div className="flex flex-col gap-10 p-5 md:p-10 lg:py-10 lg:p-24">
            <div>
                <label htmlFor="" className="flex flex-col gap-2">
                    <Select
                        placeholder="Search products..."
                        value={selectedOption}
                        onChange={handleChange}
                        options={options}
                        isSearchable={true}
                    />
                </label>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between px-2">
                    <p className="text-[#AE0908] text-base lg:text-4xl font-bold">Popular Items</p>
                    <p className="text-xs md:text-base lg:text-xl mt-1">View All</p>
                </div>
                <div className="flex overflow-x-scroll hide-scroll gap-10 rounded-3xl">
                    {recipesSecond}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between px-2">
                    <p className="text-[#AE0908] text-base lg:text-4xl font-bold">Party Foods</p>
                    <p className="text-xs md:text-base lg:text-xl mt-1">View All</p>
                </div>
                <div className="flex overflow-x-scroll hide-scroll gap-10 rounded-3xl">
                    {recipesSecond}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex justify-between px-2">
                    <p className="text-[#AE0908] text-base lg:text-4xl font-bold">Dinner Ideas</p>
                    <p className="text-xs md:text-base lg:text-xl mt-1">View All</p>
                </div>
                <div className="flex overflow-x-scroll hide-scroll gap-10 rounded-3xl">
                    {recipesSecond}
                </div>
            </div>
        </div>
    )
}