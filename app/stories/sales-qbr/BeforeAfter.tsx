"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  {
    question: '"How did we do last quarter?"',
    answer: "VP reads revenue slide. Everyone already knows the number.",
  },
  {
    question: '"What\'s in the pipeline?"',
    answer: "Rep-by-rep walkthrough, no pattern analysis, no coaching.",
  },
  {
    question: '"What should we change?"',
    answer: "Silence. Meeting ends. Nothing changes.",
  },
];

const withSystem = [
  {
    question: '"How did we do last quarter?"',
    answer:
      "Win/loss patterns surfaced, root causes identified, competitive shifts flagged.",
  },
  {
    question: '"What\'s in the pipeline?"',
    answer:
      "Stalled deals grouped by blocker type, coaching questions pre-generated.",
  },
  {
    question: '"What should we change?"',
    answer:
      "Three data-backed recommendations with owner assignments and deadlines.",
  },
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
            Same 90 Minutes. Different Outcome.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              QBR as Reporting
            </h3>
            <div className="space-y-5">
              {without.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-foreground">{item.question}</p>
                  <p className="text-sm text-muted">&rarr; {item.answer}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Prep time</span>
                <span className="text-red-400 font-bold">28 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Decisions made</span>
                <span className="text-red-400">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Follow-up completion</span>
                <span className="text-red-400">12%</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              QBR as Strategy Session
            </h3>
            <div className="space-y-5">
              {withSystem.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-foreground">{item.question}</p>
                  <p className="text-sm text-muted">&rarr; {item.answer}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Prep time</span>
                <span className="text-accent font-bold">2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Decisions made</span>
                <span className="text-accent">5-8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Follow-up completion</span>
                <span className="text-accent">85%</span>
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
              className="text-5xl font-bold text-red-400 md:text-7xl line-through decoration-red-500/50"
            >
              28h
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              2h
            </motion.span>
            <span className="text-xl text-muted font-mono">prep time</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              Less time building slides. More time making decisions.
            </p>
            <p className="text-foreground font-semibold">
              The QBR that changes something.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
