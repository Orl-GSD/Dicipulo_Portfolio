import React from 'react';

export interface SkillBoxProps {
  skillName: string;
  iconPath: string;
  category: 'design' | 'development';
}

const SkillBox = ({ skillName, iconPath, category }: SkillBoxProps) => {
  const categoryStyles = {
    development: 'hover:bg-amber-500 hover:text-white border-slate-200 hover:border-amber-500',
    design: 'hover:bg-lime-600 hover:text-white border-slate-200 hover:border-lime-600',
  };

  return (
    <div 
      className={`
        flex flex-col items-center justify-center p-8 rounded-xl bg-slate-50 border-2 
        transition-all duration-300 group cursor-default shadow-sm hover:-translate-y-1 hover:shadow-md
        text-slate-700
        ${categoryStyles[category]}
      `}
    >
      <div 
        className="w-12 h-12 mb-4 bg-current transition-colors duration-300"
        style={{
          WebkitMaskImage: `url(${iconPath})`,
          WebkitMaskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskImage: `url(${iconPath})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }}
      />
      
      <span className="font-semibold text-sm tracking-wide">
        {skillName}
      </span>
    </div>
  );
};

export default SkillBox;