"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const whys = [
  {
    question: "Why did we lose the ACME Data Analytics deal?",
    answer: "The new CDO, Anna Bergmann, had a preference for DataForge.",
    category: null,
  },
  {
    question: "Why did her preference matter so much?",
    answer:
      "Our champion Thomas Richter had left. No other executive advocate existed.",
    category: null,
  },
  {
    question: "Why was there no backup champion?",
    answer:
      "The account team focused on a single thread through Thomas during the entire discovery phase.",
    category: null,
  },
  {
    question: "Why didn't the team multi-thread?",
    answer:
      "There was no process requiring multiple executive contacts. Thomas was responsive, so nobody escalated.",
    category: "process",
  },
  {
    question: "Why doesn't the process require multi-threading?",
    answer:
      "No playbook checkpoint exists for stakeholder coverage on deals above $300K. The risk was invisible.",
    category: "process",
  },
];

const rootCauseActions = [
  "Add multi-threading requirement: 2+ executive contacts by discovery end for deals >$300K",
  "Create 48-hour engagement rule: new decision maker = immediate meeting request",
  "Build champion departure playbook: same-day notification, 72-hour replacement strategy",
  "Add leadership change monitoring to active account signals",
];

export function FiveWhys() {
  const [revealedCount, setRevealedCount] = useState(0);
  const allRevealed = revealedCount >= whys.length;

  return (
    <Section id="five-whys" orb="warm" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Root Cause Analysis
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Five Whys: From Symptom to System Fix
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Surface reasons feel complete. &ldquo;The CDO preferred a
            competitor.&rdquo; But surface reasons protect the system that
            allowed it. Keep asking why.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-3">
        {whys.map((why, i) => (
          <AnimatePresence key={i}>
            {i <= revealedCount && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-xl border p-5 md:p-6 space-y-2 ${
                  i === whys.length - 1 && allRevealed
                    ? "border-accent/30 bg-accent/5"
                    : "border-border bg-surface"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`text-xs font-mono font-bold mt-1 shrink-0 ${
                      i === whys.length - 1 && allRevealed
                        ? "text-accent"
                        : "text-red-400"
                    }`}
                  >
                    WHY {i + 1}
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {why.question}
                    </p>
                    <p className="text-sm text-muted">{why.answer}</p>
                    {why.category && allRevealed && (
                      <span className="inline-block text-xs font-mono text-accent bg-accent/10 px-2 py-0.5 rounded mt-1">
                        root cause: {why.category}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}

        {!allRevealed && (
          <ScrollReveal>
            <div className="text-center pt-4">
              <button
                onClick={() =>
                  setRevealedCount((c) => Math.min(c + 1, whys.length))
                }
                className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-dim"
              >
                {revealedCount === 0
                  ? "Start the analysis"
                  : `Ask why #${revealedCount + 1}`}
              </button>
            </div>
          </ScrollReveal>
        )}

        <AnimatePresence>
          {allRevealed && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-4 mt-6"
            >
              <p className="text-sm font-mono text-accent font-bold uppercase tracking-widest">
                Actions from root cause
              </p>
              <div className="space-y-2">
                {rootCauseActions.map((action, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                    <span className="text-foreground">{action}</span>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-accent/20 pt-4 text-center">
                <p className="text-sm text-muted">
                  The surface answer was &ldquo;the CDO preferred DataForge.&rdquo;
                </p>
                <p className="text-sm text-foreground font-semibold mt-1">
                  The real answer was a missing process checkpoint.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
