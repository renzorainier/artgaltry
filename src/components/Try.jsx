'use client'

import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineWithOverlay = ({ overlayText }) => {
  return (
    <div className="relative">
      <Spline scene="https://prod.spline.design/gIcjIbelGovm-e-k/scene.splinecode" />

      {/* Overlay container */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        {/* Overlay content */}
        <div className="bg-black text-white p-4">
          {overlayText && <p>{overlayText}</p>}
        </div>
      </div>
    </div>
  );
};

export default SplineWithOverlay;
