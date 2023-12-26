'use client'
import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

const GalleryComponent = () => {
  useEffect(() => {
    // GSAP animation for the text
    gsap.from('.text-animation', { opacity: 0, duration: 1, delay: 0.5, stagger: 0.2 });
  }, []);

  return (
    <div className="relative flex">
      {/* Spline component for the gallery */}
      <Spline scene="https://prod.spline.design/gIcjIbelGovm-e-k/scene.splinecode" />

      {/* Overlay with text on the left */}
      <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 className="text-white text-2xl text-animation">Welcome to</h1>
        <h1 id="title" className="text-9xl font-bold text-white text-animation">The Gallery</h1>
      </div>
    </div>
  );
};

export default GalleryComponent;
