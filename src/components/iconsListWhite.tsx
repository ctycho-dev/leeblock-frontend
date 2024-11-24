import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";

import ozon from '../assets/links/icons8-ozon.svg'

interface IIconsListWhite {
}

const IconsListWhite: FC<IIconsListWhite> = ({ }) => {

    return (
        <>
            <div className="flex gap-x-1">
                <Link to='https://t.me/LeeBlockRu' target="_blank" className="py-2">
                    <div className="bg-white rounded-lg w-[35px] h-[35px] flex items-center justify-center">
                        <svg aria-hidden="true" className="fill-[#000] transition-all h-6 w-6" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
                    </div>
                </Link>
                <Link to={'https://ozon.ru/t/OOQeN38'} target="_blank">
                    <img src={ozon} alt="" className="w-12" />
                </Link>
            </div>
        </>
    )
}

export default IconsListWhite