"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { motion } from "framer-motion";

//Email Js:
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [message, setMessage] = useState("");

  // const audio = new Audio("/success.mp3");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, {
        publicKey: `${process.env.NEXT_PUBLIC_PUBLIC_ID}`,
      })
      .then(
        () => {
          // audio.play();
          setMessage("Message has been sent successfully!");
          form.current.reset();
          setTimeout(() => {
            setMessage("");
          }, 5000);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="px-4 lg:px-20">
      <div className="lg:flex gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            x: { type: "tween", duration: 0.7 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="lg:max-w-[50%] lg:mt-24"
        >
          <motion.h1 className=" text-2xl lg:text-3xl font-extrabold mb-4 text-white">Let's Work Together</motion.h1>
          <p className="text-justify text-sm text-gray-100 ">
            I'm always open to exciting projects! Whether you're looking to create a website, build a web application, or just
            need some advice, I'd love to collaborate. Let's bring your ideas to life together. Feel free to reach out!
          </p>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex items-center gap-4 mt-6"
          >
            <div>
              <FaPhoneAlt className="text-4xl text-red-600 p-2 bg-gray-300 rounded-sm " />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-600">Phone</p>
              <p className="text-sm text-gray-200">+88 01758752528</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex items-center gap-4 mt-6"
          >
            <div>
              <MdEmail className="text-4xl text-red-600 p-2 bg-gray-300 rounded-sm " />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-600">Email</p>
              <p className="text-sm text-gray-200">nazrulislam.cse28@gmail.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="flex items-center gap-4 mt-6"
          >
            <div>
              <FaLocationDot className="text-4xl text-red-600 p-2 bg-gray-300 rounded-sm " />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-500">Address</p>
              <p className="text-sm text-gray-200">Mirpur 10, Dhaka, Bangladesh</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1,
            x: { type: "tween", duration: 0.7 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="lg:max-w-[50%] border-[0.5px] border-white shadow-4xl  rounded-lg mt-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              x: { type: "tween", duration: 0.7 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-center font-extrabold text-white text-3xl mt-12"
          >
            <span className="text-red-600">Contact</span> Me
          </motion.h1>
          {/*Contact Form*/}
          <div>
            {/* Form*/}
            <div className="bg-transparent  my-12 rounded-lg lg:px-16 text-white ">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-2 gap-5 w-full">
                  <input
                    className="px-4 py-2 rounded-lg outline-none border-[1px] border-white shadow-4xl text-sm"
                    name="user_name"
                    type="text"
                    placeholder="Full Name"
                  />

                  <input
                    className="px-4 py-2 rounded-lg border-[1px] border-white shadow-4xl text-sm"
                    name="from_email"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    className="px-4 py-2 rounded-lg border-[1px] border-white shadow-4xl text-sm"
                    name="from_email"
                    type="text"
                    placeholder="Phone Number"
                    required
                  />
                  <input
                    className="px-4 py-2 rounded-lg border-[1px] border-white shadow-4xl text-sm "
                    name="from_email"
                    type="text"
                    placeholder="Email Subject"
                  />
                </div>
                <textarea
                  className="w-full rounded-lg mt-6 text-stone-500 pl-2 pt-2 h-44 border-[1px] border-white shadow-4xl text-sm"
                  required
                  name="message"
                  id=""
                  placeholder="Message"
                ></textarea>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="flex justify-center"
                >
                  <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                    Send Message
                  </Button>
                </motion.div>
                <h1 className="text-center mt-4">{message ? <span className="text-green-400">{message}</span> : ""}</h1>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
