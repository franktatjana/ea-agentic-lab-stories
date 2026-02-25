"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const pastRfps = [
  {
    customer: "Acme Corp",
    outcome: "Won",
    sections: 42,
    reusable: 28,
    status: "lost" as const,
  },
  {
    customer: "Globex",
    outcome: "Lost",
    sections: 38,
    reusable: 24,
    status: "lost" as const,
  },
  {
    customer: "Initech",
    outcome: "Won",
    sections: 55,
    reusable: 35,
    status: "lost" as const,
  },
  {
    customer: "Umbrella Co",
    outcome: "Won",
    sections: 31,
    reusable: 19,
    status: "lost" as const,
  },
  {
    customer: "Stark Industries",
    outcome: "Lost",
    sections: 48,
    reusable: 30,
    status: "lost" as const,
  },
  {
    customer: "Wayne Enterprises",
    outcome: "Won",
    sections: 44,
    reusable: 26,
    status: "lost" as const,
  },
];

export function GhostWork() {
  const [revealed, setRevealed] = useState(false);

  const totalSections = pastRfps.reduce((sum, r) => sum + r.sections, 0);
  const totalReusable = pastRfps.reduce((sum, r) => sum + r.reusable, 0);
  const wastePercent = Math.round((totalReusable / totalSections) * 100);

  return (
    <Section id="ghost-work" orb="blue" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Hidden Cost
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            47 RFPs Answered. Zero Memory Retained.
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Your team wrote thousands of polished responses. They live in email
            threads, personal drives, and departed employees&apos; laptops.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {pastRfps.map((rfp, i) => (
              <motion.div
                key={rfp.customer}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-lg border border-border/50 bg-surface p-4 space-y-2"
              >
                <p className="text-sm font-semibold truncate">{rfp.customer}</p>
                <p
                  className={`text-xs font-mono ${rfp.outcome === "Won" ? "text-green-400" : "text-red-400"}`}
                >
                  {rfp.outcome}
                </p>
                <p className="text-xs text-muted">
                  {rfp.sections} sections written
                </p>
                <div className="h-1.5 rounded-full bg-border/30 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(rfp.reusable / rfp.sections) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    className="h-full rounded-full bg-accent/40"
                  />
                </div>
                <p className="text-xs text-muted">
                  {rfp.reusable} reusable answers, never reused
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <button
              onClick={() => setRevealed(true)}
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-background transition-colors hover:bg-accent-dim"
            >
              Show the waste
            </button>
          </div>
        </ScrollReveal>

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl border border-border bg-surface p-6 md:p-8 font-mono text-sm space-y-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted">Total sections written</span>
                  <span>{totalSections}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Sections that were reusable</span>
                  <span>{totalReusable}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Sections actually reused</span>
                  <span className="text-red-400 font-bold">0</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
                  <span>Duplicate effort</span>
                  <span className="text-red-400">{wastePercent}%</span>
                </div>
              </div>

              <div className="border-t border-border pt-4 text-muted text-xs space-y-1">
                <p>At ~4 hours per section, that&apos;s:</p>
                <p className="text-foreground font-bold text-sm">
                  {totalReusable * 4} hours of expert time, rewritten from
                  memory
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
