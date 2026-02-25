"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const phases = [
  {
    id: "intake",
    label: "Intake",
    day: "Day 1",
    agent: "RFP Agent",
    actions: [
      "Parse 200-page document in minutes",
      "Extract mandatory vs. optional requirements",
      "Flag trap questions and ambiguous criteria",
      "Generate bid/no-bid recommendation",
    ],
    output: "Requirement matrix + bid recommendation",
  },
  {
    id: "strategy",
    label: "Strategy",
    day: "Day 2-3",
    agent: "RFP Agent + CI Agent",
    actions: [
      "Develop win themes from competitive intelligence",
      "Map requirements to proven capabilities",
      "Assign owners to each response section",
      "Pull relevant answers from past submissions",
    ],
    output: "Win themes + response outline + owner assignments",
  },
  {
    id: "draft",
    label: "Draft",
    day: "Day 4-7",
    agent: "SA + InfoSec + AE Agents",
    actions: [
      "SA drafts technical sections with architecture diagrams",
      "InfoSec completes security questionnaire",
      "AE builds value-based pricing proposal",
      "Each section follows: Comply, Explain, Differentiate",
    ],
    output: "Section drafts + compliance matrix",
  },
  {
    id: "review",
    label: "Review",
    day: "Day 8-9",
    agent: "RFP Agent",
    actions: [
      "Check consistency across all sections",
      "Verify differentiators are visible, not buried",
      "Ensure proof points cited, not just claims",
      "Executive summary distills the full response",
    ],
    output: "Reviewed response + executive summary",
  },
  {
    id: "submit",
    label: "Submit",
    day: "Day 10",
    agent: "RFP Agent",
    actions: [
      "Final formatting and compliance check",
      "All mandatory requirements confirmed addressed",
      "No TBDs remaining in the document",
      "Submitted with 24 hours to spare",
    ],
    output: "Submission package + confirmation",
  },
];

export function Orchestration() {
  const [activePhase, setActivePhase] = useState(0);
  const phase = phases[activePhase];

  return (
    <Section id="orchestration" orb="blue" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Agent Way
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Orchestrated, Not Scrambled
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            The RFP Agent coordinates five agents across five phases. Every
            section has an owner, every deadline has buffer, every answer
            reinforces your differentiators.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  i === activePhase
                    ? "bg-accent text-background"
                    : "border border-border bg-surface text-muted hover:text-foreground"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-border bg-surface p-6 md:p-8 space-y-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-mono text-accent">{phase.day}</p>
                <h3 className="text-xl font-bold mt-1">{phase.label}</h3>
              </div>
              <span className="text-xs font-mono text-muted bg-raised px-3 py-1 rounded-full">
                {phase.agent}
              </span>
            </div>

            <div className="space-y-2">
              {phase.actions.map((action, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.1 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="text-accent mt-0.5 shrink-0">&bull;</span>
                  <span className="text-muted">{action}</span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted">Output:</p>
              <p className="text-sm font-mono text-accent mt-1">
                {phase.output}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
