'use client'
import { useTime, useTransform, motion, useSpring } from 'framer-motion';
import React, { useEffect } from 'react';

const Page = () => {
    const time = useTime()
    const rotate = useTransform(time, [0, 3000], [0, 360], {
        clamp: false
    })
    const rotatingBg = useTransform(rotate, (r) => {
        return `conic-gradient(from ${r}deg, 
            red 0deg, orange 50deg, 
            yellow 100deg, green 150deg, 
            blue 200deg, indigo 250deg, 
            violet 300deg, red 360deg)`;
    });

    const pulse = useSpring(0, {damping: 0, mass: 5, stiffness: 10})
    const pulseBg = useTransform(pulse, (r)=>{
        return `blur(30px)`
    })

    useEffect(()=>{
        pulse.set(10)
    },[])

    return (
        <div>
            <h1>Projects</h1>
            <div className='flex justify-center items-center gap-10'>
            <div className='relative'>
            <button className='z-10 relative bg-cyan-500'>Motion1</button>
            <motion.div className='absolute  -inset-[4px]' 
            style={{background: rotatingBg}}
            />
            </div>
            <div className='relative'>
            <button className='z-10 relative bg-cyan-500 px-20 py-16'>Motion2</button>
            <motion.div className='absolute  -inset-[4px]' 
            style={{background: rotatingBg,
                filter: pulseBg
            }}
            />
            </div>
            </div>
        </div>
    );
}

export default Page;
