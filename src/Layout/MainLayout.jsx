import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";

const MainLayout = () => {
  // Function to scroll to a specific section
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ top: element.offsetHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-50">

      <NavBar scrollToSection={scrollToSection} />

      <div className="container mx-auto px-3 sm:p-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
