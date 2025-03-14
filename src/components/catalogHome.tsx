import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OneKeyPro from "./oneKeyPro";
import OneKeyItem from "./oneKeyItem";
import {
    FiArrowRight
  } from "react-icons/fi";

import { Product } from "../types";
import { getProductById, getProductsToDisplay } from "../utils/products";

import Skeleton from 'react-loading-skeleton'

interface ICatalogHome {
}

const CatalogHome: FC<ICatalogHome> = ({ }) => {
    const [proWhite, setWhitePro] = useState<Product | null>(null)
    const [proBlack, setBlackPro] = useState<Product | null>(null)
    const [itemsToDisplay, setItemsToDisplay] = useState<Product[] | null>(null)

    useEffect(() => {

        const fetchAPI = async () => {
            const fetchedBlack = await getProductById(1)
            const fetchedWhite = await getProductById(2)
            const fetchedItemsToDisplay = await getProductsToDisplay()

            if (fetchedWhite && fetchedWhite.data) {
                setWhitePro(fetchedWhite.data)
            }
            if (fetchedBlack && fetchedBlack.data) {
                setBlackPro(fetchedBlack.data)
            }
            if (fetchedItemsToDisplay && fetchedItemsToDisplay.data) {
                setItemsToDisplay(fetchedItemsToDisplay.data)
            }
        }

        fetchAPI()

    }, [])

    return (
        <>
            <div id='catalog' className="bg-checkout dark:bg-dark-primary dark:text-white rounded-t-[50px] py-16">
                <div className="max-w-7xl m-auto px-6 tablet:px-10">
                    <Link to='/catalog' className="text-2xl tablet:text-3xl mb-14 font-bold flex items-center gap-x-2">
                        <span>Все товары</span>
                        <FiArrowRight />
                    </Link>
                    <div className="mb-4">
                        {
                            proWhite && proBlack ?
                                <OneKeyPro
                                    proBlack={proBlack}
                                    proWhite={proWhite}
                                />
                                :
                                <Skeleton
                                    style={{
                                        borderRadius: '1.5rem'
                                    }}
                                    baseColor='#F9FAFC'
                                    className="h-[300px] lg:h-[500px] rounded-2xl shadow-custom" />
                        }
                    </div>
                    <div className="grid tablet:grid-cols-2 gap-4">
                        {
                            itemsToDisplay ?
                                <>
                                    {
                                        itemsToDisplay.map((item: Product, i: number) => {
                                            return (
                                                <OneKeyItem
                                                    key={i}
                                                    product={item}
                                                    description="Ультралёгкий кошелёк с чипом EAL6+"
                                                />
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                    <Skeleton
                                        style={{
                                            borderRadius: '1.5rem'
                                        }}
                                        baseColor='#F9FAFC'
                                        className="h-[500px] rounded-2xl shadow-custom" />
                                    <Skeleton
                                        style={{
                                            borderRadius: '1.5rem'
                                        }}
                                        baseColor='#F9FAFC'
                                        className="h-[500px] rounded-2xl shadow-custom" />
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogHome