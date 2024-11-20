export type Product = {
    product_id: string
    // product_type: string
    name: string
    description: string
    color?: string
    image?: string
    catalog_img?: string
    catalog_hover_img?: string
    price: number
    supply: number
    waiting?: number
    sequence: number
    published: number
}

export type MyBag = {
    sku: Product
    quantity: number
}

export type Citites = {
    code: number
    name: string
}