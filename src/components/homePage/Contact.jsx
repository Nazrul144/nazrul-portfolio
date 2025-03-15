import React from "react";
import { FaPhone, FaPhoneAlt, FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="px-4 lg:px-20">
      <div className="lg:flex">
        <div className="lg:max-w-[50%] border-2 border-red-500">
          <h1 className=" text-2xl lg:text-3xl font-extrabold mb-4">Let's Work Together</h1>
          <p className="text-justify">
            I'm always open to exciting projects! Whether you're looking to create a website, build a web application, or just
            need some advice, I'd love to collaborate. Let's bring your ideas to life together. Feel free to reach out!
          </p>
          <div className="flex items-center gap-4 mt-6">
            <div>
              <FaPhoneAlt className="text-4xl text-red-600 p-2 bg-gray-300 rounded-sm " />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-600">Phone</p>
              <p className="text-sm text-gray-200">+88 01758752528</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div>
              <FaPhoneAlt className="text-4xl text-red-600 p-2 bg-gray-300 rounded-sm " />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-600">Email</p>
              <p className="text-sm text-gray-200">nazrulislam.cse28@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div>
              <FaPhoneAlt className="text-4xl text-red-600 p-2 bg-gray-300 rounded-sm " />
            </div>
            <div>
              <p className="text-sm font-semibold text-red-500">Phone</p>
              <p className="text-sm text-gray-200">+88 01758752528</p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[50%] border-2 border-green-500">Contact Form</div>
      </div>
    </div>
  );
};

export default Contact;
