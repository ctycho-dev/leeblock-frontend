import { FC, useState, useEffect } from "react";
import FaqBlock from "./faqBlock";

import { faqList } from "../../store/faq";


type FAQType = {
    question: string
    answer: any
}

interface IFAQsSection { }

const FAQsSection: FC<IFAQsSection> = ({ }) => {


    return (
        <>
            <div className="relative">
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <span className="bg-gradient-to-r from-green-400 via-green-600 to-green-800 bg-clip-text text-transparent mb-8 text-5xl font-bold">FAQs</span>
                </div>

                <div className="mx-auto mt-12 max-w-7xl px-6 md:px-10">
                    <div className="space-y-4" style={{ opacity: 1, transform: "none" }}>
                        {faqList.map((item: FAQType) => (
                            <FaqBlock key={item.question} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQsSection;

// import { FC } from "react";
// import FAQBlock from "./faqBlock";
// import { faqList } from '../../store/faq'

// type FAQType = {
//     question: string
//     answer: any
// }

// interface IFAQ { }

// const FAQ: FC<IFAQ> = ({ }) => {

//     return (
//         <>
//             <div className="bg-checkout dark:bg-dark-primary dark:text-slate-200">
//                 <div className="max-w-7xl m-auto px-6 tablet:px-10 pb-10 tablet:pb-20">
//                     <div className="py-12">
//                         <h2 className="text-3xl mb-14">Часто задаваемые вопросы</h2>

//                         {
//                             faqList.map((item: FAQType, index) => {
//                                 return (
//                                     <FAQBlock key={index} index={index} question={item.question} answer={item.answer} />
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FAQ