import { FC } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Help from "../components/help";
import sirTim from '../assets/Sir_Tim_Berners-Lee_(cropped).jpg'

interface IAbout { }

const About: FC<IAbout> = ({ }) => {

    return (
        <>
            <Header />
            <main className="py-6">
                <div className="max-w-4xl m-auto px-6 py-4">
                    <h1 className="text-2xl tablet:text-4xl font-bold mb-6 tablet:mb-10">О компании</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex justify-center">
                            <img src={sirTim} alt="" className="rounded-lg w-80 md:w-auto" />
                        </div>
                        <div>
                            <div className="font-bold text-md md:text-xl mb-2">Leeblock = доверие, инновации, поддержка.</div>
                            <div className="text-base mb-2">
                                Название Leeblock было выбрано не случайно и символизирует глубокую связь с историей технологий и цифровой безопасности. Первая часть названия, "Lee", отсылает к Тиму Бернерсу-Ли, основателю Всемирной паутины. Он – великий новатор, заложивший основу для свободного обмена информацией. Мы в Leeblock чтим его вклад и стремимся нести его наследие, предоставляя современные решения для цифровых активов.
                            </div>
                            <div className="text-base">
                                Вторая часть названия, "Block", символизирует надежность и защиту, которые предлагает наш магазин. Как "блоки" в блокчейне формируют основу криптовалютных технологий, так и мы стремимся стать вашим надежным «строительным блоком» в мире цифровой безопасности. Leeblock — это олицетворение доверия, инноваций и неизменной поддержки в цифровом мире.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <Help />
        </>
    )
}

export default About