import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubActivity = () => {
  return (
    <section
      id="github"
      className="text-white py-16 px-4 md:px-20 bg-[#0b0a1a] text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        GitHub Calendar 
      </h2>

      <div className="flex justify-center">
        <div className="overflow-x-auto">
          <GitHubCalendar
            username="Dwipraj-creator" // 👈 replace with your GitHub username
            blockSize={15}
            blockMargin={5}
            color="#22c55e"
            fontSize={14}
          />
        </div>
      </div>
    </section>
  );
};

export default GithubActivity;


