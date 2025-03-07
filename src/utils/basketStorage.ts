import { MyBag } from "../types";


export const parseBasket = () => {
    try {
        // Get the basket data from localStorage
        const basketData = localStorage.getItem('customer-basket');

        // If no data exists, return an empty array
        if (!basketData) return [];

        // Attempt to parse the data
        const parsedData = JSON.parse(basketData);

        // Validate the parsed data (ensure it's an array)
        if (Array.isArray(parsedData)) {
            return parsedData;
        } else {
            // If the data is not an array, it's invalid
            throw new Error('Invalid basket data');
        }
    } catch (error) {
        // If parsing fails, delete the corrupted data
        localStorage.removeItem('customer-basket');
        console.error('Failed to parse basket data:', error);
        return []; // Return an empty array as a fallback
    }
};

export const saveBasket = (basket: MyBag[]) => {
    try {
        // Convert the basket to a JSON string
        const basketData = JSON.stringify(basket);

        // Save the data to localStorage
        localStorage.setItem('customer-basket', basketData);
    } catch (error) {
        console.error('Failed to save basket data:', error);
    }
};