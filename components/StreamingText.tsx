"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface StreamingTextProps {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
  delay?: number;
  onComplete?: () => void;
}

export function StreamingText({
  text,
  speed = 40,
  className,
  cursor = true,
  delay = 0,
  onComplete,
}: StreamingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || started) return;
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [isInView, delay, started]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed, onComplete]);

  return (
    <span ref={ref} className={className}>
      {displayed}
      {cursor && !done && started && (
        <span className="animate-blink text-accent">|</span>
      )}
    </span>
  );
}
