'use client'
import Image from 'next/image';
import React from 'react';
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim"; 


const Header = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const iconArray = [
        '/icon/react.png', 
        '/icon/html.png',
        '/icon/bootstrap.png',
        '/icon/c.png',
        '/icon/code.png',
        '/icon/express.png',
        '/icon/firebase.svg',
        '/icon/github.png',
        '/icon/javascript.png',
        '/icon/materialUI.svg',
        '/icon/mongodb.svg',
        '/icon/next.svg',
        '/icon/nodejs.png',
        '/icon/redux.png',
        '/icon/tailwind.svg',
        '/icon/text.png',
    ];

    const time = useTime();
    console.log(time);

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
                        value: "transparent"
                    },
                    image: "",
                    opacity: 1
                },
                backgroundMask: {
                    composite: "destination-out",
                    cover: {
                        opacity: 1,
                        color: { value: "" }
                    },
                    enable: false
                },
                fullScreen: {
                    enable: true,
                    zIndex: 0
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
                        resize: { delay: 0.2, enable: true }
                    },
                    modes: {
                        push: { default: true, quantity: 8 },
                        repulse: { distance: 200, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "#fff" },
                    move: {
                        enable: true,
                        direction: "none",
                        speed: 0.5,
                        random: true,
                        straight: true,
                        outModes: { default: "out" }
                    },
                    number: { value: 20, density: { enable: true, width: 1920, height: 1080 } },
                    opacity: { value: 1 },
                    shape: { 
                        type: "image", 
                        image: iconArray.map(icon => ({
                            src: icon, 
                            width: 400, 
                            height: 400 
                        }))
                    },
                    size: { value: 10 },
                    zIndex: { value: { min: 0, max: 100 } }
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                key: "snow",
                name: "Snow"
            }}
           
        />
        <div className='px-4 lg:px-20'>
            <div className='flex justify-between'>
                <div>
                    <h1>Hi, I am Nazrul Islam</h1>
                    <h2>Web Developer</h2>
                </div>
                <div className='relative w-60 h-60'>
                    <Image className='z-10 relative' src='/cover/cove.png' alt='Cover_Image' width={500} height={500}/>
                    <div className='absolute -inset-[50px] rounded-full' 
                    style={{background: "conic-gradient( red, orange, yellow, green, blue, indigo, violet)"}} //applying conic gradient color for border
                    />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Header;
