import React from "react";
import Homefirst from "./1homepage/homepageFirst";
import Homesecond from "./2homepage/homepageSecond.jsx";
import Homethird from "./3homepage/homepageThird";
import Homefourth from "./4homepage/homepageFourth";
import Homefifth from "./5homepage/homepageFifth";
import Homesixth from "./6homepage/homepageSixth";

export default function Homepage() {
    return (
        <div className="flex flex-col gap-10 md:gap-20">
            <Homefirst />
            <Homesecond />
            <Homethird />
            <Homefourth />
            <Homefifth />
            <Homesixth />
        </div>
    )
}