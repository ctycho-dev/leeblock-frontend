import { FC, useState, useEffect } from "react";
import { Toaster, toast } from 'sonner'

import Announcement from "../components/announcement";
import Header from "../components/header";
import MainScreen from "../components/mainScreen";
import Advantages from "../components/advantages";
import CatalogHome from "../components/catalogHome";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

import { updateBagItems } from "../utils";

import { MyBag } from "../types";
import Help from "../components/help";

interface IHome { }

const Home: FC<IHome> = ({ }) => {
    const [bucketCounter, setBucketCounter] = useState(0)
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [bagItems, setBagItems] = useState<MyBag[] | []>([])
    const [quantityUpdated, setQuantityUpdated] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'
        
        updateBagItems(setBucketCounter, setBagItems)

        const orderId = localStorage.getItem('OrderId')
        if (orderId) {
            toast.success(`Заказ #${orderId} сформирован`)
            localStorage.removeItem('OrderId')
            localStorage.removeItem('onekey-shopping-bag')
        }
    }, [])

    useEffect(() => {
        if (quantityUpdated) {
            updateBagItems(setBucketCounter, setBagItems)
            setQuantityUpdated(false)
        }
    }, [quantityUpdated])

    return (
        <>
            <main className="bg-main-texture">
                {/* <Announcement /> */}
                <Header
                    bucketCounter={bucketCounter}
                    setSidebarOpen={setSidebarOpen}
                />
                <MainScreen />
            </main>
            <video src="/representation.mp4" autoPlay loop playsInline preload="true" muted></video>
            <Advantages />
            <CatalogHome
                bucketCounter={bucketCounter}
                setBucketCounter={setBucketCounter}
                setBagItems={setBagItems}
            />
            <FAQ />
            <Footer />
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
                bagItems={bagItems}
                setQuantityUpdated={setQuantityUpdated}
            />
            <Help />
            <Toaster richColors position="top-right" />
            {/* <Toaster richColors position="top-right" /> */}
            {/* <div className="z-50"><div className="h-screen w-screen overflow-hidden"><video playsInline controls loop preload="true" autoPlay src='/representation.mp4' muted></video></div><div className="css-13ze1q6"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="m12.17 10.77 6.3-6.3 1.06 1.06-6.3 6.3-1.06-1.06ZM13.23 12.17l6.3 6.3-1.06 1.06-6.3-6.3 1.06-1.06ZM10.77 12.17l-6.3 6.3 1.06 1.06 6.3-6.3-1.06-1.06ZM11.83 10.77l-6.3-6.3-1.06 1.06 6.3 6.3 1.06-1.06Z" fill="currentColor"></path></svg></div></div> */}
        </>
    )
}

export default Home