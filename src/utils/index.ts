import { MyBag } from "../types"
import * as CryptoJS from "crypto-js";

export function updateBagItems(setBucketCounter: any, setBagItems: any) {
    let temp = localStorage.getItem('onekey-shopping-bag')

    if (temp) {
        let decrypted = decryptData(temp)
        try {
            const items = JSON.parse(decrypted)
            if (validateBagItems(items)) {
                setBucketCounter(countBagItems(items))
                setBagItems(items)
            } else {
                localStorage.removeItem('onekey-shopping-bag')
            }
        } catch (e) {
            console.log(e)
            localStorage.removeItem('onekey-shopping-bag')
        }
    }
}

function validateBagItems(list: any) {
    for (const x of list) {
        if ('sku' in x && 'quantity' in x) {
            if (
                'product_id' in x['sku'] &&
                'name' in x['sku'] &&
                'color' in x['sku'] &&
                'image' in x['sku'] &&
                'price' in x['sku'] &&
                'supply' in x['sku'] &&
                'waiting' in x['sku'] &&
                'sequence' in x['sku'] &&
                'published' in x['sku']
            ) {
                
            } else {
                return false
            }
        } else {
            return false
        }
    }

    return true
}

export const countBagItems = (list: MyBag[]) => {
    let sum = 0

    list.forEach((pr: MyBag) => {
        sum += pr.quantity;
    })

    return sum
}

export const parseBagFromStorage = () => {
    let temp = localStorage.getItem('onekey-shopping-bag')
    let cards: MyBag[] = []

    try {
        if (temp) {
            cards = JSON.parse(decryptData(temp))
        }
    } catch (e: any) {
        console.log(e)
    }

    return cards
}

export const getTotalSum = (list: MyBag[]) => {
    let sum = 0

    list.forEach((pr: MyBag) => {
        if (pr && pr.sku) {
            sum += pr.quantity * pr.sku.price;
        }
    })

    return sum
}


export function isValidEmail(email: string) {
    // Define the regex pattern for validating an email address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regex pattern
    return emailPattern.test(email);
}

export function isValidPhoneNumber(phoneNumber: string) {
    // Define a regex pattern for validating phone numbers
    const phonePattern = /^\+?(\d{1,3})?[-. ]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{1,9}$/;

    // Test the phone number against the regex pattern
    return phonePattern.test(phoneNumber);
}

export function encryptData(data: any): string {
    if (process.env.REACT_APP_SECRET_KEY) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), process.env.REACT_APP_SECRET_KEY).toString();
    }
    return ''
}

function decryptData(cipherText: string): any {
    if (process.env.REACT_APP_SECRET_KEY) {
        const bytes = CryptoJS.AES.decrypt(cipherText, process.env.REACT_APP_SECRET_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return ''
}