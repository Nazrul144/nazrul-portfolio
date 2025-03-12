"use client";

import { FileDownload } from "@mui/icons-material";
import { useTime, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";


const Header = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const iconArray = [
    "/icon/react.png",
    "/icon/html.png",
    "/icon/bootstrap.png",
    "/icon/c.png",
    "/icon/code.png",
    "/icon/express.png",
    "/icon/firebase.svg",
    "/icon/github.png",
    "/icon/javascript.png",
    "/icon/materialUI.svg",
    "/icon/mongodb.svg",
    "/icon/next.svg",
    "/icon/nodejs.png",
    "/icon/redux.png",
    "/icon/tailwind.svg",
    "/icon/text.png",
  ];

  const time = useTime();
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });

  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, 
            red 0deg, orange 50deg, 
            yellow 100deg, green 150deg, 
            blue 200deg, indigo 250deg, 
            violet 300deg, red 360deg)`;
  });

  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulseBg = useTransform(pulse, (r) => {
    return `blur(30px)`;
  });

  useEffect(() => {
    pulse.set(10);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "transparent",
            },
            image: "",
            opacity: 1,
          },
          backgroundMask: {
            composite: "destination-out",
            cover: {
              opacity: 1,
              color: { value: "" },
            },
            enable: false,
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 120,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: { enable: false, mode: [] },
              onDiv: { selectors: [], enable: false, mode: [], type: "circle" },
              onHover: { enable: false, mode: [], parallax: { enable: false } },
              resize: { delay: 0.2, enable: true },
            },
            modes: {
              push: { default: true, quantity: 8 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#fff" },
            move: {
              enable: true,
              direction: "none",
              speed: 0.5,
              random: true,
              straight: true,
              outModes: { default: "out" },
            },
            number: { value: 20, density: { enable: true, width: 1920, height: 1080 } },
            opacity: { value: 1 },
            shape: {
              type: "image",
              image: iconArray.map((icon) => ({
                src: icon,
                width: 200,
                height: 200,
              })),
            },
            size: { value: 10 },
            zIndex: { value: { min: 0, max: 100 } },
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          key: "snow",
          name: "Snow",
        }}
      />
      <div className="px-4 lg:px-20">
        <div className="lg:flex  items-center lg:gap-32 mt-20">
          <div className="lg:w-[50%]">
            <h1 className="font-extrabold text-4xl">
              Hi, I am <span className="text-red-600 ">Nazrul</span> Islam
            </h1>
            <h2 className="mt-4 ">Frontend Web Developer</h2>
            <p className="text-justify mt-4">
              Hi, I’m Nazrul Islam, a passionate Frontend Web Developer from Bangladesh. I specialize in building seamless,
              user-friendly web applications using modern technologies like HTML, CSS, Tailwind CSS, JavaScript, React, Next.js,
              Firebase, Express, and MongoDB. With a strong focus on performance, usability, and design, I craft web experiences
              that enhance user engagement. I thrive in collaborative environments, aligning technical solutions with project
              goals to deliver innovative and efficient applications. I’m always open to new opportunities and collaborations in
              web development. Feel free to connect with me at nazrulislam.cse28@gmail.com to discuss potential projects.
            </p>
            <button className="border-[1px] text-white rounded-full border-red-600 p-2 bg-transparent font-bold mt-2 flex gap-2 items-center animate__animated animate__lightSpeedInLeft">
              <a className="flex items-center gap-2" href="/cover/cv.pdf" download="cv">
                Download CV <FileDownload className="font-extrabold" />
              </a>
            </button>
          </div>
          <div className="relative w-90 h-90">
            <Image className="z-10 relative brightness-50" src="/cover/cove.png" alt="Cover_Image" width={600} height={600} />
            <motion.div
              className="absolute -inset-[4px] rounded-full "
              style={{ background: rotatingBg, filter: pulseBg }}

              //applying conic gradient color for border
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
