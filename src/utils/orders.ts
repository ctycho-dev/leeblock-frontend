import axios from "axios";


export async function getOrders() {
    let res = null

    try {
        res = await axios.get(`${process.env.REACT_APP_BACKEND}/requests`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('access_token') || ''}`,
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                console.error("Error status:", error.response.status);
                console.error("Error data:", error.response.data);
                return error.response;
            }
        }
    }
    return res;
}
