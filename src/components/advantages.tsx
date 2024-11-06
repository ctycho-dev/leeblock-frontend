import { FC, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import AdvantageBlock from "./advantageBlock";
import { adv } from "../store/advantages";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface IAdvantages { }

const Advantages: FC<IAdvantages> = ({ }) => {

    useEffect(() => {
        const scrollSection = document.querySelector('#scroll-section')
        if (scrollSection) {
            scrollSection.addEventListener('scroll', () => {
                console.log('scrollLeft ', scrollSection.scrollHeight)
                console.log('scrollWidth ', scrollSection.scrollWidth)
            })
        }

    }, [])

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
                                        // <SwiperSlide key={i}>
                                            <AdvantageBlock
                                                title={item.title}
                                                subtitle={item.subtitle}
                                            />
                                        // </SwiperSlide>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div id="progress-bar" className="bg-slate-400 h-[2px]">
                        <div className="bg-white h-[2px] w-24"></div>
                    </div>

                    {/* <Swiper
                        modules={[Pagination, Autoplay, A11y]}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={15}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            550: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            adv.map((item: any, i: any) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <AdvantageBlock
                                            title={item.title}
                                            subtitle={item.subtitle}
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper> */}
                </div>
            </div>
        </>
    )
}

export default Advantages