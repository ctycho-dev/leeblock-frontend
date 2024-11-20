import { FC } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logoShort.svg'


interface IHeaderSecond {
}

const HeaderSecond: FC<IHeaderSecond> = ({ }) => {


    return (
        <>
            <header className="fixed top-0 left-0 right-0 shadow-custom bg-checkout z-50">
                <div className="max-w-7xl m-auto px-6 py-6">
                    <Link to={'/'} className="flex justify-center items-center gap-x-4">
                        <img src={logo} alt="LeeBlock" className="h-8 ipad-air:h-10" />
                        <div className="text-3xl ipad-air:text-4xl font-bold">LeeBlock Store</div>
                    </Link>
                </div>
            </header>
            <div className="h-[100px]"></div>
        </>
    )
}

export default HeaderSecond