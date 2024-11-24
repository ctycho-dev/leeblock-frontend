import { FC, useState, useRef } from "react";

import plus from '../assets/plus.svg'

interface IFAQBlock {
    index: number
    question: string
    answer: any
}

const FAQBlock: FC<IFAQBlock> = ({ index, question, answer }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [currentHeight, setCurrentHeight] = useState<number | undefined>(0)

    const answerRef = useRef<HTMLDivElement>(null);

    const toggleFAQ = () => {
        setIsOpen(!isOpen);
        if (isOpen) {
            setCurrentHeight(answerRef?.current?.scrollHeight)
        } else {
            setCurrentHeight(0)
        }
    };

    return (
        <>
            <div className={`${index == 0 ? 'border-t' : ''} border-b border-[#0000009C] py-6`}>
                <div className="grid hover:cursor-pointer" onClick={toggleFAQ}>
                    <div className="grid grid-cols-1-20 items-center">
                        <div className="flex gap-x-4 tablet:gap-x-6 items-center">
                            <div>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
                            <div className="text-sm tablet:text-md md:text-lg lg:text-xl font-semibold">{question}</div>
                        </div>
                        <div className={`${isOpen ? 'rotate-45' : ''} transition-all duration-300 ml-2`}>
                            <img src={plus} alt="plus" className=""/>
                        </div>
                    </div>
                </div>
                <div
                    ref={answerRef}
                    className="overflow-hidden transition-[max-height] duration-300 ease-out text-sm md:text-base"
                    style={{ maxHeight: isOpen ? `${answerRef?.current?.scrollHeight}px` : '0' }}
                >
                    <br />
                    <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                </div>
            </div>
        </>
    )
}

export default FAQBlock