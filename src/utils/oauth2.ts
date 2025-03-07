import axios from "axios";

export const postTokenerification = async (token: string) => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_BACKEND}/users/verify`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return res
    } catch (e) {
        console.log(`Error verifying token: ${e}`)
    }
    return null
}