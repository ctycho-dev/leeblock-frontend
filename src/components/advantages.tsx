import { FC, useEffect, useState } from "react";
import AdvantageBlock from "./advantageBlock";
import { adv } from "../store/advantages";

interface IAdvantages { }

const Advantages: FC<IAdvantages> = ({ }) => {

    const [scrollX, setScrollX] = useState(0)

    useEffect(() => {
        const scrollSection = document.querySelector('#scroll-section')

        if (scrollSection) {
            scrollSection.addEventListener('scroll', () => {
                trackProgress(scrollSection)
            })
            trackProgress(scrollSection)
        }

    }, [])


    const trackProgress = (element: Element) => {
        if (!element) return

        const scrollWidth = element.scrollWidth - element.clientWidth;
        const blockStartingPosition = element.getBoundingClientRect().left + window.scrollX;

        // Get current horizontal scroll position
        const scrollLeft = element.scrollLeft;

        // Calculate progress as a percentage
        // const progress = (scrollLeft / scrollWidth) * 100;
        const progress = ((scrollLeft + blockStartingPosition) / scrollWidth) * 100;
        setScrollX(Math.min(progress, 100))
    }

    return (
        <>
            <div id='advantages' className="bg-[#13171D] text-white pt-20 pb-40">
                <div className="max-w-7xl m-auto px-6 tablet:px-10">
                    <h2 className="text-2xl tablet:text-3xl mb-14 font-bold">Преимущества</h2>

                    <div id="scroll-section" className="scroll-area -me-6 tablet:-me-10 lg:me-0 mb-10">
                        <div className="adv-items">
                            {
                                adv.map((item: any, i: any) => {
                                    return (
                                        <AdvantageBlock
                                            key={i}
                                            image={item.image}
                                            title={item.title}
                                            subtitle={item.subtitle}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div id="progress-bar" className="lg:hidden bg-[#36383DBF] h-[2px]">
                        <div style={{width: `${scrollX}%`}} className="bg-white h-[2px]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Advantages