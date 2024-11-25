import { FC } from "react";

interface IBagItemColor {
    color?: string
}

const BagItemColor: FC<IBagItemColor> = ({ color }) => {


    return (
        <>
            {
                color ?
                    <div className="-mt-1 ml-1">
                        {
                            color === 'white' ?
                            <div className="border rounded-md text-black px-2 text-xs">White</div>
                            :
                            <div className="bg-black rounded-md text-white px-2 text-xs">Black</div>
                        }
                    </div>
                    : ''
            }
        </>
    )
}

export default BagItemColor