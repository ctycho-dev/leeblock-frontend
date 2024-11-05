import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import AdvantageBlock from "./advantageBlock";
import { adv } from "../store/advantages";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface IAdvantages { }

const Advantages: FC<IAdvantages> = ({ }) => {


    return (
        <>
            <div id='advantages' className="bg-[#13171D] text-white pt-20 pb-40">
                <div className="max-w-7xl m-auto px-6">
                    <h2 className="text-3xl mb-14">Почему выбирают TechnoVibe?</h2>
                    <Swiper
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
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Advantages