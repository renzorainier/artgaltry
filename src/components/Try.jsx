'use client'// src/components/GalleryComponent.js
import React from 'react';
import Spline from '@splinetool/react-spline';

const GalleryComponent = () => {
  return (
    <div className="relative">
      {/* Spline component for the gallery */}
      <Spline scene="https://prod.spline.design/gIcjIbelGovm-e-k/scene.splinecode" />

      {/* Overlay with text */}
      <div className="absolute top-0 left-0 p-8 pointer-events-none">
        <h1 className="text-9xl font-bold text-white">The Gallery</h1>
      </div>
    </div>
  );
};

export default GalleryComponent;
