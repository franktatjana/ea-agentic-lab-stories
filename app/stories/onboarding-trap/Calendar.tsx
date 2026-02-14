"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const phases = [
  {
    label: "Week 1-2",
    title: "Orientation",
    items: [
      "Locating internal tools and documentation",
      "Identifying subject matter experts",
      "Understanding organizational structure",
      "47 questions asked, 23 answered, 0 documented",
    ],
    salary: "$7,500",
    seniorHours: 20,
    documented: 0,
  },
  {
    label: "Week 3-4",
    title: "Shadowing",
    items: [
      "Observing senior SA customer calls",
      "Learning unwritten qualification criteria",
      "Discovering tribal knowledge exists",
      '"How did you know to ask that?" \u2014 "Experience."',
    ],
    salary: "$15,000",
    seniorHours: 40,
    documented: 0,
  },
  {
    label: "Week 5-8",
    title: "First Engagements",
    items: [
      "First solo customer interaction",
      "Missed critical discovery questions",
      "Recreated existing collateral (unknown duplicate)",
      "Repeated mistakes from 18 months ago",
    ],
    salary: "$30,000",
    seniorHours: 80,
    documented: 0,
  },
  {
    label: "Week 9-12",
    title: "Emerging Productivity",
    items: [
      "Beginning to contribute independently",
      'Still asking "where is..." 5x daily',
      "Unknown gaps in knowledge remain",
      "True ramp: 6-12 months to match veteran performance",
    ],
    salary: "$45,000",
    seniorHours: 120,
    documented: 0,
  },
];

export function Calendar() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  return (
    <Section id="calendar" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Week 1 &ndash; 12
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The 90-Day Calendar
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Each week costs productivity, momentum, and senior team capacity.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-8">
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {phases.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`rounded-lg border px-3 py-4 text-center transition-all text-sm md:text-base ${
                active === i
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-surface text-muted hover:border-accent/30"
              }`}
            >
              <div className="font-mono text-xs md:text-sm">{p.label}</div>
              <div className="font-semibold mt-1 text-xs md:text-sm">
                {p.title}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-border bg-surface p-6 md:p-8"
          >
            <h3 className="text-xl font-bold mb-4">
              {phase.label}: {phase.title}
            </h3>
            <ul className="space-y-3 text-left">
              {phase.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-muted"
                >
                  <span className="text-accent mt-1 shrink-0">&bull;</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <ScrollReveal>
          <div className="grid grid-cols-3 gap-4 rounded-xl border border-border bg-surface/50 p-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent md:text-3xl">
                {phase.salary}
              </div>
              <div className="text-xs text-muted mt-1 font-mono">
                Salary invested during ramp
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground md:text-3xl">
                {phase.seniorHours}
              </div>
              <div className="text-xs text-muted mt-1 font-mono">
                Senior SA hours diverted
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-500 md:text-3xl">
                {phase.documented}
              </div>
              <div className="text-xs text-muted mt-1 font-mono">
                Documented learnings
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
