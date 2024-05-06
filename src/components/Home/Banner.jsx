import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"
import "swiper/css/bundle"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../src/App.css'
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper className='mt-20 mb-10 h-full' cssMode={true}

            navigation={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={
                { delay: 3000 }
            }

            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}>

            <SwiperSlide>
                <div className="slide slide1 rounded-3xl items-end flex px-14 py-10 ">
                    <p className=' bg-gray-500 opacity-80  md:w-[550px] p-3 text-xl md:text-5xl rounded-2xl font-semibold'  data-aos="fade-up-right">
                        Welcome Home: Where Dreams Meet Reality
                    </p>

                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide2 rounded-3xl flex items-end px-14 py-10">
                    <p className=' bg-gray-500 opacity-80  md:w-[550px] p-3 text-xl md:text-5xl rounded-2xl font-semibold'  data-aos="flip-left">
                        Your Dream Home Awaits: Lets Make It a Reality
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide3 rounded-3xl flex items-end px-14 py-10">
                    <p className=' bg-gray-500 opacity-80  md:w-[550px] p-3 text-xl md:text-5xl rounded-2xl font-semibold'  data-aos="fade-up-right">
                        Discover Your Next Chapter: Lets Find Your Home Together
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide slide4 rounded-3xl flex items-end px-14 py-10">
                    <p className=' bg-gray-500 opacity-80  md:w-[550px] p-3 text-xl md:text-5xl rounded-2xl font-semibold'  data-aos="fade-up-left">
                        Unlock Your Dream Home: Start Your Journey Today
                    </p>
                </div>
            </SwiperSlide>


        </Swiper>
    );
};

export default Banner;