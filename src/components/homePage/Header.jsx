"use client";
import { FileDownload } from "@mui/icons-material";
import { useTime, useTransform, motion, useSpring } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Typewriter from "typewriter-effect";
import { Card } from "antd";

const Header = () => {
  const [showFullText, setShowFullText] = useState(false);

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
    <div className="px-4">
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
        <div className="flex flex-col-reverse lg:flex-row  items-center lg:gap-32 lg:mt-14">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="lg:w-[50%]"
          >
            <h1 className="font-extrabold text-xl text-white lg:text-4xl mt-6 px-4 lg:px-0">
              <Typewriter
                options={{
                  strings: ['Hi, I am <span class="text-red-600">Nazrul</span> Islam'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
            <h1 className="mt-4 px-4 lg:px-0 text-white">
              <Typewriter
                options={{
                  strings: ['<span class="text-red-600 lg:font-extrabold shadow-2xl">Frontend</span> Web Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </h1>
            <p className="text-justify mt-4 text-sm text-gray-100 px-4 lg:px-0">
              Hi, I’m Nazrul Islam, a passionate Frontend Web Developer from Bangladesh. I specialize in building seamless,
              user-friendly web applications using modern technologies like HTML, CSS, Tailwind CSS, JavaScript, React, Next.js,
              Firebase, Express, and MongoDB. With a strong focus on performance, usability, and design, I craft web experiences
              that enhance user engagement.{" "}
              {showFullText && (
                <span>
                  {" "}
                  I thrive in collaborative environments, aligning technical solutions with project goals to deliver innovative
                  and efficient applications. I’m always open to new opportunities and collaborations in web development. Feel
                  free to connect with me at nazrulislam.cse28@gmail.com to discuss potential projects.
                </span>
              )}
            </p>
            <motion.button
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              onClick={() => setShowFullText(!showFullText)}
              className="border-[1px] text-white rounded-full text-xs border-red-600 px-4 py-2 bg-transparent font-bold  cursor-pointer mt-4 hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out ml-4 lg:ml-0"
            >
              {showFullText ? "Read Less" : "Read More"}
            </motion.button>

            <div className="flex items-center gap-8 ml-1 lg:ml-0 ">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
              >
                <button className="border-[1px] text-white rounded-full text-xs border-red-600 px-4 py-2 bg-transparent font-bold flex gap-2 items-center hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out mt-12">
                  <a className="flex items-center gap-2" href="/cover/cv.pdf" download="cv">
                    Download CV <FileDownload />
                  </a>
                </button>
              </motion.div>
              <div className="mt-12 flex gap-4 items-center">
                <a href="https://github.com/Nazrul144" target="_blank">
                  <FaGithub className="text-2xl rounded-full text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(236,72,153,0.6)] hover:scale-110 hover:text-3xl" />
                </a>

                <a href="https://www.linkedin.com/in/nazrul-islam-a6080730b" target="_blank">
                  <TiSocialLinkedinCircular className="text-3xl rounded-full text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(236,72,153,0.6)] hover:scale-110 hover:text-3xl" />
                </a>

                <a href="https://x.com/Nazrul211002144" target="_blank">
                  <FaTwitter className="text-2xl rounded-full text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(236,72,153,0.6)] hover:scale-110 hover:text-3xl" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100007196595674" target="_blank">
                  <FaFacebook className="text-2xl rounded-full text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(236,72,153,0.6)] hover:scale-110 hover:text-3xl" />
                </a>

                <a href="https://www.youtube.com/@GKWORLD-kw1zv" target="_blank">
                  <FaYoutube className="text-2xl rounded-full text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_4px_rgba(236,72,153,0.6)] hover:scale-110 hover:text-3xl" />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="relative w-90 h-90 mt-10 lg:mt-1"
          >
            <Image
              className="z-10 relative brightness-50 hover:brightness-75 hover:touch-pinch-zoom"
              src="/cover/cove.png"
              alt="Cover_Image"
              width={600}
              height={600}
            />
            <motion.div
              className="absolute -inset-[4px] rounded-full "
              style={{ background: rotatingBg, filter: pulseBg }}

              //applying conic gradient color for border
            />
          </motion.div>
        </div>
      </div>

      {/*Status*/}
      <div className="px-4 lg:px-40 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" h-32"
          >
            <Card
              className="w-full h-full aspect-square border border-transparent rounded-lg p-6 group hover:scale-110 flex items-center justify-center transition-all duration-300 ease-in-out"
              variant="borderless"
              style={{
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "0 0 20px rgba(255, 0, 100, 0.7), 0 0 40px rgba(180, 0, 200, 0.7), 0 0 60px rgba(100, 0, 255, 0.7)",
                transition: "box-shadow 0.4s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255, 0, 100, 0.9), 0 0 50px rgba(180, 0, 200, 0.9), 0 0 70px rgba(100, 0, 255, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 0, 100, 0.7), 0 0 40px rgba(180, 0, 200, 0.7), 0 0 60px rgba(100, 0, 255, 0.7)";
              }}
            >
              <motion.div
                animate={{ rotate: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <h1 className="text-center text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgb(255,0,100)]">20+</h1>
                <h1 className="text-center text-2xl font-extrabold text-white drop-shadow-[0_0_10px_rgb(180,0,200)]">
                  Projects Completed
                </h1>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" h-32"
          >
            <Card
              className="w-full h-full aspect-square border border-transparent rounded-lg p-6 group hover:scale-110 flex items-center justify-center transition-all duration-300 ease-in-out"
              variant="borderless"
              style={{
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "0 0 20px rgba(255, 0, 100, 0.7), 0 0 40px rgba(180, 0, 200, 0.7), 0 0 60px rgba(100, 0, 255, 0.7)",
                transition: "box-shadow 0.4s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255, 0, 100, 0.9), 0 0 50px rgba(180, 0, 200, 0.9), 0 0 70px rgba(100, 0, 255, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 0, 100, 0.7), 0 0 40px rgba(180, 0, 200, 0.7), 0 0 60px rgba(100, 0, 255, 0.7)";
              }}
            >
              <motion.div
                animate={{ rotate: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <h1 className="text-center text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgb(255,0,100)]">10+</h1>
                <h1 className="text-center text-2xl font-extrabold text-white drop-shadow-[0_0_10px_rgb(180,0,200)]">
                  Technologies Mastered
                </h1>
              </motion.div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className=" h-32"
          >
            <Card
              className="w-full h-full aspect-square border border-transparent rounded-lg p-6 group hover:scale-110 flex items-center justify-center transition-all duration-300 ease-in-out"
              variant="borderless"
              style={{
                backgroundColor: "transparent",
                color: "white",
                boxShadow: "0 0 20px rgba(255, 0, 100, 0.7), 0 0 40px rgba(180, 0, 200, 0.7), 0 0 60px rgba(100, 0, 255, 0.7)",
                transition: "box-shadow 0.4s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255, 0, 100, 0.9), 0 0 50px rgba(180, 0, 200, 0.9), 0 0 70px rgba(100, 0, 255, 0.9)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(255, 0, 100, 0.7), 0 0 40px rgba(180, 0, 200, 0.7), 0 0 60px rgba(100, 0, 255, 0.7)";
              }}
            >
              <motion.div
                animate={{ rotate: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 0.5 }}
              >
                <h1 className="text-center text-3xl font-extrabold text-white drop-shadow-[0_0_15px_rgb(255,0,100)]">20+</h1>
                <h1 className="text-center text-2xl font-extrabold text-white drop-shadow-[0_0_10px_rgb(180,0,200)]">
                  Total Commits
                </h1>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
