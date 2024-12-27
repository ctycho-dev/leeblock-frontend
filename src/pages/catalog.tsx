import { FC, useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'

import Header from "../components/header/header";
import Sidebar from "../components/header/sidebar";
import ProductViews from "../components/productViews";
import Footer from "../components/footer/footer";
import Help from "../components/help";

import { MyBag } from "../types";
import { Product } from "../types";
import { updateBagItems } from "../utils";
import { getProducts } from "../utils/products";


interface ICatalog { }

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
                                                <ProductViews key={product.product_id} item={product} setBucketCounter={setBucketCounter} setBagItems={setBagItems} />
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