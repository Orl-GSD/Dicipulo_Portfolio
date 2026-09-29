// src/app/about/page.tsx
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen font-albert pattern-background">
      <Navbar />
      
      {/* Main Content Area - Added pt-32 to account for the fixed Navbar */}
      <main className="flex-1 flex flex-col items-center pt-32 px-6 md:px-12 w-full max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-blue-600 mb-8">About Me</h1>
        
        <div className="bg-white p-8 rounded-lg border-[3px] border-slate-900 shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full">
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Hello! I am Earl Dicipulo. I'm a UI/UX Designer and Frontend Developer...
          </p>
          {/* Add more about me content here */}
        </div>
      </main>

      <Footer />
    </div>
  );
}