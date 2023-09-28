import React, { useState } from "react";
import Select from "react-select";
import Productssecondprops from "./productsSecondProps";
import productsSecondData from "./productsSecondData";


export default function Productssecond() {

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

    const productsSecond = productsSecondData.map(item => {
        return (
            <div className="">
                <Productssecondprops
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
            <div className="flex flex-col-reverse gap-5 md:flex-col">
                <div className="flex justify-between md:justify-center">
                    <p className="text-[#AE0908] md:text-center text-base lg:text-4xl font-bold">Our Products</p>
                    <p className="md:hidden text-xs">View All</p>
                </div>
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
            </div>
            <div className="flex overflow-x-scroll hide-scroll gap-10 rounded-3xl">
                {productsSecond}
            </div>
        </div>
    )
}