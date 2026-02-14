"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const traditionalStats = [
  { label: "Deals completed", value: "200" },
  { label: "Knowledge captured", value: "minimal" },
  { label: "Patterns identified", value: "none" },
  { label: "Playbooks improved", value: "manually, occasionally" },
];

const learningStats = [
  { label: "Deals completed", value: "200" },
  { label: "Knowledge captured", value: "100%" },
  { label: "Patterns identified", value: "47" },
  { label: "Playbooks improved", value: "continuously" },
];

const yearThree = [
  { label: "Traditional system", value: "still baseline" },
  { label: "Learning system", value: "600 deals of accumulated intelligence" },
];

export function CompoundEffect() {
  return (
    <Section id="compound" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Compound Effect
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Day 1 vs Day 365
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traditional */}
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-red-400 font-mono">
              Traditional System
            </h3>

            <div className="space-y-3">
              <div className="font-mono text-sm space-y-2 text-muted">
                <p>
                  Day 1:{" "}
                  <span className="inline-block w-24 h-2 bg-red-400/30 rounded-full align-middle" />
                </p>
                <p>
                  Day 100:{" "}
                  <span className="inline-block w-24 h-2 bg-red-400/30 rounded-full align-middle" />
                </p>
                <p>
                  Day 365:{" "}
                  <span className="inline-block w-24 h-2 bg-red-400/30 rounded-full align-middle" />
                </p>
              </div>
            </div>

            <div className="border-t border-red-500/20 pt-4 space-y-2 font-mono text-sm">
              {traditionalStats.map((stat) => (
                <div key={stat.label} className="flex justify-between gap-2">
                  <span className="text-muted">{stat.label}</span>
                  <span className="text-red-400 text-right">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Learning */}
        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 space-y-6 h-full">
            <h3 className="font-bold text-lg text-accent font-mono">
              Self-Learning System
            </h3>

            <div className="space-y-3">
              <div className="font-mono text-sm space-y-2 text-muted">
                <p>
                  Day 1:{" "}
                  <span className="inline-block w-24 h-2 bg-accent/30 rounded-full align-middle" />
                </p>
                <motion.p
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Day 100:{" "}
                  <span className="inline-block w-40 h-2 bg-accent/50 rounded-full align-middle" />
                </motion.p>
                <motion.p
                  initial={{ opacity: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Day 365:{" "}
                  <span className="inline-block w-56 h-2 bg-accent rounded-full align-middle" />
                </motion.p>
              </div>
            </div>

            <div className="border-t border-accent/20 pt-4 space-y-2 font-mono text-sm">
              {learningStats.map((stat) => (
                <div key={stat.label} className="flex justify-between gap-2">
                  <span className="text-muted">{stat.label}</span>
                  <span className="text-accent font-bold text-right">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 text-center space-y-6">
          <p className="text-xl font-bold text-foreground">
            The gap compounds.
          </p>

          <div className="rounded-xl border border-border bg-surface p-6 max-w-md mx-auto">
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-4">
              By Year 3
            </p>
            {yearThree.map((item) => (
              <div
                key={item.label}
                className="flex justify-between gap-4 font-mono text-sm py-1"
              >
                <span className="text-muted">{item.label}</span>
                <span
                  className={
                    item.label.includes("Traditional")
                      ? "text-red-400 text-right"
                      : "text-accent font-bold text-right"
                  }
                >
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4">
            <p className="text-muted text-lg">
              Your competitors&apos; systems don&apos;t learn.
            </p>
            <p className="text-foreground text-xl font-bold">Yours does.</p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
