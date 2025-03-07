import React, { useState } from "react";
import ChangePassword from "../components/profile/changePassword";
import BasicInfoForm from "../components/profile/basicInfoForm";
import VerifyEmail from "../components/profile/verifyEmail";
import { FaEdit } from "react-icons/fa";
import Promocodes from "../components/console/promocodes";
import BurgerMenu from "../components/header/burgerMenu";
import { useAuth } from "../authProvider";
import InfoBlock from "../components/profile/infoBlock";
import Bloggers from "../components/console/bloggers";
import { Navbar } from "../components/header/navbar";

const Dashboard: React.FC = () => {
    const { user, logout } = useAuth();
    const [isLoading, setIsLoading] = useState(false)
    const [editable, setEditable] = useState(false);


    return (
        <>
            {user && (
                <main>
                    <Navbar />
                    <aside className="py-4 grid grid-cols-12 gap-4 px-4">
                        <div className="col-span-4 border shadow-md rounded-lg">
                            <div className="border-b dark:border dark:border-gray-600 bg-white dark:bg-gray-800 flex justify-between text-xl p-8 rounded-t-lg">
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
                        <div className="col-span-8 grid gap-4">
                            <InfoBlock title="Блогеры" >
                                <Bloggers />
                            </InfoBlock>
                            <InfoBlock title="Мои промокоды">
                                <Promocodes />
                            </InfoBlock>
                        </div>
                    </aside >
                </main >
            )}
        </>
    );
};

export default Dashboard;