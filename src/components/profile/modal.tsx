import React, { useRef, useEffect } from "react";
import Button from '@mui/material/Button';


interface ModalProps {
    title: string
    isOpen: boolean;
    onSubmit: () => void
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, isOpen, onSubmit, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div ref={modalRef} className="relative rounded-lg bg-gray-100 dark:bg-[#111827] shadow-md w-full max-w-xl dark:text-white">
                <div className="flex items-center justify-between p-4 md:p-5 dark:border-b rounded-t border-gray-600">
                    <h3 className="text-xl font-semibold ">
                        {title}
                    </h3>
                    <button type="button" onClick={onClose} className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                    {children}
                </div>
                <div className="flex gap-x-2 items-center p-4 md:p-5 dark:border-t rounded-b border-gray-600">
                    <Button variant="contained" color="success" onClick={onSubmit}>Создать</Button>
                    <Button variant="outlined" color="success" onClick={onClose}>Отменить</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;