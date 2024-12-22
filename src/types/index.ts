export type Product = {
    product_id: string
    // product_type: string
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

export type City = {
    code: number
    name: string
}