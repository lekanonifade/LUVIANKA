import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    const navLinkStyles = ({ isActive }) => ({
        color: isActive ? "#AE0908" : "black",
    });

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.key]); // Use location.key as the dependency to detect route changes

    return (
        <div>
            <header className="w-full bg-white fixed top-0 z-10">
                <nav>
                    <div className="justify-between px-3 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
                        <div>
                            <div className="flex items-center justify-between py-2 md:py-4 md:block">
                                <a href="#home" onClick={closeNavbar}>
                                    <NavLink to="/">
                                        <img
                                            src="src/assets/images/luvianka.svg"
                                            alt="luvianka"
                                            className="w-14"
                                        />
                                    </NavLink>
                                </a>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-black text-xl"
                                        onClick={toggleNavbar}
                                    >
                                        <FontAwesomeIcon
                                            icon={navbarOpen ? faTimes : faBars}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbarOpen ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center h-[100vh] md:h-full justify-center text-center lg:text-base md:text-xs space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-gray-400 hover:text-white transition-all duration-500">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/products"
                                        >
                                            Products
                                        </NavLink>
                                    </li>
                                    <li className="text-gray-400 hover:text-white transition-all duration-500">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/company"
                                        >
                                            Company
                                        </NavLink>
                                    </li>
                                    <li className="text-gray-400 hover:text-white transition-all duration-500">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/catalogue"
                                        >
                                            Catalogue
                                        </NavLink>
                                    </li>
                                    <li className="text-gray-400 hover:text-white transition-all duration-500">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/recipes"
                                        >
                                            Recipes
                                        </NavLink>
                                    </li>
                                    <li className="text-gray-400 hover:text-white transition-all duration-500">
                                        <NavLink
                                            style={navLinkStyles}
                                            onClick={closeNavbar}
                                            className="py-1 px-2 rounded"
                                            to="/contact-us"
                                        >
                                            Contact Us
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <nav>
                                <NavLink
                                    to="/catalogue"
                                    className="hidden md:block border border-[#AE0908] rounded-full py-2 px-5 md:text-xs lg:text-sm text-[#AE0908]"
                                >
                                    Catalogue
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </nav>
            </header>
            <p className="h-14"></p>
        </div>
    );
};

export default Header;
