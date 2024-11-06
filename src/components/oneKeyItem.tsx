import { FC } from "react";
import AddToCard from "./addToCard";
import { Product } from "../types";

interface IOneKeyItem {
    product: Product
    description: string
    setBucketCounter: any
    setBagItems: any
}

const OneKeyItem: FC<IOneKeyItem> = ({ product, description, setBucketCounter, setBagItems }) => {

    return (
        <>
            <div className="relative bg-[#F9FAFC] rounded-3xl p-8">
                <div>
                    {
                        !product.supply ?
                            <div className="absolute top-4 left-4 shadow-custom px-3 py-2 rounded-xl font-medium">Нет в наличии</div>
                            : ''
                    }
                    <div className="flex justify-center">
                        <img src={product.image} alt={product.name} className="w-96" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">{product.name}</h3>
                    <h5 className="text-[#767676] mb-4 text-sm md:text-base">{description}</h5>
                    <div className="flex items-center gap-x-6 justify-between md:justify-normal">
                        <div className="text-3xl md:text-4xl">
                            {product.price}&#x20bd;
                        </div>
                        {
                            product.supply ?
                                <AddToCard product={product} text="В корзину" setBucketCounter={setBucketCounter} setBagItems={setBagItems} />
                                : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneKeyItem