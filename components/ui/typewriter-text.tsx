"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  start?: boolean;
  onComplete?: () => void;
  className?: string;
}

export function TypewriterText({
  text,
  speed = 20,
  start = true,
  onComplete,
  className = "",
}: TypewriterTextProps) {
  const [typedText, setTypedText] = useState({ source: text, value: "" });
  const hasStarted = useRef(false);
  const hasCompleted = useRef(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    hasStarted.current = false;
    hasCompleted.current = false;
  }, [text]);

  useEffect(() => {
    if (!start || hasStarted.current || hasCompleted.current) return;

    hasStarted.current = true;

    if (text.length === 0) {
      hasCompleted.current = true;
      onCompleteRef.current?.();
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setTypedText({ source: text, value: text.slice(0, index) });

      if (index >= text.length) {
        clearInterval(interval);
        hasCompleted.current = true;
        onCompleteRef.current?.();
      }
    }, speed);

    return () => {
      clearInterval(interval);
      if (!hasCompleted.current) {
        hasStarted.current = false;
      }
    };
  }, [text, speed, start]);

  const displayedText = typedText.source === text ? typedText.value : "";

  return (
    <p className={`relative ${className}`}>
      <span aria-hidden="true" className="invisible block">
        {text}
      </span>

      <span className="absolute inset-x-0 top-0">
        {displayedText}

        {start && displayedText.length < text.length && (
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-[1em] w-px animate-pulse bg-text/70 align-middle"
          />
        )}
      </span>
    </p>
  );
}
