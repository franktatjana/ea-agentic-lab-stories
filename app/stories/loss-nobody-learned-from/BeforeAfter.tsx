"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  { label: "Loss happens", result: "Team moves on to next deal" },
  { label: "Debrief", result: "Verbal, over coffee, no documentation" },
  { label: "Root cause", result: '"They liked the competitor better"' },
  { label: "Process change", result: "None" },
  { label: "Next similar deal", result: "Same mistakes, same outcome" },
];

const withSystem = [
  { label: "Loss happens", result: "Retrospective triggered within 7 days" },
  { label: "Analysis", result: "Five Whys, blame-free, evidence-based" },
  { label: "Root cause", result: "Missing process checkpoint identified" },
  { label: "Process change", result: "Playbook updated, knowledge vault enriched" },
  { label: "Next similar deal", result: "New steps prevent the same failure" },
];

export function BeforeAfter() {
  return (
    <Section id="compare" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Two Realities
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Same Loss. Different Legacy.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-5 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Without Retrospectives
            </h3>
            <div className="space-y-3">
              {without.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="text-xs font-mono text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.result}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Losses analyzed</span>
                <span className="text-red-400 font-bold">8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Playbook updates from losses</span>
                <span className="text-red-400">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Repeat loss patterns</span>
                <span className="text-red-400">Invisible</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-5 h-full">
            <h3 className="font-bold text-lg text-accent">
              With EA Agentic Lab
            </h3>
            <div className="space-y-3">
              {withSystem.map((item, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="text-xs font-mono text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.result}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Losses analyzed</span>
                <span className="text-accent font-bold">100%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Playbook updates from losses</span>
                <span className="text-accent">4 per quarter</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Repeat loss patterns</span>
                <span className="text-accent">Detected + prevented</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-4">
            <motion.span
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl font-bold text-red-400 md:text-6xl line-through decoration-red-500/50"
            >
              repeat
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-4xl font-bold text-accent md:text-6xl"
            >
              prevent
            </motion.span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              Every loss becomes a lesson. Every lesson becomes a playbook step.
            </p>
            <p className="text-foreground font-semibold">
              The team that learns from failure stops repeating it.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
