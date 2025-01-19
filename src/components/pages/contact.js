import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <div id="contact" className="pt-16 px-4 md:px-20 lg:px-28">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex flex-col justify-center items-center gap-2 mb-4">
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="w-20 h-2 border-0 border-b-4 border-yellow-300 bg-yellow-500 rounded-tl-full rounded-br-full"></div>
          </div>
          <p className="text-gray-600 mb-8">
            I’m currently exploring new roles and challenges. If you have an
            exciting opportunity or would just like to connect, don’t hesitate
            to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:sribommireddy@gmail.com"
              className="flex items-center justify-center text-sm md:text-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out px-6 py-3 rounded-full shadow-lg w-auto"
            >
              <FaEnvelope className="mr-3" />
              Mail Me
            </a>
            <a
              href="https://www.linkedin.com/in/sri-sruthi-bommireddy-a09285268/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-sm md:text-lg font-semibold bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out px-6 py-3 rounded-full shadow-lg w-auto"
            >
              <FaLinkedin className="mr-3" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
      >
        <path
          fill="#fbbf24"
          fillOpacity="1"
          d="M0,244
       L30,228
       C60,212,120,180,180,158.7
       C240,137,300,127,360,126.7
       C420,127,480,137,540,148
       C600,159,660,169,720,180
       C780,191,840,201,900,190.7
       C960,180,1020,148,1080,116.7
       C1090,114,1250,0,1440,15
       L1440,360
       L0,360Z"
        ></path>
      </svg>
    </div>
  );
};

export default Contact;
