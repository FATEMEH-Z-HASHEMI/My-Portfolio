"use client";

import * as React from "react";
import { useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PREVIEW_WIDTH = 192;
const PREVIEW_HEIGHT = 112;
const OFFSET_Y = 40;

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
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
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

  const updatePosition = (clientX: number, clientY: number) => {
    const top = clientY - PREVIEW_HEIGHT - OFFSET_Y;

    motionTop.set(
      Math.max(12, Math.min(top, window.innerHeight - PREVIEW_HEIGHT - 12)),
    );
    motionLeft.set(
      Math.max(
        12,
        Math.min(
          clientX - PREVIEW_WIDTH / 2,
          window.innerWidth - PREVIEW_WIDTH - 12,
        ),
      ),
    );
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setShowPreview(true);
    prevX.current = null;
    updatePosition(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
    prevX.current = null;
    motionRotate.set(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    updatePosition(e.clientX, e.clientY);

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

      {isMounted
        ? createPortal(
            <motion.div
              initial={false}
              animate={{
                opacity: showPreview ? 1 : 0,
                scale: showPreview ? 1 : 0.8,
                y: showPreview ? 0 : -10,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{
                position: "fixed",
                top: springTop,
                left: springLeft,
                rotate: springRotate,
                zIndex: 100,
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
            </motion.div>,
            document.body,
          )
        : null}
    </>
  );
};

export { HoverLinkPreview };
