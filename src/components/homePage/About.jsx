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
      <h1>This is about section</h1>
      <div className="lg:flex gap-6 mt-6 lg:mt-16">
        <div className="lg:w-[40%] ">
          <div className="fireBorder ml-14 lg:ml-32 lg:mt-20">
            <Image className="brightness-75" src={"/about/cover11.png"} alt="About_image" width={600} height={600} />
          </div>
        </div>
        <div className="lg:w-[60%]">
          <h1 className="text-xl lg:text-4xl font-extrabold mb-4">
            <span className="text-red-600">About</span> Me
          </h1>
          <p className="text-justify text-gray-100 text-xs">
            I'm Nazru Islam, a MERN Stack Web Developer with expertise in React, Next.js, JavaScript, Firebase, MongoDB, Tailwind
            CSS, and Material UI. I have hands-on experience building scalable web applications using the MERN stack, alongside
            Firebase for backend services. I am passionate about developing user-friendly and impactful applications, with a
            strong focus on collaboration, continuous learning, and contributing to meaningful projects. I thrive in team-oriented
            environments where I can grow and make a difference.
          </p>
          {/*Tabs*/}
          <div className="mt-10">
            <Tabs
              className="border-[1px] border-t-gray-100 border-r"
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
                      <div className="grid grid-cols-5 gap-4">
                        {skills?.map((skill, index) => (
                          <Card
                            key={index}
                            className="w-full aspect-square border border-white/30 hover:border-purple-600 rounded-lg p-6  group hover:scale-110 flex items-center justify-center  hover:bg-pink-600 hover:shadow-[0_0_20px_5px_rgba(236,72,153,0.6)] transition-all duration-300 ease-in-out"
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
                              <Image src={skill} alt="Image" width={100} height={100} />
                            </motion.div>
                          </Card>
                        ))}
                      </div>
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
                      <h1 className="font-bold text-2xl text-white">My Experience</h1>
                      <p className="text-gray-100 text-justify mt-4 text-xs mb-8">
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
                      <h1 className="font-bold text-2xl text-white">My Education</h1>
                      <p className="text-gray-100 text-justify mt-4 text-xs mb-8">
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
