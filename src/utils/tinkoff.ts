import axios from "axios";


export const initPayment = async (data: any) => {


    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/payments/`, data);

        return res.data
    } catch (e) {
        console.log(`Error: ${e}`)
    }
    return null
}

export const getPaymentState = async (data: any) => {

    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/v2/GetState`, data);
        console.log(res.data)

        return res.data
    } catch (e) {
        console.log(`Error: ${e}`)
    }
    return null
}