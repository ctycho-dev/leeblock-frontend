import axios from "axios"

export async function getProducts() {
    
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/v1/get_products`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
    return null
}


export async function getProductById(id: string) {
    
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/v1/get_products/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })

        return res
    } catch (error) {
        console.error(error)
    }
    return null
}


export async function getProductsToDisplay() {
    
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/v1/get_products_to_display`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return res
    } catch (error) {
        console.error(error)
    }
    return null
}