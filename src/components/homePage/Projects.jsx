import Image from "next/image";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { TiArrowRightThick } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex + 1);
  };

  return (
    <div className="px-4 lg:px-20 relative">
      <h1 className="font-extrabold text-center text-4xl mb-4 ">
        Latest <span className="text-red-600 ">Projects</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%]">
          <h1
            className="font-extrabold text-5xl text-transparent bg-clip-text 
               bg-gradient-to-r from-red-600 to-purple-700 
               drop-shadow-lg animate-pulse"
          >
            0{activeSlide}
          </h1>
          <h1 className="font-extrabold text-2xl lg:text-3xl mt-4">{projectData[activeSlide-1]?.title}</h1>
          <h3 className="mt-2 mb-6 text-white text-sm">Website: <span className="text-orange-600">{projectData[activeSlide-1]?.name}</span></h3>
          <p className="text-justify text-gray-100 text-sm">{projectData[activeSlide -1]?.description}</p>
          <h4 className="text-white mt-4 text-sm">Technologies: <span className="text-green-500 text-sm">{projectData[activeSlide -1]?.technologies}</span></h4>
          <hr className="mb-4 mt-3"/>
          <div className="flex items-center gap-8 ">
          <Link href="#"><FaGithub className="text-2xl" /></Link>
          <Link href={`${projectData[activeSlide -1]?.liveLink}`} passHref><span className="flex items-center">Live <TiArrowRightThick className="text-3xl "/></span></Link>
          </div>
        </div>
        <div className="lg:w-[50%] relative">
          <Swiper
            initialSlide={0}
            effect={"flip"}
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            loop={false}
          >
            <SwiperSlide>
              <Image className="lg:ml-28 lg:mt-12" src={"/projects_image/1.jpg"} alt="Project1" width={500} height={500} />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="lg:ml-28 lg:mt-12" src={"/projects_image/2.png"} alt="Project1" width={500} height={500} />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="lg:ml-28 lg:mt-12" src={"/projects_image/3.jpg"} alt="Project1" width={500} height={500} />
            </SwiperSlide>
            <SwiperSlide>
              <Image className="lg:ml-28 lg:mt-12" src={"/projects_image/4.jpg"} alt="Project1" width={500} height={500} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;

const projectData = [
  { id: 1, title: "Full Stack Project", name:"Car-Doctor", description: "A full-stack web application that allows users to easily access car services. It features user authentication with middleware, enabling users to view, update, and delete service details. The platform is fully responsive and includes private routes for secure access." , technologies:"Tailwind CSS, Material-UI, JavaScript, React.js, Next.js, Node.js, MongoDB, Vercel"},

  { id: 2, title: "Full Stack Project", name: 'ShopEase', description: "An e-commerce platform that allows users to search, filter, and sort products (high to low and low to high) with pagination. Users can find a wide range of products, including mobiles, cameras, laptops, keyboards, TVs, watches, headphones, and more. The website provides a seamless shopping experience with advanced filtering options.", technologies:"Tailwind CSS, DaisyUI, JavaScript, Firebase, React.js, Node.js, Express.js, MongoDB, Firebase Hosting", liveLink: "https://shop-ease-b2fc1.web.app", githubClient: "https://github.com/Nazrul144/ShopEase-Client", githubServer:"https://github.com/Nazrul144/ShopEase-Server" },

  { id: 4, title: "Full Stack Project", name:"ReadShop", description: "A full-stack e-commerce project developed as a team. This website mainly focus on books where users can create a wishlist, browse and search for books, and explore various filtering options. The site includes features like a payment method, user reviews, live chat for customer support, and an admin dashboard for managing content. The platform is fully responsive, providing a seamless experience across devices.", technologies:"Tailwind CSS, Material-UI, AntDesign, shadcn, JavaScript, React.js, Next.js, Node.js, MongoDB, Vercel"},

  { id: 3, title: "Frontend Project", name: "HolidayHive", description: "A front-end project that allows users to easily book hotels for their holiday travels. The platform offers a user-friendly interface for selecting and reserving accommodations, helping travelers find the perfect stay for their vacations. The project features a dark theme for enhanced user experience and is fully responsive across all devices.", technologies: "Tailwind CSS, Material-UI, JavaScript, Firebase, React.js, Node.js, MongoDB," },
];
