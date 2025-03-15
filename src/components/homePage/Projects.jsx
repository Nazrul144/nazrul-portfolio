import Image from "next/image";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';



const Projects = () => {

  const [activeSlide, setActiveSlide] = useState(1)

  const handleSlideChange = (swiper)=>{
    setActiveSlide(swiper.realIndex + 1);
  }
  
  return (
    <div className="px-4 lg:px-20 relative">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] border-2 border-red-400">Content{activeSlide}</div>

        <div className="lg:w-[50%] relative">
          <Swiper
            initialSlide={0}
            effect={"flip"}
            grabCursor={true}
            pagination={{clickable: true}}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            loop={false}
          >
            <SwiperSlide >
                <Image className="lg:ml-28 lg:mt-12" src={'/projects_image/1.jpg'} alt="Project1" width={500} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image className="lg:ml-28 lg:mt-12" src={'/projects_image/1.jpg'} alt="Project1" width={500} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image className="lg:ml-28 lg:mt-12" src={'/projects_image/1.jpg'} alt="Project1" width={500} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image className="lg:ml-28 lg:mt-12" src={'/projects_image/1.jpg'} alt="Project1" width={500} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image className="lg:ml-28 lg:mt-12" src={'/projects_image/1.jpg'} alt="Project1" width={500} height={500}/>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
