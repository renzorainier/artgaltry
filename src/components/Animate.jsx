// src/components/AnimatedComponent.js
'use client'
import React, { useEffect } from 'react';
import gsap from 'gsap';

const AnimatedComponent = () => {
  useEffect(() => {
    gsap.from('.box', { opacity: 0, duration: 1, y: 50 });
  }, []);

  return (
    <div className="box p-4 bg-blue-500 text-white">
      This is an animated component!
    </div>
  );
};

export default AnimatedComponent;
