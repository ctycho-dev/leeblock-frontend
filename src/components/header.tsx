import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bucket from '../assets/bucket.svg'
import bucketWhite from '../assets/bucketWhite.svg'
import search from '../assets/search.svg'
import logoShort from '../assets/logoShort.svg'
import logoShortWhite from '../assets/logoShortWhite.svg'


import { ShiftingDropDown } from "./shiftingDropDown";
import MobileNav from "./mobileNav";
import ThemeCustom from "./theme";


interface IHeader {
    bucketCounter: number
    setSidebarOpen: any
}

const Header: FC<IHeader> = ({ bucketCounter, setSidebarOpen }) => {
    const [backgroundOpacity, setBackgroundOpacity] = useState(0);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // const header = document.querySelector('#header')

        const handleHeaderOpacity = () => {
            const scrollTop = window.scrollY;
            const maxOpacity = 1;
            const newOpacity = Math.min(scrollTop / 200, maxOpacity);
            setBackgroundOpacity(newOpacity);
            // if (header) {
            //     if (scrollTop > 50 && scrollTop <= 450) {
            //         header.classList.add("header-hidden");
            //     }
            //     else if (scrollTop > 450) {
            //         // Show the header if scrolled past 350px
            //         header.classList.remove("header-hidden");
            //         header.classList.add("shadow-custom");
            //     } else {
            //         header.classList.remove("header-hidden");
            //         header.classList.remove("shadow-custom");
            //         // Hide the header when scrolling above 350px
            //     }
            // }
        };

        window.addEventListener("scroll", handleHeaderOpacity); // Add scroll event listener

        return () => {
            window.removeEventListener("scroll", handleHeaderOpacity); // Clean up event listener
        };
    }, []);

    const openSideBar = () => {
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'hidden'
        setSidebarOpen(true)
    }

    const openNavBar = () => {

        // if (isMobileMenuOpen) {
        //     const body = document.querySelector('body')
        //     if (body) body.style.overflow = 'auto'
        // }
        // else {
        //     const body = document.querySelector('body')
        //     if (body) body.style.overflow = 'hidden'
        // }
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <div id="header" style={{
                backgroundColor: `rgb(244, 245, 248, ${backgroundOpacity})`,
            }} className={`fixed left-0 right-0 top-0 z-50 `}>
                {/* }} className={`fixed left-0 right-0 top-0 z-50 bg-gradient-to-t from-gray-400 to-slate-900`}> */}
                <div className="max-w-7xl m-auto px-6 tablet:px-10 py-4 tablet:py-6">
                    <header className="flex justify-between items-center">
                        <div className="flex gap-x-10 items-center">
                            <div className="group">
                                <Link to={'/'}>
                                    <img src={logoShort} alt="LeeBlock" className="h-10 dark:hidden" />
                                    <img src={logoShortWhite} alt="LeeBlock" className="h-10 hidden dark:block" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <ShiftingDropDown />
                            </div>
                        </div>
                        <div className="flex gap-x-6 items-center">
                            {/* <div className="hidden md:block">
                                <img src={search} alt='Search' className="h-[25px]" />
                            </div> */}
                            {/* <ThemeCustom /> */}
                            <div className="relative hover:cursor-pointer" onClick={openSideBar}>
                                <img src={bucket} alt='Bucket' className="h-[25px] dark:hidden" />
                                <img src={bucketWhite} alt='Bucket' className="h-[25px] hidden dark:block" />
                                <div className="absolute -top-2 -right-2 w-[20px] h-[20px]">
                                    {
                                        bucketCounter > 0 ?
                                            <span
                                                className="bg-red-700 w-[23px] h-[23px] rounded-[50%] flex justify-center items-center text-xs text-white">
                                                {bucketCounter}
                                            </span>
                                            : ''
                                    }
                                </div>
                            </div>
                            <div
                                id="burger-menu"
                                className="flex md:hidden shadow-custom rounded-full justify-center items-center w-12 h-12 hover:cursor-pointer"
                                onClick={openNavBar}>
                                <div className="grid gap-y-1">
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <MobileNav isMobileMenuOpen={isMobileMenuOpen} openNavBar={openNavBar} />
                </div>
            </div>
            <div className="h-[90px]"></div>
        </>
    )
}

export default Header