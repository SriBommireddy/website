import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row items-center justify-around min-h-screen py-12 bg-gray-50"
    >
      {/* Left Content */}
      <div className="max-w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
        <p className="text-yellow-500 font-medium uppercase tracking-wide">
          Data Analyst | Driving Business Insights
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold mt-2">
          Hello, my name is <br />
          <span className="text-black">Sri Sruthi Bommireddy</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Who says data can’t be exciting? I’m here to prove otherwise! With
          almost 2 years of experience in tools like Python, Power BI, and SQL,
          I dig deep to uncover insights that spark change and solve problems.
          Beyond the screen, I’m the teammate who keeps things light and
          motivating — because happy teams build the best solutions.
        </p>
        <div className="mt-6 flex justify-center lg:justify-start space-x-4">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="bg-yellow-500 text-white px-6 py-2 rounded font-medium hover:bg-yellow-600 cursor-pointer"
          >
            Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/sri-sruthi-bommireddy-a09285268/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 text-gray-600 px-6 py-2 rounded font-medium hover:bg-gray-700 hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block relative w-80 h-80 flex justify-center items-center mt-8 lg:mt-0">
        <div className="absolute inset-0 bg-yellow-500 rounded-full shadow-lg border-8 border-white overflow-hidden flex justify-center items-end">
          <div className="absolute top-2 left-2 w-16 h-16 bg-white rounded-full opacity-30"></div>
          <div className="absolute bottom-16 -right-10 w-24 h-24 bg-white rounded-full opacity-30"></div>
          <img
            src={`${process.env.PUBLIC_URL}/profile-removebg.png`}
            alt="Sri Sruthi Bommireddy"
            className="absolute bottom-0 w-80 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
