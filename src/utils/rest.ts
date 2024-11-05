import axios from "axios"

export const getCities = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/v1/cdek/get_cities`);
        return res.data
    } catch (e) {
        console.log(`Error: ${e}`)
    }
    return null
}