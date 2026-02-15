"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const prepBriefing = {
  whatWeKnow: [
    "Current vendor: Incumbent SIEM (3 years)",
    "Contract renewal: Q3",
    "Previous contact: SA team (2022)",
  ],
  gaps: [
    "Decision maker unclear",
    "Technical requirements unknown",
    "Budget authority not confirmed",
  ],
  questions: [
    '"Who else is involved in this eval?"',
    '"What\'s driving the timing?"',
    '"What would success look like?"',
  ],
  risks: [
    "Competitor mention \u2192 flag immediately",
    "Vague timeline \u2192 probe for specifics",
  ],
};

export function AgentWorkflow() {
  return (
    <Section id="agent-workflow" className="border-t border-border" orb="blue" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Before the Meeting
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Agents That Work Alongside You
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        {/* Input */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                pre-meeting prep
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-1">
                <p className="text-accent">
                  You: [paste email, agenda, context]
                </p>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-muted">SA Agent analyzes:</p>
                <div className="ml-4 space-y-1 text-muted">
                  <p>
                    ├── Customer:{" "}
                    <span className="text-foreground">
                      Prospect Corp
                    </span>{" "}
                    (existing context from vault)
                  </p>
                  <p>
                    ├── Meeting type:{" "}
                    <span className="text-foreground">Discovery</span>
                  </p>
                  <p>
                    ├── Archetype signals:{" "}
                    <span className="text-foreground">
                      Competitive Displacement
                    </span>
                  </p>
                  <p>└── Preparing briefing...</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Briefing output */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 overflow-hidden">
            <div className="border-b border-accent/20 px-4 py-2">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Meeting Prep Briefing
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-5">
              <div className="space-y-2">
                <p className="text-accent font-bold">What we know:</p>
                {prepBriefing.whatWeKnow.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="ml-4 text-foreground"
                  >
                    - {item}
                  </motion.p>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-yellow-400 font-bold">Gaps to fill:</p>
                {prepBriefing.gaps.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="ml-4 text-muted"
                  >
                    - {item}
                  </motion.p>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-accent font-bold">Suggested questions:</p>
                {prepBriefing.questions.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="ml-4 text-foreground"
                  >
                    {i + 1}. {item}
                  </motion.p>
                ))}
              </div>

              <div className="space-y-2">
                <p className="text-red-400 font-bold">Risk signals to watch:</p>
                {prepBriefing.risks.map((item, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 + i * 0.1 }}
                    className="ml-4 text-muted"
                  >
                    - {item}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center space-y-2">
            <p className="text-lg font-mono">
              Time to prepare:{" "}
              <span className="text-accent font-bold">2 minutes</span>{" "}
              <span className="text-muted">(not 45)</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
