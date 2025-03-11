import { FC, useEffect } from "react";
import { Toaster, toast } from 'sonner'

import Header from "../components/header/header";
import MainScreen from "../components/mainScreen";
import CatalogHome from "../components/catalogHome";
import FAQ from "../components/faq/faq";
import Footer from "../components/footer/footer";
import Help from "../components/help";
import FeaturesSection from "../components/featuresSection/featuresSection";

interface IHome { }

const Home: FC<IHome> = ({ }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
        const body = document.querySelector('body')
        if (body) body.style.overflow = 'auto'

        const orderId = localStorage.getItem('OrderId')
        if (orderId) {
            toast.success(`Заказ #${orderId} сформирован`)
            localStorage.removeItem('OrderId')
            localStorage.removeItem('customer-basket')
        }
    }, [])


    return (
        <>
            <main className="tablet:bg-main-texture dark:bg-dark-primary dark:text-white">
                <Header />
                <MainScreen />
            </main>
            <div className="max-w-[1920px] m-auto">
                <video src="/representation.mp4" autoPlay loop playsInline preload="true" muted></video>
            </div>
            <div className="bg-[#09090B]">
                <FeaturesSection />
            </div>
            <CatalogHome />
            <div id="faq-section" className="bg-[#09090B] py-16">
                <FAQ />
            </div>
            <Footer />
            <Help />
            <Toaster richColors position="top-right" />
        </>
    )
}

export default Home