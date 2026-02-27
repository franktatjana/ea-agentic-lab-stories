"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const scenes = [
  {
    time: "0:00",
    label: "Opening",
    events: [
      "VP reads revenue numbers from a slide everyone already received",
      "Three people check their phones",
      "Nobody asks a question",
    ],
    color: "text-muted",
  },
  {
    time: "0:20",
    label: "Pipeline Review",
    events: [
      "Rep walks through each deal, status unchanged from last QBR",
      '"This one is close" (it was close last quarter too)',
      "No win/loss patterns discussed",
    ],
    color: "text-yellow-400",
  },
  {
    time: "0:45",
    label: "Forecast",
    events: [
      "Manager presents a number that will change by Friday",
      "Commit vs. best-case debate consumes 15 minutes",
      "No coaching, no deal strategy, no skill development",
    ],
    color: "text-orange-400",
  },
  {
    time: "1:15",
    label: "Wrap-up",
    events: [
      '"Any questions?" Silence.',
      "Action items: same as last quarter",
      "Next QBR will be identical",
    ],
    color: "text-red-400",
  },
];

export function Theater() {
  return (
    <Section id="theater" orb="purple" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Reality
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            90 Minutes of Performance
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Most sales QBRs follow the same script. Numbers read aloud,
            forecasts debated, coaching skipped. The meeting ends, nothing
            changes, and three months later it repeats.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4">
        {scenes.map((scene, i) => (
          <ScrollReveal key={scene.time} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 md:p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-20 text-center">
                  <span
                    className={`text-xs font-mono uppercase ${scene.color}`}
                  >
                    {scene.time}
                  </span>
                  <p className="text-sm font-bold mt-1">{scene.label}</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {scene.events.map((event, j) => (
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

      <ScrollReveal delay={0.4}>
        <div className="mt-12 text-center">
          <p className="text-muted text-sm font-mono">
            Average decisions made per QBR:{" "}
            <span className="text-red-400 font-bold text-lg">0</span>
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
