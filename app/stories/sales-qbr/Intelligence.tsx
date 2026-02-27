"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const capabilities = [
  {
    agent: "AE Agent",
    action: "Prepares pipeline analysis with win/loss patterns",
    detail:
      "Compares current quarter pipeline to prior quarters, surfaces deals that stalled at the same stage, flags forecast inconsistencies between probability and stage",
  },
  {
    agent: "CA Agent",
    action: "Generates customer health intelligence",
    detail:
      "Aggregates support signals, adoption metrics, and stakeholder engagement into a health score. Flags accounts that need attention before they become escalations",
  },
  {
    agent: "SA Agent",
    action: "Identifies technical patterns across deals",
    detail:
      "Surfaces common objections, integration blockers, and architecture gaps. Identifies which technical wins correlated with closed deals",
  },
];

const coachingQuestions = [
  "Rep A has 3 deals stuck at technical validation for 45+ days. What's blocking progression?",
  "Win rate dropped 12% in mid-market. Is this a messaging problem, a competitive shift, or a qualification gap?",
  "Customer Z's health score declined from 8.2 to 6.1 over two quarters. What changed?",
  "Pipeline coverage is 2.8x but only 40% of deals have had SA engagement. Is the pipeline real?",
];

export function Intelligence() {
  return (
    <Section id="intelligence" orb="blue" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Alternative
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            QBR as Strategy Session
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            When agents handle data gathering and pattern detection, the QBR
            becomes what it was supposed to be: a room full of leaders making
            decisions with complete information.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4">
        {capabilities.map((cap, i) => (
          <ScrollReveal key={cap.agent} delay={i * 0.1}>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5 md:p-6">
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-accent uppercase tracking-wider shrink-0 mt-1 w-20">
                  {cap.agent}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">
                    {cap.action}
                  </p>
                  <p className="text-sm text-muted">{cap.detail}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
            Auto-generated coaching questions
          </h3>
          <p className="text-muted text-sm mb-6">
            Instead of managers preparing questions manually, agents surface the
            questions that matter based on actual data patterns.
          </p>
          <div className="space-y-4">
            {coachingQuestions.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex items-start gap-3"
              >
                <span className="text-accent text-sm mt-0.5 shrink-0">?</span>
                <p className="text-sm text-foreground">{q}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
