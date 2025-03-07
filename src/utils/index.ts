import { MyBag } from "../types"
import * as CryptoJS from "crypto-js";


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