"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const timeline = [
  {
    day: "Day 1",
    label: "Resignation submitted",
    dialog: [
      { speaker: "Manager", text: "We should do a knowledge transfer." },
      { speaker: "John", text: "Yes, let's schedule that." },
    ],
  },
  {
    day: "Day 5",
    label: "Still no meeting scheduled",
    dialog: [
      { speaker: "Manager", text: "Can we get 2 hours for documentation?" },
      { speaker: "John", text: "My calendar is packed with transitions." },
    ],
  },
  {
    day: "Day 10",
    label: "Last day",
    dialog: [
      { speaker: "Manager", text: "Quick 30 minutes for critical handoffs?" },
      { speaker: "John", text: "I documented the main things in a Google Doc." },
    ],
  },
  {
    day: "Day 11",
    label: "First day without John",
    dialog: [
      { speaker: "Team", text: "Where's the Google Doc?" },
      { speaker: "Team", text: "He said he shared it..." },
      { speaker: "Team", text: "Those were deleted with his account." },
    ],
  },
];

export function Departure() {
  const [active, setActive] = useState(0);

  return (
    <Section id="departure" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Scenario
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The Exit Interview
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {timeline.map((t, i) => (
            <button
              key={t.day}
              onClick={() => setActive(i)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-sm transition-all ${
                active === i
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-surface text-muted hover:border-accent/30"
              }`}
            >
              <div className="font-mono text-xs">{t.day}</div>
              <div className="font-medium mt-1">{t.label}</div>
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
            className="rounded-xl border border-border bg-surface p-6 space-y-4"
          >
            {timeline[active].dialog.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 rounded bg-surface border border-border flex items-center justify-center text-xs font-mono text-muted shrink-0">
                  {d.speaker[0]}
                </div>
                <div>
                  <span className="text-xs text-muted">{d.speaker}</span>
                  <p className="text-sm text-foreground mt-0.5">
                    &ldquo;{d.text}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl border border-red-500/20 bg-red-500/5 p-6">
            <div className="text-center">
              <div className="text-xl font-bold text-red-400">~5%</div>
              <div className="text-xs text-muted mt-1">Transferred</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-red-400">~95%</div>
              <div className="text-xs text-muted mt-1">Lost</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-foreground">7 yrs</div>
              <div className="text-xs text-muted mt-1">Experience walked out</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-muted">???</div>
              <div className="text-xs text-muted mt-1">Time to rebuild</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
