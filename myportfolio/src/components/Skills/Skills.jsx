import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[5vw] md:px-[7vw] lg:px-[20vw] font-sans [background-image:var(--bg-skills-gradient)] bg-cover bg-center bg-no-repeat"
  >
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills honed through various projects and experiences
      </p>
    </div>

    <div className="flex flex-wrap gap-5 justify-center">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md p-6 sm:p-8 w-full sm:w-[48%] lg:w-[30%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] flex flex-col items-center"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 text-center min-w-[60px]"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
