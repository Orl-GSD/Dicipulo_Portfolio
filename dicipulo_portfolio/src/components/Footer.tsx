import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-mainblue pt-16 pb-8 flex flex-col justify-end overflow-hidden">
      
      <div className="w-full flex justify-center items-center px-4 md:px-8 mb-8">
        {/* 
          Changed text-[13.5vw] to text-[9.5vw] md:text-[13.5vw].
          You may need to adjust the 9.5vw slightly to perfectly hit the edges on your device.
        */}
        <h1 className="text-[15.5vw] sm:text-[16.5vw] md:text-[17.5vw] font-jersey text-blue-300 leading-none whitespace-nowrap select-none font-pixel uppercase">
          Earl Dicipulo
        </h1>
      </div>

      {/* 
        Adjusted the bottom bar for mobile: 
        Added text-center and gap-6 to space out the stacked elements better.
      */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-12 text-white text-xs md:text-sm font-medium tracking-wide gap-6 md:gap-4 text-center">
        
        <div>
          <p>© 2026 Earl Dicipulo. All Rights Reserved</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-blue-200 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-200 transition-colors">
            Download Resume
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;