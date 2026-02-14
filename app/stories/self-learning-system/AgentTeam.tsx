"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const agentCategories = [
  {
    title: "Strategic Agents",
    count: 19,
    color: "accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    textColor: "text-accent",
    purpose: "Apply judgment, use frameworks, make recommendations",
    agents: [
      "SA Agent \u2014 Technical discovery, architecture guidance",
      "AE Agent \u2014 Deal strategy, stakeholder navigation",
      "Competitive Intelligence Agent \u2014 Positioning, battlecards",
      "Value Engineering Agent \u2014 ROI modeling, business cases",
    ],
    remaining: 15,
  },
  {
    title: "Governance Agents",
    count: 10,
    color: "yellow",
    borderColor: "border-yellow-500/20",
    bgColor: "bg-yellow-500/5",
    textColor: "text-yellow-400",
    purpose: "Enforce process, maintain artifacts, reduce entropy",
    agents: [
      "Meeting Notes Agent \u2014 Capture and structure discussions",
      "Task Shepherd \u2014 Track actions, nudge completion",
      "Risk Radar \u2014 Detect signals, escalate concerns",
      "Decision Registrar \u2014 Document decisions with context",
    ],
    remaining: 6,
  },
  {
    title: "Intelligence Agents",
    count: 3,
    color: "green",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/5",
    textColor: "text-green-400",
    purpose: "Signal processing, market analysis, pattern detection",
    agents: [
      "Learning Agent \u2014 Win/loss correlation, playbook updates",
      "Signal Processor \u2014 News, triggers, market changes",
      "Pattern Detector \u2014 Cross-engagement insights",
    ],
    remaining: 0,
  },
];

export function AgentTeam() {
  return (
    <Section id="agent-team" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Team
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            31 Agents. Each With a Job.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        {agentCategories.map((category, i) => (
          <ScrollReveal key={category.title} delay={0.1 + i * 0.1}>
            <div
              className={`rounded-xl border ${category.borderColor} ${category.bgColor} overflow-hidden`}
            >
              <div
                className={`border-b ${category.borderColor} px-4 py-3 flex items-center justify-between`}
              >
                <span
                  className={`text-xs font-mono ${category.textColor} uppercase tracking-widest`}
                >
                  {category.title} ({category.count})
                </span>
              </div>

              <div className="p-6 font-mono text-sm space-y-4">
                <p className="text-muted">{category.purpose}</p>

                <div className="space-y-2">
                  {category.agents.map((agent, j) => (
                    <motion.p
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + j * 0.1 }}
                      className="text-foreground"
                    >
                      {j < category.agents.length - 1 || category.remaining > 0
                        ? "├──"
                        : "└──"}{" "}
                      {agent}
                    </motion.p>
                  ))}
                  {category.remaining > 0 && (
                    <p className="text-muted">
                      └── ... {category.remaining} more specialized roles
                    </p>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 text-center space-y-2 font-mono">
          <p className="text-muted">Humans decide.</p>
          <p className="text-foreground">Agents enforce discipline.</p>
          <p className="text-accent font-bold">The system learns.</p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
