"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const patterns = [
  {
    label: "Same stakeholder pattern",
    detail: "CTO + CFO + Head of Platform appear in 71% of deals > $250k",
    count: "175 / 247 deals",
  },
  {
    label: "Same top objections",
    detail: "Cost, migration risk, data residency, vendor lock-in, SOC2",
    count: "92% of deals",
  },
  {
    label: "Same winning talk tracks",
    detail: "TCO comparison + migration-alongside narrative beats competitor 3:1",
    count: "38 wins, 12 losses",
  },
  {
    label: "Same kill signals",
    detail: "Procurement joins before technical validation = deal stalls ~60 days",
    count: "23 deals, 21 stalls",
  },
  {
    label: "Same timeline shape",
    detail: "11-week median from first call to signature",
    count: "&sigma; = 2 weeks",
  },
];

export function Pattern() {
  return (
    <Section id="pattern" className="border-t border-border" orb="blue" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Pattern Hiding in Plain Sight
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Your deals rhyme. Your process doesn&apos;t.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            247 engagements, looked at together, show structure you can&apos;t see
            one deal at a time.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4 max-w-3xl mx-auto">
        {patterns.map((p, i) => (
          <ScrollReveal key={p.label} delay={0.1 + i * 0.1}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated rounded-xl p-5 md:p-6 flex items-center gap-4"
            >
              <div className="flex-1 min-w-0 space-y-1">
                <p className="text-sm font-mono uppercase tracking-widest text-accent">
                  {p.label}
                </p>
                <p className="text-foreground">{p.detail}</p>
              </div>
              <div className="shrink-0 text-right">
                <p
                  className="text-sm font-mono text-muted"
                  dangerouslySetInnerHTML={{ __html: p.count }}
                />
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.7}>
        <p className="mt-12 text-center text-muted max-w-2xl mx-auto">
          This is the brief deal 248 should start from. Not a blank page,
          but a cross-deal pattern layer with stakeholder defaults,
          objection pre-emption, and cadence predictions.
        </p>
      </ScrollReveal>
    </Section>
  );
}
