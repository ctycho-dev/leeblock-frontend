export type Product = {
    product_id: string
    product_type: string
    name: string
    color?: string
    image?: string
    price: number
    supply: number
}

export type MyBag = {
    sku: Product
    quantity: number
}

export type Citites = {
    code: number
    name: string
}