"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function BeforeAfter() {
  return (
    <Section id="compare" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Deal 248
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Two ways to start tomorrow.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Blank page
            </h3>
            <div className="rounded-lg border border-dashed border-red-500/30 bg-surface p-6 font-mono text-sm text-muted min-h-[200px] space-y-2">
              <p className="opacity-30">Discovery notes</p>
              <p className="opacity-30">Stakeholders</p>
              <p className="opacity-30">Constraints</p>
              <p className="opacity-30">Competitive</p>
              <p className="opacity-30">Timeline</p>
              <div className="h-12" />
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Setup time</span>
                <span className="text-red-400 font-bold">~8 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Prior deals referenced</span>
                <span className="text-red-400">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Objections pre-empted</span>
                <span className="text-red-400">0</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              Pre-filled scaffold
            </h3>
            <div className="rounded-lg border border-accent/30 bg-surface p-5 font-mono text-xs space-y-3 min-h-[200px]">
              <div>
                <p className="text-accent uppercase tracking-widest text-[10px]">
                  Stakeholder defaults (71% match)
                </p>
                <p className="text-foreground mt-1">CTO, CFO, Head of Platform</p>
              </div>
              <div>
                <p className="text-accent uppercase tracking-widest text-[10px]">
                  Pre-empted objections
                </p>
                <p className="text-foreground mt-1">
                  TCO, migration risk, data residency, SOC2
                </p>
              </div>
              <div>
                <p className="text-accent uppercase tracking-widest text-[10px]">
                  Recommended talk track
                </p>
                <p className="text-foreground mt-1">
                  TCO + migration-alongside (38:12 win ratio)
                </p>
              </div>
              <div>
                <p className="text-accent uppercase tracking-widest text-[10px]">
                  Watch signal
                </p>
                <p className="text-foreground mt-1">
                  Procurement joining early &rarr; stall risk
                </p>
              </div>
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Setup time</span>
                <span className="text-accent font-bold">~30 min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Prior deals referenced</span>
                <span className="text-accent">247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Objections pre-empted</span>
                <span className="text-accent">5</span>
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
              8h
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              30m
            </motion.span>
            <span className="text-xl text-muted font-mono">to deal-ready</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              Every past deal is a data point. Every data point shapes the next one.
            </p>
            <p className="text-foreground font-semibold">
              Deal 248 starts at deal 247 + 1, not 0.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
