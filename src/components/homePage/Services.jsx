"use client";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { FaBook, FaBullhorn, FaCode, FaImage, FaPaintBrush, FaPalette, FaVideo } from "react-icons/fa";
import { GoArrowDownRight } from "react-icons/go";
import Typewriter from "typewriter-effect";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesInfo);
  }, []);

  console.log(services);

  return (
    <div className="lg:px-20 px-4">
      <h1 className="font-extrabold text-4xl text-center mt-6 lg:mt-12 mb-12">
        <Typewriter
          options={{
            strings: ['My <span class="text-red-600">Services</span>'],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services?.map((service, index) => (
         <Card
         key={index}
         className="w-full border border-white/30 hover:border-orange-500 rounded-lg p-4 transition-all duration-300 group hover:scale-105 hover:border-[1px] hover:border-gradient-to-r hover:from-red-500 hover:to-orange-500 shadow-2xl"
         title={
           <div className="flex items-center justify-between text-white transition-all duration-300">
             {/* Left Icon */}
             <div className="group-hover:text-orange-500">
               {React.cloneElement(service.icon, { className: "text-2xl" })}
             </div>
             
             {/* Title */}
             <span className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
               {service.title}
             </span>
       
             {/* Right Icon */}
             <GoArrowDownRight className="text-2xl group-hover:text-orange-500 font-bold border-2 border-gray-500 rounded-full" />
           </div>
         }
         variant="borderless"
         style={{
           maxWidth: "100%",
           backgroundColor: "transparent",
           color: "white",
         }}
       >
         <p className="text-justify">{service.intro}</p>
       </Card>
       
        ))}
      </div>
    </div>
  );
};

export default Services;

const servicesInfo = [
  {
    title: "Web Development",
    intro:
      "Passionate about building modern, responsive, and scalable web applications using React, Next.js, and the MERN stack. Dedicated to writing clean, efficient code and creating seamless user experiences. Always eager to learn new technologies and collaborate with teams to develop innovative solutions. Excited about solving real-world problems through web development and continuously improving my skills in front-end and full-stack development.",
    image: "/images/web-development.jpg",
    icon: <FaCode className="text-2xl " />,
  },
  {
    title: "UI/UX Design",
    intro:
      "Creating user-friendly, visually appealing designs using Figma, Adobe XD, and Tailwind CSS. I focus on building intuitive and interactive interfaces that enhance the user experience. By combining modern design principles with responsiveness, I ensure that designs adapt seamlessly across different devices. My goal is to create clean, functional, and engaging web experiences that balance aesthetics with usability. ",
    image: "/images/ui-ux-design.jpg",
    icon: <FaPaintBrush className="text-2xl " />,
  },
  {
    title: "Video Editing",
    intro:
      "Providing professional video editing services, including motion graphics, color correction, and seamless transitions. I focus on enhancing visual storytelling through precise editing and dynamic effects. By ensuring smooth transitions and vibrant color grading, I create high-quality, engaging videos. My goal is to produce visually compelling content that captivates audiences and delivers a polished final product.",
    image: "/images/video-editing.jpg",
    icon: <FaVideo className="text-2xl " />,
  },
  {
    title: "Graphics Design",
    intro:
      "Designing logos, banners, posters, and branding materials for businesses and individuals. I focus on creating visually striking and memorable designs that align with brand identity. By combining creativity with strategic design principles, I ensure high-quality graphics that leave a lasting impression. My goal is to deliver professional and impactful visuals that enhance brand recognition.",
    image: "/images/graphics-design.jpg",
    icon: <FaPalette className="text-2xl " />,
  },
  {
    title: "Thesis & Research Paper Assistance",
    intro:
      "Providing expert guidance in research paper writing, formatting, and technical documentation. I focus on helping clients structure their papers clearly and professionally while ensuring adherence to academic standards. With attention to detail, I assist in creating well-organized, precise, and polished documents. My goal is to deliver high-quality, comprehensive content that meets all requirements and enhances clarity.",
    image: "/images/thesis-assistance.jpg",
    icon: <FaBook className="text-2xl " />,
  },
  {
    title: "Digital Marketing",
    intro:
      "Enhancing online presence through social media marketing, SEO, and paid advertising strategies. I focus on creating tailored campaigns that drive traffic, engage audiences, and improve brand visibility. By optimizing content and targeting the right audience, I help businesses grow their digital footprint. My goal is to deliver measurable results through effective online marketing strategies.",
    image: "/images/digital-marketing.jpg",
    icon: <FaBullhorn className="text-2xl " />,
  },
];
