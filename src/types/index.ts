export type Product = {
    product_id: string
    name: string
    description: string
    color?: string
    image?: string
    images?: string
    catalog_img?: string
    catalog_hover_img?: string
    price: number
    supply: number
    waiting?: number
    sequence: number
    published: number
    weight: number
    height: number
    length: number
    width: number
}

export type MyBag = {
    sku: Product
    quantity: number
}

export type Promocode = {
    id: number
    discount_value: number
}

export type BasketState = {
    items: MyBag[]
    discount: Promocode
    // discount_value: Promocode
};

export type CityForm = {
    label: string
    value: string
}

export type City = {
    code: number
    name: string
}

type DeliveryDataType = {
    calendar_max: number
    calendar_min: number
    currency: string
    delivery_sum: number
    period_max: number
    period_min: number
    total_sum: number
    weight_calc: number
}

export type DelivetyType = {
    name: string
    code: number
    data: DeliveryDataType
}

export interface IUser {
    id: number;
    email: string;
    first_name: string | null;
    last_name: string | null;
    admin: number;
    phone: string | null;
    is_verified: boolean;
    created_at: string;
}


export interface IPromoCode {
    code: string;
    discount_type: string;
    discount_value: number;
    used_count: number;
    max_uses: number;
    created_at: string
    user_email: string
}

export interface DataType {
    Amount: number;
    DATA: {
        Phone: string;
        Email: string;
    };
    Receipt: {
        Email: string;
        Phone: string;
        Taxation: string;
        Items: {
            Name: string;
            Price: number;
            Quantity: number;
            Amount: number;
            Tax: string;
        }[];
    };
    city?: string;
    zip?: string;
    address?: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    promo_code_id?: number;
}


// export interface IOrderItem {
//     Name: string;
//     Price: number;
//     Quantity: number;
//     Amount: number;
//     Tax: string;
// }

// export interface IOrder {
//     id: number;
//     address: string;
//     amount: number;
//     bug: string;
//     city: string;
//     created_at: string;
//     email: string;
//     first_name: string;
//     last_name: string;
//     payment_id: number | null;
//     phone: string;
//     status: string;
//     token: string | null;
//     zip: string;
// }

export interface IOrderItem {
    Name: string
    Quantity: number
    Price: number
    Amount: number
    Tax: string
}

export interface IOrder {
    id: string
    first_name: string
    last_name: string
    amount: number
    status: "NEW" | "PROCESSING" | "SHIPPED" | "DELIVERED" | "CANCELLED"
    created_at: string
    address: string
    city: string
    zip: string
    email: string
    phone?: string
    payment_id?: string 
    bug: string
    token?: string
}