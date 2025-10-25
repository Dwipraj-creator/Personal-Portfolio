import React from "react";

const GithubStats = () => {
  return (
    <section
      id="github-stats"
      className="py-16 px-4 md:px-20 text-center bg-[#0b0a1a] text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">GitHub Statistics</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* GitHub Stats Card */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=Dwipraj-creator&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="w-[90%] md:w-[45%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />

        {/* Most Used Languages */}
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dwipraj-creator&layout=compact&theme=radical"
          alt="Top Languages"
          className="w-[90%] md:w-[45%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* GitHub Streak Stats */}
      <div className="flex justify-center mt-10">
        <img
          src="https://github-readme-streak-stats.herokuapp.com?user=Dwipraj-creator&theme=radical&hide_border=false"
          alt="GitHub Streak"
          className="w-[90%] md:w-[60%] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default GithubStats;
