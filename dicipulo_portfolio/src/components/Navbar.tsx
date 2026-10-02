'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { num: '01', name: 'About Me', href: '/about' },
    { num: '02', name: 'Projects', href: '/projects' },
    { num: '03', name: 'Resume', href: '/resume' },
    { num: '04', name: 'Get in Touch', href: 'mailto:your.email@example.com' },
  ];

  return (
    <>
      {/* --- TOP NAVIGATION BAR (WHITE) --- */}
      {/* Changed back to z-50 so the blue menu can slide OVER it */}
      <nav className='fixed top-0 z-50 flex items-center justify-between w-full px-6 md:px-12 py-4 border-b-2 border-blue-600 bg-white'>

        <Link href="/">
          <p className='font-albert font-black text-2xl text-blue-600 cursor-pointer'>EARL</p>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-12 items-center'>
          <Link href="/about"><Button variant="ghost">About Me</Button></Link>
          <Link href="/projects"><Button variant="ghost">Projects</Button></Link>
          <Link href="/resume"><Button variant="ghost">Resume</Button></Link>
          <a href="mailto:your.email@example.com">
            <Button variant="primary">Get in Touch</Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        {/* Only says MENU because CLOSE is handled inside the blue overlay */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center border-2 border-blue-600 bg-white text-blue-600 font-bold px-4 py-2 hover:bg-blue-50 transition-colors"
        >
          MENU
        </button>
      </nav>

      {/* --- STAGGERED FULL-SCREEN MENU (BLUE) --- */}
      {/* z-[60] ensures it covers the z-50 white navbar completely */}
      <div 
        className={`fixed inset-0 z-[60] bg-blue-600 flex flex-col justify-center px-8 md:px-24 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* 
          INNER MENU HEADER 
          This slides down with the blue background, featuring a white logo and white close button.
          The absolute positioning and padding perfectly match your main navbar!
        */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4">
          <Link href="/" onClick={closeMenu}>
            <p className='font-albert font-black text-2xl text-white cursor-pointer'>EARL</p>
          </Link>
          
          <button 
            onClick={closeMenu}
            className="flex items-center justify-center border-2 border-white bg-blue-600 text-white font-bold px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            CLOSE
          </button>
        </div>

        {/* Staggered Links */}
        <div className="flex flex-col gap-6 md:gap-10 mt-16">
          {navLinks.map((link, index) => (
            <div key={link.name} className="overflow-hidden">
              <Link 
                href={link.href}
                onClick={closeMenu}
                className={`group flex items-baseline gap-4 md:gap-8 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                }`}
                style={{ transitionDelay: `${isOpen ? 200 + (index * 100) : 0}ms` }}
              >
                <span className="font-jersey text-xl md:text-3xl text-blue-300 group-hover:text-white transition-colors duration-300">
                  {link.num}
                </span>
                <span className="font-albert text-5xl md:text-7xl font-black text-white group-hover:translate-x-4 transition-transform duration-300">
                  {link.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div 
          className={`absolute bottom-12 left-8 md:left-24 transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${isOpen ? 200 + (navLinks.length * 100) : 0}ms` }}
        >
          <p className="font-s;nrty text-blue-300 text-lg tracking-wide">
            © 2026 Earl Dicipulo. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;