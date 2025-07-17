import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        backgroundColor: '#ff0000',
        duration: 0.2
      });
      gsap.to(follower, {
        scale: 2,
        opacity: 0.3,
        duration: 0.2
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#fff',
        duration: 0.2
      });
      gsap.to(follower, {
        scale: 1,
        opacity: 0.8,
        duration: 0.2
      });
    };

    window.addEventListener('mousemove', moveCursor);
    
    // Add magnetic effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-magnetic');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border border-[#ff0000] rounded-full pointer-events-none z-50 opacity-80"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;