import { FC, useEffect, useState } from "react";
import HeaderSecond from "../components/header/headerSecond";
import Footer from "../components/footer/footer";
import Help from "../components/help";


interface ISupportPage { }

const SupportPage: FC<ISupportPage> = ({ }) => {
    const [openHelp, setOpenHelp] = useState(false)

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
                    <h1 className="text-2xl tablet:text-4xl font-bold mb-6 tablet:mb-10">Условия технической поддержки</h1>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">Что нужно для техподдержки?</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Заблаговременно подготовить номер телефона, на который был оформлен заказ в нашем интернет-магазине, для вашей идентификации. Без этого получить бесплатную поддержку не получится.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Подготовить заранее необходимую информацию по вашему вопросу.
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Если Вы собираетесь демонстрировать экран ПК, то заранее скройте всю конфиденциальную информацию
                                    (личные папки, страницы браузера с открытой почтой и программы).
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">4</div>
                                <div>
                                    Мы оказываем поддержку в будние дни с 10:00 до 20:00. В выходные дни поддержка согласовывается за 1 день.
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 text-sm">
                        <h2 className="text-xl tablet:text-2xl font-bold mb-6 tablet:mb-8">Как получить услугу?</h2>
                        <ul>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">1</div>
                                <div>
                                    Вы можете позвонить нам по телефону <a href="tel:+79956295889" className="link-custom">+7(995) 629-58-89</a>
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">3</div>
                                <div>
                                    Написать письмо по адресу <a href="mailto:info@leeblock.ru" className="link-custom">info@leeblock.ru</a>
                                </div>
                            </li>
                            <li className="grid grid-cols-a1 gap-x-4 items-center mb-4">
                                <div className="button-gradient text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">2</div>
                                <div>
                                    Написать <span className="link-custom hover:cursor-pointer" onClick={() => { setOpenHelp(true) }}>в чат</span> на сайте.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
            <Help openHelp={openHelp} setOpenHelp={setOpenHelp} />
        </>
    )
}

export default SupportPage