import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll with offset for sticky navbar
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // adjust based on your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" }, // must match Navbar section id
    { name: "Contact Me", id: "contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/dwipraj.dey/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/dwiprajdey/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/dwiprajdey/" },
  ];

  return (
    <footer className="bg-[#050414] text-white py-8 px-[5vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-500">
          Dwipraj Dey
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Dwipraj Dey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
