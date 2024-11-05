import { FC, useEffect, useState } from "react";
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

    const addToBucket = () => {
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
    }
    
    return (
        <>
            <button className="button-gradient py-2 px-4 rounded-xl flex items-center hover:-mt-[2px] hover:mb-[2px] transition-all"
                onClick={addToBucket}>
                {text}
                {arrow ? <span className="ml-2">&#8594;</span> : ''}
            </button>
        </>
    )
}

export default AddToCard
