import { FC, useEffect } from "react"
import { TbTruckDelivery } from "react-icons/tb";


interface IPreorderButton {
    setVisiblePreorder: any
}

const PreorderButton: FC<IPreorderButton> = ({ setVisiblePreorder }) => {

    return (
        <>
            <button className='button-gradient text-sm md:text-base py-2 px-4 
                    rounded-xl flex items-center gap-x-2
                    shadow-custom3 hover:shadow-custom4
                    transition-all whitespace-nowrap
                    disabled:pointer-events-none disabled:opacity-50'
                onClick={() => setVisiblePreorder(true)}>
                Предзаказ <TbTruckDelivery className='text-2xl' />
            </button>
        </>
    )
}

export default PreorderButton