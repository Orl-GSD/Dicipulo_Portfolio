'use client'; // 1. Required in Next.js App Router when using hooks like useState/useEffect

import React, { useState, useEffect } from 'react';
import TextLoop from './TextLoop';

export interface DividerProps {
  text: string;
}

const Divider = ({ text }: DividerProps) => {
  // 2. State to track if the screen is mobile sized
  const [isMobile, setIsMobile] = useState(false);

  // 3. Effect to update the state when the window resizes
  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than standard tablet size (768px)
      setIsMobile(window.innerWidth < 768);
    };

    // Run once on mount to get the initial size
    handleResize();

    // Listen for screen size changes
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    /* 
      4. Responsive Wrapper: 
      - Changed w-screen to w-full (prevents horizontal scrolling bugs)
      - Added overflow-hidden to ensure the ribbon stays contained
      - Made the negative margins smaller on mobile (-mt-12) and larger on desktop (md:-mt-24)
    */
    <div className="w-full overflow-hidden -mt-12 -mb-12 md:-mt-24 md:-mb-24">
      <TextLoop
        text={text}
        shape="line"
        // 5. Use the isMobile boolean to pass smaller numbers on mobile!
        speed={isMobile ? 30 : 40} // Slightly slower on mobile for readability
        direction="forward"
        separator="•"
        curviness={76}
        fontSize={isMobile ? 54 : 54}     // Scale down font size
        fontWeight={650}
        letterSpacing={isMobile ? 2 : 3}
        uppercase
        color="#ffffff"
        ribbon
        ribbonColor="#2b73fc"
        ribbonWidth={isMobile ? 128 : 96}  // Scale down the ribbon height
        pauseOnHover={false}
      />      
    </div>
  );
}

export default Divider;