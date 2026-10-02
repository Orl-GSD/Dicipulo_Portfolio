import React, {ReactNode} from 'react'

export interface ProjectTextProps {
    subheader?: string;
    children?: ReactNode;
}

export default function ProjectText({
    subheader,
    children
}: ProjectTextProps) {
    return (
        <div className="mb-12 w-full">
        {subheader && <h3 className="text-xl font-bold text-slate-900 mb-4">{subheader}</h3>}
        <div className="text-slate-600 space-y-4 leading-relaxed">
            {children}
        </div>
        </div>            
    );
}
