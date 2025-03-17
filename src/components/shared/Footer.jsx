"use client";
import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-4 lg:px-32 py-10 mt-10 lg:mt-20">
      <div className="text-center">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-2xl font-semibold mb-4"
        >
          Get in Touch
        </motion.h2>
        <div className="flex justify-center gap-6 mb-6">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.1,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            href="https://github.com/Nazrul144"
            target="_blank"
            aria-label="Github"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#f5a623]"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            href="https://www.linkedin.com/in/nazrul-islam-a6080730b"
            target="_blank"
            aria-label="LinkedIn"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#0077b5]"
          >
            <TiSocialLinkedinCircular />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            href="https://x.com/Nazrul211002144"
            target="_blank"
            aria-label="Twitter"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#1DA1F2]"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            href="https://www.facebook.com/profile.php?id=100007196595674"
            target="_blank"
            aria-label="Facebook"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#3b5998]"
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            href="https://www.youtube.com/@GKWORLD-kw1zv"
            target="_blank"
            aria-label="YouTube"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#FF0000]"
          >
            <FaYoutube />
          </motion.a>
        </div>
      </div>
      <motion.h3
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.8,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="text-center text-sm text-gray-400 mt-6"
      >
        Copyright © 2025 - All rights reserved by Nazrul Islam
      </motion.h3>
    </div>
  );
};

export default Footer;
