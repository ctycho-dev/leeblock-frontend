import { FC } from "react";
import { Link } from "react-router-dom";

interface IAnnouncement { }

const Announcement: FC<IAnnouncement> = ({ }) => {

    return (
        <>
            <div className="z-50 bg-[#5AE28C] h-[36px] w-full flex items-center justify-center font-semibold text-sm">
            {/* <div className="z-50 fixed top-0 bg-[#5AE28C] h-[36px] w-full flex items-center justify-center font-semibold text-sm"> */}
                <Link to={'https://help.onekey.so/hc/en-us/articles/5967821214223-OneKey-Reseller-Network'} target="_blank">
                    <span className="underline">Мы официальные реселлеры &#8594; OneKey</span>
                </Link>
            </div>
        </>
    )
}

export default Announcement