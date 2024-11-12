import { FC, useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { Product, MyBag } from "../types";
import { countBagItems, parseBagFromStorage } from "../utils";

interface IAddToCard {
    text: string
    arrow?: boolean
    product: Product
    setBucketCounter: any
    setBagItems: any
}

const AddToCard: FC<IAddToCard> = ({ text, arrow, product, setBucketCounter, setBagItems }) => {
    const [isDisabled, setButtonDisabled] = useState(false)

    const addToBucket = () => {
        setButtonDisabled(true)
        try {
            let cards: MyBag[] = parseBagFromStorage()

            const card = cards.find((item: MyBag) => item.sku.product_id == product.product_id)

            if (!card) {
                cards.push({
                    sku: product,
                    quantity: 1
                })
            } else {
                card.quantity += 1
            }

            localStorage.setItem('onekey-shopping-bag', JSON.stringify(cards))
            setBucketCounter(countBagItems(cards))
            setBagItems(cards)
        } catch (exc: any) {
            console.log(`Error: ${exc}`)
        }
        setTimeout(() => {
            setButtonDisabled(false)
        }, 700)
    }

    return (
        <>
            <button className={`
                button-gradient text-sm md:text-base py-2 px-4 
                rounded-xl flex items-center gap-x-2
                hover:-mt-[2px] hover:mb-[2px] 
                transition-all whitespace-nowrap
                disabled:pointer-events-none disabled:opacity-50`}
                onClick={addToBucket}
                disabled={isDisabled}>
                {text}
                {arrow ? <span className="ml-2">&#8594;</span> : ''}
                {
                    isDisabled ?
                        <ReactLoading type='spinningBubbles' color='#000' height={'20px'} width={'20px'} />
                        : ''
                }
            </button>
        </>
    )
}

export default AddToCard
