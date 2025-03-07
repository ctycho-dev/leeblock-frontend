import { FC, useState, Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BagItemColor from "../bagItemColor";
import { getTotalSum } from "../../utils";
import { MyBag } from "../../types";
import { Button } from "@mantine/core";
import { Drawer } from '@mui/material';
import { useSelector } from 'react-redux';
import QuantitySelector from "../QuantitySelector";
import { getBasket } from '../../features/bugsSlice';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../features/bugsSlice';

interface ISidebar {
    open: boolean
    close: Dispatch<SetStateAction<boolean>>
}

const Sidebar: FC<ISidebar> = ({ open, close }) => {
    const navigate = useNavigate();
    const [isDisabled, setButtonDisabled] = useState(false)
    const basket = useSelector(getBasket);
    const dispatch = useDispatch();


    const checkoutItems = () => {
        setButtonDisabled(true)

        setTimeout(() => {
            setButtonDisabled(false)
            navigate('/checkout')
        }, 1000)
    }

    return (
        <Drawer anchor="right" open={open} onClose={close}>
            <div className="w-full md:w-[500px] h-full">
                <div className="flex flex-col h-full">
                    <div className="bg-white px-4 py-6 flex items-center justify-between mb-1 border-b">
                        <div className="text-2xl font-semibold">Корзина</div>
                        <div className="hover:cursor-pointer" onClick={() => { close(false) }}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fillRule="evenodd" clipRule="evenodd" d="m12.17 10.77 6.3-6.3 1.06 1.06-6.3 6.3-1.06-1.06ZM13.23 12.17l6.3 6.3-1.06 1.06-6.3-6.3 1.06-1.06ZM10.77 12.17l-6.3 6.3 1.06 1.06 6.3-6.3-1.06-1.06ZM11.83 10.77l-6.3-6.3-1.06 1.06 6.3 6.3 1.06-1.06Z" fill="currentColor"></path></svg>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto h-full pb-[150px]">
                        {
                            basket.map((item: MyBag, i: number) => {
                                return (
                                    <div key={i} className="bg-white flex justify-between items-center gap-x-2 px-4 py-2">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <img src={item.sku?.image} alt={item.sku?.name} className="w-24 md:w-28 -ml-2" />
                                            </div>
                                            <div>
                                                <div className="mb-2 flex">
                                                    <div className="text-md md:text-xl font-bold">{item.sku?.name}</div>
                                                    <BagItemColor color={item.sku?.color} />
                                                </div>
                                                <QuantitySelector
                                                    value={item.quantity}
                                                    onIncrease={() => dispatch(increaseQuantity({ id: item.sku.product_id }))}
                                                    onDecrease={() => dispatch(decreaseQuantity({ id: item.sku.product_id }))}
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
                    </div>
                    {basket && basket.length > 0 && (
                        <div className="bg-white px-4 py-6 border-t">
                            <div className="flex justify-between items-center text-2xl mb-4">
                                <div>Итого</div>
                                <div className="font-bold">{getTotalSum(basket)}&#x20bd;</div>
                            </div>
                            <div className="grid">
                                <Button variant="filled" size="md" className="w-full" radius='lg'
                                    onClick={checkoutItems}
                                    disabled={isDisabled}
                                    loaderProps={{ type: 'dots' }}
                                >Оплатить</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Drawer>
    )
}

export default Sidebar