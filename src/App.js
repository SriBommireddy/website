import "./App.css";
import Navbar from "./components/pages/navbar";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Work from "./components/pages/work";
import React, { useRef, useState, useEffect } from "react";
import Contact from "./components/pages/contact";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null); // If you have a Work section
  const contactRef = useRef(null); // If you have a Contact section

  // Handle smooth scroll to the respective section
  const handleScroll = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Update active tab based on scroll position
  const handleSetActive = (link) => {
    setActiveTab(link);
    if (link === "home") handleScroll(homeRef);
    if (link === "about") handleScroll(aboutRef);
    if (link === "work") handleScroll(workRef); // Add if you have a Work section
    if (link === "contact") handleScroll(contactRef); // Add if you have a Contact section
  };

  // Detect which section is currently in view
  const handleScrollUpdate = () => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: aboutRef, id: "about" },
      { ref: workRef, id: "work" },
      { ref: contactRef, id: "contact" },
    ];

    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      const { ref, id } = section;
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        if (top >= 0 && top < height) {
          setActiveTab(id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollUpdate);
    return () => {
      window.removeEventListener("scroll", handleScrollUpdate);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Navbar activeTab={activeTab} setActiveTab={handleSetActive} />

      <div ref={homeRef} className="flex-1 bg-black bg-cover bg-center bg-no-repeat">
        <Home />
      </div>
      <div ref={aboutRef} className="flex-1 bg-gray-100">
        <About />
      </div>
      <div ref={workRef} className="flex-1 bg-gray-200">
        <Work />
      </div>
      <div ref={contactRef} className="flex-1 bg-gray-300">
        <Contact />
      </div>
    </div>
  );
}

export default App;
