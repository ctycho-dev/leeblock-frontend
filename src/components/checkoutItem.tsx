import { FC } from "react";

import BagItemColor from "../components/bagItemColor";

import { MyBag } from "../types";


interface ICheckoutItem {
    item: MyBag

}

const CheckoutItem: FC<ICheckoutItem> = ({ item }) => {

    return (
        <>
            <div className="sm-mobile:bg-white rounded-xl sm-mobile:py-2 sm-mobile:pr-4 mb-1 flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <div className="relative">
                        <img src={item.sku?.catalog_img} alt={item.sku?.name} className="w-20 -ml-2 sm-mobile:ml-0" />
                        <div className="absolute top-0 right-2">
                            <div className="bg-black min-w-4 min-h-4 rounded-[36px] flex items-center justify-center">
                                <span className="text-white text-xs">{item.quantity}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2 flex">
                            <div className="text-base md:text-xl font-bold w-max">{item.sku?.name}</div>
                            <BagItemColor color={item.sku?.color} />
                        </div>
                    </div>
                </div>
                <div>
                    {item.sku.price * item.quantity}&#x20bd;
                </div>
            </div>
        </>
    )
}

export default CheckoutItem