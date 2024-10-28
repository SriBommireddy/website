import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("bg-transparent");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (link) => {
    setActiveTab(link); // Update the active link
    setIsOpen(false); // Close the mobile menu after selecting a link
  };

  const openResumePDF = () => {
    const resumeUrl =
      "https://raw.githubusercontent.com/SriBommireddy/website/main/public/Sri.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "SriResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setBgColor("backdrop-blur"); // Set your desired color when scrolled
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine text color based on bgColor
  const navColor = bgColor === "backdrop-blur" ? "text-black" : "text-white";
  const textColor = bgColor === "backdrop-blur" ? "hover:text-black" : "hover:text-white";
  // const mobileTextColor = bgColor === "bg-white" ? "text-gray-800" : "text-gray-400";

  return (
    <div className={`fixed w-full top-0 z-50 transition-colors duration-300 ${bgColor} ${bgColor === "bg-transparent" ? "": "shadow-md"}`}>
      <nav className={`px-4 md:px-28 my-4 ease-linear transition-all duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Website Name */}
          <div className={`${navColor} text-3xl tracking-wide`}>
            <span className="sacramento-regular">
              <span className="webColor">S</span>ri{" "}
              <span className="webColor">B</span>ommireddy
            </span>
          </div>

          {/* Right: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              onClick={() => handleSetActive("home")}
              className={`${activeTab === "home" ? "webColor" : "text-gray-400"} ${textColor} font-medium`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleSetActive("about")}
              className={`${activeTab === "about" ? "webColor" : "text-gray-400"} ${textColor} font-medium`}
            >
              About
            </a>
            <a
              href="#work"
              onClick={() => handleSetActive("work")}
              className={`${activeTab === "work" ? "webColor" : "text-gray-400"} ${textColor} font-medium`}
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={() => handleSetActive("contact")}
              className={`${activeTab === "contact" ? "webColor" : "text-gray-400"} ${textColor} font-medium`}
            >
              Contact
            </a>
            <a
              href="#resume"
              onClick={openResumePDF}
              className={`${textColor} font-medium text-gray-400`}
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden webColor`} onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        {/* Mobile Menu (shows on small screens) */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 text-center">
            <a
              href="#home"
              onClick={() => handleSetActive("home")}
              className={`${activeTab === "home" ? "webColor" : "text-gray-400"
                } block py-2 hover:text-white`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handleSetActive("about")}
              className={`${activeTab === "about" ? "webColor" : "text-gray-400"
                } block py-2 hover:text-white`}
            >
              About
            </a>
            <a
              href="#work"
              onClick={() => handleSetActive("work")}
              className={`${activeTab === "work" ? "webColor" : "text-gray-400"
                } block py-2 hover:text-white`}
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={() => handleSetActive("contact")}
              className={`${activeTab === "contact" ? "webColor" : "text-gray-400"
                } block py-2 hover:text-white`}
            >
              Contact
            </a>
            <a
              href="#resume"
              onClick={openResumePDF}
              className="text-gray-300 block py-2 hover:text-white"
            >
              Resume
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
