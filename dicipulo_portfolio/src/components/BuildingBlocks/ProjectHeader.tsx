import Image from 'next/image';
import Button from '@/components/Button';
import Link from 'next/link';

// Define the types for the props
export interface ProjectHeaderProps {
  title: string;
  tags: string[];
  imageSrc: string;
  roles: string;
  type: string;
  date: string;
  status: 'In Progress' | 'Finished'
  href?: string;  // The '?' makes it optional
}

export default function ProjectHeader({ 
  title, 
  tags, 
  imageSrc, 
  roles, 
  type, 
  date, 
  status, 
  href 
}: ProjectHeaderProps) {
  return (
    <div className="w-full mb-12">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Projects
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{title}</h1>

      <div className="flex gap-4 text-sm text-blue-600 font-semibold mb-8">
        {tags.map((tag, i) => <span className='px-3 py-1 bg-blue-100 rounded-full' key={i}>{tag}</span>)}
      </div>

      <div className="relative w-full h-100 md:h-125 bg-indigo-50 rounded-lg overflow-hidden mb-8">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-200 pb-8 gap-6">
        <div className="flex flex-wrap gap-8 md:gap-16">
          <div>
            <p className="text-sm text-slate-500 mb-1">Role</p>
            <p className="text-md font-semibold whitespace-pre-line">{roles}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Type</p>
            <p className="text-md font-semibold">{type}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Date</p>
            <p className="text-md font-semibold">{date}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 mb-1">Status</p>
            <p className="text-md font-semibold">{status}</p>
          </div>
        </div>
        
        {href && (
          <Button variant="primary" href={href} target="_blank">
            Visit Website
          </Button>
        )}
      </div>
    </div>
  );
}