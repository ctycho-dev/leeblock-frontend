import { FC } from "react";
import { Link } from "react-router-dom";
import ButtonMain from "./addToCard";
import wallet from '../assets/wallet.png'
import mainWallet from '../assets/walletbg.webp'

interface IMainScreen {
}

const MainScreen: FC<IMainScreen> = ({ }) => {

    return (
        <>
            <div className="max-w-7xl m-auto px-6 tablet:px-10">
                <div className="h-[80vh] flex flex-col pb-10">
                    <div className="flex-1 flex md:grid md:grid-cols-2 items-center z-10">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Будущее<br />начинается здесь.</h1>
                            <h3 className="text-[#6E6E6E] text-sm tablet:text-base">Пользуйся передовыми решениями для защиты своих цифровых активов. Удобство, безопасность и контроль — всё в одном устройстве.</h3>
                        </div>
                        <div className="hidden tablet:flex justify-center">
                            <img src={mainWallet} alt="Wallet" className="rotate-12 max-w-xs md:max-w-sm lg:max-w-md" />
                        </div>
                    </div>
                    <div className="bg-white h-[130px] rounded-2xl shadow-custom flex items-center justify-between py-6 px-10 lg:px-20">
                        <div className="font-bold text-xl">Open source crypto wallet.<br />
                        Trusted by millions.</div>
                        <div>
                            <Link to={'/catalog'}>
                                <button className="text-white button-gradient w-full py-2 px-6 rounded-lg flex justify-center items-center tablet:text-xl">Каталог</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen