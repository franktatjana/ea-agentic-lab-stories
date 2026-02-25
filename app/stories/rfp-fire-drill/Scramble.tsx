"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const timeline = [
  {
    day: "Day 1",
    label: "Panic",
    events: [
      "RFP forwarded to 6 people",
      "Everyone reads different sections",
      "Nobody owns the response",
    ],
    color: "text-red-400",
  },
  {
    day: "Day 2-3",
    label: "The Search",
    events: [
      '"Didn\'t we answer this for Globex last year?"',
      "3 people search Confluence, Slack, Google Drive",
      "Found: 2 outdated drafts, 1 wrong version",
    ],
    color: "text-orange-400",
  },
  {
    day: "Day 4-7",
    label: "Parallel Chaos",
    events: [
      "SA writes technical sections alone",
      "AE guesses at pricing strategy",
      "InfoSec hasn't started their section",
    ],
    color: "text-yellow-400",
  },
  {
    day: "Day 8-9",
    label: "The Crunch",
    events: [
      "Copy-paste from 3 different past responses",
      "Inconsistent terminology throughout",
      "Executive summary written at midnight",
    ],
    color: "text-red-400",
  },
  {
    day: "Day 10",
    label: "Submit & Pray",
    events: [
      "Submitted 20 minutes before deadline",
      "Nobody reviewed the full document",
      "Two mandatory sections were incomplete",
    ],
    color: "text-red-500",
  },
];

export function Scramble() {
  return (
    <Section id="scramble" orb="purple" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Reality
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            10 Days of Controlled Chaos
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every RFP triggers the same fire drill. Different people, same
            pattern, same outcome.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4">
        {timeline.map((phase, i) => (
          <ScrollReveal key={phase.day} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 md:p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-20 text-center">
                  <span className={`text-xs font-mono uppercase ${phase.color}`}>
                    {phase.day}
                  </span>
                  <p className="text-sm font-bold mt-1">{phase.label}</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {phase.events.map((event, j) => (
                    <motion.p
                      key={j}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.15 }}
                      className="text-sm text-muted"
                    >
                      &rarr; {event}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
