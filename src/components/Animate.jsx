'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Animate = ({ children, duration = 1, delay = 0.2 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.from(card, {
      opacity: 0,
      x: -50,
      duration,
      delay,
    });
  }, [duration, delay]);

  return (
    <div ref={cardRef} className="box p-4 bg-blue-500 text-white">
      {children}
    </div>
  );
};

export default Animate;

