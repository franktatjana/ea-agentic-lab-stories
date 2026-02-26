"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const stages = [
  {
    id: "raw",
    label: "Raw Loss",
    description: "The deal is lost. Meeting notes, emails, and verbal debriefs exist somewhere.",
    items: [
      { text: "Loss review meeting notes", location: "Someone's notebook" },
      { text: "Slack thread with hot takes", location: "Buried in #deals" },
      { text: "AE's verbal debrief to manager", location: "Forgotten by Friday" },
    ],
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
  },
  {
    id: "structured",
    label: "Structured Analysis",
    description: "The Retrospective Agent runs Five Whys within 7 days. Blame-free, process-focused.",
    items: [
      { text: "Loss classification", location: "Relationship, competitive, technical, commercial" },
      { text: "Root cause chain", location: "Five Whys documented with evidence" },
      { text: "Warning signs identified", location: "What signals were missed, and when" },
    ],
    color: "text-yellow-400",
    border: "border-yellow-500/20",
    bg: "bg-yellow-500/5",
  },
  {
    id: "knowledge",
    label: "Knowledge Extracted",
    description: "Learnings are anonymized, categorized, and proposed to the knowledge vault.",
    items: [
      { text: "Pattern identified", location: "Single-threaded = fragile (validated 4x)" },
      { text: "Competitive intel", location: "DataForge tactic: parallel department entry" },
      { text: "Process gap", location: "No multi-threading checkpoint on $300K+ deals" },
    ],
    color: "text-accent",
    border: "border-accent/20",
    bg: "bg-accent/5",
  },
  {
    id: "playbook",
    label: "Playbook Updated",
    description: "The learning becomes a step in the playbook. Every future deal benefits.",
    items: [
      { text: "Discovery Phase updated", location: "Multi-threading required by end of discovery" },
      { text: "Risk Radar updated", location: "Champion departure = immediate escalation" },
      { text: "Account Planning updated", location: "Leadership change monitoring for active accounts" },
    ],
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-500/5",
  },
];

export function Operationalize() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];

  return (
    <Section id="operationalize" orb="purple" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            From Pain to Playbook
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Operationalize the Failure
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A loss only has value if the learning reaches the next deal.
            Four stages turn raw pain into institutional improvement.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2">
            {stages.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setActiveStage(i)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  i === activeStage
                    ? "bg-accent text-background"
                    : "border border-border bg-surface text-muted hover:text-foreground"
                }`}
              >
                {i + 1}. {s.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl border ${stage.border} ${stage.bg} p-6 md:p-8 space-y-5`}
          >
            <div>
              <p className={`text-xs font-mono uppercase tracking-widest ${stage.color}`}>
                Stage {activeStage + 1}
              </p>
              <h3 className="text-xl font-bold mt-1">{stage.label}</h3>
              <p className="text-sm text-muted mt-2">{stage.description}</p>
            </div>

            <div className="space-y-3">
              {stage.items.map((item, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: j * 0.1 }}
                  className="flex items-start gap-3 text-sm"
                >
                  <span className={`mt-0.5 shrink-0 ${stage.color}`}>
                    &bull;
                  </span>
                  <div>
                    <span className="text-foreground font-medium">
                      {item.text}
                    </span>
                    <span className="text-muted"> &mdash; {item.location}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {activeStage < stages.length - 1 && (
              <div className="border-t border-border/30 pt-4 text-center">
                <button
                  onClick={() => setActiveStage((s) => s + 1)}
                  className="text-sm text-accent hover:text-accent-dim transition-colors font-medium"
                >
                  Next stage &rarr;
                </button>
              </div>
            )}

            {activeStage === stages.length - 1 && (
              <div className="border-t border-green-500/20 pt-4 text-center space-y-2">
                <p className="text-sm text-muted">
                  Total time from loss to playbook update:
                </p>
                <p className="text-2xl font-bold text-green-400">7 days</p>
                <p className="text-xs text-muted">
                  Every SA who runs this playbook now benefits from this failure.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
