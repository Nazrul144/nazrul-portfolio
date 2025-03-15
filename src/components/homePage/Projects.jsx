import Image from "next/image";
import React from "react";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <div className="px-4 lg:px-20">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] border-2 border-red-400">Content1</div>
        <div className="lg:w-[50%]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={'projects_image/1.png'} alt="Cover1" width={600} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src={'projects_image/2.png'} alt="Cover1" width={600} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src={'projects_image/3.png'} alt="Cover1" width={600} height={500}/>
            </SwiperSlide>
            <SwiperSlide>
            <Image src={'projects_image/4.png'} alt="Cover1" width={600} height={500}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
