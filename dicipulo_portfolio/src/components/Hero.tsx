'use client'; // Required for window event listeners

import React, { useState, useEffect } from 'react';
import TechText from './TechText';

const Hero = () => {
  // Track dynamic dimensions for the text and container
  const [dimensions, setDimensions] = useState({
    fontSize: 300,
    height: 320
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Mobile screens
        setDimensions({ fontSize: 50, height: 100 });
      } else if (width < 1024) {
        // Tablet screens
        setDimensions({ fontSize: 200, height: 250 });
      } else {
        // Desktop screens
        setDimensions({ fontSize: 300, height: 320 });
      }
    };

    // Set initial size
    handleResize();

    // Listen for resize events
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <div style={{ 
        width: '100%', 
        height: `${dimensions.height}px`, 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <TechText
          text="EARL"
          fontWeight={600}
          fontSize={dimensions.fontSize} // Now dynamic!
          reveal="letter"
          dashLength={4}
          dashGap={4}
          specks={15}
          fontFamily="jersey"
          color="#2b73fc"
          accentColor="#3B82F6"
          letterSpacing={-0.02}
          reach={200}
          softness={0.7}
          strokeWidth={1.5}
          speed={1}
          lineStyle="solid"
          selection
          labels
          draggable={false}
          sweep
        />
      </div>

    </main>
  );
}

export default Hero;