"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const costs = [
  {
    label: "Discovery",
    description: "Every engagement starts by figuring out what questions to ask",
    hours: "8-12h",
    width: "45%",
  },
  {
    label: "Research",
    description: "Searching for past work that may or may not exist",
    hours: "4-8h",
    width: "30%",
  },
  {
    label: "Architecture",
    description: "Building deliverables someone else already built",
    hours: "20-40h",
    width: "85%",
  },
  {
    label: "Review Cycles",
    description: "Catching mistakes that a template would have prevented",
    hours: "6-10h",
    width: "35%",
  },
];

const multipliers = [
  { label: "SAs on the team", value: "12" },
  { label: "Similar engagements per year", value: "~60" },
  { label: "Hours reinvented per engagement", value: "38-70" },
  { label: "Total hours wasted annually", value: "2,280+" },
];

export function Cost() {
  return (
    <Section id="cost" orb="warm" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Cost
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Reinvention Has a Price Tag
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Each individual reinvention feels minor, a few extra hours, an extra
            week. Multiply by the number of SAs and engagements, and the cost
            becomes a full-time headcount spent on rediscovering what the org
            already knows.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-6">
            Hours burned per engagement
          </h3>
          <div className="space-y-4">
            {costs.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{item.label}</span>
                  <span className="text-xs font-mono text-red-400">
                    {item.hours}
                  </span>
                </div>
                <div className="h-2 bg-surface-raised rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.width }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
                    className="h-full bg-red-500/40 rounded"
                  />
                </div>
                <p className="text-xs text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-8 rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-red-400 mb-6 text-center">
            Scaled across the org
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {multipliers.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <p className="text-2xl font-bold text-foreground md:text-3xl">
                  {m.value}
                </p>
                <p className="text-xs text-muted mt-1">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
