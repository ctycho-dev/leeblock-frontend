
import { FC, useState, useEffect } from 'react';
import AddToCard from './buttons/addToCard';
import PreorderForm from './preorderForm';
import { Product } from '../types';

import { FaArrowCircleRight } from "react-icons/fa";
import PreorderButton from './buttons/preorderButton';


interface IProductViews {
    item: Product
    setBucketCounter: any
    setBagItems: any
}

const ProductViews: FC<IProductViews> = ({item, setBucketCounter, setBagItems}) => {

    const [imageChosen, setImageChosen] = useState(0)
    const [imagesList, setImages] = useState<[]>([])
    const [visiblePreorder, setVisiblePreorder] = useState(false);

    useEffect(() => {
        if (item.images) {
            try {
                setImages(JSON.parse(item.images))
            } catch (e) { }

        }
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
            <div className="relative group bg-white rounded-md p-6 sm-mobile:p-4 md:p-6 shadow-custom min-h-[400px]">
                {
                    !item.supply ?
                        <div className="bg-white absolute top-4 left-4 shadow-custom px-3 py-2 rounded-xl font-medium text-xs tablet:text-sm">
                            {
                                item.waiting ?
                                    'В пути'
                                    :
                                    'Нет в наличии'
                            }
                        </div>
                        : ''
                }
                <div className="relative hover:cursor-pointer mb-2 min-h-[290px]">
                    <button onClick={prevSlide} disabled={imageChosen == 0} className={`absolute left-0 top-1/2 transition-opacity duration-200 invisible group-hover:visible disabled:opacity-50`}><FaArrowCircleRight className="text-2xl text-zinc-800 rotate-180" /></button>
                    <img src={imagesList ? imagesList[imageChosen] : ''} alt="" />
                    <button onClick={nextSlide} disabled={imagesList && imageChosen + 1 >= imagesList.length} className={`absolute right-0 top-1/2 transition-opacity duration-200 invisible group-hover:visible disabled:opacity-50`}><FaArrowCircleRight className="text-2xl text-zinc-800" /></button>
                </div>
                <div className="font-[800] text-base tablet:text-lg mb-3">{item.description}</div>
                <div className='mb-2'>
                    {
                        item.supply ?
                            <>
                                <div className="flex justify-between items-center">
                                    <div className="font-bold tablet:text-xl">&#x20bd; {item.price}</div>
                                    <AddToCard product={item} text="В корзину" setBucketCounter={setBucketCounter} setBagItems={setBagItems} />
                                </div>
                            </>
                            :
                            <div className='flex justify-end'>
                                <PreorderButton setVisiblePreorder={setVisiblePreorder} />
                            </div>
                    }
                </div>
                <div className="flex gap-x-2">
                    {
                        imagesList?.map((imgItem, i) => {
                            return (
                                <span key={`${item.product_id}_${i}`} className="hover:cursor-pointer" onClick={() => { setImageChosen(i) }}>
                                    <img src={imgItem} alt="" className={`w-14 h-14 p-1 rounded-md border-gray-500 ${imageChosen == i ? 'border' : ''}`} />
                                </span>
                            )
                        })
                    }
                </div>
            <PreorderForm visiblePreorder={visiblePreorder} setVisiblePreorder={setVisiblePreorder} productName={item.name +' '+ item.description} />
            </div>
        </>
    )
}
        
export default ProductViews