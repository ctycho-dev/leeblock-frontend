import { FC, useState, useEffect } from "react";

import Announcement from "../components/announcement";
import Header from "../components/header";
import MainScreen from "../components/mainScreen";
import Advantages from "../components/advantages";
import CatalogHome from "../components/catalogHome";
import FAQ from "../components/faq";
import Footer from "../components/footer";
import Sidebar from "../components/sidebar";

import { countBagItems } from "../utils";
import { MyBag } from "../types";
// import ScrollRevealBlock from "../components/ScrollRevealBlock";

interface IHome { }

const Home: FC<IHome> = ({ }) => {
    const [bucketCounter, setBucketCounter] = useState(0)
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [bagItems, setBagItems] = useState<MyBag[] | []>([])
    const [quantityUpdated, setQuantityUpdated] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        updateBagItems()
    }, [])

    useEffect(() => {
        if (quantityUpdated) {
            updateBagItems()
            setQuantityUpdated(false)
        }
    }, [quantityUpdated])

    function updateBagItems() {
        let temp = localStorage.getItem('onekey-shopping-bag')

        if (temp) {
            const items = JSON.parse(temp)
            setBucketCounter(countBagItems(items))
            setBagItems(items)
        }
    }

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
            {/* <ScrollRevealBlock /> */}
            <FAQ />
            <Footer />
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setSidebarOpen={setSidebarOpen}
                bagItems={bagItems}
                setQuantityUpdated={setQuantityUpdated}
            />
            <div className="fixed bottom-4 right-4 z-50">
                <div className="bg-black py-3 px-3 rounded-3xl flex items-center gap-x-2 border-2 border-gray-500 md:border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" xmlSpace="preserve" aria-hidden="true" fill="#fff"><g></g><g></g><g></g><g><g><g><path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z"></path><circle cx="10" cy="15" r="1"></circle></g><path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z"></path></g></g></svg>
                    <span className="text-white hidden md:block">Help</span>
                </div>
            </div>
            {/* <div className="z-50"><div className="h-screen w-screen overflow-hidden"><video playsInline controls loop preload="true" autoPlay src='/representation.mp4' muted></video></div><div className="css-13ze1q6"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="m12.17 10.77 6.3-6.3 1.06 1.06-6.3 6.3-1.06-1.06ZM13.23 12.17l6.3 6.3-1.06 1.06-6.3-6.3 1.06-1.06ZM10.77 12.17l-6.3 6.3 1.06 1.06 6.3-6.3-1.06-1.06ZM11.83 10.77l-6.3-6.3-1.06 1.06 6.3 6.3 1.06-1.06Z" fill="currentColor"></path></svg></div></div> */}
        </>
    )
}

export default Home