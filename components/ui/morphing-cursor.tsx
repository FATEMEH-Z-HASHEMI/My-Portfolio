"use client";

import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticTextProps {
  text: string;
  hoverText?: string;
  className?: string;
  hoverClassName?: string;
  hoverTextClassName?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p" | "div";
}

export function MagneticText({
  text,
  hoverText = text,
  className,
  hoverClassName = "bg-text",
  hoverTextClassName = "text-light",
  as = "span",
}: MagneticTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);
  const innerTextRef = useRef<HTMLSpanElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      currentPos.current.x = lerp(
        currentPos.current.x,
        mousePos.current.x,
        0.15,
      );
      currentPos.current.y = lerp(
        currentPos.current.y,
        mousePos.current.y,
        0.15,
      );

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) translate(-50%, -50%)`;
      }

      if (innerTextRef.current) {
        innerTextRef.current.style.transform = `translate(${-currentPos.current.x}px, ${-currentPos.current.y}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mousePos.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    },
    [],
  );

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mousePos.current = { x, y };
      currentPos.current = { x, y };
      setIsHovered(true);
    },
    [],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const Component = as;

  return (
    <Component
      ref={(element: HTMLElement | null) => {
        containerRef.current = element;
      }}
      onMouseMove={handleMouseMove as React.MouseEventHandler<never>}
      onMouseEnter={handleMouseEnter as React.MouseEventHandler<never>}
      onMouseLeave={handleMouseLeave}
      className={cn("relative inline-block cursor-none select-none", className)}
    >
      {text}
      <span
        ref={circleRef}
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-0 overflow-hidden rounded-full",
          hoverClassName,
        )}
        style={{
          width: isHovered ? 150 : 0,
          height: isHovered ? 150 : 0,
          transition:
            "width 0.5s cubic-bezier(0.33, 1, 0.68, 1), height 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
          willChange: "transform, width, height",
        }}
      >
        <span
          ref={innerTextRef}
          className="absolute flex items-center justify-center"
          style={{
            width: containerSize.width,
            height: containerSize.height,
            top: "50%",
            left: "50%",
            willChange: "transform",
          }}
        >
          <span className={cn("whitespace-nowrap", hoverTextClassName)}>
            {hoverText}
          </span>
        </span>
      </span>
    </Component>
  );
}
