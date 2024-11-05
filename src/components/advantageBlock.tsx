import { FC } from "react";

interface IAdvantageBlock {
    title: string
    subtitle: string
}

const AdvantageBlock: FC<IAdvantageBlock> = ({ title, subtitle }) => {

    return (
        <>
            <div className="bg-[#36383DBF] p-5 rounded-2xl h-96 hover:cursor-pointer">
                <div>
                    {/* Image */}
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