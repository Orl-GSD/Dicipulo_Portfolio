import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  types: string[];
  status: 'In Progress' | 'Finished';
  href: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  types,
  status,
  href,
}: ProjectCardProps) => {
    return (
            <Link
                href={href}
                className="font-albert rounded-md w-full group flex flex-col bg-white border-2 border-slate-200 gap-2 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:outline-none focus:ring-4 focus:ring-blue-600/50"
            >
            {/* Left: Image Section */}
            <div className="relative aspect-4/3 overflow-hidden rounded-t-md">
                <Image
                    src={imageSrc}
                    alt={`Thumbnail for ${title}`}
                    fill
                    className="object-cover"
                    sizes="100vw, 50vw"
                    loading="eager"
                />
                
                {/* Status Badge */}
                <div 
                    className={`absolute top-3 left-3 px-4 py-1 text-xs font-bold rounded-full shadow-sm ${
                        status === 'Finished' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}
                >
                    {status}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 w-full justify-between p-6">
              <div>
                {/* Multiple Type Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {types.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2.5 py-1 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-jersey text-2xl md:text-3xl text-slate-900 mb-2">
                  {title}
                </h3>

                <p className="text-slate-600 text-md leading-relaxed mb-6">
                  {description}
                </p>
              </div>

              {/* CTA Button */}
              <div className="w-full inline-flex items-center justify-center py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                View Project
              </div>
            </div>
    </Link>
  );
};

export default ProjectCard;