import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white px-4 lg:px-32 py-10 mt-10 lg:mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com/Nazrul144"
            target="_blank"
            aria-label="Github"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#f5a623]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nazrul-islam-a6080730b"
            target="_blank"
            aria-label="LinkedIn"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#0077b5]"
          >
            <TiSocialLinkedinCircular />
          </a>
          <a
            href="https://x.com/Nazrul211002144"
            target="_blank"
            aria-label="Twitter"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#1DA1F2]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100007196595674"
            target="_blank"
            aria-label="Facebook"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#3b5998]"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.youtube.com/@GKWORLD-kw1zv"
            target="_blank"
            aria-label="YouTube"
            className="text-3xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-110 hover:text-[#FF0000]"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      <h3 className="text-center text-sm text-gray-400 mt-6">
        Copyright © 2025 - All rights reserved by Nazrul Islam
      </h3>
    </div>
  );
};

export default Footer;
