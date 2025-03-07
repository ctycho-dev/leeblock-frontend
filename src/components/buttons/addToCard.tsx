import { FC, useState } from "react";
import { Product } from "../../types";
import { Button } from "@mantine/core";
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/bugsSlice';
import { toast } from "sonner";

import { HiShoppingBag } from "react-icons/hi2";

interface IAddToCard {
    text: string
    product: Product
}

const AddToCard: FC<IAddToCard> = ({ text, product }) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch();


    const handleAddToBasket = () => {
        setIsDisabled(true)
        dispatch(addItem({ product, quantity: 1 }));
        toast.success('Товар успешно добавлен.')

        setTimeout(() => {
            setIsDisabled(false)
        }, 500)
      };

    return (
        <>
            <Button
                onClick={handleAddToBasket}
                disabled={isDisabled}
                radius="md"
                loaderProps={{ type: 'dots' }}
                className='flex items-center gap-x-2 text-black'
            >
                {text} <HiShoppingBag className="ml-2 text-xl" />
            </Button>
        </>
    )
}

export default AddToCard
