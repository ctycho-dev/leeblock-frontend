import { FC } from "react";
import { Link } from "react-router-dom";
import EncryptedButton from "./encryptedButton";

import proWhite from '../assets/products/proHover-9d1e6bda818595ff17e9e485d23c2439.png'
import { motion } from "framer-motion";

interface IMainScreen {
}

const MainScreen: FC<IMainScreen> = ({ }) => {
    let text = 'Б-у-д-у-щ-е-е- -н-а-ч-и-н-а-е-т-с-я- -з-д-е-с-ь-.'.split('-')
    let text2 = 'Пользуйся передовыми решениями для защиты своих цифровых активов. Удобство, безопасность и контроль — всё в одном устройстве.'.split(' ')
    return (
        <>
            <div className="max-w-7xl m-auto px-6 tablet:px-10 pb-12 pt-12">
                <div className="min-h-[50vh] flex flex-col gap-y-20">
                    <div className="flex-1 grid tablet:grid-cols-2 items-center z-10">
                        <div>
                            {text.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 2,
                                        delay: i / 20,
                                    }}
                                    className="text-4xl md:text-5xl font-semibold"
                                    key={i}
                                >
                                    {el}
                                </motion.span>
                            ))}
                            <div className="mb-4"></div>
                            {text2.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: (i + 10) / 10,
                                    }}
                                    className="text-neutral-400 text-sm tablet:text-base mb-8"
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                            <div className="mb-8"></div>
                            <div className="tablet:hidden">
                                <EncryptedButton />
                            </div>
                        </div>
                        <div className="hidden tablet:flex justify-center">
                            <img src={proWhite} alt="Wallet" className="h-96" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-card-dark dark:text-slate-200 rounded-2xl shadow-custom flex items-center justify-between py-8 px-6 md:px-10 z-10">
                        <div className="flex h-full gap-x-10 justify-between tablet:justify-normal">
                            <div className="">
                                <div className="font-bold sm-mobile:text-lg mb-2">Мы официальные<br />реселлеры</div>
                                <div className="underline text-gray-primary text-sm sm-mobile:text-base hover:text-green-primary hover:cursor-pointer">Как проверить?</div>
                            </div>
                            <div className="w-max">
                                <Link to={'https://help.onekey.so/hc/en-us/articles/5967821214223-OneKey-Reseller-Network#h_01H98J3VYZJF5128YMYN2MCC6J'}
                                    className="bg-checkout h-full py-2 px-2 flex justify-center items-center rounded-lg shadow-custom2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="29" viewBox="0 0 64 29" fill="none">
                                        <path d="M27.2329 17.7513C26.6429 17.7513 26.1011 17.6119 25.6074 17.3331C25.1137 17.0542 24.7224 16.6693 24.4335 16.1783C24.1445 15.6812 24 15.1205 24 14.4961C24 13.8778 24.1445 13.3232 24.4335 12.8321C24.7224 12.3351 25.1137 11.9471 25.6074 11.6683C26.1011 11.3894 26.6429 11.25 27.2329 11.25C27.8289 11.25 28.3707 11.3894 28.8584 11.6683C29.352 11.9471 29.7403 12.3351 30.0233 12.8321C30.3122 13.3232 30.4567 13.8778 30.4567 14.4961C30.4567 15.1205 30.3122 15.6812 30.0233 16.1783C29.7403 16.6693 29.352 17.0542 28.8584 17.3331C28.3647 17.6119 27.8229 17.7513 27.2329 17.7513ZM27.2329 16.6147C27.6122 16.6147 27.9463 16.5299 28.2353 16.3601C28.5242 16.1844 28.75 15.9358 28.9125 15.6145C29.0751 15.2933 29.1564 14.9205 29.1564 14.4961C29.1564 14.0718 29.0751 13.702 28.9125 13.3868C28.75 13.0655 28.5242 12.82 28.2353 12.6503C27.9463 12.4806 27.6122 12.3957 27.2329 12.3957C26.8536 12.3957 26.5165 12.4806 26.2215 12.6503C25.9325 12.82 25.7067 13.0655 25.5442 13.3868C25.3816 13.702 25.3004 14.0718 25.3004 14.4961C25.3004 14.9205 25.3816 15.2933 25.5442 15.6145C25.7067 15.9358 25.9325 16.1844 26.2215 16.3601C26.5165 16.5299 26.8536 16.6147 27.2329 16.6147Z" fill="black" />
                                        <path d="M33.7176 12.5776C34.3136 12.5776 34.7952 12.7686 35.1625 13.1505C35.5297 13.5263 35.7133 14.0537 35.7133 14.7326V17.6878H34.4491V14.9054C34.4491 14.5053 34.3497 14.1992 34.1511 13.987C33.9524 13.7688 33.6815 13.6597 33.3383 13.6597C32.9892 13.6597 32.7122 13.7688 32.5075 13.987C32.3089 14.1992 32.2095 14.5053 32.2095 14.9054V17.6878H30.9453V12.6504H32.2095V13.2778C32.3781 13.0596 32.5918 12.8898 32.8507 12.7686C33.1156 12.6413 33.4046 12.5776 33.7176 12.5776Z" fill="black" />
                                        <path d="M41.2062 15.0598C41.2062 15.2416 41.1942 15.4053 41.1701 15.5508H37.5128C37.5429 15.9145 37.6693 16.1994 37.8921 16.4055C38.1148 16.6116 38.3887 16.7147 38.7138 16.7147C39.1834 16.7147 39.5175 16.5116 39.7162 16.1054H41.0798C40.9353 16.5904 40.6584 16.9905 40.249 17.3057C39.8396 17.6148 39.3369 17.7694 38.7409 17.7694C38.2593 17.7694 37.8258 17.6633 37.4405 17.4512C37.0613 17.233 36.7633 16.9268 36.5465 16.5328C36.3358 16.1388 36.2305 15.6841 36.2305 15.1689C36.2305 14.6476 36.3358 14.1899 36.5465 13.7959C36.7572 13.4019 37.0522 13.0988 37.4315 12.8866C37.8108 12.6744 38.2472 12.5684 38.7409 12.5684C39.2165 12.5684 39.6409 12.6714 40.0142 12.8775C40.3935 13.0836 40.6855 13.3776 40.8901 13.7595C41.1009 14.1353 41.2062 14.5688 41.2062 15.0598ZM39.8968 14.6961C39.8908 14.3687 39.7734 14.1081 39.5446 13.9141C39.3158 13.714 39.0359 13.614 38.7048 13.614C38.3917 13.614 38.1268 13.711 37.9101 13.905C37.6994 14.0929 37.57 14.3566 37.5218 14.6961H39.8968Z" fill="black" />
                                        <path d="M45.4154 17.6876L43.1216 14.8597V17.6876H41.8574V11.3408H43.1216V14.1869L45.4154 11.3408H46.9415L44.3407 14.4869L47.0137 17.6876H45.4154Z" fill="black" />
                                        <path d="M51.503 15.0598C51.503 15.2416 51.491 15.4053 51.4669 15.5508H47.8096C47.8397 15.9145 47.9661 16.1994 48.1889 16.4055C48.4116 16.6116 48.6855 16.7147 49.0106 16.7147C49.4802 16.7147 49.8143 16.5116 50.013 16.1054H51.3766C51.2321 16.5904 50.9552 16.9905 50.5458 17.3057C50.1364 17.6148 49.6337 17.7694 49.0377 17.7694C48.5561 17.7694 48.1226 17.6633 47.7373 17.4512C47.3581 17.233 47.0601 16.9268 46.8433 16.5328C46.6326 16.1388 46.5273 15.6841 46.5273 15.1689C46.5273 14.6476 46.6326 14.1899 46.8433 13.7959C47.054 13.4019 47.349 13.0988 47.7283 12.8866C48.1076 12.6744 48.5441 12.5684 49.0377 12.5684C49.5133 12.5684 49.9378 12.6714 50.311 12.8775C50.6903 13.0836 50.9823 13.3776 51.187 13.7595C51.3977 14.1353 51.503 14.5688 51.503 15.0598ZM50.1936 14.6961C50.1876 14.3687 50.0702 14.1081 49.8414 13.9141C49.6127 13.714 49.3327 13.614 49.0016 13.614C48.6885 13.614 48.4237 13.711 48.2069 13.905C47.9962 14.0929 47.8668 14.3566 47.8186 14.6961H50.1936Z" fill="black" />
                                        <path d="M56.7605 12.6504L53.6631 20.0701H52.3176L53.4012 17.5605L51.3965 12.6504H52.8142L54.1056 16.1693L55.415 12.6504H56.7605Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3992 21.6002C19.3698 21.6002 21.5992 19.3708 21.5992 14.4002C21.5992 9.42964 19.3698 7.2002 14.3992 7.2002C9.42866 7.2002 7.19922 9.42964 7.19922 14.4002C7.19922 19.3708 9.42866 21.6002 14.3992 21.6002ZM13.0467 10.2533H15.0497V13.554H13.8078V11.3158H12.6953L13.0467 10.2533ZM14.3992 18.5471C15.6608 18.5471 16.6836 17.5244 16.6836 16.2628C16.6836 15.0012 15.6608 13.9785 14.3992 13.9785C13.1376 13.9785 12.1149 15.0012 12.1149 16.2628C12.1149 17.5244 13.1376 18.5471 14.3992 18.5471ZM14.3992 17.5101C15.0881 17.5101 15.6465 16.9517 15.6465 16.2628C15.6465 15.574 15.0881 15.0155 14.3992 15.0155C13.7104 15.0155 13.152 15.574 13.152 16.2628C13.152 16.9517 13.7104 17.5101 14.3992 17.5101Z" fill="black" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="hidden tablet:block">
                            <EncryptedButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainScreen