import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderSecond from "../components/headerSecond";
import Footer from "../components/footer";
import Help from "../components/help";


interface IPaymentPage { }

const PaymentPage: FC<IPaymentPage> = ({ }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'
    }, [])

    return (
        <>
            <HeaderSecond />
            <main className="py-6">
                <div className="max-w-4xl m-auto px-6 py-4">
                    <h1 className="text-4xl font-bold mb-10">Оплата</h1>
                    <div className="mb-10 text-sm">
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Способы и порядок оплаты товара указаны на сайте и в <Link to={'/agreement'} className="underline text-blue-500">договоре-оферте</Link>. При необходимости порядок и условия оплаты заказанного товара оговариваются Покупателем с менеджером интернет- магазина.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Оплата безналичным расчетом производится посредством сервиса приема платежей (платежной системы) в соответствии с информацией, предоставленной на соответствующих страницах (разделах) Сервиса Администрации (Т-Банк).
                                </div>

                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Покупатель оплачивает заказ любым способом, выбранным в интернет-магазине.
                                </div>

                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Расчеты Сторон при оплате заказа осуществляются в российских рублях.
                                </div>

                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">5</div>
                                <div>
                                    Для юридических лиц: если Вы делаете у нас заказ первый раз - нам будут необходимы реквизиты вашей организации, чтобы выставить счет. Юридическим лицам мы выставим счёт и предоставим все закрывающие документы.
                                </div>

                            </li>
                        </ul>
                    </div>
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
            <Footer />
            <Help />
        </>
    )
}

export default PaymentPage