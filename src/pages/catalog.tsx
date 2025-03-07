import { FC, useState, useEffect } from "react";
import Skeleton from 'react-loading-skeleton'

import Header from "../components/header/header";
import CatalogItem from "../components/catalog/CatalogItem";
import PreorderForm from '../components/catalog/preorderForm';
import Footer from "../components/footer/footer";
import Help from "../components/help";
import { useDisclosure } from '@mantine/hooks';
import { Product } from "../types";
import { getProducts } from "../utils/products";


interface ICatalog { }

const Catalog: FC<ICatalog> = ({ }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [preoprder, setPreorder] = useState('')
    const [allProducts, setAllProducts] = useState<Product[] | null>(null)
    const [opened, { open, close }] = useDisclosure(false);



    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'

        const fetchAPI = async () => {
            const fetchedProducts = await getProducts()
            if (fetchedProducts && fetchedProducts.data) {
                setAllProducts(fetchedProducts.data)
                setIsLoading(false)
            }
        }

        fetchAPI()

    }, [])


    return (
        <>
            <div className="bg-checkout dark:bg-dark-primary">
                <Header />
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
                                                <CatalogItem
                                                    key={product.product_id}
                                                    open={open}
                                                    item={product}
                                                    setPreorder={setPreorder}
                                                />
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
            <PreorderForm opened={opened} close={close} productName={preoprder} />
            <Help />
        </>
    )
}


export default Catalog