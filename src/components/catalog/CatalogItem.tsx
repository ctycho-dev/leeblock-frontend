
import { FC, useState, useEffect } from 'react';
import AddToCard from '../buttons/addToCard';
import { Carousel } from '@mantine/carousel';
import { Product } from '../../types';
import { Button } from '@mantine/core';
import { TbTruckDelivery } from "react-icons/tb";
import classes from './product.module.css'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { FaArrowCircleRight } from "react-icons/fa";


interface ICatalogItem {
    open: () => void
    item: Product
    setPreorder: any
}

const CatalogItem: FC<ICatalogItem> = ({ open, item, setPreorder }) => {
    const [isRendered, setIsRendered] = useState(false)
    const [imageChosen, setImageChosen] = useState(0)
    const [imagesList, setImages] = useState<[]>([])


    useEffect(() => {
        if (item.images) {
            try {
                setImages(JSON.parse(item.images))
            } catch (e) { }

        }
        setIsRendered(true)
    }, [])

    const prevSlide = () => {
        if (imagesList && imageChosen > 0) {
            setImageChosen(imageChosen - 1)
        }
    }

    const nextSlide = () => {
        if (imagesList && imageChosen + 1 < imagesList.length) {
            setImageChosen(imageChosen + 1)
        }
    }

    return (
        <>
            {isRendered ?
                <div className="relative group bg-white rounded-md p-6 sm-mobile:p-4 md:p-6 shadow-custom flex flex-col">
                    {!item.supply && (
                        <div className="bg-white absolute top-4 left-4 shadow-custom px-3 py-2 rounded-xl font-medium text-xs tablet:text-sm z-10">
                            {item.waiting ?
                                'В пути'
                                :
                                'Нет в наличии'
                            }
                        </div>
                    )}
                    <div className='flex-1'>
                        <Carousel withIndicators height="100%" style={{ flex: 1 }}>
                            {imagesList.map((item, index) => {
                                return <Carousel.Slide key={`carousel-${index}`}><img src={item} alt="" className='object-fill' /></Carousel.Slide>
                            })}
                        </Carousel>
                        <div className="font-[800] text-base tablet:text-lg mb-3">{item.description}</div>
                        {/* <div className="flex gap-x-2 mb-2">
                        {imagesList?.map((imgItem, i) => {
                            return (
                                <span key={`${item.product_id}_${i}`} className="hover:cursor-pointer" onClick={() => { setImageChosen(i) }}>
                                    <img src={imgItem} alt="" className={`w-14 h-14 p-1 rounded-md border-gray-500 ${imageChosen == i ? 'border' : ''}`} />
                                </span>
                            )
                        })}
                    </div> */}
                    </div>
                    {item.supply ?
                        <div className="flex justify-between items-center">
                            <div className="font-bold tablet:text-xl">&#x20bd; {item.price}</div>
                            <AddToCard product={item} text="В корзину" />
                        </div>
                        :
                        <div className='flex justify-end'>
                            <Button
                                onClick={() => { setPreorder(item.name); open() }}
                                radius="md"
                                loaderProps={{ type: 'dots' }}
                                className='flex items-center gap-x-2 text-black'
                            >
                                Предзаказ <TbTruckDelivery className='ml-2 text-2xl' />
                            </Button>
                        </div>
                    }
                </div>
                :
                <Stack spacing={1}>
                    <Skeleton variant="rounded" height={400} />
                </Stack>
            }
        </>
    )
}

export default CatalogItem