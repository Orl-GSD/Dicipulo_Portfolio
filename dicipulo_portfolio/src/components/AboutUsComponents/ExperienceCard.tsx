import React from 'react'
import Image from 'next/image';

export interface ExperienceCardProps {
  role: string;
  company: string;
  date: string;
  logoPath: string;
}

const ExperienceCard = ({logoPath, role, company, date}: ExperienceCardProps) => {
  return (
    <div className="flex items-center justify-between p-6 border-2 border-slate-200 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-6">
        <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden bg-white border border-slate-200 shadow-sm">
          <Image 
            src={logoPath} 
            alt={`${company} logo`} 
            fill 
            className="object-contain p-2" 
            sizes="64px"
          />
        </div>
        <div className="flex flex-col text-left">
          <h3 className="text-xl font-bold">{role}</h3>
          <p className="text-slate-600">{company}</p>
        </div>
      </div>

      <div className="text-right">
        <span className="text-slate-500">{date}</span>
      </div>
    </div>
  )
}

export default ExperienceCard
