import { FC } from "react";
import OneKeyPro from "./oneKeyPro";
import OneKeyItem from "./oneKeyItem";

import { products } from "../store/products";
import { findProductById } from "../utils";


interface ICatalogHome {
    bucketCounter: number
    setBucketCounter: any
    setBagItems: any
}

const CatalogHome: FC<ICatalogHome> = ({ bucketCounter, setBucketCounter, setBagItems }) => {

    return (
        <>
            <div id='catalog' className="bg-white rounded-t-[50px] -mt-20 py-20">
                <div className="max-w-7xl m-auto px-6">
                    <h2 className="text-3xl mb-14">Все товары</h2>
                    <div className="mb-4">
                        <OneKeyPro
                            products={[findProductById(products, 'onekey-pro-white'), findProductById(products, 'onekey-pro-black')]}
                            bucketCounter={bucketCounter}
                            setBucketCounter={setBucketCounter}
                            setBagItems={setBagItems}
                        />
                    </div>
                    <div className="grid tablet:grid-cols-2 gap-4">
                        <OneKeyItem
                            product={findProductById(products, 'onekey-classic-1s')}
                            description="Ультралёгкий кошелёк с чипом EAL6+"
                            setBucketCounter={setBucketCounter}
                            setBagItems={setBagItems}
                        />
                        <OneKeyItem
                            product={findProductById(products, 'onekey-lite')}
                            description="Ультралёгкий кошелёк с чипом EAL6+"
                            setBucketCounter={setBucketCounter}
                            setBagItems={setBagItems}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogHome