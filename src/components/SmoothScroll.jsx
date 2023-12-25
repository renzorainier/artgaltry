"use client"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
// import React, { createContext } from 'react';

function SmoothScroll({children}) {
  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}

export default SmoothScroll;
