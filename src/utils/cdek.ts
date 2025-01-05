import axios from "axios";

export async function getTariffCalculations(data: any) {
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/delivery/calculate`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return res;
    } catch (error) {
        console.error(error);
    }
    return null;
}