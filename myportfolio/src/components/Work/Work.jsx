import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[5vw] md:px-[10vw] lg:px-[15vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies.
        </p>
      </div>

      {/* Projects - vertically stacked */}
      <div className="flex flex-col gap-12 items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300 w-full max-w-4xl"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-4 text-center">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons visible by default */}
              <div className="flex gap-4 justify-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm lg:text-xl font-semibold text-center transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Code
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm lg:text-xl font-semibold text-center transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 text-white text-4xl font-bold bg-black/60 hover:bg-purple-700/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4 pt-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm lg:text-base text-center">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm lg:text-xl font-semibold text-center transition"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm lg:text-xl font-semibold text-center transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
