"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const winLessons = [
  { lesson: "Our pricing was competitive", actionable: false },
  { lesson: "The champion liked our demo", actionable: false },
  { lesson: "We had an existing relationship", actionable: false },
  { lesson: "Timing worked in our favor", actionable: false },
];

const lossLessons = [
  {
    lesson: "Single-threaded: champion left, deal collapsed",
    actionable: true,
    action: "Require 2+ executive contacts by discovery end",
  },
  {
    lesson: "No 48-hour response when new CDO joined",
    actionable: true,
    action: "Leadership change = same-day notification + 72h meeting",
  },
  {
    lesson: "Competitor embedded through parallel department",
    actionable: true,
    action: "Week 2 checkpoint: confirm no parallel vendor evaluations",
  },
  {
    lesson: "Technical gap in real-time analytics never surfaced",
    actionable: true,
    action: "Add gap disclosure to discovery checklist, propose roadmap",
  },
];

export function Asymmetry() {
  const [view, setView] = useState<"wins" | "losses">("wins");

  return (
    <Section id="asymmetry" orb="blue" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Asymmetry
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Losses Teach More Than Wins
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Wins confirm what worked. Losses reveal what to change. One of
            these generates actionable process improvements. The other
            generates congratulations.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <ScrollReveal>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => setView("wins")}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                view === "wins"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "border border-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              What wins teach
            </button>
            <button
              onClick={() => setView("losses")}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                view === "losses"
                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                  : "border border-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              What losses teach
            </button>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {view === "wins" ? (
            <motion.div
              key="wins"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-green-500/20 bg-green-500/5 p-6 md:p-8 space-y-4"
            >
              <p className="text-sm font-mono text-green-400 uppercase tracking-widest">
                Typical Win Analysis
              </p>
              {winLessons.map((w, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-green-500/10 pb-3 last:border-0"
                >
                  <span className="text-sm text-foreground">{w.lesson}</span>
                  <span className="text-xs font-mono text-muted bg-raised px-2 py-1 rounded">
                    no process change
                  </span>
                </div>
              ))}
              <div className="border-t border-green-500/20 pt-4 text-center space-y-2">
                <p className="text-sm text-muted">
                  Actionable improvements generated:
                </p>
                <p className="text-3xl font-bold text-green-400">0</p>
                <p className="text-xs text-muted">
                  Wins tell you &ldquo;keep doing this&rdquo; without
                  specifying what &ldquo;this&rdquo; was.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="losses"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-4"
            >
              <p className="text-sm font-mono text-red-400 uppercase tracking-widest">
                Structured Loss Analysis
              </p>
              {lossLessons.map((l, i) => (
                <div key={i} className="border-b border-red-500/10 pb-3 last:border-0 space-y-1.5">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-sm text-foreground">{l.lesson}</span>
                    <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded shrink-0">
                      playbook update
                    </span>
                  </div>
                  <p className="text-xs text-accent ml-4">
                    &rarr; {l.action}
                  </p>
                </div>
              ))}
              <div className="border-t border-red-500/20 pt-4 text-center space-y-2">
                <p className="text-sm text-muted">
                  Actionable improvements generated:
                </p>
                <p className="text-3xl font-bold text-accent">4</p>
                <p className="text-xs text-muted">
                  Each one prevents the same failure from repeating.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
