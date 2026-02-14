"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface StoryNavProps {
  sections: { id: string; label: string }[];
}

export function StoryNav({ sections }: StoryNavProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section, i) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const isLast = active >= sections.length - 1;
  const nextSection = sections[active + 1];

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* Dot navigation */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
        {sections.map((section, i) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            title={section.label}
            className="group relative flex items-center justify-end"
          >
            <span className="absolute right-5 text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pr-2">
              {section.label}
            </span>
            <motion.div
              className={`rounded-full transition-colors ${
                active === i
                  ? "bg-accent w-3 h-3"
                  : "bg-muted/30 w-2 h-2 hover:bg-muted/60"
              }`}
              layout
              transition={{ duration: 0.2 }}
            />
          </button>
        ))}
      </nav>

      {/* Next button */}
      {!isLast && nextSection && (
        <motion.button
          key={nextSection.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => scrollTo(nextSection.id)}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-lg border border-border bg-surface/80 backdrop-blur-sm px-4 py-2 text-sm text-muted hover:text-foreground hover:border-accent/50 transition-colors"
        >
          Next
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="mt-0.5"
          >
            <path
              d="M7 2.5L7 11.5M7 11.5L11 7.5M7 11.5L3 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}
    </>
  );
}
