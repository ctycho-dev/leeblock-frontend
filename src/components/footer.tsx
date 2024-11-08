import { FC } from "react";

import logoShort from '../assets/logoShortWhite.svg'
import FooterForm from "./footerForm";
import { Link } from "react-router-dom";

interface IFooter { }

const Footer: FC<IFooter> = ({ }) => {

    return (
        <>
            <footer className="bg-[#13171D] rounded-t-[50px] text-white">
                <div className="max-w-7xl m-auto px-6 tablet:px-10 py-16">
                    <div className="grid ipad-air:grid-cols-a1 gap-14">
                        <div className="flex ipad-air:flex-col justify-between">
                            <div className="ipad-air:mb-10">
                                <Link to={'/'}>
                                    <img src={logoShort} alt="LeeBlock" className="w-16" />
                                </Link>
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
                                {/* <div>
                                    <ul>
                                        <li className="font-bold mb-4 text-base lg:text-xl">Продукты</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">OneKey Pro</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">OneKey Classic 1S</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">OneKey Touch</li>
                                    </ul>
                                </div> */}
                                <div>
                                    <ul>
                                        <li className=" font-bold mb-4 text-base lg:text-xl">О нас</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/politika'}>политика обработки персональных данных</Link></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/agreement'}>документы сайта</Link></li>
                                    </ul>
                                </div>
                                <div className="flex tablet:justify-center">
                                    <ul>
                                        <li className="font-bold mb-4 text-base lg:text-xl">Покупателям</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Подобрать кошелек</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Оплата</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Доставка</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">Поддержка</li>
                                    </ul>
                                </div>
                                <div className="flex tablet:justify-end">
                                    <ul>
                                        <li className="font-bold mb-4 text-base lg:text-xl">Контакты</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">+7(900) 320-33-33</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">info@leeblock.ru</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm lg:text-base hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer">support@leeblock.ru</li>
                                    </ul>
                                </div>
                            </div>
                            <FooterForm />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer