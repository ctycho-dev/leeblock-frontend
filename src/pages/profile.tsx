import React, { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import ChangePassword from "../components/profile/changePassword";
import BasicInfoForm from "../components/profile/basicInfoForm";
import VerifyEmail from "../components/profile/verifyEmail";
import { FaEdit } from "react-icons/fa";
import { Navbar } from "../components/profile/navbar";
import BurgerMenu from "../components/header/burgerMenu";

import { useAuth } from "../authProvider";


const ProfilePage: React.FC = () => {
    const { user, logout } = useAuth();
    const [isLoading, setIsLoading] = useState(false)
    const [editable, setEditable] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {
                user ?
                    <>
                        <header className="dark:bg-[#111827] py-6 px-6 flex justify-between">
                            <div></div>
                            <div><BurgerMenu theme="" handler={() => { setSidebarOpen(!sidebarOpen) }} /></div>
                        </header>
                        <main className="flex">
                            <Navbar sidebarOpen={sidebarOpen} />
                            <aside className="flex-1 pb-6 px-6 md:ml-64">
                                <div className="mb-6 shadow-md rounded-lg">
                                    <div className="border-b dark:border dark:border-gray-600 dark:bg-gray-800 flex justify-between text-xl p-8 rounded-t-lg">
                                        <div className="flex items-center gap-x-2">
                                            <div className="bg-[#2e7d32] w-2 rounded-xl h-6"></div>Общая информация
                                        </div>
                                        <button onClick={() => { setEditable(!editable) }} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800"><FaEdit className="text-xl" /></button>
                                    </div>
                                    <div className="dark:border bg-white dark:border-gray-600 p-8 border-t-0 rounded-b-lg">
                                        <BasicInfoForm user={user} editable={editable} setEditable={setEditable} />
                                        <VerifyEmail email={user.email} verified={user.is_verified} />
                                        <ChangePassword />
                                    </div>
                                </div >
                            </aside >
                        </main >
                    </>
                    : ''
            }
        </>
    );
};

export default ProfilePage;