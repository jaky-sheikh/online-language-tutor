import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img className='w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover' src="pictures/slide1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover' src="pictures/slide2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover' src="pictures/slide3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className='w-full h-[300px] md:h-[500px] lg:h-[800px] object-cover' src="pictures/slide4.jpg" alt="" /></SwiperSlide>
        </Swiper>


    );
};

export default Slider;