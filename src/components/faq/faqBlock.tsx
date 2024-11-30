import { FC, useState, useRef } from "react";

interface IFaqBlock {
    question: string
    answer: string
}

const FaqBlock: FC<IFaqBlock> = ({ question, answer }) => {

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

            <div
                className={`rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 px-4 transition-colors`}
                onClick={toggleFAQ}
            >
                <button className="flex w-full items-center justify-between gap-4 py-4">
                    <span className={`text-left text-lg font-medium transition-colors text-slate-300`}>
                        {question}
                    </span>
                    <span
                        className={`${isOpen ? 'rotate-45' : ''} transition-all duration-300`}
                        // style={{ transform: "rotate(0deg) translateZ(0px)" }}
                    >
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`text-2xl transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </span>
                </button>
                <div
                    ref={answerRef}
                    // className="overflow-hidden text-slate-400"
                    className="text-sm text-zinc-400 overflow-hidden transition-[max-height] duration-300 ease-out"
                    // style={{ height: 0, marginBottom: 0 }}
                    style={{ 
                        maxHeight: isOpen ? `${answerRef?.current?.scrollHeight}px` : '0',
                        marginBottom: isOpen ? '1rem' : '0',
                    }}
                >
                    <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                </div>
            </div>
        </>
    );
};

export default FaqBlock;


// import { FC, useState, useRef } from "react";

// import plus from '../../assets/plus.svg'
// import plusWhite from '../../assets/plusWhite.svg'

// interface IFAQBlock {
//     index: number
//     question: string
//     answer: any
// }

// const FAQBlock: FC<IFAQBlock> = ({ index, question, answer }) => {

//     const [isOpen, setIsOpen] = useState(false)
//     const [currentHeight, setCurrentHeight] = useState<number | undefined>(0)

//     const answerRef = useRef<HTMLDivElement>(null);

//     const toggleFAQ = () => {
//         setIsOpen(!isOpen);
//         if (isOpen) {
//             setCurrentHeight(answerRef?.current?.scrollHeight)
//         } else {
//             setCurrentHeight(0)
//         }
//     };

//     return (
//         <>
//             <div className={`${index === 0 ? 'border-t' : ''} border-b border-[#0000009C] dark:bg-card-dark dark:px-4 dark:rounded-3xl dark:mb-2 py-6`}>
//                 <div className="grid hover:cursor-pointer" onClick={toggleFAQ}>
//                     <div className="grid grid-cols-1-20 items-center">
//                         <div className="flex gap-x-4 tablet:gap-x-6 items-center">
//                             <div>{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
//                             <div className="text-sm tablet:text-md md:text-lg lg:text-xl font-semibold">{question}</div>
//                         </div>
//                         <div className={`${isOpen ? 'rotate-45' : ''} transition-all duration-300 ml-2`}>
//                             <img src={plus} alt="plus" className="dark:hidden"/>
//                             <img src={plusWhite} alt="plus" className="hidden dark:block"/>
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     ref={answerRef}
//                     className="overflow-hidden transition-[max-height] duration-300 ease-out text-sm md:text-base"
//                     style={{ maxHeight: isOpen ? `${answerRef?.current?.scrollHeight}px` : '0' }}
//                 >
//                     <br />
//                     <span dangerouslySetInnerHTML={{ __html: answer }}></span>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FAQBlock