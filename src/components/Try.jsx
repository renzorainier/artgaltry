'use client'
// src/components/GalleryComponent.js
import React from 'react';
import Spline from '@splinetool/react-spline';

const GalleryComponent = () => {
  return (
    <div className="relative flex">
      {/* Spline component for the gallery */}
      <Spline scene="https://prod.spline.design/gIcjIbelGovm-e-k/scene.splinecode" />

      {/* Overlay with text on the left */}
      <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center pointer-events-none">
        <h1 classname="">welcome to </h1>
        <h1 id="title" className="text-9xl font-bold text-white">The Gallery</h1>
      </div>
    </div>
  );
};

export default GalleryComponent;
