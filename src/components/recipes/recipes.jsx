import React from "react";
import Recipesfirst from "./1recipes/recipesFirst";
import Recipessecond from "./2recipes/recipesSecond";

export default function Recipes() {
    return (
        <div className="flex flex-col gap-10">
            <Recipesfirst />
            <Recipessecond />
        </div>
    )
}