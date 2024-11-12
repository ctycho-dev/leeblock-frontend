import { FC, useState, useEffect } from "react";
import { MyBag } from "../types";
import { updateBagItems } from "../utils";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import { products } from "../store/products";
import { Product } from "../types";
import AddToCard from "../components/addToCard";
import Footer from "../components/footer";
import Help from "../components/help";

interface ICatalog { }

const Catalog: FC<ICatalog> = ({ }) => {
    const [bucketCounter, setBucketCounter] = useState(0)
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [bagItems, setBagItems] = useState<MyBag[] | []>([])
    const [quantityUpdated, setQuantityUpdated] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'

        updateBagItems(setBucketCounter, setBagItems)

    }, [])

    useEffect(() => {
        if (quantityUpdated) {
            updateBagItems(setBucketCounter, setBagItems)
            setQuantityUpdated(false)
        }
    }, [quantityUpdated])


    return (
        <>
            <div className="">
                <Header bucketCounter={bucketCounter} setSidebarOpen={setSidebarOpen} />
                <div className="max-w-7xl m-auto px-6 tablet:px-10">
                    <main className="pb-14 pt-32">
                        <aside>
                        </aside>
                        <aside>
                            <div className="grid sm-mobile:grid-cols-2 lg:grid-cols-3 gap-2 tablet:gap-4">
                                {
                                    products.map((product: Product, i) => {
                                        return (
                                            <div key={i} className="relative bg-white rounded-md p-6 sm-mobile:p-4 md:p-6">
                                                {
                                                    !product.supply ?
                                                        <div className="bg-white absolute top-4 left-4 shadow-custom px-3 py-2 rounded-xl font-medium text-xs tablet:text-sm">
                                                            {
                                                                product.waiting ?
                                                                    'В пути'
                                                                    :
                                                                    'Нет в наличии'
                                                            }
                                                        </div>
                                                        : ''
                                                }
                                                <div className="group hover:cursor-pointer mb-2">
                                                    <img src={product.catalog_img} alt="" className="group-hover:hidden" />
                                                    <img src={product.catalog_hover_img} alt="" className="hidden group-hover:block" />
                                                </div>
                                                <div className="font-[800] text-base tablet:text-lg mb-2">{product.description}</div>
                                                {
                                                    product.supply ?
                                                        <div className="text-base tablet:text-lg mb-2">&#x20bd; {product.price}</div>
                                                        : ''
                                                }
                                                <div className="flex justify-end">
                                                    {
                                                        product.supply ?
                                                            <AddToCard product={product} text="В корзину" setBucketCounter={setBucketCounter} setBagItems={setBagItems} />
                                                            : ''
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
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