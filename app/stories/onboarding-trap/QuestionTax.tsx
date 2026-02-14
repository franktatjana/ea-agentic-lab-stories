"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const streamMessages = [
  '9:02 AM — "Where\'s the security questionnaire template?"',
  '9:08 AM — "How do I request a POC environment?"',
  '9:14 AM — "Who owns the Globex account?"',
  '9:22 AM — "What\'s the latest pricing for Enterprise tier?"',
  '9:31 AM — "Is there a deck for manufacturing vertical?"',
  '9:45 AM — "Where do I find the ROI calculator?"',
  '10:05 AM — "Where do I find competitive intel on [Competitor X]?"',
  '10:12 AM — "What\'s the SLA for POC delivery?"',
  '10:22 AM — "Quick one, what\'s our discount approval process?"',
  '10:34 AM — "Has anyone done a healthcare compliance demo?"',
  '10:48 AM — "Does anyone have the architecture diagram template?"',
  '11:01 AM — "What integrations do we support out of the box?"',
  '11:15 AM — "Who should I talk to about the ACME renewal?"',
  '11:24 AM — "Where\'s the partner certification checklist?"',
  '11:33 AM — "Where\'s the POC checklist?"',
  '11:47 AM — "Can someone share the objection handling doc?"',
];

const options = [
  {
    label: "Option A: #general channel",
    result: "200 members, message buried in 3 minutes",
    icon: "#",
  },
  {
    label: "Option B: DM senior SA",
    result: '"In a call, will reply later" (4 hours)',
    icon: "@",
  },
  {
    label: "Option C: Search Confluence",
    result: "847 results, 12 outdated, 3 relevant, 0 findable",
    icon: "?",
  },
  {
    label: "Option D: Check Google Drive",
    result: "234 files, 15 folders, no clear answer",
    icon: "D",
  },
];

export function QuestionTax() {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  function handleSelect(i: number) {
    setSelected(i);
    setShowResult(false);
    setTimeout(() => setShowResult(true), 600);
  }

  return (
    <Section id="slack" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Sound Familiar?
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Day 1. You have questions.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        {/* Streaming question feed */}
        <ScrollReveal>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                questions — streaming (12/day)
              </span>
            </div>

            <div className="h-[280px] overflow-hidden relative">
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-surface to-transparent z-10" />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-surface to-transparent z-10" />

              <div className="animate-scroll-up">
                {[...streamMessages, ...streamMessages].map((msg, i) => (
                  <div
                    key={i}
                    className="px-6 py-2 font-mono text-xs md:text-sm text-muted/80 whitespace-nowrap"
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-muted text-sm mt-4">
            12 questions before lunch. Zero documented answers.
          </p>
        </ScrollReveal>

        {/* Interactive Slack panel */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            {/* Slack-style header */}
            <div className="border-b border-border px-6 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-sm text-muted font-mono">
                #sa-team
              </span>
            </div>

            <div className="p-6 space-y-4">
              {/* Question */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center text-accent text-sm font-bold shrink-0">
                  N
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-sm">New SA</span>
                    <span className="text-xs text-muted">9:02 AM</span>
                  </div>
                  <p className="text-muted mt-1">
                    Where can I find competitive positioning against [Competitor
                    X]?
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`rounded-lg border p-4 text-left transition-all ${
                      selected === i
                        ? "border-accent bg-accent/10"
                        : "border-border hover:border-accent/30"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded bg-surface flex items-center justify-center text-xs font-mono text-muted border border-border">
                        {opt.icon}
                      </span>
                      <span className="text-sm font-medium">{opt.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Result */}
              <AnimatePresence>
                {selected !== null && showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="rounded-lg border border-red-500/20 bg-red-500/5 p-4 mt-4"
                  >
                    <p className="text-sm text-red-400 font-mono">
                      &rarr; {options[selected].result}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollReveal>

        {/* Summary */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-surface p-6 md:p-8 space-y-4">
            <p className="text-lg text-foreground text-center">
              You asked 12 questions today. You&apos;ll ask 12 more tomorrow.
            </p>
            <p className="text-sm text-muted text-center">
              The answers exist. Somewhere. In someone&apos;s head. In a Slack
              thread from 2022. In a Google Doc last edited by someone who left.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-3 border-t border-border">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">2.5 hrs</div>
                <div className="text-xs text-muted mt-1">Searching</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-red-400">3 hrs</div>
                <div className="text-xs text-muted mt-1">Waiting</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-foreground">2.5 hrs</div>
                <div className="text-xs text-muted mt-1">Productive</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
