import "./App.css";
import Navbar from "./components/pages/navbar";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Work from "./components/pages/work";
import Contact from "./components/pages/contact";
import Overview from "./components/pages/Overview";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// ScrollToTop component for scrolling to the top on route change
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route
            path="/website"
            element={
              <>
                <div className="flex flex-col justify-center items-center">
                  <Home />
                </div>
                <About />
                <Work />
                <Contact />
              </>
            }
          />
          <Route path="/project-overview/:id" element={<Overview />} />
          {/* Add additional routes for other projects as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
