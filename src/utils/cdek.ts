import axios from "axios";

export async function getTariffCalculations(data: any) {
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/v1/cdek/get_calculation`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(res);
        return res;
    } catch (error) {
        console.error(error);
    }
    return null;
}