import { FC, useEffect, useState } from "react";
import { Box, Text } from "@mantine/core";
import { MyBag, Promocode } from "../../types";
import { getTotalSum } from "../../utils";
import Skeleton from 'react-loading-skeleton';
import { selectTotalSumBeforeDiscount, selectTotalSumAfterDiscount, getDiscount } from '../../features/bugsSlice';
import { useSelector } from 'react-redux';

interface TotalSectionProps {
    isRendered: boolean;
    discount: Promocode
    deliveryPrice: number;
}

const TotalSection: FC<TotalSectionProps> = ({ isRendered, discount, deliveryPrice }) => {
    const sumBeforeDiscount = useSelector(selectTotalSumBeforeDiscount);
    const sumAfterDiscount = useSelector(selectTotalSumAfterDiscount);

    return (
        <>
            {isRendered ? (
                <Box className="bg-gray-200 p-4 rounded-xl text-black">
                    {(deliveryPrice || discount.discount_value > 0) && (
                        <div className="text-gray-600 flex justify-between items-center mb-1">
                            <div className="text-lg">Всего</div>
                            <div className="text-lg font-bold">
                                {discount && (
                                    <span className="line-through mr-2">
                                        {new Intl.NumberFormat("ru-RU", {
                                            style: "currency",
                                            currency: "RUB",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 2,
                                        }).format(sumBeforeDiscount)}
                                    </span>
                                )}
                                {new Intl.NumberFormat("ru-RU", {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2,
                                }).format(sumAfterDiscount)}
                            </div>
                        </div>
                    )}
                    {discount.discount_value > 0 && (
                        <Text className="text-sm text-gray-600 mb-2">
                            Скидка: {discount.discount_value}%
                        </Text>
                    )}
                    {/* {deliveryPrice > 0 && (
                        <div className="text-gray-600 flex justify-between items-center mb-2">
                            <div className="text-md">Доставка</div>
                            <div className="text-md font-bold">{deliveryPrice}&#x20bd;</div>
                        </div>
                    )} */}
                    <div className="flex justify-between items-center">
                        <div className="text-xl">Итого</div>
                        <div className="text-xl font-bold">
                            {new Intl.NumberFormat("ru-RU", {
                                    style: "currency",
                                    currency: "RUB",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 2,
                                }).format(sumAfterDiscount)}
                        </div>
                    </div>
                </Box>
            ) : (
                <Skeleton
                    style={{
                        borderRadius: '0.375rem'
                    }}
                    baseColor='#fff'
                    className="h-[50px] rounded-2xl shadow-custom"
                />
            )}
        </>
    );
};

export default TotalSection;