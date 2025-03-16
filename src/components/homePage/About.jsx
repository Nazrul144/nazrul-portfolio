"use client";
import Image from "next/image";
import { Card, Tabs } from "antd";
import { motion } from "framer-motion";

const skills = [
  "/skills/html.png",
  "/skills/css.png",
  "/skills/tailwind.png",
  "/skills/bootstrap.png",
  "/skills/material.png",
  "/skills/antDesign.png",
  "/skills/javaScript.png",
  "/skills/react.png",
  "/skills/nextjs.png",
  "/skills/angular.png",
  "/skills/redux.png",
  "/skills/nodejs.png",
  "/skills/firebase.webp",
  "/skills/MongoDB.png",
  "/skills/MySql.png",
];

const About = () => {
  return (
    <div className="px-4 lg:px-20">
      <div className="lg:flex gap-6 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, x: { type: "spring", stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
          className="lg:w-[40%] "
        >
          <div className="fireBorder lg:mt-20">
            <Image
              className="brightness-75"
              src={"/about/cover11.png"}
              alt="About_image"
              width={1000}
              height={1000}
              layout="intrinsic"
            />
          </div>
          <h1 className=" ml-24 lg:ml-28 mt-4 font-bold animate-pulse bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            MERN Stack Developer
          </h1>
        </motion.div>
        <div className="lg:w-[60%]">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 70 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-xl lg:text-3xl font-extrabold mb-2 mt-4 lg:mt-0"
          >
            <span className="text-red-600">About</span> Me
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-justify text-gray-100 text-sm"
          >
            I'm Nazru Islam, a MERN Stack Web Developer skilled in React, Next.js, JavaScript, Firebase, MongoDB, Tailwind CSS,
            and Material UI. I specialize in building scalable web applications and enjoy creating user-friendly, impactful
            solutions. Passionate about continuous learning, collaboration, and contributing to meaningful projects.
          </motion.p>
          {/*Tabs*/}
          <div className="mt-4 mb-4">
            <Tabs
              className="border-[1px] border-gray-100 rounded-lg"
              defaultActiveKey="1"
              centered
              tabBarStyle={{ color: "red", fontWeight: "bold" }}
              items={[
                {
                  label: (
                    <span className="relative inline-flex items-center z-10 text-white  bg-transparent border-[1px] border-gray-300 px-2 py-1 rounded-lg  hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out">
                      Skills
                    </span>
                  ),
                  key: "1",
                  children: (
                    <div className="text-white">
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
                        className="grid grid-cols-5 gap-4 px-2 py-1 lg:px-8 lg:py-4"
                      >
                        {skills?.map((skill, index) => (
                          <Card
                            key={index}
                            className="w-full aspect-square border border-white/30 hover:border-purple-600 rounded-lg lg:p-6  group hover:scale-110 flex items-center justify-center  hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out"
                            variant="borderless"
                            style={{
                              backgroundColor: "transparent",
                              color: "white",
                            }}
                          >
                            <motion.div
                              animate={{ rotate: [10, -10, 10] }} // Tilting motion
                              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                              style={{ originX: 0.5, originY: 0.5 }}
                            >
                              <Image src={skill} alt="Image" width={80} height={80} />
                            </motion.div>
                          </Card>
                        ))}
                      </motion.div>
                    </div>
                  ),
                },
                {
                  label: (
                    <span className="text-white  bg-transparent border-[1px] border-gray-300 px-2 py-1 rounded-lg  hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out">
                      Experience
                    </span>
                  ),
                  key: "3",
                  children: (
                    <div>
                      <h1 className="font-bold text-xl text-white px-4">
                        My <span className="text-red-600">Experience</span>
                      </h1>
                      <p className="text-gray-100 text-justify mt-4 text-xs mb-8 px-4">
                        I have gained valuable experience in various fields, including video editing, Photoshop, and web
                        development. My expertise in teaching English from 2018 to 2024 has strengthened my communication skills.
                        Additionally, I have worked as a web developer since 2023, with hands-on experience in e-commerce project
                        development and training in web development at Decode Lab.
                      </p>
                      <table className="table-auto w-full mt-8">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 text-gray-100">Duration</th>
                            <th className="text-left p-4 text-gray-100">Experience</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2023-Present</td>
                            <td className="p-4 text-gray-100">Web Development</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2024 July-2024 Dec</td>
                            <td className="p-4 text-gray-100">Trained in Web Development at Decode Lab</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2023-2024</td>
                            <td className="p-4 text-gray-100">UI/UX</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">6 Months</td>
                            <td className="p-4 text-gray-100">Worked in a team to develop an E-commerce project</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2019-2022</td>
                            <td className="p-4 text-gray-100">Video Editing</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2019-2021</td>
                            <td className="p-4 text-gray-100">Photoshop</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2018-2024</td>
                            <td className="p-4 text-gray-100">Teaching English</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ),
                },
                {
                  label: (
                    <span className="text-white  bg-transparent border-[1px] border-gray-300 px-2 py-1 rounded-lg  hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out">
                      Education
                    </span>
                  ),
                  key: "2",
                  children: (
                    <div>
                      <h1 className="font-bold text-xl text-white px-4">
                        My <span className="text-red-600">Education</span>
                      </h1>
                      <p className="text-gray-100 text-justify mt-4 text-xs mb-8 px-4">
                        I hold a B.Sc. in Computer Science and Engineering from Green University of Bangladesh, with a strong
                        foundation. My education has equipped me with a blend of technical skills, critical thinking, and
                        problem-solving abilities, preparing me to contribute effectively in the field of technology.
                      </p>
                      <table className="table-auto w-full mt-8">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-4 text-gray-100">Year</th>
                            <th className="text-left p-4 text-gray-100">Degree</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2025</td>
                            <td className="p-4 text-gray-100">B.Sc. in Computer Science and Engineering</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2018</td>
                            <td className="p-4 text-gray-100">
                              IELTS (International English Language Testing System) - Band Score: 6.5
                            </td>
                          </tr>

                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2016</td>
                            <td className="p-4 text-gray-100">Diploma in Computer Science and Engineering</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-4 text-pink-500 font-bold">2012</td>
                            <td className="p-4 text-gray-100">Secondary School Certificate (SSC)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
