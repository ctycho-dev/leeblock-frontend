import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import search from '../../assets/search.svg'
import logoShort from '../../assets/logoShort.svg'
import logoShortWhite from '../../assets/logoShortWhite.svg'

import { ShiftingDropDown } from "./shiftingDropDown";
import ThemeCustom from "./theme";
import MobileNav from "./mobileNav";
import BurgerMenu from "./burgerMenu";
import { useAuth } from "../../authProvider";
import Button from '@mui/material/Button';
import { selectTotalQuantity } from "../../features/bugsSlice";
import { useSelector } from 'react-redux';
import BasketIcon from "./basketIcon";
import Sidebar from "./sidebar"
import { useDisclosure } from '@mantine/hooks';


interface IHeader {}


const Header: FC<IHeader> = ({ }) => {
    const { user, isAuthenticated, logout } = useAuth();
    const [backgroundOpacity, setBackgroundOpacity] = useState(0);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);


    useEffect(() => {

        const handleHeaderOpacity = () => {
            const scrollTop = window.scrollY;
            const maxOpacity = 1;
            const newOpacity = Math.min(scrollTop / 200, maxOpacity);
            setBackgroundOpacity(newOpacity);

        };

        window.addEventListener("scroll", handleHeaderOpacity); // Add scroll event listener

        return () => {
            window.removeEventListener("scroll", handleHeaderOpacity); // Clean up event listener
        };
    }, []);

    return (
        <>
            <div id="header" style={{
                backgroundColor: `rgb(244, 245, 248, ${backgroundOpacity})`,
            }} className={`fixed left-0 right-0 top-0 z-50 `}>
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
                            {/* <ThemeCustom /> */}
                            {/* {
                                isAuthenticated ?
                                    <>
                                    <Link to={`/profile`}>
                                        <Button variant="contained" color="success">Profile</Button>
                                    </Link>
                                    <Button variant="contained" color="success" onClick={() => { logout() }}>Logout</Button>
                                    </>
                                    :
                                    <Link to={'/login'}>
                                        <Button variant="contained" color="success">Login</Button>
                                    </Link>
                            } */}
                            <div className="relative hover:cursor-pointer" onClick={open}>
                                <BasketIcon />
                            </div>
                            <BurgerMenu handler={() => { setMobileMenuOpen(!isMobileMenuOpen) }} />
                        </div>
                    </header>
                    <MobileNav isMobileMenuOpen={isMobileMenuOpen} openNavBar={() => { setMobileMenuOpen(!isMobileMenuOpen) }} />
                </div>
            </div>
            <div className="h-[90px]"></div>
            <Sidebar open={opened} close={close} />
        </>
    )
}

export default Header