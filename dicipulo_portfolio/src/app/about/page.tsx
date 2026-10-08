import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkillBox from '@/components/AboutUsComponents/SkillBox';
import ExperienceCard from '@/components/AboutUsComponents/ExperienceCard';
import Button from '@/components/Button';
import Picture from '@/components/Picture';

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
    { name: 'Framer-Motion', icon: '/icons/framer.svg', category: 'development' as const },
  ];

  const experience = [
    { role: 'Art Editor for Web & Cartoon', company: 'Atenews, Ateneo de Davao University', date: 'May 2025 - June 2026', logo: '/logos/Atenews.svg' },
    { role: 'UI/UX Designer', company: 'SysDev, Ateneo de Davao University', date: 'February 2025 - June 2026', logo: '/logos/SysDev.svg' },
    { role: 'UI/UX Design Intern', company: 'Webforest Digital Solutions', date: 'May 2025 - June 2025', logo: '/logos/Webforest.svg' },
    { role: 'Creative Deputy Director', company: 'TEDx Lanang Avenue', date: '2025', logo: '/logos/TEDxLA.svg' },
    { role: 'Art Editor for Layout & Cartoon', company: 'Atenews, Ateneo de Davao University', date: 'June 2023 - June 2024', logo: '/logos/Atenews.svg' },
  ];

  return (
    <div className=" pattern-background flex flex-col min-h-screen font-albert">
      <Navbar />

      <main className="flex-1 flex flex-col items-center px-4 sm:px-8 md:px-12 w-full max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* HERO SECTION */}
        <section className="w-full min-h-[calc(100dvh-5rem)] flex items-center justify-center py-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 xl:gap-24 w-full">
            
            {/* Picture */}
            <div className="shrink-0 flex justify-center">
              <Picture />
            </div>

            {/* Introduction */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl">
              <div className='mb-12'>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-slate-500 mb-2">
                  HI, I AM
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
                  Earl Geibriel Dicipulo
                </h1>
                
                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Consectetur adipiscing elit. Nulla nisl libero, eleifend id nibh quis, aliquet volutpat ligula. 
                  Vivamus tempor velit et purus aliquam, in vestibulum sem fermentum. Nam sodales metus orci, quis finibus magna dictum at.
                  <br /><br />
                  Donec sed nunc eget purus dignissim elementum. Phasellus orci enim, pellentesque et urna ac, aliquam suscipit elit. 
                  Sed vitae elit nec ex fringilla sodales. Aenean aliquet diam id lorem consectetur sagittis nec quis nulla.
                </p>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <Button variant="primary" className="w-full sm:w-auto">
                  View Projects
                </Button>
                <Button variant="primary" className="w-full sm:w-auto">
                  Download Resume
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* DETAILS SECTION */}
        <div className="flex flex-col w-full space-y-16 md:space-y-24 pb-20">
          
          {/* SKILLS */}
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 sm:mb-12">
              Skills
            </h2>

            <div className="w-full flex flex-col gap-10 md:gap-12">
              {/* Design Category */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-700 mb-6 border-b-2 border-slate-100 pb-2">
                  Layout &amp; Graphic Design
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
                <h3 className="text-lg sm:text-xl font-bold text-slate-700 mb-6 border-b-2 border-slate-100 pb-2">
                  Frontend Development
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
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
          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 sm:mb-12">
              Experience
            </h2>

            <div className="w-full space-y-4">
              {experience.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  role={exp.role}
                  company={exp.company}
                  date={exp.date}
                  logoPath={exp.logo}
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