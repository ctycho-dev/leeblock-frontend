import { FC, useState, useEffect } from "react";
import { Toaster, toast } from 'sonner'
import { MyBag, Product } from "../types";

interface IChangeAmount {
    index: number
    bagItems: MyBag[]
    quantity: number
    setQuantityUpdated: any
}

const ChangeAmount: FC<IChangeAmount> = ({ index, bagItems, quantity, setQuantityUpdated }) => {

    // const [product, setProduct] = useState<MyBag | null>(null)
    const [counter, setCounter] = useState(quantity)

    useEffect(() => {
        setCounter(bagItems[index].quantity)
    }, [])

    useEffect(() => {
        setCounter(quantity)
    }, [quantity])

    // useEffect(() => {
    //     // bagItems[index].quantity = counter
    //     // setQuantityUpdated(bagItems)
    // }, [counter])

    const decreaseAmount = () => {
        setCounter(counter - 1)
        bagItems[index].quantity -= 1
        
        if (bagItems[index].quantity < 1) {
            bagItems.splice(index, 1);
        }

        localStorage.setItem('onekey-shopping-bag', JSON.stringify(bagItems))
        setQuantityUpdated(true)

    }

    const increaseAmount = () => {
        if (bagItems[index].quantity < bagItems[index].sku.supply) {
            setCounter(counter + 1)
            bagItems[index].quantity = counter + 1

            localStorage.setItem('onekey-shopping-bag', JSON.stringify(bagItems))
            setQuantityUpdated(true)
        } else {
            toast.info('Out of stock')
        }
    }

    return (
        <>
            <div className="p-1 border rounded-lg flex w-max flex items-center gap-x-2">
                <div onClick={decreaseAmount} className="hover:cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fillRule="evenodd" clipRule="evenodd" d="M22.1 11.25h-20v1.5h20v-1.5Z" fill="#000"></path></svg>
                </div>
                <div>{counter}</div>
                <div onClick={increaseAmount} className="hover:cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fillRule="evenodd" clipRule="evenodd" d="M12.99 11.25h8.91v1.5h-8.91v-1.5ZM12.75 12.99v8.91h-1.5v-8.91h1.5ZM11.01 11.25H2.1v1.5h8.91v-1.5ZM12.75 11.01V2.1h-1.5v8.91h1.5Z" fill="currentColor"></path></svg>
                </div>
            </div>
            <Toaster richColors position="top-right" />
        </>
    )
}

export default ChangeAmount