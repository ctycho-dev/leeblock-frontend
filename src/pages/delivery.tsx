import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Help from "../components/help";
import logo from '../assets/logoShort.svg'


interface IDeliveryPage { }

const DeliveryPage: FC<IDeliveryPage> = ({ }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'
    }, [])

    return (
        <>
            <header className="">
                <div className="max-w-7xl m-auto px-6 py-4">
                    <Link to={'/'}>
                        <img src={logo} alt="LeeBlock" className="h-10" />
                    </Link>
                </div>
            </header>
            <main className=" py-6">
                <div className="max-w-4xl m-auto px-6 py-4">
                    <h1 className="text-4xl font-bold mb-10">Доставка</h1>
                    <div className="mb-10 text-sm">
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                Доставка осуществляется через реализованный на сайте веб-сервис транспортной компании (ТК) СДЭК. При оформлении заказа вы сразу можете ознакомиться со сроками доставки и её стоимостью. Доставку до ТК осуществляем БЕСПЛАТНО на следующий день после оплаты заказа. 
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                При необходимости доставки иными транспортными компаниями свяжитесь с нашим менеджером интернет- магазина. Мы работаем со всеми основными ТК: Деловые Линии, ПЭК, Байкал, DPD, Почта России.
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
            <Help />
        </>
    )
}

export default DeliveryPage