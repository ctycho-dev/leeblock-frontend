import { FC } from "react";

import logoShort from '../assets/logoShortWhite.svg'

interface IFooter { }

const Footer: FC<IFooter> = ({ }) => {

    return (
        <>
            <footer className="bg-[#13171D] rounded-t-[50px] text-white">
                <div className="max-w-7xl m-auto px-6 tablet:px-10 py-16">
                    <div className="grid ipad-air:grid-cols-a1 gap-14">
                        <div className="flex ipad-air:flex-col justify-between">
                            <div className="ipad-air:mb-10">
                                <img src={logoShort} alt="LeeBlock" className="w-16" />
                            </div>
                            <div>
                                <div className="grid grid-cols-1 gap-y-1 text-xs lg:text-sm">
                                    <div>ИП Аблизина В.В.</div>
                                    {/* https://www.rusprofile.ru/ip/324169000163572 */}
                                    <div>ИНН 165034838418</div>
                                    <div>ОГРН 324169000163572</div>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 tablet:grid-cols-3 justify-between mb-10 gap-y-10">
                                <div>
                                    <ul>
                                        <li className="text-[#A0A0A0] font-bold mb-4 text-base lg:text-xl">Продукты</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">OneKey Pro</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">OneKey Classic 1S</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">OneKey Touch</li>
                                    </ul>
                                </div>
                                <div className="flex tablet:justify-center">
                                    <ul>
                                        <li className="text-[#A0A0A0] font-bold mb-4 text-base lg:text-xl">Покупателям</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Подобрать кошелек</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Оплата</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Доставка</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Поддержка</li>
                                    </ul>
                                </div>
                                <div className="flex tablet:justify-end">
                                    <ul>
                                        <li className="text-[#A0A0A0] font-bold mb-4 text-base lg:text-xl">Контакты</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">+7(900) 320-33-33</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">info@leeblock.ru</li>
                                        <li className="mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">support@leeblock.ru</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grid justify-end">
                                <span className="text-xs mb-2 text-[#45E555]">Если у вас есть вопрос или предложение сотрудничества, то оставьте заявку</span>
                                <div className="grid tablet:grid-cols-221 gap-y-2">
                                    <input type="text" placeholder="Name" className="h-12 border border-[#439F67] rounded-lg outline-none bg-transparent px-4" />
                                    <input type="text" placeholder="Phone" className="h-12 tablet:ml-2 border border-[#439F67] rounded-lg outline-none bg-transparent px-4" />
                                    <button className="h-12 text-black button-gradient py-2 px-4 rounded-xl hover:-mt-[2px] hover:mb-[2px] transition-all tablet:ml-2">
                                        Отправить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer