import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";

import IconsList from "./iconsList";

import plus from '../assets/plus.svg'


interface IMobileNav {
    isMobileMenuOpen: boolean
    openNavBar: any
}

const MobileNav: FC<IMobileNav> = ({ isMobileMenuOpen, openNavBar }) => {


    return (
        <>
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
                        ${isMobileMenuOpen ? '' : 'translate-y-[140%] tablet:translate-y-0 tablet:translate-x-[-110%]'}`}>
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
                                <li className="hover:text-green-primary hover:cursor-pointer"><Link to={'/catalog'}>Продукты</Link></li>
                                <li className="hover:text-green-primary hover:cursor-pointer"><Link to={'/sales'}>Акции</Link></li>
                                <li className="hover:text-green-primary hover:cursor-pointer"><Link to={'/about'}>О нас</Link></li>
                                <li className="hover:text-green-primary hover:cursor-pointer"><Link to={'/support'}>Поддержка</Link></li>
                            </ul>
                        </div>
                    </div>
                    <IconsList />
                </div>
            </div>
        </>
    )
}

export default MobileNav