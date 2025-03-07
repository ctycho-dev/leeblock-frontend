import { FC, useState } from "react";
import AddToCard from "./buttons/addToCard";
import PreorderForm from "./catalog/preorderForm";
import { Button } from '@mantine/core';
import { TbTruckDelivery } from "react-icons/tb";
import { useDisclosure } from '@mantine/hooks';
import { Product } from "../types";

interface IOneKeyItem {
    product: Product
    description: string
}

const OneKeyItem: FC<IOneKeyItem> = ({ product, description }) => {

    const [opened, { open, close }] = useDisclosure(false);


    return (
        <>
            <div className="relative bg-card-primary dark:bg-card-dark dark:text-white shadow-custom rounded-3xl p-8">
                <div>
                    {
                        !product.supply ?
                            <div className="absolute top-4 left-4 shadow-custom3 dark:shadow-custom4 px-3 py-2 rounded-xl font-medium text-sm">Нет в наличии</div>
                            : ''
                    }
                    <div className="flex justify-center min-h-[280px]">
                        <img src={product.image} alt={product.name} className="w-96" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">{product.name}</h3>
                    <h5 className="text-[#767676] mb-4 text-sm md:text-base">{description}</h5>
                    {
                        product.supply ?
                            <div className="flex items-center gap-x-6 justify-between md:justify-normal">
                                <div className="text-3xl md:text-4xl">
                                    {product.price}&#x20bd;
                                </div>
                                <AddToCard product={product} text="В корзину" />
                            </div>
                            :
                            <div className='flex justify-end'>
                               <Button
                                    onClick={open}
                                    radius="md"
                                    loaderProps={{ type: 'dots' }}
                                    className='flex items-center gap-x-2 text-black'
                                >
                                    Предзаказ <TbTruckDelivery className='ml-2 text-2xl' />
                                </Button>
                            </div>
                    }
                </div>
                <PreorderForm opened={opened} close={close} productName={product.name +' '+ product.description} />
            </div>
        </>
    )
}

export default OneKeyItem