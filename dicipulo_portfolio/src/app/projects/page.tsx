// src/app/about/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-albert pattern-background">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
        <h1 className="header">PROJECTS</h1>
        
        <div className='w-full space-y-8 mb-32'>
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
          
          <ProjectCard 
            title="ADTO Event Management System"
            description="Lorem Ipsum mamaya pa nako ni ayusin imnida!"
            imageSrc="/banners/ADTO.jpg"
            roles="UI/UX Head"
            type="Product Design"
            date="2025-2026"
            status="Finished"
            href="/projects/adto"
          />

          <ProjectCard 
            title="TEDxLanang Ave Creatives"
            description="Lorem Ipsum mamaya pa nako ni ayusin imnida!"
            imageSrc="/banners/TEDxLA.jpg"
            roles="Deputy Creative Director"
            type="Layout & Graphic Design"
            date="2025"
            status="Finished"
            href="/projects/tedxla"
          />

         <ProjectCard 
            title="Atenews Creatives '22 - '26"
            description="Lorem Ipsum mamaya pa nako ni ayusin imnida!"
            imageSrc="/banners/AtenewsCreatives.jpg"
            roles="Art Editor for Layout & Cartoon"
            type="Layout & Graphic Design"
            date="2022-2026"
            status="Finished"
            href="/projects/atenewscreatives"
          />

          <ProjectCard 
            title="Atenews Physical Releases"
            description="Lorem Ipsum mamaya pa nako ni ayusin imnida!"
            imageSrc="/banners/AtenewsPhysicalReleases.jpg"
            roles="Art Editor for Layout & Cartoon"
            type="Layout & Graphic Design"
            date="2022-2026"
            status="Finished"
            href="/projects/atenewsreleases"
          />        

        </div>

      </main>

      <Footer />
    </div>
  );
}