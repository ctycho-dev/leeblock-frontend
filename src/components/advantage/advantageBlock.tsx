import { FC } from "react";

interface IAdvantageBlock {
    image: string
    title: string
    subtitle: string
}

const AdvantageBlock: FC<IAdvantageBlock> = ({ image, title, subtitle }) => {

    return (
        <>
            <div className="bg-card-dark p-5 rounded-2xl hover:cursor-pointer">
            {/* <div className="bg-card-dark p-5 rounded-2xl hover:cursor-pointer w-[320px]"> */}
                <div className="flex justify-center mb-10 mt-4" dangerouslySetInnerHTML={{__html: image}}>
                </div>
                <div>
                    <div>{title}</div>
                    <div className="text-sm text-[#FFFFFFA8]">{subtitle}</div>
                </div>
            </div>
        </>
    )
}

export default AdvantageBlock