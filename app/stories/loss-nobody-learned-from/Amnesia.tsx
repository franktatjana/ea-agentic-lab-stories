"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const reasons = [
  {
    excuse: '"We\'re too busy with active deals."',
    reality: "The losses that caused those deals to be harder go unexamined.",
    icon: "⏰",
  },
  {
    excuse: '"Nobody wants a blame session."',
    reality: "So the blame shifts to the next SA who makes the same mistake.",
    icon: "🎯",
  },
  {
    excuse: '"We already know what happened."',
    reality: "Surface reasons, not root causes. Symptoms, not systemic fixes.",
    icon: "🔍",
  },
  {
    excuse: '"We did a quick debrief."',
    reality: "Verbal takeaways. No documentation. Nothing changed in the playbook.",
    icon: "💬",
  },
];

const stats = [
  { label: "Companies that do formal loss reviews", value: "27%" },
  { label: "Of those, who update their process", value: "12%" },
  { label: "Losses with documented root cause", value: "8%" },
];

export function Amnesia() {
  return (
    <Section id="amnesia" orb="purple" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Pattern
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Loss Amnesia
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Teams have strong reasons to skip the postmortem. Every one of
            those reasons guarantees the same loss will happen again.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reasons.map((r, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 md:p-6 space-y-3 h-full">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{r.icon}</span>
                <p className="text-sm font-semibold text-foreground">
                  {r.excuse}
                </p>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-sm text-muted"
              >
                &rarr; {r.reality}
              </motion.p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8">
          <p className="text-sm font-mono uppercase tracking-widest text-red-400 mb-6 text-center">
            Industry Reality
          </p>
          <div className="space-y-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-red-500/10 pb-3 last:border-0"
              >
                <span className="text-sm text-muted">{s.label}</span>
                <span className="text-lg font-bold font-mono text-red-400">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted text-center mt-6">
            92% of deal losses generate zero documented learnings.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
