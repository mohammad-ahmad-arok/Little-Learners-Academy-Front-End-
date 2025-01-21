// Loader.tsx
import React, { useRef, useEffect, forwardRef } from "react";
import { gsap } from "gsap";
import "./Loader.css";

const Loader = forwardRef<HTMLDivElement>((props, ref) => {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && typeof ref !== "function") {
      gsap.from(ref.current, {
        y: -50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(waveRef.current, {
        scale: 0,
        opacity: 1,
        duration: 2,
        repeat: -1,
        ease: "power2.out",
      });
    }
  }, [ref]);

  return (
    <div
      ref={ref}
      className="fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-Orange_95 bg-opacity-75 backdrop-blur-xl z-50"
    >
      <div className="loader"></div>

      <div
        ref={waveRef}
        className="absolute w-20 h-20 border-4 border-orange-500 rounded-full"
      ></div>
    </div>
  );
});

export default Loader;