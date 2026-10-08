"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard';

const FILTER_CATEGORIES = ["All", "Web", "Graphic Design"] as const;
type FilterCategory = (typeof FILTER_CATEGORIES)[number];

const PROJECTS: ProjectCardProps[] = [
  {
    title: "Banaag Diwa '25 Website",
    description: "Interactive Website for the Banaag Diwa '25: Nasaag Physical Release",
    imageSrc: "/banners/BanaagDiwa25.jpg",
    types: ["Web Design"],
    status: "In Progress",
    href: "/projects/banaagdiwa25",
  },
  {
    title: "Diwanag '26: What If?",
    description: "Atenews' Art Folio 2026 Release",
    imageSrc: "/banners/Diwanag26.jpg",
    types: ["Graphic Design"],
    status: "Finished",
    href: "/projects/diwanag26",
  },
  {
    title: "Atenews Elections Watch 2026",
    description: "SAMAHAN Sentral Board 2026 Elections Watch to guide student-voters",
    imageSrc: "/banners/Atenews_ElectionsWatch2026.jpg",
    types: ["Web Design"],
    status: "Finished",
    href: "/projects/election-watch",
  },
  {
    title: "ADTO Event Management System",
    description: "Lorem Ipsum mamaya pa nako ni ayusin imnida!",
    imageSrc: "/banners/ADTO.jpg",
    types: ["Web"],
    status: "Finished",
    href: "/projects/adto",
  },
  {
    title: "TEDxLanang Ave Creatives",
    description: "Lorem Ipsum mamaya pa nako ni ayusin imnida!",
    imageSrc: "/banners/TEDxLA.jpg",
    types: ["Layout & Graphic Design"],
    status: "Finished",
    href: "/projects/tedxla",
  },
  {
    title: "Atenews Creatives '22 - '26",
    description: "Lorem Ipsum mamaya pa nako ni ayusin imnida!",
    imageSrc: "/banners/AtenewsCreatives.jpg",
    types: ["Layout & Graphic Design"],
    status: "Finished",
    href: "/projects/atenewscreatives",
  },
  {
    title: "Atenews Physical Releases",
    description: "Lorem Ipsum mamaya pa nako ni ayusin imnida!",
    imageSrc: "/banners/AtenewsPhysicalReleases.jpg",
    types: ["Layout & Graphic Design"],
    status: "Finished",
    href: "/projects/atenewsreleases",
  },
];

export default function AboutPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;

    // Checks if any tag includes the selected keyword (e.g. "Web" matches "Web Design", "Graphic Design" matches "Layout & Graphic Design")
    return project.types.some((tag) =>
      tag.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <div className="flex flex-col min-h-screen font-albert pattern-background">
      <Navbar />

      <main className="flex-1 flex flex-col items-center pt-32 px-6 md:px-12 w-full max-w-[95rem] mx-auto">
        <div className='text-center'>
          <h1 className="header">PROJECTS</h1>
          <p className='text-2xl'>Check out the collection of works I have <span className='font-semibold'>designed and developed!</span></p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-24 mb-4">
          {FILTER_CATEGORIES.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`space-x-2 px-6 py-2 text-md font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25"
                    : "bg-white/80 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 mb-72 w-full">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500 text-base">No projects found in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}