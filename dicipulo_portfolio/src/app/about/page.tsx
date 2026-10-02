// src/app/about/page.tsx
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillBox from '@/components/AboutUsComponents/SkillBox';
import ExperienceCard from '@/components/AboutUsComponents/ExperienceCard';

export default function AboutPage() {
  
  const designSkills = [
    { name: 'Figma', icon: '/icons/figma.svg', category: 'design' as const },
    { name: 'Photoshop', icon: '/icons/photoshop.svg', category: 'design' as const },
    { name: 'Illustrator', icon: '/icons/illustrator.svg', category: 'design' as const },
    { name: 'InDesign', icon: '/icons/indesign.svg', category: 'design' as const },
    { name: 'Krita', icon: '/icons/krita.svg', category: 'design' as const },
    { name: 'Canva', icon: '/icons/canva.svg', category: 'design' as const },
  ];

  const devSkills = [
    { name: 'React', icon: '/icons/react.svg', category: 'development' as const },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', category: 'development' as const },
    { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'development' as const },
  ];

  const experience = [
    {role: 'Art Editor for Web & Cartoon', company: 'Atenews, Ateneo de Davao University', date: 'May 2025 - June 2026', logo:'/logos/Atenews.svg'},
    {role: 'UI/UX Designer', company: 'SysDev, Ateneo de Davao University', date: 'February 2025 - June 2026', logo:'/logos/SysDev.svg'},
    {role: 'UI/UX Design Intern', company: 'Webforest Digital Solutions', date: 'May 2025 - June 2025', logo:'/logos/Webforest.svg'},
    {role: 'Art Editor for Layout & Cartoon', company: 'Atenews, Ateneo de Davao University', date: 'June 2023 - June 2024', logo:'/logos/Atenews.svg'},
  ]

  return (
    <div className="flex flex-col min-h-screen font-albert">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-32 px-6 md:px-12 w-full max-w-6xl mx-auto space-y-24">
        <h1 className="header">About Me</h1>
        
        {/* PERSONAL INFORMATION */}
        <div className='flex flex-row gap-24 w-full mt-12'>

          {/* LEFT COLUMN */}
          <div className='flex flex-row relative'>

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

          {/* RIGHT COLUMN */}
          <div className=" space-y-16 flex flex-col justify-center">
            <div>
              <p className="text-5xl font-bold mb-8">Earl Geibriel Dicipulo</p>
              <p className="w-lg font-medium">
                I am <span className="font-bold text-mainblue">Earl Dicipulo</span>, consectetur adipiscing elit. Nulla nisl libero, eleifend id nibh quis, aliquet volutpat ligula. 
                Vivamus tempor velit et purus aliquam, in vestibulum sem fermentum. Nam sodales metus orci, quis finibus magna dictum at.
                <br/><br/>
                Donec sed nunc eget purus dignissim elementum. Phasellus orci enim, pellentesque et urna ac, aliquam suscipit elit. 
                Sed vitae elit nec ex fringilla sodales. Aenean aliquet diam id lorem consectetur sagittis nec quis nulla.
              </p>
            </div>
          </div>

        </div>


        <div className='flex flex-col w-full space-y-8'>
          {/* SKILLS */}
          <section className="w-full max-w-5xl mb-32 mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-black text-slate-900 mb-12">Skills</h2>
                
                <div className="flex flex-col gap-12">
                  
                  {/* Design Category */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-6 border-b-2 border-slate-100 pb-2">
                      Design & Prototyping
                    </h3>
                    {/* 3 columns on desktop, 2 on mobile. 6 items fit perfectly. */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {designSkills.map((skill, index) => (
                        <SkillBox 
                          key={index}
                          skillName={skill.name}
                          iconPath={skill.icon}
                          category={skill.category}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Development Category */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-700 mb-6 border-b-2 border-slate-100 pb-2">
                      Frontend Development
                    </h3>
                    {/* 3 columns on desktop, 2 on mobile. 3 items fit perfectly on desktop. */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {devSkills.map((skill, index) => (
                        <SkillBox 
                          key={index}
                          skillName={skill.name}
                          iconPath={skill.icon}
                          category={skill.category}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </section>

          {/* EXPERIENCE */}
          <section className='w-full max-w-5xl mx-auto px-6 md:px-12'>
            <h2 className="text-3xl font-black text-slate-900 mb-12">Experience</h2>
          
            <div className='w-full space-y-4'>
                {experience.map((experience, index) => (
                  <ExperienceCard 
                    key={index}
                    role={experience.role}
                    company={experience.company}
                    date={experience.date}
                    logoPath={experience.logo}
                  />
                ))}
            </div>
          </section>   
        </div>
          

      </main>

      <Footer />
    </div>
  );
}