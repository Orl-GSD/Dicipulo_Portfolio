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
    <div className=" pattern-background flex flex-col min-h-screen font-albert">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center pt-32 px-6 md:px-12 w-full max-w-6xl mx-auto space-y-24">
        <h1 className="header">About Me</h1>
        
        {/* PERSONAL INFORMATION */}
        <div className='flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-24 w-full mt-12 px-6 md:px-12'>

          <div className="relative p-4 border-2 border-blue-600 bg-white shrink-0">
            
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-600 rounded-full" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-600 rounded-full" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-600 rounded-full" />

            <div className="w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 relative rounded-full overflow-hidden group bg-slate-100">
              <Image 
                src="/images/ThisIsMe.jpg"
                alt="Profile Picture"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

          </div>

          <div className="flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 xl:mb-8 text-slate-900">
                Earl Geibriel Dicipulo
              </h2>
              
              <p className="w-full max-w-lg font-medium text-slate-700 leading-relaxed">
                I am <span className="font-bold text-blue-600">Earl Dicipulo</span>, consectetur adipiscing elit. Nulla nisl libero, eleifend id nibh quis, aliquet volutpat ligula. 
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

      <div className='mt-32'>
        <Footer />
      </div>

    </div>
  );
}