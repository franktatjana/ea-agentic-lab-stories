"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  { label: "Knowledge store", value: "Private notebooks, SharePoint folders, SA memory" },
  { label: "Search", value: "Ping a colleague, hope they&apos;re still here" },
  { label: "Pattern detection", value: "Nobody looking across deals" },
  { label: "Shelf life", value: "Decays the day the deal closes" },
  { label: "Onboarding", value: "Months of shadowing senior SAs" },
];

const withSystem = [
  { label: "Knowledge store", value: "Central repository, one MD file per deal, tagged" },
  { label: "Search", value: "Tag + full-text query, AI-assisted retrieval" },
  { label: "Pattern detection", value: "Quarterly pattern review, cross-region signals" },
  { label: "Shelf life", value: "Shelf-life field on every brief, flagged for refresh" },
  { label: "Onboarding", value: "Day 1: searchable history of every comparable deal" },
];

export function BeforeAfter() {
  return (
    <Section id="compare" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Two Territories
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Same SAs. Same deals. Different memory.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Snowflake factory
            </h3>
            <div className="space-y-4">
              {without.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">
                    {item.label}
                  </p>
                  <p
                    className="text-sm text-foreground"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Brief reuse rate</span>
                <span className="text-red-400 font-bold">~0%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Cross-region signals / quarter</span>
                <span className="text-red-400">0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Time to find prior pattern</span>
                <span className="text-red-400">Hours to days</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              Living repository
            </h3>
            <div className="space-y-4">
              {withSystem.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Brief reuse rate</span>
                <span className="text-accent font-bold">Every similar deal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Cross-region signals / quarter</span>
                <span className="text-accent">Continuous</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Time to find prior pattern</span>
                <span className="text-accent">~15 minutes</span>
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
              Days
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              15 min
            </motion.span>
            <span className="text-xl text-muted font-mono">to prior pattern</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              Low investment. High signal. Built to learn fast, fail fast,
              and scale what works.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
