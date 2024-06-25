import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SecSliders, Image } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Slider(props) {
    const [slideView, setSlideView] = useState(1)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSlideView(2)
            } else {
                setSlideView(3)
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])

    return (
        <SecSliders id={props.id} className='sliders pt-20 pb-20'>
            <Swiper
                modules={[Navigation, Autoplay, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={slideView}
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