import React from "react";

import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";


interface NavbarProps {
    sidebarOpen: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ sidebarOpen }) => {

    return (
        <>
            <aside id="default-sidebar" className={`fixed top-0 left-0 w-64 h-screen transition-transform ${sidebarOpen ? '' : '-translate-x-full'} md:translate-x-0`} aria-label="Sidebar">
                <div className="h-full px-3 py-12 overflow-y-auto bg-gray-200  dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="/" className="flex items-center p-2 text-gray-900 hover:shadow-md rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                <FaHome className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">Главная</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/catalog" className="flex items-center p-2 text-gray-900 hover:shadow-md rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                <RiShoppingBag4Fill className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">Продукция</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className="flex items-center p-2 text-gray-900 hover:shadow-md rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                <FaUser className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">Профиль</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="flex items-center p-2 text-gray-900 hover:shadow-md rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                <MdSpaceDashboard className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">Админка</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/orders" className="flex items-center p-2 text-gray-900 hover:shadow-md rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
                                <FaTasks className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                                <span className="ms-3">Заявки</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </aside>
        </>
    )
}