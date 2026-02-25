"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  {
    question: '"Where is the Globex response?"',
    answer: "Search Slack, email, 3 drives. Maybe ask Sarah, who left.",
  },
  {
    question: '"Should we bid on this?"',
    answer: "30-minute debate based on gut feeling",
  },
  {
    question: '"Who owns the security section?"',
    answer: "Unclear. Three people write partial answers.",
  },
];

const withSystem = [
  {
    question: '"Where is the Globex response?"',
    answer: "Past responses indexed, relevant sections surfaced instantly",
  },
  {
    question: '"Should we bid on this?"',
    answer: "Weighted bid/no-bid score in 60 seconds",
  },
  {
    question: '"Who owns the security section?"',
    answer: "InfoSec Agent assigned, deadline tracked, draft in progress",
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
            Same RFP. Different Outcome.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400">
              Without Structure
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
                <span className="text-muted">Win rate</span>
                <span className="text-red-400 font-bold">18%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Avg. response time</span>
                <span className="text-red-400">120+ hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Past responses reused</span>
                <span className="text-red-400">0%</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent">
              With EA Agentic Lab
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
                <span className="text-muted">Win rate</span>
                <span className="text-accent font-bold">40%+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Avg. response time</span>
                <span className="text-accent">60 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Past responses reused</span>
                <span className="text-accent">65%</span>
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
              18%
            </motion.span>
            <span className="text-3xl text-muted">&rarr;</span>
            <motion.span
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-5xl font-bold text-accent md:text-7xl"
            >
              40%
            </motion.span>
            <span className="text-xl text-muted font-mono">win rate</span>
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted">
              Fewer RFPs pursued. More RFPs won.
            </p>
            <p className="text-foreground font-semibold">
              Win the right deals, not every deal.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
