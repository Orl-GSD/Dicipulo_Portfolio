import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    roles: string;
    type: string;
    date: string;
    status: 'In Progress' | 'Finished';
    href: string
}

const ProjectCard = ({
    title,
    description,
    imageSrc,
    roles,
    type,
    date,
    status,
    href,
}: ProjectCardProps) => {
    return (
            <Link
                href={href}
                className="font-albert rounded-md w-full max-w-6xl group flex flex-col md:flex-row bg-white border-2 border-slate-400 p-4 gap-6 md:gap-10 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] focus:outline-none focus:ring-4 focus:ring-blue-600/50"
            >
            {/* Left: Image Section */}
            <div className="relative w-full md:w-1/2 min-h-62.5 md:min-h-87.5 shrink-0 overflow-hidden bg-slate-100 rounded-md border-2 border-slate-200 filter">
                <Image
                    src={imageSrc}
                    alt={`Thumbnail for ${title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                />
                
                {/* Status Badge */}
                <div 
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full shadow-sm ${
                        status === 'Finished' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}
                >
                    {status}
                </div>
            </div>

            {/* Right: Content Section */}
            <div className="flex flex-col flex-1 py-2 w-full pr-8 justify-center">
                <h3 className="font-jersey text-3xl md:text-4xl text-slate-900 mb-2">
                    {title}
                </h3>
                
                <p className="text-slate-600 text-sm md:text-base mb-6">
                    {description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-row bg-indigo-50/60 rounded-lg p-3 md:p-4 mb-6">
                    {/* Role */}
                    <div className="flex-2 flex flex-col justify-start px-2 md:px-4 border-r border-slate-300">
                        <span className="text-xs text-slate-500 mb-1">Role</span>
                        <span className="text-sm font-semibold text-slate-900 leading-tight pr-2">{roles}</span>
                    </div>
                    
                    {/* Type */}
                    <div className="flex-2 flex flex-col justify-center px-2 md:px-4 border-r border-slate-300">
                        <span className="text-xs text-slate-500 mb-1">Type</span>
                        <span className="text-sm font-semibold text-slate-900 leading-tight">{type}</span>
                    </div>
                    
                    {/* Date */}
                    <div className="flex-1 flex flex-col justify-center px-2 md:px-4">
                        <span className="text-xs text-slate-500 mb-1">Date</span>
                        <span className="text-sm font-semibold text-slate-900 leading-tight">{date}</span>
                    </div>
                </div>

                <div className="">
                    <div className="w-full md:w-48 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md text-sm font-medium transition-colors bg-blue-600 text-white group-hover:bg-blue-700">
                        View Project
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;