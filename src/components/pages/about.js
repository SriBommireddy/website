import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import "../../App.css";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const skillsData = [
  { title: 'Programming Languages', skills: ['Python', 'SQL', 'R'] },
  { title: 'Data Visualization', skills: ['PowerBI', 'Tableau', 'Matplotlib', 'Seaborn'] },
  { title: 'ETL Tools', skills: ['AWS Glue', 'Qlik Replicate'] },
  { title: 'Databases & Data Warehouses', skills: ['Oracle', 'SQL Server', 'MongoDB', 'PostgreSQL', 'Snowflake', 'AWS Redshift', 'Google BigQuery', 'Azure Synapse'] },
  { title: 'Data Lakes', skills: ['AWS S3', 'Azure Blob Storage', 'Google Cloud Storage'] },
  { title: 'Cloud & Deployment Technologies', skills: ['AWS', 'Azure', 'Git', 'Jenkins', 'Docker', 'Kubernetes'] },
  { title: 'Project Management', skills: ['Sharepoint', 'Jira', 'MS Project', 'DAX', 'Advanced Excel', 'Visio', 'Power Query', 'Microsoft Access', 'ServiceNow', 'Entrust'] },
  { title: 'Methodologies', skills: ['Agile Methodology', 'Waterfall Methodology'] },
];

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  
  const scrollPrev = () => emblaApi.scrollPrev();
  const scrollNext = () => emblaApi.scrollNext();

  return (
    <div className="md:h-screen py-20 flex flex-col items-center justify-center px-4 md:px-28">
      <h1 className="text-center font-bold text-3xl">About Me</h1>
      <div className="p-5 md:px-48">
        <p className="text-gray-400 text-center">
          Seeking a challenging <b>Data Analyst</b> position to apply my skills in data analysis,
          process optimization, and business intelligence. Eager to leverage my experience in
          <b> SQL, Power BI</b> and <b>Python</b> to provide insights that drive strategic decisions
          and operational improvements.
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 p-4 bg-stone-200 rounded gap-10 hover:drop-shadow-lg">
        <div className="flex flex-col text-center md:text-end justify-center gap-3 font-medium">
          <div className="flex justify-center md:justify-end">
            <img
              src="https://photosly.in/wp-content/uploads/2024/07/girl-dp-2.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover p-1 bg-white"
            />
          </div>
          <div>Name : <span className="text-gray-500">Sri Sruthi Bommireddy</span></div>
          <div>Phone Number : <span className="text-gray-500">(323) 328-6397</span></div>
          <div>
            E-mail :{" "}
            <a className="text-gray-500" href="mailto:sribommireddy@gmail.com">sribommireddy@gmail.com</a>
          </div>
        </div>

        {/* Skills Section with Default Slider */}
        <div className=''>
          <h2 className="text-center md:text-start text-2xl font-bold mb-4 px-3">SKILLS</h2>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {skillsData.map((skillCategory, index) => (
                <div
                  key={index}
                  className="embla__slide p-4 bg-white rounded-lg shadow-md hover:shadow-lg flex-shrink-0 w-full md:w-60 mx-2"
                >
                  <h3 className="text-lg font-semibold mb-2 webColor">{skillCategory.title}</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {skillCategory.skills.map((skill, idx) => (
                      <li key={idx} className="text-sm">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="flex justify-start gap-5 mt-4 px-2">
            <button 
              className="bg-transparent webColor text-4xl"
              onClick={scrollPrev}
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button 
              className="bg-transparent webColor text-4xl"
              onClick={scrollNext}
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
