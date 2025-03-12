'use client'
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
       
    ];

    return (
        // <div className='px-4 lg:px-20'>
        //     <h1>This is header</h1>
        // </div>
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
                        repulse: { distance: 400, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "#fff" },
                    move: {
                        enable: true,
                        direction: "none",
                        speed: 1,
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
                            width: 400, // Set width for your icon size
                            height: 400 // Set height for your icon size
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
    );
}

export default Header;
