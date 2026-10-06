'use client'; 

import React from 'react';
import { motion, Variants } from 'framer-motion'; 
import Hero from './Hero'; 

const HeroWrapper = () => {

  const boxVariants: Variants = {
    hidden: { 
      width: "0%", 
      height: "4px", 
      opacity: 0 
    },
    visible: { 
      width: "100%", 
      height: "100%", 
      opacity: 1,
      transition: {
        opacity: { delay: 0.1, duration: 0.1 }, 
        width: { delay: 0.8, duration: 0.5, ease: "easeOut" }, 
        height: { delay: 1.4, duration: 0.5, ease: "easeOut" } 
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: { delay: 0.2, type: "spring", stiffness: 300, damping: 20 } 
    }
  };

  const heroVariants: Variants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      transition: { delay: 2.0, duration: 0.8, ease: "easeOut" } 
    }
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: 2.4, duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full px-4 md:px-8 overflow-hidden">
      
      <div className="flex mt-24 md:mt-36 w-full justify-center">
        

        <div className="font-jersey relative flex items-center justify-center w-[22rem] sm:w-lg md:w-xl lg:w-[50rem] px-4 md:px-16">
          
          <motion.div 
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            className="absolute border-2 border-blue-600 bg-white/50 backdrop-blur-sm"
          >
            <motion.div variants={dotVariants} initial="hidden" animate="visible" className="absolute -top-2 -left-2 w-4 h-4 bg-blue-600 rounded-full" />
            <motion.div variants={dotVariants} initial="hidden" animate="visible" className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full" />
            <motion.div variants={dotVariants} initial="hidden" animate="visible" className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-600 rounded-full" />
            <motion.div variants={dotVariants} initial="hidden" animate="visible" className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-600 rounded-full" />
          </motion.div>

          <motion.div 
            variants={heroVariants} 
            initial="hidden" 
            animate="visible"
            className="z-10 w-full flex justify-center py-4"
          >
          <div className="flex flex-col text-center items-center justify-center py-6 sm:py-10 md:py-12 w-full">
            <p className="text-mainblue font-jersey font-black uppercase tracking-tight
              text-6xl leading-[0.85] 
              xs:text-7xl xs:leading-[0.85]
              sm:text-8xl sm:leading-[0.85]
              md:text-[120px] md:leading-[0.85] 
              lg:text-[160px] lg:leading-[0.85]
            ">
              EARL
              <br />
              DICIPULO
            </p>
          </div>
          </motion.div>
          
        </div>

      </div>

      {/* Description Text */}
      <motion.div 
        variants={descriptionVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl font-albert font-medium text-lg md:text-2xl text-center text-text px-4 mt-2"
      >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-center px-4 sm:px-6 mx-auto mt-1 sm:mt-2 md:mt-4">
        <p className="font-albert font-medium text-sm sm:text-base md:text-xl lg:text-2xl text-text leading-relaxed tracking-normal">
          <span className="font-black text-mainblue">UI/UX Designer</span> and{' '}
          <span className="font-black text-mainblue">Layout & Graphic Designer</span>,{' '}
          creating creative, functional, and user-centred designs
        </p>
      </div>
      </motion.div>
      
    </div>
  );
}

export default HeroWrapper;