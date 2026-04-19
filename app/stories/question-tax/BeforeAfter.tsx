"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  { q: "Where is the pricing doc?", path: "Ping John &rarr; 8 min &rarr; link" },
  { q: "What's the EU discount tier?", path: "Ping John &rarr; 8 min &rarr; screenshot" },
  { q: "Can I see the latest security whitepaper?", path: "Ping John &rarr; 12 min &rarr; PDF" },
];

const withSystem = [
  {
    q: "Where is the pricing doc?",
    answer: "Pricing v4.2 (linked). Last updated 11 days ago. 87% confidence.",
    source: "Answered from past thread: 2026-03-14, #sales-ops.",
  },
  {
    q: "What's the EU discount tier?",
    answer: "Standard 12%, volume 18%. EU-specific clause in contract template §4.",
    source: "Answered from prior response + contract registry.",
  },
  {
    q: "Can I see the latest security whitepaper?",
    answer: "SOC2 Type II (v5, Q1 2026). ISO pending. Escalate to John only if customer asks for SIG.",
    source: "Routed to cache. Escalation rule: SIG requests.",
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
            Same Question. Different System.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Without: John is the cache
            </h3>
            <div className="space-y-5">
              {without.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-foreground">&quot;{item.q}&quot;</p>
                  <p
                    className="text-sm text-muted font-mono"
                    dangerouslySetInnerHTML={{ __html: item.path }}
                  />
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Hours lost / week</span>
                <span className="text-red-400 font-bold">5.3h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Deep work blocks preserved</span>
                <span className="text-red-400">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Bus factor</span>
                <span className="text-red-400">1</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              With: Knowledge agent answers, cites source
            </h3>
            <div className="space-y-5">
              {withSystem.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-sm text-foreground">&quot;{item.q}&quot;</p>
                  <p className="text-sm text-accent">&rarr; {item.answer}</p>
                  <p className="text-xs text-muted font-mono">
                    {item.source}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Hours lost / week</span>
                <span className="text-accent font-bold">0.6h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Deep work blocks preserved</span>
                <span className="text-accent">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Bus factor</span>
                <span className="text-accent">&infin;</span>
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
              5.3h
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              0.6h
            </motion.span>
            <span className="text-xl text-muted font-mono">/ week of John</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              John still handles the hard questions. The cache handles the repeats.
            </p>
            <p className="text-foreground font-semibold">
              A knowledge system that answers for you.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
