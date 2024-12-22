import { FC, useState, useEffect } from "react";
import { MyBag } from "../types";
import { updateBagItems } from "../utils";
import Header from "../components/header/header";
import Sidebar from "../components/header/sidebar";
import { Product } from "../types";
import AddToCard from "../components/addToCard";
import Footer from "../components/footer/footer";
import Help from "../components/help";

import Skeleton from 'react-loading-skeleton'

import { getProducts, getProductById } from "../utils/products";

interface IProductElement {
    item: Product
    setBucketCounter: any
    setBagItems: any
}

interface ICatalog { }


const ProductElement: FC<IProductElement> = ({ item, setBucketCounter, setBagItems }) => {

    const [imageChosen, setImageChosen] = useState(0)
    const [imagesList, setImages] = useState<[] | null>(null)

    useEffect(() => {
        if (item.images) {
            try {
                setImages(JSON.parse(item.images))
            } catch (e) { }

        }
    }, [])

    return (
        <>
            <div className="relative bg-white rounded-md p-6 sm-mobile:p-4 md:p-6 shadow-custom min-h-[400px]">
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
                <div className="group hover:cursor-pointer mb-2 min-h-[290px]">
                    <img src={imagesList ? imagesList[imageChosen] : ''} alt="" />
                </div>
                <div className="font-[800] text-base tablet:text-lg mb-2">{item.description}</div>
                {
                    item.supply ?
                        <div className="text-base tablet:text-lg mb-2">&#x20bd; {item.price}</div>
                        : ''
                }
                <div className="flex justify-end mb-2">
                    {
                        item.supply ?
                            <AddToCard product={item} text="В корзину" setBucketCounter={setBucketCounter} setBagItems={setBagItems} />
                            : ''
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
            </div>

        </>
    )
}


const Catalog: FC<ICatalog> = ({ }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [bucketCounter, setBucketCounter] = useState(0)
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [bagItems, setBagItems] = useState<MyBag[] | []>([])
    const [quantityUpdated, setQuantityUpdated] = useState(false)
    const [allProducts, setAllProducts] = useState<Product[] | null>(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'

        updateBagItems(setBucketCounter, setBagItems)

        const fetchAPI = async () => {
            const fetchedProducts = await getProducts()
            if (fetchedProducts && fetchedProducts.data) {
                setAllProducts(fetchedProducts.data)
                setIsLoading(false)
            }
        }

        fetchAPI()

    }, [])

    useEffect(() => {
        if (quantityUpdated) {
            updateBagItems(setBucketCounter, setBagItems)
            setQuantityUpdated(false)
        }
    }, [quantityUpdated])


    return (
        <>
            <div className="bg-checkout dark:bg-dark-primary">
                <Header bucketCounter={bucketCounter} setSidebarOpen={setSidebarOpen} />
                <div className="max-w-7xl m-auto px-6 tablet:px-10">
                    <main className="pb-14 py-10">
                        <aside>
                        </aside>
                        <aside>
                            <div className="grid sm-mobile:grid-cols-2 lg:grid-cols-3 gap-2 tablet:gap-4">
                                {
                                    allProducts ?
                                        allProducts.map((product: Product, i) => {
                                            return (
                                                <ProductElement key={product.product_id} item={product} setBucketCounter={setBucketCounter} setBagItems={setBagItems} />
                                            )
                                        })
                                        :
                                        <>
                                            <Skeleton
                                                style={{
                                                    borderRadius: '0.375rem'
                                                }}
                                                baseColor='#F9FAFC'
                                                className="h-[500px] rounded-2xl shadow-custom" />
                                            <Skeleton
                                                style={{
                                                    borderRadius: '0.375rem'
                                                }}
                                                baseColor='#F9FAFC'
                                                className="h-[500px] rounded-2xl shadow-custom" />
                                            <Skeleton
                                                style={{
                                                    borderRadius: '0.375rem'
                                                }}
                                                baseColor='#F9FAFC'
                                                className="h-[500px] rounded-2xl shadow-custom" />
                                            <Skeleton
                                                style={{
                                                    borderRadius: '0.375rem'
                                                }}
                                                baseColor='#F9FAFC'
                                                className="h-[500px] rounded-2xl shadow-custom" />
                                        </>
                                }
                            </div>
                        </aside>
                    </main>
                </div>
            </div>
            <Footer />
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
                bagItems={bagItems}
                setQuantityUpdated={setQuantityUpdated}
            />
            <Help />
        </>
    )
}


export default Catalog