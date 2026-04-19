"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  { label: "Handoff artifact", value: "MSA + chat thread + memory" },
  { label: "Who reconciles commitments", value: "Nobody, until the customer does" },
  { label: "CA awareness of verbal promises", value: "Discovers on customer call" },
  { label: "Time to first drift", value: "8 days" },
];

const withSystem = [
  { label: "Handoff artifact", value: "Commitment ledger, signed at close" },
  { label: "Who reconciles commitments", value: "Agent captures verbal &rarr; checks against MSA" },
  { label: "CA awareness of verbal promises", value: "Kickoff brief cites every promise + source" },
  { label: "Time to first drift", value: "Flagged before day 3" },
];

export function BeforeAfter() {
  return (
    <Section id="compare" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Two Handoffs
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Same deal. Different day 31.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Handoff as hope
            </h3>
            <div className="space-y-4">
              {without.map((item, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted">
                    {item.label}
                  </p>
                  <p className="text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Day 31 NPS trajectory</span>
                <span className="text-red-400 font-bold">Falling</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Renewal risk flag</span>
                <span className="text-red-400">Raised</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Exec escalations</span>
                <span className="text-red-400">1+</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              Handoff as contract
            </h3>
            <div className="space-y-4">
              {withSystem.map((item, i) => (
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
            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Day 31 NPS trajectory</span>
                <span className="text-accent font-bold">Rising</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Renewal risk flag</span>
                <span className="text-accent">Clear</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Exec escalations</span>
                <span className="text-accent">0</span>
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
              Day 31
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              Day 0
            </motion.span>
            <span className="text-xl text-muted font-mono">alignment</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              The AE still closes warmly. The CA still gets flexibility.
              The customer no longer hears three different answers.
            </p>
            <p className="text-foreground font-semibold">
              One record. Everyone reads it. Nobody guesses.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
