import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isHomeRoute = location.pathname === "/website";

  return (
    <div className="w-full px-4 md:px-20 lg:px-28">
      <nav className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo as Home Link */}
          {isHomeRoute ? (
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-3xl tracking-wide cursor-pointer"
            >
              <span className="sacramento-regular">
                <span className="text-yellow-500 font-semibold">S</span>ri{" "}
                <span className="text-yellow-500 font-semibold">B</span>ommireddy
              </span>
            </ScrollLink>
          ) : (
            <RouterLink
              to="/website"
              className="text-3xl tracking-wide cursor-pointer"
            >
              <span className="sacramento-regular">
                <span className="text-yellow-500 font-semibold">S</span>ri{" "}
                <span className="text-yellow-500 font-semibold">B</span>ommireddy
              </span>
            </RouterLink>
          )}

          {/* Right: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {isHomeRoute ? (
              <>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Work
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </>
            ) : (
              <RouterLink to="/website" className="cursor-pointer">
                ← Home
              </RouterLink>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-black" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>

        {/* Mobile Menu (shows on small screens) */}
        {isOpen && (
          <div className="md:hidden bg-gray-100 text-center mt-2">
            {isHomeRoute ? (
              <>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                  onClick={toggleMenu}
                >
                  About
                </ScrollLink>
                <ScrollLink
                  to="work"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Work
                </ScrollLink>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block py-2 cursor-pointer"
                  onClick={toggleMenu}
                >
                  Contact
                </ScrollLink>
              </>
            ) : (
              <RouterLink
                to="/website"
                className="block py-2 cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </RouterLink>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
