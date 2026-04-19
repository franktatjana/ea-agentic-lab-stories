"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const breakdown = [
  { label: "Pings answered per week", value: "~40", note: "Chat, email, DMs, hallway" },
  { label: "Avg time per interruption", value: "8 min", note: "Answer + context reload" },
  { label: "Unique questions", value: "~12%", note: "88% have been asked before" },
  { label: "Weekly hours lost", value: "5.3h", note: "Across meetings, deep work, weekends" },
];

export function Cost() {
  return (
    <Section id="cost" className="border-t border-border" orb="blue" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Real Tax
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            What John&apos;s attention actually costs.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            You&apos;re not paying him $180k to be a lookup service.
            But that&apos;s what his week has become.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {breakdown.map((item, i) => (
          <ScrollReveal key={item.label} delay={0.1 + i * 0.08}>
            <div className="card-elevated rounded-xl p-6 h-full">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-xs font-mono uppercase tracking-widest text-muted">
                  {item.label}
                </p>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="text-3xl font-bold text-accent"
                >
                  {item.value}
                </motion.span>
              </div>
              <p className="text-sm text-muted mt-3">{item.note}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-12 text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-sm font-mono uppercase tracking-widest text-muted">
            Annualized
          </p>
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-6xl md:text-7xl font-bold text-accent tracking-tighter">
              265h
            </span>
            <span className="text-xl text-muted font-mono">/ year</span>
          </div>
          <p className="text-muted">
            ~6 weeks of his best engineer&apos;s year, spent re-answering
            the same 12 questions.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
