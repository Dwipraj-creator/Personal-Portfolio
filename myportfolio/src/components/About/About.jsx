import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profilePic from "../../assets/profilePic.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            👋 Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Dwipraj Dey
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am an aspiring </span>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Coder",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              speed={70}
              deletionSpeed={40}
              repeat={Infinity}
              cursor={true}
              wrapper="span"
              className="text-[#8245ec] text-2xl font-semibold"
            />
          </h3>

          {/* About Me */}
          <p className="text-base sm:text-lg text-gray-400 mb-4 mt-8 leading-relaxed">
            I’m an aspiring Full-Stack Web Developer with hands-on experience in
            building real-world projects and strong problem-solving skills in
            Data Structures & Algorithms.
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-2 leading-relaxed">
            I hold a Bachelor of Commerce degree and I’m passionate about coding,
            learning new technologies, and creating impactful digital
            experiences. My goal is to grow professionally while contributing to
            exciting projects and collaborating with like-minded individuals.
          </p>

          {/* Resume Button */}
          <a
            href="resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 5px #8245ec, 0 0 10px #a855f7",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full flex items-center justify-center"
          >
            <img
              src={profilePic}
              alt="Dwipraj Dey"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] translate-x-2"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
