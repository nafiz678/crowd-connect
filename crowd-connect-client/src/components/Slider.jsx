import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Tooltip } from 'react-tooltip'

const Slider = () => {

    const swiperRef = useRef(null);

    const slides = [
        {
            "id": 1,
            "image": "https://i.ibb.co.com/LzwkNfS/author-books-of-2023-16x9.jpg",
            "title": "New Children's Book Publication",
            "subtitle": "Support the creation of an inspiring children's book that teaches kids about kindness and empathy!"
          },
          {
            "id": 2,
            "image": "https://i.ibb.co.com/nRcXVK5/169185-iizeawdduk-1642939857.jpg",
            "title": "Innovative Solar Startup",
            "subtitle": "Join us in revolutionizing solar energy with cutting-edge technology. Support our new startup to make the world greener!"
          },
          {
            "id": 3,
            "image": "https://i.ibb.co.com/yNVxHSZ/5653009-1439438761-4176.webp",
            "title": "Medical Fund for Sarah",
            "subtitle": "Help Sarah fight cancer by supporting her medical expenses. Every contribution makes a difference!"
          },
          {
            "id": 4,
            "image": "https://i.ibb.co.com/5FcT8tr/36448-hd.jpg",
            "title": "Urban Gardening Initiative",
            "subtitle": "Help us promote sustainable urban farming by supporting our initiative to build community gardens in city spaces."
          },
          {
            "id": 6,
            "image": "https://i.ibb.co.com/2Wfxf28/recycle.jpg",
            "title": "Recycling Awareness Campaign",
            "subtitle": "Help raise awareness about the importance of recycling and environmental sustainability. Your support can make a big impact!"
          }
    ];


    const handleChange = (index) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
    };




    return (
        <div className="w-11/12 my-10 mx-auto">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="rounded-lg overflow-hidden"
            >
                {slides.map((slide, idx) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative lg:h-96 h-60 md:h-64">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[400px] md:h-[500px] object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                                <h2 className="text-lg md:text-2xl font-bold">{slide.title}</h2>
                                <p className="text-sm md:text-lg">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            <div className="mt-4 flex space-x-2 justify-center">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={5}
                    loop={true}
                    className="w-full"
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={slide.id} className="cursor-pointer">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-24 object-cover rounded-lg border border-gray-300"
                                onClick={() => handleChange(idx)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;