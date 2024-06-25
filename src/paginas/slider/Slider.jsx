import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SecSliders, Image } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider() {
    return (
        <SecSliders className='sliders pt-20 pb-20'>
            <Swiper
                modules={[Navigation, Autoplay, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image>
                        <img src="./assets/img/img1.webp" alt="" />
                    </Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image>
                        <img src="./assets/img/img2.webp" alt="" />
                    </Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image>
                        <img src="./assets/img/img3.webp" alt="" />
                    </Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image>
                        <img src="./assets/img/img4.webp" alt="" />
                    </Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image>
                        <img src="./assets/img/img5.webp" alt="" />
                    </Image>
                </SwiperSlide>
            </Swiper>
        </SecSliders>
    )
}

export default Slider