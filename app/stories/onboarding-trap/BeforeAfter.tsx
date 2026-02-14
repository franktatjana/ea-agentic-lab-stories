"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  {
    question: '"Where do I find...?"',
    answer: "Ask someone, wait for response",
  },
  {
    question: '"How do we handle...?"',
    answer: "Figure it out, possibly incorrectly",
  },
  {
    question: '"What happened with this account?"',
    answer: "No documented history available",
  },
];

const withSystem = [
  {
    question: '"Where do I find...?"',
    answer: "InfoHub search, instant results",
  },
  {
    question: '"How do we handle...?"',
    answer: "Playbook for this scenario, step-by-step",
  },
  {
    question: '"What happened with this account?"',
    answer: "Full engagement history in customer vault",
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
            Same SA. Different System.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Without */}
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Without Structure
            </h3>
            <div className="space-y-5">
              {without.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-foreground">{item.question}</p>
                  <p className="text-sm text-muted">
                    &rarr; {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Ramp time</span>
                <span className="text-red-400 font-bold">90 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Questions asked</span>
                <span className="text-red-400">500+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Knowledge captured</span>
                <span className="text-red-400">0</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* With */}
        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              With EA Agentic Lab
            </h3>
            <div className="space-y-5">
              {withSystem.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-foreground">{item.question}</p>
                  <p className="text-sm text-muted">
                    &rarr; {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Ramp time</span>
                <span className="text-accent font-bold">30 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Questions answered</span>
                <span className="text-accent">Instant</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Knowledge captured</span>
                <span className="text-accent">Everything</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Number animation */}
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
              90
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              30
            </motion.span>
            <span className="text-xl text-muted font-mono">days</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-lg font-mono text-foreground">
              60 days recovered &times; $625/day ={" "}
              <span className="text-accent font-bold">$37,500 per hire</span>
            </p>
            <p className="text-muted mt-4">That&apos;s not efficiency.</p>
            <p className="text-foreground font-semibold">
              That&apos;s competitive advantage.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
