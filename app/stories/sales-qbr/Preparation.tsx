"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const prepSteps = [
  {
    who: "Sales Ops",
    task: "Pulls pipeline data from CRM",
    problem: "Data is 2 weeks stale, reps haven't updated stages",
  },
  {
    who: "Manager",
    task: "Builds the deck from last quarter's template",
    problem: "Same structure, same metrics, same blind spots",
  },
  {
    who: "Rep",
    task: "Scrambles to update deal notes the night before",
    problem: "CRM now reflects fiction, not reality",
  },
  {
    who: "VP",
    task: "Reviews 47 slides on the flight to the office",
    problem: "No time to prepare coaching questions or strategic pivots",
  },
];

const wastedHours = [
  { role: "Sales Ops", hours: 6, task: "Data gathering and slide building" },
  { role: "Manager", hours: 4, task: "Deck customization" },
  { role: "Reps (x8)", hours: 16, task: "CRM cleanup and deal note padding" },
  { role: "VP", hours: 2, task: "Last-minute review" },
];

export function Preparation() {
  return (
    <Section id="preparation" orb="warm" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Preparation
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            28 Hours to Build a Deck Nobody Uses
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            QBR preparation is a chain of manual tasks. Each person adds their
            piece without seeing the full picture. The result is a slide deck
            that reports the past without informing the future.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {prepSteps.map((step, i) => (
          <ScrollReveal key={step.who} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 space-y-3 h-full">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  {step.who}
                </span>
              </div>
              <p className="text-sm text-foreground">{step.task}</p>
              <p className="text-sm text-red-400/80">&rarr; {step.problem}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-muted mb-6 text-center">
            Hours burned per QBR cycle
          </h3>
          <div className="space-y-3">
            {wastedHours.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                style={{ originX: 0 }}
                className="flex items-center gap-4"
              >
                <span className="text-xs font-mono text-muted w-24 shrink-0 text-right">
                  {item.role}
                </span>
                <div className="flex-1 h-6 bg-surface-raised rounded overflow-hidden">
                  <div
                    className="h-full bg-red-500/30 rounded flex items-center px-3"
                    style={{ width: `${(item.hours / 16) * 100}%` }}
                  >
                    <span className="text-xs font-mono text-red-400">
                      {item.hours}h
                    </span>
                  </div>
                </div>
                <span className="text-xs text-muted hidden md:block w-48">
                  {item.task}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border text-center">
            <span className="text-2xl font-bold text-red-400">28 hours</span>
            <span className="text-muted text-sm ml-2">
              per quarter, per team
            </span>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
