import { FC } from "react";
import { Link } from "react-router-dom";

import FooterForm from "./footerForm";

import logoShort from '../../assets/logoShortWhite.svg'
import IconsList from "../iconsList";

interface IFooter { }

const Footer: FC<IFooter> = ({ }) => {

    return (
        <>
            <footer className="bg-dark-primary text-white">
                <div className="max-w-7xl m-auto px-6 tablet:px-10 py-16">
                    <div className="grid ipad-air:grid-cols-a1 gap-14">
                        <div className="flex ipad-air:flex-col justify-between">
                            <div className="ipad-air:mb-10">
                                <Link to={'/'}>
                                    <img src={logoShort} alt="LeeBlock" className="w-14" />
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
                            <div className="grid grid-cols-2 tablet:grid-cols-3 justify-between mb-10 gap-y-10 gap-x-4">
     
                                <div>
                                    <ul>
                                        <li className=" font-bold mb-4 text-base lg:text-lg">Общее</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/about'}>О компании</Link></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><a href={'#faq-section'}>FAQ</a></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/politika'}>Политика обработки персональных данных</Link></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/agreement'}>Договор-офферта</Link></li>
                                    </ul>
                                </div>
                                <div className="flex tablet:justify-center">
                                    <ul>
                                        <li className="font-bold mb-4 text-base lg:text-lg">Покупателям</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/catalog'}>Каталог</Link></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/payment_and_delivery'}>Оплата и доставка</Link></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'/support'}>Поддержка</Link></li>
                                    </ul>
                                </div>
                                <div className="grid tablet:justify-end">
                                    <ul>
                                        <li className="font-bold mb-4 text-base lg:text-lg">Контакты</li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><a href="tel:+79956295889">+7(995) 629-58-89</a></li>
                                        <li className="text-[#b3b3b3] mb-2 text-sm hover:text-[#45E555] transition-colors duration-100 hover:cursor-pointer"><Link to={'mailto:info@leeblock.ru'}>info@leeblock.ru</Link></li>
                                    </ul>
                                    <IconsList theme='white' />
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