import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FiHome,
    FiFile,
    FiFolder,
    FiHelpCircle
} from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";


import IconsList from "../iconsList";

import plus from '../../assets/plus.svg'
import email from '../../assets/links/mail.svg'
import phone from '../../assets/links/headphones.svg'
import shoppingBud from '../../assets/links/shopping-bag.svg'


interface IMobileNav {
    isMobileMenuOpen: boolean
    openNavBar: any
}

const MobileNav: FC<IMobileNav> = ({ isMobileMenuOpen, openNavBar }) => {

    const scrollToFaq = () => {
        openNavBar(false)
        const faqSection = document.getElementById('faq-section');
        if (faqSection) {
            const offset = 80; // Offset in pixels
            const elementPosition = faqSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };


    return (
        <>
            <div id="overlay" className={`
                        bg-[#0006] fixed left-0 right-0 top-0 bottom-0
                        transition-opacity duration-800
                        ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 invisible'}
                        `}>
            </div>
            {/* bg-white fixed left-4 right-4 tablet:right-auto tablet:top-4 bottom-4  */}
            <div id="mobile-nav" className={`z-50
                        bg-white fixed left-4 right-4 top-4 bottom-4 
                        rounded-lg p-6 min-w-80 min-h-80
                        transition-transform duration-500
                        ${isMobileMenuOpen ? '' : 'translate-y-0 translate-x-[-110%]'}`}>
                <div className="relative flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="font-bold text-xl">Меню</div>
                            <div className="bg-white flex md:hidden shadow-custom rounded-full justify-center items-center w-10 h-10 hover:cursor-pointer"
                                onClick={openNavBar}><img src={plus} alt="" className="w-4 rotate-45" />
                            </div>
                        </div>
                        <div className="mb-20">
                            <ul className="grid gap-y-5 font-semibold text-xl">
                                <li >
                                    <Link to={'/catalog'} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <img src={shoppingBud} alt="" className="text-xl text-black" />
                                        <span className="text-sm hover:button-gradient">Продукция</span>
                                    </Link>
                                </li>
                                <li >
                                    <Link to={'/about'} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <FiHome className="text-2xl text-black" />
                                        <span className="text-sm">О компании</span>
                                    </Link>
                                </li>
                                <li >
                                    <div onClick={scrollToFaq} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <FiHelpCircle className="text-2xl text-black" />
                                        <span className="text-sm">FAQ</span>
                                    </div>
                                </li>
                                <li >
                                    <Link to={'/politika'} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <FiFile className="text-2xl text-black" />
                                        <span className="text-sm">Политика</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/agreement'} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <FiFolder className="text-2xl text-black" />
                                        <span className="text-sm">Договор-офферта</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/payment_and_delivery'} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <FiFile className="text-2xl text-black" />
                                        <span className="text-sm">Оплата и доставка</span>
                                    </Link>
                                </li>
                                <li className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                    <Link to={'/support'} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <MdOutlineSupportAgent className="text-2xl text-black" />
                                        <span className="text-sm">Поддержка</span>
                                    </Link>
                                </li>
                                <li className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                    <img src={phone} alt="" className="text-xl text-black" />
                                    <a href="tel:+79956295889" className="text-sm">+7(995) 629-58-89</a>
                                </li>
                                <li className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                    <img src={email} alt="" className="text-xl text-black" />
                                    <a href="mailto:info@leeblock.ru" className="text-sm">info@leeblock.ru</a>
                                </li>
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