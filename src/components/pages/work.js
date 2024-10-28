import React from "react";

const Work = () => {
  const experiences = [
    {
      company: "Cygnet Inc",
      location: "New Jersey, NJ",
      position: "Data Analyst Intern",
      date: "May 2023 - July 2023",
      details: [
        "Collaborated with product management to define and implement data strategies, ensuring data quality and integrity through cleaning and transformation using ETL tools.",
        "Developed and monitored automated dashboards in Power BI, establishing KPIs for the operations team to track monthly sales and generate actionable insights.",
        "Conducted root cause analysis and produced daily ad-hoc reports to update the operations team on inventory processes."
      ]
    },
    {
      company: "University of North Carolina Charlotte",
      location: "Charlotte, NC",
      position: "Student Tech Analyst",
      date: "August 2023 - April 2024",
      details: [
        "Developed and maintained interactive dashboards to track and visualize key performance metrics.",
        "Applied expertise in optimization mathematics, specializing in linear and nonlinear programming, alongside advanced Excel skills, including VBA, for automation and customization in data analysis.",
        "Conducted data analysis to identify trends and areas of improvement using Excel and Power BI."
      ]
    },
    {
      company: "Tenet Healthcare",
      location: "Dallas, TX",
      position: "Information Systems Intern",
      date: "May 2024 - August 2024",
      details: [
        "Integrated data from Entrust and PKI servers into ServiceNow, streamlining certificate management for over 5,000 assets.",
        "Developed a real-time dashboard of certificate lifecycle in ServiceNow, reducing certificate expiration incidents by 30%.",
        "Enhanced healthcare IT systems, improving patient care by minimizing application downtime due to expired certificates.",
        "Collaborated with cross-functional teams to develop and implement data-driven solutions using Agile methodology."
      ]
    },
    {
      company: "Cygnet Inc",
      location: "Data Analyst Intern Co-Op",
      date: "September 2024 - Present",
      details: [
        "Leveraged advanced SQL and Power BI skills to analyze large datasets, delivering valuable insights to enhance operational efficiency.",
        "Utilized custom Python scripts and tools like NumPy, Pandas, Matplotlib, and Plotly for extensive EDA and visualization.",
        "Generated Power BI reports from Excel and ensured proper connections with SQL Server, enhancing report generation time.",
        "Implemented Power Automate flows for KPI-based anomaly detection in Power BI, reducing potential losses by 15%."
      ]
    }
  ];

  return (
    <div className="p-8 md:p-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-600">{exp.date}</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">{exp.location}</p>
            <p className="text-lg font-medium text-gray-800 mb-2">{exp.position}</p>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
