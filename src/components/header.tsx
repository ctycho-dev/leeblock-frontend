import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bucket from '../assets/bucket.svg'
import search from '../assets/search.svg'
import logo from '../assets/logo.svg'
import logoShort from '../assets/logoShort.svg'

interface IHeader {
    bucketCounter: number
    setSidebarOpen: any
}

const Header: FC<IHeader> = ({ bucketCounter, setSidebarOpen }) => {
    const [backgroundOpacity, setBackgroundOpacity] = useState(0);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // const header = document.getElementById("header");
        // let lastScrollTop = 80;

        const handleHeaderOpacity = () => {
            const scrollTop = window.scrollY;
            const maxOpacity = 1;
            const newOpacity = Math.min(scrollTop / 100, maxOpacity);
            setBackgroundOpacity(newOpacity);
        };

        // const handleHeaderAppearance = () => {
        //     const scrollTop = window.scrollY || document.documentElement.scrollTop;

        //     if (scrollTop > lastScrollTop) {
        //         header?.classList.add("hidden-header");
        //     } else {
        //         header?.classList.remove("hidden-header");
        //     }
        //     lastScrollTop = scrollTop;
        // };

        window.addEventListener("scroll", handleHeaderOpacity); // Add scroll event listener
        // window.addEventListener("scroll", handleHeaderAppearance); // Add scroll event listener

        return () => {
            window.removeEventListener("scroll", handleHeaderOpacity); // Clean up event listener
            // window.removeEventListener("scroll", handleHeaderAppearance); // Clean up event listener
        };
    }, []);

    const openSideBar = () => {
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'hidden'
        setSidebarOpen(true)
    }

    return (
        <>
            <div id="header" style={{
                backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
            }} className={`fixed left-0 top-0 w-full hover:bg-white z-50`}>
                <div className="max-w-7xl m-auto px-6 tablet:px-10 py-4 tablet:py-6">
                    <header className="flex justify-between items-center">
                        <div className="flex gap-x-10 items-center">
                            <div className="group">
                                <Link to={'/'}>
                                    <img src={logoShort} alt="LeeBlock" className="h-10" />
                                </Link>
                            </div>
                            <div className="hidden md:block">
                                <ul className="flex gap-x-6 font-semibold text-base">
                                    <li>Продукты</li>
                                    <li>Акции</li>
                                    <li>О нас</li>
                                    <li>Поддержка</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-x-6 items-center">
                            <div className="hidden md:block">
                                <img src={search} alt='Search' className="h-[25px]" />
                            </div>
                            <div className="relative hover:cursor-pointer" onClick={openSideBar}>
                                <img src={bucket} alt='Bucket' className="h-[25px]" />
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
                                onClick={() => { setMobileMenuOpen(!isMobileMenuOpen)}}>
                                <div className="grid gap-y-1">
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="mobile-nav" className={`fixed w-screen h-screen left-0 bg-white py-24 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'top-0' : '-top-[100%]'} -z-10`}>
                        <div className="px-6 py-6 md:py-3">
                            <ul className="grid gap-y-6 font-semibold text-xl">
                                <li className="hover:text-[#45E555]">Продукты</li>
                                <li className="hover:text-[#45E555]">Акции</li>
                                <li className="hover:text-[#45E555]">О нас</li>
                                <li className="hover:text-[#45E555]">Поддержка</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header