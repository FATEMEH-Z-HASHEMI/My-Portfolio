"use client"

import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const scrollPercentage =
        (scrollTop / (scrollHeight - clientHeight)) * 100;

      setScrollWidth(Math.min(scrollPercentage, 100));
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      data-testid="scroll-progress"
      className="fixed top-0 left-0 w-full h-1 bg-gray-300 z-50 overflow-hidden"
    >
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ transform: `translateX(-${100 - scrollWidth}%)` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;
