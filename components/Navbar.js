"use client"

import Link from "next/link";
import { useState } from "react";

export const navData = [
    { name: 'Home', path: '#home' },
    { name: 'Service', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Features', path: '#features' },
    { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        toggleMenu();
    };

    return (
        <div className="flex w-full items-center justify-center border-b-2 border-b-mySkyBlue">
            <nav className='w-full h-20 flex flex-row gap-x-4 items-center justify-between'>
                <div className="flex flex-row justify-between w-full items-center">
                    <Link href="/">
                        <h1 className="text-myGreen font-semibold text-3xl tracking-wider">GulWrites</h1>
                    </Link>
                    <div className="flex flex-row md:hidden">
                        <div className="cursor-pointer text-myGreen" onClick={toggleMenu}>
                            {/* Menu Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className={`hidden md:flex flex-row font-semibold text-myBlue gap-x-1`}>
                    {navData.map((item, index) => {
                        return (
                            <Link key={item.name} href={item.path}>
                                <div className={`px-2 py-2 rounded text-textGrey`}
                                    onClick={() => handleLinkClick(index)}
                                >
                                    {item.name}
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className="flex items-center">
                    <div
                        className={`fixed z-50 bg-textGrey text-greenGrey font-semibold pb-10 text-xl top-0 left-0 w-full mt-20 border border-gray-300 p-4 
                        transform transition-transform ease-in-out duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
                    >
                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-end">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black cursor-pointer"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={toggleMenu}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>
                            {navData.map((item, index) => {
                                return <Link key={item.name} href={item.path}>
                                    <div onClick={() => handleLinkClick(index)}>
                                        {item.name}
                                    </div>
                                </Link>
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;