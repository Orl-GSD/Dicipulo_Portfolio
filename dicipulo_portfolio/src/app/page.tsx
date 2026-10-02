'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Divider from "@/components/Divider";
import ProjectCard from "@/components/ProjectCard" 
import Button from "@/components/Button";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroWrapper from "@/components/HeroWrapper";

export default function Home() {
  return (
    <div className="overflow-hidden scroll-smooth relative w-full flex flex-col flex-1 items-center font-albert pattern-background">
      
      <div className="z-10 w-full">
        <Navbar />
      </div>


      {/* HERO SECTION */}
      <div >
        <HeroWrapper />
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
          href="/projects/banaagdiwa25"
        />

        <ProjectCard 
          title="Diwanag '26: What If?"
          description="Atenews' Art Folio 2026 Release"
          imageSrc="/banners/Diwanag26.jpg"
          roles="Creative Direction, Illustrative Design"
          type="Graphic Design"
          date="2026"
          status="Finished"
          href="/projects/diwanag26"
        />      

        <ProjectCard 
          title="Atenews Elections Watch 2026"
          description="SAMAHAN Sentral Board 2026 Elections Watch to guide student-voters"
          imageSrc="/banners/Atenews_ElectionsWatch2026.jpg"
          roles="UI/UX Developer"
          type="Web Design"
          date="2026"
          status="Finished"
          href="/projects/election-watch"
        />
      </div>


      {/* ABOUT ME */}
      <Divider text="About Me"/>
      
      <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-center gap-12 xl:gap-24 px-6 md:px-16 xl:px-40 mb-24">

        {/* --- LEFT COLUMN: TEXT & BUTTON --- */}
        {/* Added text-center on mobile, then xl:text-left on desktop for better alignment */}
        <div className="flex flex-col space-y-8 lg:space-y-12 items-center lg:items-start text-center lg:text-left">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 xl:mb-8 text-slate-900">
              HELLO THERE!
            </h2>
            
            {/* Replaced 'w-lg' with 'w-full max-w-lg' so it doesn't break on small screens */}
            <p className="w-full max-w-lg font-medium text-slate-700 leading-relaxed">
              I am <span className="font-bold text-blue-600">Earl Dicipulo</span>, consectetur adipiscing elit. Nulla nisl libero, eleifend id nibh quis, aliquet volutpat ligula. 
              Vivamus tempor velit et purus aliquam, in vestibulum sem fermentum. Nam sodales metus orci, quis finibus magna dictum at.
              <br/><br/>
              Donec sed nunc eget purus dignissim elementum. Phasellus orci enim, pellentesque et urna ac, aliquam suscipit elit. 
              Sed vitae elit nec ex fringilla sodales. Aenean aliquet diam id lorem consectetur sagittis nec quis nulla.
            </p>
          </div>
          
          <Button variant="primary">Know More About Me</Button>
        </div>

        {/* --- RIGHT COLUMN: IMAGE & BOUNDING BOX --- */}
        {/* 
          Using the 'Absolute Positioning' method for the Figma handles 
          that we established in the Hero section. It is perfectly responsive!
        */}
        <div className="relative p-4 border-2 border-blue-600 bg-white">
          
          {/* The 4 Corner Handles */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-600 rounded-full" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-600 rounded-full" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-600 rounded-full" />

          {/* 
            IMAGE CONTAINER SIZING:
            - Mobile: w-64 h-64 (256px)
            - Tablet: md:w-80 md:h-80 (320px)
            - Desktop: xl:w-96 xl:h-96 (384px)
          */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden group bg-slate-100">
            <Image 
              src="/images/ThisIsMe.jpg"
              alt="Profile Picture"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

        </div>

      </div>

      {/* FOOTER */}
      <div className="w-full">
        <ContactSection />
        <Footer />
      </div>


    </div>
  );
}