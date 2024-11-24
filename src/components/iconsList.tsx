import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";

import ozonBlack from '../assets/links/icons8-ozon-black.svg'
import telegram from '../assets/links/telegram_black.svg'

interface IIconsList {
}

const IconsList: FC<IIconsList> = ({ }) => {

    return (
        <>
            <div className="flex gap-x-2 border-t pt-4">
                <Link to='https://t.me/LeeBlockRu' target="_blank" className="py-2">
                    <img src={telegram} alt="" className="w-[40px]" />
                </Link>
                <Link to={'https://ozon.ru/t/OOQeN38'} target="_blank">
                    <img src={ozonBlack} alt="" className="w-[55px]" />
                </Link>
            </div>
        </>
    )
}

export default IconsList