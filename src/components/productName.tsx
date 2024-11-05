import { FC } from "react";

interface IProductName {
    name: string
}

const ProductName: FC<IProductName> = ({ name }) => {

    return (
        <>
            <h3 className="text-5xl font-bold mb-2">{name}</h3>
        </>
    )
}

export default ProductName