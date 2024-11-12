import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import bucket from '../assets/bucket.svg'
import search from '../assets/search.svg'
import logoShort from '../assets/logoShort.svg'


import ozon from '../assets/links/ozon.svg'
import telegram from '../assets/links/telegram.svg'
import plus from '../assets/plus.svg'


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

        if (isMobileMenuOpen) {
            const body = document.querySelector('body')
            if (body) body.style.overflow = 'auto'
        }
        else {
            const body = document.querySelector('body')
            if (body) body.style.overflow = 'hidden'
        }
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <div id="header" style={{
                backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
            }} className={`fixed left-0 right-0 top-0 hover:bg-white z-50`}>
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
                                    <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/catalog'}>Продукты</Link></li>
                                    <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/sales'}>Акции</Link></li>
                                    <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/about'}>О нас</Link></li>
                                    <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/support'}>Поддержка</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-x-6 items-center">
                            {/* <div className="hidden md:block">
                                <img src={search} alt='Search' className="h-[25px]" />
                            </div> */}
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
                                onClick={openNavBar}>
                                <div className="grid gap-y-1">
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                    <div className="bg-black w-6 h-[3px] rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div id="overlay" className={`
                        bg-[#0006] fixed left-0 right-0 top-0 bottom-0
                        transition-opacity duration-800
                        ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 invisible'}
                        `}>
                    </div>
                    <div id="mobile-nav" className={`z-50
                        bg-white fixed left-4 right-4 tablet:right-auto tablet:top-4 bottom-4 
                        rounded-lg p-6 min-w-80 min-h-80
                        transition-transform duration-500
                        ${isMobileMenuOpen ? '' : 'translate-y-[120%] tablet:translate-y-0 tablet:translate-x-[-110%]'}`}>
                        <div className="relative flex flex-col justify-between h-full">
                            <div>
                                <div className="hidden bg-white mb-8 tablet:flex md:hidden shadow-custom rounded-full justify-center items-center w-12 h-12 hover:cursor-pointer"
                                    onClick={openNavBar}><img src={plus} alt="" className="w-4 rotate-45" /></div>
                                <div className="tablet:hidden absolute left-1/2 transform -translate-x-1/2 -translate-y-20">
                                    <div className="bg-white mb-8 flex md:hidden shadow-custom rounded-full justify-center items-center w-12 h-12 hover:cursor-pointer"
                                        onClick={openNavBar}><img src={plus} alt="" className="w-4 rotate-45" /></div>
                                </div>
                                <div className="mb-20">
                                    <ul className="grid gap-y-5 font-semibold text-xl">
                                        <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/catalog'}>Продукты</Link></li>
                                        <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/sales'}>Акции</Link></li>
                                        <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/about'}>О нас</Link></li>
                                        <li className="hover:text-[#45E555] hover:cursor-pointer"><Link to={'/support'}>Поддержка</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex gap-x-4 border-t pt-4">
                                <div className="border border-black rounded-md w-[40px] h-[40px] flex justify-center items-center">
                                    <img src={telegram} alt="" className="w-[30px]" />
                                </div>
                                <div className="border border-black rounded-md w-[40px] h-[40px] flex justify-center items-center">
                                    <img src={ozon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div id="mobile-nav" className={`fixed w-screen h-screen left-0 bg-white py-24 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'top-0' : '-top-[100%]'} -z-10`}>
                        <div className="px-6 py-6 md:py-3">
                            <ul className="grid gap-y-6 font-semibold text-xl">
                                <li className="hover:text-[#45E555]">Продукты</li>
                                <li className="hover:text-[#45E555]">Акции</li>
                                <li className="hover:text-[#45E555]">О нас</li>
                                <li className="hover:text-[#45E555]">Поддержка</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Header