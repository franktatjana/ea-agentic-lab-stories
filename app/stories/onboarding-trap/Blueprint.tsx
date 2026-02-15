"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const weeks = [
  {
    phase: "WEEK 1-2: Foundation",
    playbooks: [
      "PB_001: Organization & Tool Orientation",
      "PB_002: Product Knowledge Essentials",
      "PB_003: InfoHub & Knowledge Vault Walkthrough",
    ],
  },
  {
    phase: "WEEK 3-4: Skill Building",
    playbooks: [
      "PB_101: Stakeholder Mapping",
      "PB_201: Technical Discovery Framework",
      "PB_301: Competitive Positioning Basics",
    ],
  },
  {
    phase: "WEEK 5-8: Guided Engagements",
    playbooks: [
      "PB_102: Qualification Criteria Checklist",
      "PB_202: Architecture Assessment Template",
      "PB_401: First Solo Engagement Runbook",
    ],
  },
  {
    phase: "WEEK 9-12: Independence",
    playbooks: [
      "PB_103: Business Case Development",
      "PB_402: Deal Review Self-Assessment",
      "PB_403: Knowledge Contribution Guide",
    ],
  },
];

export function Blueprint() {
  return (
    <Section id="blueprint" className="border-t border-border" orb="blue" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Shift
          </p>
          <h2 className="text-3xl font-bold md:text-5xl text-gradient">
            Onboarding as a Playbook
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            What if every new SA followed a structured track instead of
            figuring it out alone for 90 days?
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12 rounded-2xl overflow-hidden card-elevated">
          <div className="border-b border-border px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-3 text-xs text-muted font-mono">
              blueprint - SA Onboarding
            </span>
          </div>

          <div className="p-6 md:p-8 font-mono text-sm space-y-5">
            <div className="space-y-1">
              <p className="text-accent font-bold">
                BLUEPRINT: SA Onboarding - Structured Track
              </p>
              <p className="text-muted text-xs mt-1">
                Replaces 90-day unstructured ramp with guided playbook sequence
              </p>
            </div>

            <div className="border-t border-border pt-5 space-y-5">
              {weeks.map((week, wi) => (
                <motion.div
                  key={week.phase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + wi * 0.15 }}
                >
                  <p className="text-foreground font-bold">{week.phase}</p>
                  <div className="ml-4 space-y-1 text-muted mt-1">
                    {week.playbooks.map((pb, pi) => (
                      <p key={pb}>
                        {pi < week.playbooks.length - 1 ? "\u251C\u2500\u2500 " : "\u2514\u2500\u2500 "}
                        {pb}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border pt-5">
              <p className="text-muted">
                Onboarding is not a calendar.{" "}
                <span className="text-accent font-bold">
                  It&apos;s a blueprint.
                </span>
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { value: "12 weeks", label: "Structured track" },
            { value: "12 playbooks", label: "Guided sequence" },
            { value: "Day 1 ready", label: "Not month 3" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-4 text-center space-y-1"
            >
              <div className="text-lg font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
