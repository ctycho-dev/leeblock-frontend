import { FC, useState } from "react";
import AddToCard from "./buttons/addToCard";

import { Product } from "../types";

import proBlackMobile from '../assets/products/pro-black.png'
import proWhiteMobile from '../assets/products/proHover-9d1e6bda818595ff17e9e485d23c2439.png'


interface IOneKeyPro {
    proBlack: Product
    proWhite: Product
}

const OneKeyPro: FC<IOneKeyPro> = ({ proBlack, proWhite }) => {

    const [colorWhite, setColorWhite] = useState(false)
    const [currentProduct, setCurrentProduct] = useState<Product>(proBlack)

    const changeColor = (color: string) => {

        if (color == 'white') {
            setColorWhite(true)
            setCurrentProduct(proWhite)
        } else {
            setColorWhite(false)
            setCurrentProduct(proBlack)
        }

    }

    return (
        <>
            <div className="bg-card-primary dark:bg-card-dark dark:text-white rounded-3xl shadow-custom">
                <div className="flex flex-col-reverse tablet:grid tablet:grid-cols-2">
                    <div className="p-7 flex flex-col justify-between">
                        <div></div>
                        <div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">OneyKey Pro</h3>
                            <h5 className="text-[#767676] mb-8 text-sm md:text-base">Биометрические технологии, изолированное соединение — множество причин перейти на Pro-версию.</h5>
                            <div className="lg:flex">
                                <div className="flex items-center justify-between flex-1 mb-4 lg:mb-0">
                                    <div className="text-3xl md:text-4xl">
                                        {currentProduct ? currentProduct.price : ''}&#x20bd;
                                    </div>
                                    <div className="flex gap-x-6 mr-4">
                                        <div className="flex gap-x-2">
                                            <button className="bg-white rounded-[50%] w-[28px] h-[28px] md:w-[34px] md:h-[34px] flex justify-center items-center border border-gray-300"
                                                onClick={() => { changeColor('white') }}>
                                                {
                                                    colorWhite ?
                                                        <div className="bg-white rounded-[50%] w-[22px] h-[22px] md:w-[25px] md:h-[25px] border border-gray-300"></div>
                                                        : ''
                                                }
                                            </button>
                                            <button className="bg-black rounded-[50%] w-[28px] h-[28px] md:w-[34px] md:h-[34px] flex justify-center items-center"
                                                onClick={() => { changeColor('black') }}>
                                                {
                                                    colorWhite ?
                                                        '' : <div className="bg-black rounded-[50%] w-[22px] h-[22px] md:w-[25px] md:h-[25px] border border-white"></div>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end tablet:justify-normal">
                                    <AddToCard
                                        text="В корзину"
                                        product={currentProduct} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${colorWhite ? '' : 'hidden'} flex justify-center min-h-[200px] lg:min-h-[400px]`}>
                            <img src={proWhite.image} alt="ProBig-white" className="hidden tablet:block" />
                            <img src={proWhiteMobile} alt="ProBig-white" className="mt-8 mb-4 w-48 block tablet:hidden" />
                        </div>
                        <div className={`${colorWhite ? 'hidden' : ''} flex justify-center min-h-[200px] lg:min-h-[400px]`}>
                            <img src={proBlack.image} alt="ProBig-Black" className="hidden tablet:block" />
                            <img src={proBlackMobile} alt="ProBig-Black" className="w-96 block tablet:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneKeyPro