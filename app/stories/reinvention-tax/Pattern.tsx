"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const scenarios = [
  {
    quarter: "Q1 2024",
    who: "Sarah (Senior SA)",
    problem: "Customer needs multi-region failover architecture",
    solution: "Built reference architecture from scratch, 3 weeks",
    outcome: "Won the deal. Architecture lives in her laptop.",
  },
  {
    quarter: "Q2 2024",
    who: "Mike (Mid-level SA)",
    problem: "Customer needs multi-region failover architecture",
    solution: "Searched Confluence. Found nothing. Built from scratch, 4 weeks",
    outcome: "Won the deal. Different architecture than Sarah's. Both work.",
  },
  {
    quarter: "Q3 2024",
    who: "Priya (New SA)",
    problem: "Customer needs multi-region failover architecture",
    solution: 'Asked around. "Talk to Sarah." Sarah is on another deal.',
    outcome: "Missed the deadline. Lost the deal.",
  },
  {
    quarter: "Q4 2024",
    who: "James (Senior SA)",
    problem: "Customer needs multi-region failover architecture",
    solution: "Built his own version. Didn't know about Sarah's or Mike's.",
    outcome: "Won the deal. Third architecture variant in 12 months.",
  },
];

export function Pattern() {
  return (
    <Section id="pattern" orb="purple" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Pattern
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Same Problem, Four Times Over
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Four SAs hit the same customer requirement in one year. Each one
            solved it independently because there was no structured way to
            capture what worked and surface it to the next person who needed it.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4">
        {scenarios.map((s, i) => (
          <ScrollReveal key={s.quarter} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 md:p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-20 text-center">
                  <span className="text-xs font-mono text-accent uppercase tracking-wider">
                    {s.quarter}
                  </span>
                  <p className="text-sm font-bold mt-1 truncate">{s.who.split(" ")[0]}</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-sm text-foreground"
                  >
                    {s.problem}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    className="text-sm text-muted"
                  >
                    &rarr; {s.solution}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                    className="text-sm text-muted/60 italic"
                  >
                    {s.outcome}
                  </motion.p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 text-center space-y-2">
          <p className="text-muted text-sm">
            One problem. Four solutions. Three architectures. One lost deal.
          </p>
          <p className="text-sm font-mono text-red-400">
            Total time invested: 14 weeks
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
