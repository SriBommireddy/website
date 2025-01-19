import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 md:px-20 lg:px-28">
      <div className="text-center">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <h2 className="text-3xl font-bold">About me</h2>
          <div className="w-20 h-2 border-0 border-b-4 border-yellow-300 bg-yellow-500 rounded-tl-full rounded-br-full"></div>
        </div>
        <p className="text-gray-600">
          Analyst with a passion for leveraging technology to optimize business
          outcomes. Eager to apply a strong foundation in Management Information
          Systems to drive real-world impact through innovative, data-centric
          solutions. Skilled in data analysis, database management, and
          developing data visualizations using advanced tools like Power BI and
          Tableau. Proficient in Python for data-driven insights and system
          optimization, with hands-on experience in ServiceNow and SQL.
        </p>
        <a
          href="https://raw.githubusercontent.com/SriBommireddy/website/main/public/Sri.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="Sri_Bommireddy_Resume.pdf"
          className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded font-medium hover:bg-yellow-600 inline-block"
        >
          Resume
        </a>
      </div>
    </section >
  );
};

export default About;
