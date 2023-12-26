'use client'
import React from 'react';
import Spline from '@splinetool/react-spline';

const GalleryComponent = () => {
  return (
    <div className="relative">
      <Spline scene="https://prod.spline.design/gIcjIbelGovm-e-k/scene.splinecode" />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ">
        <h1 className="text-9xl font-bold text-white">The Gallery</h1>
      </div>
    </div>
  );
};

export default GalleryComponent;
