import React from "react";
import { useParams } from "react-router-dom";
import { experiences } from "./work"; // Import the experiences array
import { FaCheckCircle } from "react-icons/fa";

const Overview = () => {
  const { id } = useParams();

  // Get the experience based on the ID
  const experience = experiences[parseInt(id, 10)];

  if (!experience) {
    return (
      <div className="text-center mt-10 text-lg font-medium text-gray-500">
        Experience not found!
      </div>
    );
  }

  return (
    <section className="">
      {/* Cover Photo */}
      <div
        className="relative bg-cover bg-center h-72"
        style={{ backgroundImage: `url(${experience.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-5 px-4 lg:px-20 text-white">
            <h1 className="text-3xl font-bold">{experience.company}</h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-10 px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-yellow-500">
              {experience.title}
            </h2>
            <p className="text-gray-500 mt-2">{experience.duration}</p>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                Responsibilities
              </h3>
              <ul className="mt-4 space-y-3">
                {experience.responsibilities.map((task, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <FaCheckCircle className="text-yellow-500 mt-1" />
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Company Information
            </h3>
            <hr className="my-4 border-gray-300" />
            <p className="text-gray-700">
              <strong>Company:</strong> {experience.company}
            </p>
            <p className="text-gray-700 mt-3">
              <strong>Duration:</strong> {experience.duration}
            </p>
            <p className="text-gray-700 mt-3">
              <strong>Location:</strong> {experience.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
