"use client";
import Projects from "@/components/homePage/Projects";
import React from "react";
// import { useTime, useTransform, motion, useSpring } from "framer-motion";

const Page = () => {
  // const time = useTime();
  // const rotate = useTransform(time, [0, 8000], [50, 360], {
  //   clamp: false,
  // });
  // const rotatingBg = useTransform(rotate, (r) => {
  //   return `conic-gradient(from ${r}deg, 
  //           red 0deg, orange 50deg, 
  //           yellow 100deg, green 150deg, 
  //           blue 200deg, indigo 250deg, 
  //           violet 300deg, red 360deg)`;
  // });

  // const pulse = useSpring(0, { damping: 0, mass: 10, stiffness: 10 });
  // const pulseBg = useTransform(pulse, (r) => {
  //   return `blur(10px)`;
  // });

  // useEffect(() => {
  //   pulse.set(10);
  // }, []);

  return (
    <div>
        <Projects/>
      {/* <div className="flex justify-center items-center gap-10 mt-16">
        <div className="relative">
          <button className="z-10 relative bg-orange-600 rounded-full px-4 py-2 cursor-pointer text-black hover:bg-purple-800 duration-300 ease-in-out text-3xl font-extrabold">More Projects</button>
          <motion.div className="absolute  -inset-1 rounded-full" style={{ background: rotatingBg, filter: pulseBg}} /> */}
        {/* </div>
      </div> */}

    </div>
  );
};

export default Page;
