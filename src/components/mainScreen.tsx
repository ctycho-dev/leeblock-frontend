import { FC } from "react";
import ButtonMain from "./addToCard";
import wallet from '../assets/wallet.png'
import mainWallet from '../assets/walletbg.webp'

interface IMainScreen {
}

const MainScreen: FC<IMainScreen> = ({ }) => {

    return (
        <>
            <div className="max-w-7xl m-auto px-6 tablet:px-10">
                <div className="h-[85vh] flex flex-col pb-10">
                    <div className="flex-1 flex md:grid md:grid-cols-2 items-center z-10">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Будущее<br />начинается здесь.</h1>
                            <h3 className="text-[#6E6E6E] text-sm tablet:text-base">Пользуйся передовыми решениями для защиты своих цифровых активов. Удобство, безопасность и контроль — всё в одном устройстве.</h3>
                        </div>
                        <div className="hidden tablet:flex justify-center">
                            <img src={mainWallet} alt="Wallet" className="rotate-12 max-w-xs md:max-w-sm lg:max-w-md" />
                        </div>
                    </div>
                    <div className="bg-white h-[130px] rounded-2xl shadow-custom">
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen