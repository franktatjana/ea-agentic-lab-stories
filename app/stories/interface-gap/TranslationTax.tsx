"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const scenarios = [
  {
    name: "The AE",
    type: "Talker",
    color: "text-yellow-400",
    steps: [
      "Opens document",
      "Skims first paragraph",
      "Closes document",
      'Slacks the author: "Hey can you give me the TL;DR?"',
      "Author explains verbally for 15 minutes",
    ],
    cost: "20 minutes (both people)",
  },
  {
    name: "The Architect",
    type: "Visual",
    color: "text-green-400",
    steps: [
      "Opens document",
      "Searches for diagrams: none",
      "Reads halfway, loses thread",
      "Creates own diagram from the text",
    ],
    cost: "45 minutes",
  },
  {
    name: "The Engineer",
    type: "Doer",
    color: "text-purple-400",
    steps: [
      "Opens document",
      'Thinks: "I\'ll read this when I need it"',
      "Closes document",
      "Encounters competitive situation unprepared",
    ],
    cost: "Potential deal impact",
  },
];

export function TranslationTax() {
  return (
    <Section id="translation-tax" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Hidden Cost
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The Hidden Translation Layer
          </h2>
        </div>
      </ScrollReveal>

      {/* Trigger */}
      <ScrollReveal delay={0.1}>
        <div className="mt-12 rounded-xl border border-border bg-surface p-5 font-mono text-sm">
          <p className="text-muted uppercase tracking-widest text-xs mb-3">
            Scenario: New competitive positioning needs to be shared
          </p>
          <p className="text-accent">The SA (Reader) creates:</p>
          <p className="text-muted ml-4">
            └── 12-page competitive analysis document
          </p>
          <p className="text-muted ml-8">
            └── Shared in #competitive-intel channel
          </p>
        </div>
      </ScrollReveal>

      {/* Each person's experience */}
      <div className="mt-6 space-y-4">
        {scenarios.map((scenario, i) => (
          <ScrollReveal key={scenario.name} delay={0.15 + i * 0.1}>
            <div className="rounded-xl border border-border bg-surface overflow-hidden">
              <div className="border-b border-border px-4 py-2 flex items-center justify-between">
                <span className={`text-xs font-mono ${scenario.color}`}>
                  {scenario.name} ({scenario.type})
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1">
                {scenario.steps.map((step, j) => (
                  <motion.p
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + j * 0.1 }}
                    className="text-muted"
                  >
                    {j < scenario.steps.length - 1 ? "├──" : "└──"} {step}
                  </motion.p>
                ))}
                <p className="text-red-400 mt-2 pt-2 border-t border-border">
                  Time cost: {scenario.cost}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 text-center space-y-2">
          <p className="text-muted">One document created.</p>
          <p className="text-muted">Four different experiences.</p>
          <p className="text-red-400 font-bold">Three people underserved.</p>
          <p className="text-muted">Countless informal translations.</p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
