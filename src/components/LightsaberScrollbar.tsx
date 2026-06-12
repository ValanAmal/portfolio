"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function LightsaberScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isClient, setIsClient] = useState(false);

  // Smooth out the scroll progress
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate blade height dynamically
  // Blade extends from the top of the hilt downwards
  const bladeHeight = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 h-[60vh] w-[14px] z-50 pointer-events-none flex flex-col items-center">
      {/* Lightsaber Hilt */}
      <div className="w-[14px] h-[80px] bg-gradient-to-r from-gray-500 via-gray-300 to-gray-600 rounded-sm relative shadow-2xl flex-shrink-0 z-20 border border-black">
        {/* Hilt Details */}
        <div className="absolute top-2 w-full h-[2px] bg-black"></div>
        <div className="absolute top-4 w-full h-[2px] bg-black"></div>
        <div className="absolute top-6 w-full h-[2px] bg-black"></div>
        
        {/* Ignition Button */}
        <div className="absolute top-10 right-[-2px] w-[4px] h-[10px] bg-red-600 rounded-sm shadow-[0_0_5px_red]"></div>
        
        {/* Grip Textures */}
        <div className="absolute bottom-2 left-[2px] right-[2px] h-[30px] bg-black rounded-sm flex flex-col justify-around py-1">
          <div className="h-[2px] bg-gray-700 w-full"></div>
          <div className="h-[2px] bg-gray-700 w-full"></div>
          <div className="h-[2px] bg-gray-700 w-full"></div>
          <div className="h-[2px] bg-gray-700 w-full"></div>
        </div>
        
        {/* Emitter Shroud */}
        <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-[18px] h-[8px] bg-gradient-to-r from-gray-700 to-gray-500 rounded-b-md border-t-2 border-black z-30"></div>
      </div>

      {/* Lightsaber Blade Container */}
      <div className="relative w-[6px] flex-1 bg-transparent flex flex-col items-center mt-[-5px] z-10 overflow-hidden">
        {/* The Animated Blade */}
        <motion.div 
          className="w-full bg-white rounded-b-full origin-top relative"
          style={{ height: bladeHeight }}
        >
          {/* Red Core Glow */}
          <div className="absolute inset-0 bg-white rounded-b-full shadow-[0_0_10px_#fff]"></div>
          
          {/* Intense Outer Glow (Bloom) */}
          <div className="absolute inset-0 w-[20px] left-1/2 -translate-x-1/2 bg-primary rounded-b-full blur-[6px] opacity-90 animate-pulse"></div>
          
          {/* Massive Atmospheric Glow */}
          <div className="absolute inset-0 w-[40px] left-1/2 -translate-x-1/2 bg-primary rounded-b-full blur-[20px] opacity-60"></div>
        </motion.div>
      </div>
    </div>
  );
}
