'use client'
// src/components/GalleryComponent.js
import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';

const GalleryComponent = () => {
  useEffect(() => {
    // GSAP typing animation
    gsap.fromTo(
      '#welcome-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );
  }, []);

  useEffect(() => {
    // GSAP typing animation
    gsap.fromTo(
       '#title',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 2 }
    );
  }, []);

  return (
    <div className="relative flex">
      {/* Spline component for the gallery */}
      <Spline scene="https://prod.spline.design/gIcjIbelGovm-e-k/scene.splinecode" />

      {/* Overlay with text on the left */}
      <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col items-center justify-center pointer-events-none">
        <h1 id="welcome-text" className="text-white text-2xl">
          Welcome to
        </h1>
        <h1 id="title" className="text-9xl font-bold text-white">
          The Gallery
        </h1>
      </div>
    </div>
  );
};

export default GalleryComponent;

