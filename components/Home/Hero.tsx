"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/landingproduct.png',
  '/dahuaSet.png',
  '/gaming.png',
  "/projector.png"
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full mt-2 md:mt-0 bg-[#f8f8f8] overflow-hidden py-8 md:py-12'>
      <div className='landing_container flex flex-row justify-center items-center h-full w-full px-4 md:px-20 max-w-6xl mx-auto'>
        <motion.div 
          className='montserrat flex flex-col md:text-left text-left z-10 w-1/2'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-medium   text-black'>
            Office Tech. 
            <span className='block md:mt-1 overflow-visible'>Trusted Performance.</span>
          </h1>
          <p className='text-xs sm:text-md md:text-lg lg:text-xl mt-2 md:mt-3 text-[#0C3C43] opacity-80'>Computers, Software & Networks.</p>
          
        
        <div className='py-10 text-lg font-bold underline text-[#028755]'>
              <Link href={"/shop"}>

          Shop Now
          </Link>
        </div>
        </motion.div>

        <div className='relative w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0'>
          {/* Background glow - position it properly */}
          <motion.div
            className='absolute rounded-full bg-[#028755] opacity-5 blur-3xl w-full h-full top-0 left-0 z-0'
            animate={{ 
              scale: [1, 1.1, 1], 
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 20,
                duration: 0.8 
              }}
              className='absolute w-full h-full flex items-center justify-center'
            >
              <div className='relative z-10 w-full h-full'>
                <Image
                  src={images[current]}
                  alt='Tech Product'
                  width={500} 
                  height={500}
                  className='w-full h-full object-contain drop-shadow-xl'
                  style={{ backgroundColor: 'transparent' }}
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Slide indicators - positioned better for all screen sizes */}
          <motion.div 
            className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2 z-20'
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {images.map((_, index) => (
              <motion.button 
                key={index}
                className={`h-1 sm:h-2 rounded-full ${current === index ? 'bg-[#028755] w-4 sm:w-6 md:w-8' : 'bg-[#0C3C43] bg-opacity-40 w-1 sm:w-2'}`}
                whileHover={{ scale: 1.2 }}
                onClick={() => setCurrent(index)}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;