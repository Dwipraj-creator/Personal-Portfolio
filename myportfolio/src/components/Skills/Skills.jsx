import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-[5vw] md:px-[7vw] lg:px-[15vw] font-sans bg-gradient-to-b from-[#0a0118] to-[#1a0733] overflow-hidden"
  >
    {/* Glowing background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(130,69,236,0.2),transparent_70%)] pointer-events-none"></div>

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 relative z-10"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
      <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
        A collection of my technical skills honed through projects and hands-on
        experience.
      </p>
    </motion.div>

    {/* Vertically stacked skill cards */}
    <div className="flex flex-col gap-10 items-center relative z-10">
      {SkillsInfo.map((category, i) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="w-full"
        >
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
          >
            <div className="relative group bg-gray-900/70 backdrop-blur-lg border border-gray-700 hover:border-[#8245ec] transition-all duration-300 rounded-2xl shadow-[0_0_25px_rgba(130,69,236,0.2)] p-8 w-full hover:shadow-[0_0_40px_rgba(130,69,236,0.5)]">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-[#8245ec] transition">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center bg-gray-800/40 border border-gray-700 rounded-2xl p-3 w-[85px] sm:w-[90px] hover:bg-[#8245ec]/10 hover:border-[#8245ec] transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain mb-2"
                    />
                    <span className="text-gray-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
