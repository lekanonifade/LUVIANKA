import React from "react";

export default function Recipesfirst() {
    return (
        <div className="bg-[url('src/assets/images/recipesfirstbg.svg')] md:bg-[url('src/assets/images/recipesfirstbglg.svg')] bg-no-repeat bg-center bg-cover min-h-[75vh] lg:min-h-screen min-w-screen flex flex-col items-left lg:justify-center text-white gap-5">
            <div className="flex flex-col gap-5 lg:gap-10 md:w-1/2 p-5 md:p-10 lg:py-10 lg:p-24 mt-20 lg:mt-0">
                <p className="text-3xl lg:text-6xl font-bold">Recipes</p>
                <p className="text-base lg:text-xl">
                    Explore the endless possibilities our products have to offer. From premium meat to delicious meals, we guarantee a satisfying experience.
                </p>
            </div>
        </div>
    )
}