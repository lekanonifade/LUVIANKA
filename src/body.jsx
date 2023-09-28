import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Products from "./components/products/products";
import Company from "./components/company/company";
import Catalogue from "./components/catalogue/catalogue";
import Recipes from "./components/recipes/recipes";
import Contact from "./components/contact/contact";

export default function Body() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/company" element={<Company />} />
                <Route path="/catalogue" element={<Catalogue />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/contact-us" element={<Contact />} />
            </Routes>
        </div>
    )
}