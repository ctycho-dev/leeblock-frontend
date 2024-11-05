import { FC } from "react";
import ButtonMain from "./addToCard";
import wallet from '../assets/wallet.png'
import mainWallet from '../assets/walletbg.webp'

interface IMainScreen {
}

const MainScreen: FC<IMainScreen> = ({ }) => {

    return (
        <>
            <div className="max-w-7xl m-auto px-6">
                <div className="h-screen flex flex-col pb-10">
                    <div className="flex-1 grid tablet:grid-cols-2 items-center z-10">
                        <div>
                            <h1 className="text-4xl tablet:text-5xl md:text-6xl font-semibold mb-4">Будущее<br />начинается здесь.</h1>
                            <h3 className="text-[#6E6E6E] text-sm tablet:text-base">Пользуйся передовыми решениями для защиты своих цифровых активов. Удобство, безопасность и контроль — всё в одном устройстве.</h3>
                        </div>
                        <div className="hidden tablet:block">
                            <img src={mainWallet} alt="Wallet" className="rotate-12" />
                            {/* <img src={mainWallet} alt="Wallet" className="absolute top-[117px] right-0 z-[-1] w-[60%]" /> */}
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