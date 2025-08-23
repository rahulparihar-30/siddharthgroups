import React, { useState } from "react";
import { serviceCard } from "./Section";
import { projects } from "./data";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  // Get unique categories from projects
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Apply filter
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="w-full">
      {/* Hero Image + Tagline */}
      <div className="w-full h-60 md:h-70 relative bg-black">
        <img
          src="/construction/skyscrapers.jpg"
          className="w-full h-full object-cover opacity-50"
          alt="Projects banner"
          loading="lazy"
        />
        <h3
          style={{ fontFamily: "Golco" }}
          className=" text-white font-semibold text-center absolute inset-0 flex items-center justify-center px-4 text-lg md:text-2xl"
        >
          Foundations of Trust, Towers of Excellence.
        </h3>
      </div>

      {/* Filter Buttons */}
      <div className="grid place-items-center mt-5 px-3">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded transition-colors ${
                filter === cat
                  ? "bg-amber-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } cursor-pointer`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="place-items-center md:place-items-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-6xl">
          {filteredProjects.map((project) => serviceCard(project))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
