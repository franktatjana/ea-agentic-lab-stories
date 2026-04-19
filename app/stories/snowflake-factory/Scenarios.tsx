"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const scenarios = [
  {
    level: "Individual",
    title: "New SA enters a similar deal",
    body:
      "Nordics SA is assigned a manufacturing account running Splunk, evaluating alternatives. Never handled this before. Searches #manufacturing #security #splunk-competitive.",
    outcome:
      "Finds the DACH brief in 15 minutes. Reuses the hybrid architecture diagram and CFO ROI framing instead of rebuilding from scratch.",
    signal: "Pattern reused, not reinvented.",
  },
  {
    level: "Team",
    title: "Quarterly review surfaces a systemic gap",
    body:
      "SA Intelligence Lead reviews 10 briefs across EMEA. ServiceNow integration appears as a gap in 4 of 10 deals. Different teams built separate workarounds, no shared visibility.",
    outcome:
      "Gap escalated to SA leadership and PMs. One integration playbook documented and shared.",
    signal: "One systemic fix eliminates duplicated effort on every future deal.",
  },
  {
    level: "Management",
    title: "Decisions from patterns, not people",
    body:
      "Preparing Q3 business review. Across 12 closed deals, early PM engagement correlates with a 40% higher win rate compared to later involvement.",
    outcome:
      "PM engagement added as a required step in the standard discovery process. Criteria defined by data, not by individual judgment.",
    signal: "Management acts on field evidence, not status updates.",
  },
  {
    level: "Global",
    title: "Field signal moves between regions",
    body:
      "APJ SA receives an air-gapped deployment request with strict compliance. Doesn't recall the details from a similar deal years ago. Searches #air-gapped #compliance.",
    outcome:
      "Finds four recent briefs across regions. Short exchange with an EMEA SA closes remaining gaps in an hour.",
    signal: "Regions operate as one team, not isolated ones.",
  },
];

const levelColor: Record<string, string> = {
  Individual: "text-accent",
  Team: "text-emerald-500 dark:text-emerald-400",
  Management: "text-purple-500 dark:text-purple-400",
  Global: "text-orange-500 dark:text-orange-400",
};

export function Scenarios() {
  return (
    <Section id="scenarios" className="border-t border-border" orb="purple" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Four Ways It Pays Off
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Value compounds at every level.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Individual reuse becomes team signal, becomes management decision,
            becomes global flow. Each deal brief is a compounding asset.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-5 max-w-3xl mx-auto">
        {scenarios.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.12}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated rounded-xl p-6 md:p-7 space-y-4"
            >
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className={`text-xs font-mono uppercase tracking-widest ${levelColor[s.level]}`}>
                  Level {i + 1} &middot; {s.level}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {s.title}
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              <div className="pt-3 border-t border-border space-y-2">
                <p className="text-sm text-foreground">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest mr-2">Outcome:</span>
                  {s.outcome}
                </p>
                <p className={`text-sm font-semibold ${levelColor[s.level]}`}>
                  {s.signal}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
