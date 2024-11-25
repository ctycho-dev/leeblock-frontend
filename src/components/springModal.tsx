import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiLock } from "react-icons/fi";
import { useState, Dispatch, SetStateAction } from "react";

interface SpringModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const SpringModal: React.FC<SpringModalProps> = ({ isOpen, setIsOpen }) => {

    const handleClick = () => {
        setIsOpen(false)
        window.open('https://help.onekey.so/hc/en-us/articles/5967821214223-OneKey-Reseller-Network#h_01H98J3VYZJF5128YMYN2MCC6J', '_blank')
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-card-dark text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    // className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        {/* <FiLock className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" /> */}
                        <div className="relative z-10">
                            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                                <FiLock />
                            </div>
                            <h3 className="text-3xl font-bold text-center mb-2">
                                OneKey Reseller Network
                            </h3>
                            <p className="text-center mb-6">
                                Перейдите по ссылке на официальный сайт производителя и вы найдете нас среди реселлеров из России.
                                Для загрузки страницы может понадобиться VPN.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleClick}
                                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                                >
                                    Перейти
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white hover:opacity-90 transition-opacity text-black font-semibold w-full py-2 rounded"
                                >
                                    Понятно
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SpringModal;
