"use client";
import Projects from "@/components/homePage/Projects";
import { useTime, useTransform, motion, useSpring } from "framer-motion";
import React, { useEffect } from "react";

const Page = () => {
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
    return `blur(10px)`;
  });

  useEffect(() => {
    pulse.set(10);
  }, []);

  return (
    <div>
        <Projects/>
      <div className="flex justify-center items-center gap-10">
        <div className="relative">
          <button className="z-10 relative bg-pink-800 rounded-full px-4 py-2 cursor-pointer hover:bg-green-400 duration-300 ease-in-out">Motion1</button>
          <motion.div className="absolute  -inset-[2px] rounded-full" style={{ background: rotatingBg, filter: pulseBg}} />

         

        </div>
      </div>

    </div>
  );
};

export default Page;
