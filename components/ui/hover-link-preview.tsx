"use client";

import * as React from "react";
import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface HoverLinkPreviewProps {
  href: string;
  previewImage: string;
  imageAlt?: string;
  children: React.ReactNode;
}

const HoverLinkPreview: React.FC<HoverLinkPreviewProps> = ({
  href,
  previewImage,
  imageAlt = "Link preview",
  children,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const prevX = useRef<number | null>(null);

  const motionTop = useMotionValue(0);
  const motionLeft = useMotionValue(0);
  const motionRotate = useMotionValue(0);

  const springTop = useSpring(motionTop, {
    stiffness: 300,
    damping: 30,
  });

  const springLeft = useSpring(motionLeft, {
    stiffness: 300,
    damping: 30,
  });

  const springRotate = useSpring(motionRotate, {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseEnter = () => {
    setShowPreview(true);
    prevX.current = null;
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
    prevX.current = null;
    motionRotate.set(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const PREVIEW_WIDTH = 192;
    const PREVIEW_HEIGHT = 112;
    const OFFSET_Y = 40;

    motionTop.set(e.clientY - PREVIEW_HEIGHT - OFFSET_Y);
    motionLeft.set(e.clientX - PREVIEW_WIDTH / 2);

    if (prevX.current !== null) {
      const deltaX = e.clientX - prevX.current;

      const newRotate = Math.max(-15, Math.min(15, deltaX * 1.2));

      motionRotate.set(newRotate);
    }

    prevX.current = e.clientX;
  };

  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex cursor-pointer items-center gap-2 text-base font-medium opacity-80 transition-opacity duration-300 hover:opacity-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {children}
      </a>

      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -10,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -10,
              rotate: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            style={{
              position: "fixed",
              top: springTop,
              left: springLeft,
              rotate: springRotate,
              zIndex: 50,
              pointerEvents: "none",
            }}
          >
            <div
              className="
                rounded-2xl
                border border-black/10
                bg-white/80
                p-2
                shadow-xl
                backdrop-blur-md
              "
            >
              <img
                src={previewImage}
                alt={imageAlt}
                draggable={false}
                className="
                  h-28
                  w-48
                  rounded-xl
                  object-contain
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { HoverLinkPreview };
