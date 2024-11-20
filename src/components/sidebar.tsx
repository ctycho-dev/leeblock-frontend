import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import ReactLoading from 'react-loading';
import ChangeAmount from "./changeAmount";
import BagItemColor from "./bagItemColor";
import { getTotalSum } from "../utils";
import { MyBag } from "../types";

interface ISidebar {
    isSidebarOpen: boolean
    setSidebarOpen: any
    bagItems: MyBag[]
    setQuantityUpdated: any
}

const Sidebar: FC<ISidebar> = ({ isSidebarOpen, setSidebarOpen, bagItems, setQuantityUpdated }) => {
    const navigate = useNavigate();
    const [isDisabled, setButtonDisabled] = useState(false)

    const closeSideBar = () => {
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'
        setSidebarOpen(false)
    }

    const checkoutItems = () => {
        setButtonDisabled(true)

        setTimeout(() => {
            setButtonDisabled(false)
            navigate('/checkout')
        }, 1000)
    }

    return (
        <>
            <div>
                <div className={`
                    bg-sidebar
                    fixed top-0 right-0 left-0 w-screen h-screen
                    overflow-hidden z-[999]
                    transition-all ${isSidebarOpen ? '' : 'hidden'}`}></div>
                <div className={`
                    bg-sidebar-block
                    fixed top-0 right-0
                    h-full w-full tablet:w-sidebar-desktop z-[1000]
                    overflow-hidden transition-transform duration-500
                    ${isSidebarOpen ? '' : 'translate-x-full'}`}>
                    <div className="bg-white px-4 py-6 flex items-center justify-between mb-1">
                        <div className="text-2xl font-semibold">Корзина</div>
                        <div className="hover:cursor-pointer" onClick={closeSideBar}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fillRule="evenodd" clipRule="evenodd" d="m12.17 10.77 6.3-6.3 1.06 1.06-6.3 6.3-1.06-1.06ZM13.23 12.17l6.3 6.3-1.06 1.06-6.3-6.3 1.06-1.06ZM10.77 12.17l-6.3 6.3 1.06 1.06 6.3-6.3-1.06-1.06ZM11.83 10.77l-6.3-6.3-1.06 1.06 6.3 6.3 1.06-1.06Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <div className="overflow-auto h-full pb-[150px]">
                        {
                            bagItems.map((item: MyBag, i: number) => {
                                return (
                                    <div key={i} className="bg-white flex justify-between items-center px-4 py-2">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <img src={item.sku?.image} alt={item.sku?.name} className="w-28 -ml-2" />
                                            </div>
                                            <div>
                                                <div className="mb-2 flex">
                                                    <div className="text-xl font-bold">{item.sku?.name}</div>
                                                    <BagItemColor color={item.sku?.color} />
                                                </div>
                                                <ChangeAmount
                                                    index={i}
                                                    bagItems={bagItems}
                                                    quantity={item.quantity}
                                                    setQuantityUpdated={setQuantityUpdated}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            {item.sku?.price} * {item.quantity}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {/* <h3 className="text-2xl font-bold m-4">Добавить похожие товары</h3> */}
                    </div>
                    {
                        bagItems && bagItems.length > 0 ?
                            <div className="bg-white px-4 py-6 fixed bottom-0 right-0 w-full tablet:w-sidebar-desktop">
                                <div className="flex justify-between items-center text-2xl mb-4">
                                    <div>Итого</div>
                                    <div className="font-bold">{getTotalSum(bagItems)}&#x20bd;</div>
                                </div>
                                <div>
                                    <button
                                        className={`button-gradient w-full 
                                            flex justify-center items-center gap-x-2 py-3 
                                            rounded-3xl text-lg font-bold
                                            disabled:pointer-events-none disabled:opacity-50`}
                                        onClick={checkoutItems}
                                        disabled={isDisabled}>
                                        Оплатить
                                        {
                                            isDisabled ?
                                                <ReactLoading type='spinningBubbles' color='#000' height={'20px'} width={'20px'} />
                                                : ''
                                        }
                                    </button>
                                </div>
                            </div>
                            : ''
                    }
                </div>
            </div>
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Sidebar