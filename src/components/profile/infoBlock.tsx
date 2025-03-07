import React, { useRef, useEffect } from "react";
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';


interface InfoBlockProps {
    title: string
    children: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, children }) => {


    return (
        <div className="border shadow-md rounded-lg">
            <div className="border-b dark:border dark:border-gray-60 bg-white dark:bg-gray-800 flex justify-between text-xl p-8 rounded-t-lg">
                <div className="flex items-center gap-x-2">
                    <div className="bg-[#2e7d32] w-2 rounded-xl h-6"></div>{title}
                    {/* <Tooltip title="Максимальное количество промокод 5" sx={{ width: 20, height: 20 }}>
                        <InfoIcon />
                    </Tooltip> */}
                </div>
            </div>
            <div className="dark:border border-gray-600 bg-white dark:border-gray-600 p-8 border-t-0 rounded-b-lg">
                {children}
            </div>
        </div>
    );
};

export default InfoBlock;