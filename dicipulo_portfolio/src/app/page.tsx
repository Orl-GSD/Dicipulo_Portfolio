'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import Ruler from "@/components/Ruler";
import ProjectCard from "@/components/ProjectCard" 
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="overflow-hidden scroll-smooth relative w-full flex flex-col flex-1 items-center font-albert pattern-background">
      
      <div className="z-10 w-full">
        <Navbar />
      </div>

      {/* <Ruler side="left" tickCount={100} />
      <Ruler side="right" tickCount={100} /> */}

    {/* HERO SECTION */}
      <div className="flex flex-col gap-8 items-center justify-center">
        <div className="flex mt-36 relative">
          {/* Left */}
          <div className="flex flex-col justify-between z-1">
            <div className="px-2 py-2 bg-blue-600 translate-x-2 -translate-y-2 rounded-full" />
            <div className="px-2 py-2 bg-blue-600 translate-x-2 translate-y-2 rounded-full" />
          </div>

          {/* Center */}
          <div className="px-32 border-2 border-blue-600 bg-white/50 backdrop-blur-sm">
            <Hero />
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <div className="px-2 py-2 bg-blue-600 -translate-x-2 -translate-y-2 rounded-full" />
            <div className="px-2 py-2 bg-blue-600 -translate-x-2 translate-y-2 rounded-full" />
          </div>
        </div>

        <div className="w-154 font-albert font-medium text-2xl text-center text-text">
          <p><span className="font-black text-mainblue">UI/UX Designer</span> and <span className="font-black text-mainblue">Layout & Graphic Designer</span>, creating creative, functional, and user-centred designs</p>
        </div>
      </div>

      {/* RECENT PROJECTS */}
      <Divider text="Recent Projects"/>

      <div className="flex flex-col items-center justify-center w-full gap-12 px-8 sm:px-12 md:px-16">
        <ProjectCard 
          title="Banaag Diwa '25 Website"
          description="Interactive Website for the Banaag Diwa '25: Nasaag Physical Release"
          imageSrc="/banners/BanaagDiwa25.jpg"
          roles="UI/UX Designer"
          type="Web Design"
          date="2026"
          status="In Progress"
          onClick={() => console.log('Card Clicked!')}
        />

        <ProjectCard 
          title="Diwanag '26: What If?"
          description="Atenews' Art Folio 2026 Release"
          imageSrc="/banners/Diwanag26.jpg"
          roles="Creative Direction, Illustrative Design"
          type="Graphic Design"
          date="2026"
          status="Finished"
          onClick={() => console.log('Card Clicked!')}
        />      

        <ProjectCard 
          title="Atenews Elections Watch 2026"
          description="SAMAHAN Sentral Board 2026 Elections Watch to guide student-voters"
          imageSrc="/banners/Atenews_ElectionsWatch2026.jpg"
          roles="Project Manager, UI/UX Designer, Frontend Dev"
          type="Web Design"
          date="2026"
          status="Finished"
          onClick={() => console.log('Card Clicked!')}
        />
      </div>


      {/* ABOUT ME */}
      <Divider text="About Me"/>
      
      <div className="flex flex-col-reverse xl:flex-row w-full items-center justify-between gap-24 px-40 mb-24">

        {/* Left Column */}
        <div className=" space-y-16 flex-col">
          <div>
            <p className="text-5xl font-bold mb-8">HELLO THERE!</p>
            <p className="w-lg font-medium">
              I am <span className="font-bold text-mainblue">Earl Dicipulo</span>, consectetur adipiscing elit. Nulla nisl libero, eleifend id nibh quis, aliquet volutpat ligula. 
              Vivamus tempor velit et purus aliquam, in vestibulum sem fermentum. Nam sodales metus orci, quis finibus magna dictum at.
              <br/><br/>
              Donec sed nunc eget purus dignissim elementum. Phasellus orci enim, pellentesque et urna ac, aliquam suscipit elit. 
              Sed vitae elit nec ex fringilla sodales. Aenean aliquet diam id lorem consectetur sagittis nec quis nulla.
            </p>
          </div>
          <Button variant="primary">Know More About Me</Button>
        </div>

        {/* Right Column */}
        <div className="flex flex-row relative">
          {/* Left */}
          <div className="flex flex-col justify-between z-1">
            <div className="px-2 py-2 bg-blue-600 translate-x-2 -translate-y-2 rounded-full" />
            <div className="px-2 py-2 bg-blue-600 translate-x-2 translate-y-2 rounded-full" />
          </div>

        {/* Center */}
        <div className="p-4 border-2 border-mainblue">
          <div className="w-100 h-100 relative rounded-full overflow-hidden group">
            <Image 
              src="/images/ThisIsMe.jpg"
              alt="Profile Picture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <div className="px-2 py-2 bg-blue-600 -translate-x-2 -translate-y-2 rounded-full" />
            <div className="px-2 py-2 bg-blue-600 -translate-x-2 translate-y-2 rounded-full" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="w-full">
        <ContactSection />
      </div>


    </div>
  );
}