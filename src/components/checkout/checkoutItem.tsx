import { FC } from "react";

import BagItemColor from "../bagItemColor";
import Skeleton from 'react-loading-skeleton'
import Badge from '@mui/material/Badge';
import { MyBag } from "../../types";


interface ICheckoutItem {
    isRendered: boolean;
    myBag: MyBag[];
}

const CheckoutItem: FC<ICheckoutItem> = ({ isRendered, myBag }) => {

    return (
        <>
            {
                isRendered ?
                    myBag?.map((item: MyBag, i: number) => {
                        return (
                            <div key={`sku-${item.sku.product_id}`} className="sm-mobile:bg-white rounded-xl sm-mobile:py-2 sm-mobile:pr-4 mb-1 flex justify-between items-center">
                                <div className="flex justify-between items-center">
                                    <div className="relative">
                                        <Badge badgeContent={item.quantity} color="success" overlap="circular">
                                            <img src={item.sku?.catalog_img} alt={item.sku?.name} className="w-20 -ml-2 sm-mobile:ml-0" />
                                        </Badge>
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
                        )
                    })
                    :
                    <>
                        <Skeleton
                            style={{
                                borderRadius: '0.375rem'
                            }}
                            baseColor='#fff'
                            className="h-[70px] rounded-2xl shadow-custom" />
                        <Skeleton
                            style={{
                                borderRadius: '0.375rem'
                            }}
                            baseColor='#fff'
                            className="h-[70px] rounded-2xl shadow-custom" />
                    </>
            }
        </>
    )
}

export default CheckoutItem