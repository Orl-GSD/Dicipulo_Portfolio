import React from 'react';
import Image from 'next/image';

export interface ProjectImageGridProps {
  images: string[];
}

const ProjectImageGrid = ({ images }: ProjectImageGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 w-full">
      {images.map((src, index) => {

        const isLastAndOdd = images.length % 2 !== 0 && index === images.length - 1;

        return (
          <div 
            key={index} 
            className={`relative w-full bg-slate-100 rounded-md overflow-hidden border border-slate-200 ${
              isLastAndOdd 
                ? 'md:col-span-2 aspect-video md:aspect-21/9'
                : 'aspect-4/3' 
            }`}
          >
            <Image 
              src={src} 
              alt={`Project image ${index + 1}`} 
              fill 
              className="object-cover" 

              sizes={isLastAndOdd ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectImageGrid;