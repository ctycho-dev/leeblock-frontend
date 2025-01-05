import axios from "axios"

export async function getProducts() {
    
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/products/`, {
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


export async function getProductById(id: number) {
    
    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/products/${id}`, {
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
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/products/to_display`, {
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