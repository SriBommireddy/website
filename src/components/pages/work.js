import React from "react";
import { useNavigate } from "react-router-dom";

export const experiences = [
  {
    image: "/website/work1.png", // Public folder images
    company: "Cygnet Inc",
    title: "Business Data Analyst",
    duration: "September 2024 - Present",
    responsibilities: [
      "Leveraged advanced SQL and Power BI skills to analyze large datasets, delivering valuable insights for the organization.",
      "Utilized custom Python scripts and tools like NumPy, Pandas, Matplotlib, and Plotly for extensive EDA, feature engineering, preprocessing, and visualization.",
      "Optimized database performance by implementing indexing strategies in SQL, reducing query response time by 35%.",
      "Seamlessly integrated the ESRI API with Python for advanced geospatial data extraction, handling over 3 million data points.",
      "Implemented Power Automate flows for KPI-based anomaly detection in Power BI, triggering instant notifications to key stakeholders."
    ],
    location: "New Jersey, NJ"
  },
  {
    image: "/website/work2.png", // Public folder images
    company: "Tenet Healthcare",
    title: "Information Systems Intern",
    duration: "May 2024 - August 2024",
    responsibilities: [
      "Enhanced healthcare IT systems by integrating data from Entrust and PKI servers into ServiceNow, supporting over 5,000 assets.",
      "Developed a real-time dashboard in ServiceNow for SSL certificate lifecycle management, reducing expiration incidents by 30%.",
      "Utilized Agile methodology and ITIL processes for incident and change management, achieving a 20% improvement in response times.",
      "Delivered analysis and reporting using SQL, aligning technical improvements with business requirements."
    ],
    location: "Dallas, TX"
  },
  {
    image: "/website/work3.png", // Public folder images
    company: "University of North Carolina",
    title: "Student Tech Analyst",
    duration: "August 2023 - April 2024",
    responsibilities: [
      "Integrated financial aid data into the university’s ERP system, optimizing the management of scholarships, grants, and loans.",
      "Designed and deployed Tableau dashboards for real-time financial aid reporting and insights.",
      "Streamlined data collection by implementing Power Automate, refining reporting capabilities for strategic financial planning."
    ],
    location: "Charlotte, NC"
  },
  {
    image: "/website/work4.png", // Public folder images
    company: "Cygnet Inc",
    title: "Business Data Analyst Intern",
    duration: "May 2023 - July 2023",
    responsibilities: [
      "Developed and maintained interactive PowerBI dashboards to monitor ticket metrics across five resolution stages.",
      "Identified ticket resolution bottlenecks, optimizing process flow by 15%.",
      "Performed ad-hoc data extraction and reporting using SQL and PowerBI, delivering targeted insights into support trends."
    ],
    location: "New Jersey, NJ"
  }
];

const Work = () => {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-12 px-4 md:px-20 lg:px-28">
      <div className="max-w-7xl mx-auto px-0">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <h2 className="text-3xl font-bold">Work Experience</h2>
          <div className="w-20 h-2 border-0 border-b-4 border-yellow-300 bg-yellow-500 rounded-tl-full rounded-br-full"></div>
        </div>
        {/* Responsive grid container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg flex lg:flex-row ${index % 2 === 0
                ? "flex-col sm:flex-row"
                : "flex-col sm:flex-row-reverse"
                } items-stretch sm:h-64`} // Use items-stretch to ensure consistent height
            >
              {/* Image Section */}
              <div className="w-full sm:w-1/2 flex-shrink-0">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className={`object-cover w-full h-full ${index % 2 === 0
                    ? "rounded-t-lg sm:rounded-l-lg lg:rounded-none lg:rounded-l-lg"
                    : "rounded-t-lg sm:rounded-r-lg lg:rounded-none lg:rounded-r-lg"
                    }`}
                  style={{ aspectRatio: "16/9" }} // Maintain consistent aspect ratio for images
                />
              </div>

              {/* Content Section */}
              <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <h3 className="text-xl font-semibold">{experience.company}</h3>
                  <p className="text-gray-500">{experience.title}</p>
                  <p className="text-sm text-gray-400">{experience.duration}</p>
                </div>
                <button
                  onClick={() => navigate(`/project-overview/${index}`)}
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded font-medium hover:bg-yellow-600 w-auto"
                >
                  View Project
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
