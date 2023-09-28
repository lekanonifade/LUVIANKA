import React from "react";
import Productsfirst from "./1products/productsFirst";
import Productssecond from "./2products/productsSecond";
import Homefourth from "../homepage/4homepage/homepageFourth";

export default function Products() {
    return (
        <div className="flex flex-col gap-10">
            <Productsfirst />
            <Productssecond />
            <div className="mb-10">
                <Homefourth />
            </div>
        </div>
    )
}