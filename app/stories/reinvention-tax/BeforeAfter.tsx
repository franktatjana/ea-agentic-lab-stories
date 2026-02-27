"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  {
    question: '"How do we handle multi-region?"',
    answer: "Every SA builds their own approach. Three variants, no standard.",
  },
  {
    question: '"Where is the security questionnaire template?"',
    answer: "Ask around. Maybe Confluence. Maybe someone's laptop.",
  },
  {
    question: '"What should the new SA do first?"',
    answer: "Shadow a senior for 90 days and hope they absorb the right habits.",
  },
];

const withSystem = [
  {
    question: '"How do we handle multi-region?"',
    answer: "Playbook PB_042: triggers, decision tree, reference architecture, refined over 14 engagements.",
  },
  {
    question: '"Where is the security questionnaire template?"',
    answer: "Playbook PB_088: input checklist, response patterns, stop conditions. Updated after last audit.",
  },
  {
    question: '"What should the new SA do first?"',
    answer: "Run the first three playbooks. They encode what the senior SA knows.",
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
            Same Team. Different Operating System.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Without Playbooks
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
                <span className="text-muted">Time to first deliverable</span>
                <span className="text-red-400 font-bold">3-4 weeks</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Consistency across SAs</span>
                <span className="text-red-400">Low</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">New SA ramp time</span>
                <span className="text-red-400">90 days</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              With Playbooks
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
                <span className="text-muted">Time to first deliverable</span>
                <span className="text-accent font-bold">3-5 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Consistency across SAs</span>
                <span className="text-accent">High</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">New SA ramp time</span>
                <span className="text-accent">30 days</span>
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
              40h
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              4h
            </motion.span>
            <span className="text-xl text-muted font-mono">by the 10th run</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              The org gets faster every time it solves a problem.
            </p>
            <p className="text-foreground font-semibold">
              Knowledge compounds. Reinvention doesn&apos;t.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
