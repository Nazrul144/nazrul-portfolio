import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <div className="px-4 lg:px-20">
      <h1>This is about section</h1>
      <div className="lg:flex gap-6 mt-6 lg:mt-16">
        <div className="w-[40%] border-2 border-red-500">
          <div className="fireBorder ml-32">
          <Image  className="brightness-75" src={"/about/cover11.png"} alt="About_image" width={300} height={300} />
          </div>
        </div>
        <div className="w-[60%] border-2 border-red-300">
            <h1 className="text-xl lg:text-4xl font-extrabold mb-4">About Me</h1>
            <p className="text-justify">
            I'm Nazru Islam, a MERN Stack Web Developer with expertise in React, Next.js, JavaScript, Firebase, MongoDB, Tailwind CSS, and Material UI. I have hands-on experience building scalable web applications using the MERN stack, alongside Firebase for backend services. I am passionate about developing user-friendly and impactful applications, with a strong focus on collaboration, continuous learning, and contributing to meaningful projects. I thrive in team-oriented environments where I can grow and make a difference.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
