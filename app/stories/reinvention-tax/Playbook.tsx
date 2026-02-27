"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const playbookParts = [
  {
    name: "Trigger",
    what: "When does this playbook activate?",
    example: "Customer requests multi-region failover architecture",
  },
  {
    name: "Decision Logic",
    what: "What questions determine the path forward?",
    example: "Active-active or active-passive? RPO/RTO requirements? Compliance constraints?",
  },
  {
    name: "Inputs",
    what: "What information is needed before starting?",
    example: "Current architecture, SLA requirements, infrastructure constraints, budget range",
  },
  {
    name: "Outputs",
    what: "What deliverables does this produce?",
    example: "Reference architecture diagram, cost comparison, migration timeline, risk assessment",
  },
  {
    name: "RACI",
    what: "Who does what?",
    example: "SA: responsible for architecture. Customer: accountable for requirements. PS: consulted on migration.",
  },
  {
    name: "Stop Conditions",
    what: "When should you escalate or abandon?",
    example: "Customer can't define RPO/RTO after two sessions. Budget below minimum viable threshold.",
  },
];

const compounding = [
  {
    engagement: "1st",
    effort: "40 hours",
    note: "Built from scratch, captured in playbook",
    barWidth: "100%",
    color: "bg-red-500/40",
  },
  {
    engagement: "2nd",
    effort: "15 hours",
    note: "Playbook provided the structure, adapted to context",
    barWidth: "38%",
    color: "bg-yellow-500/40",
  },
  {
    engagement: "3rd",
    effort: "8 hours",
    note: "Playbook refined with learnings from first two",
    barWidth: "20%",
    color: "bg-accent/40",
  },
  {
    engagement: "10th",
    effort: "4 hours",
    note: "Mostly configuration. The hard thinking was done.",
    barWidth: "10%",
    color: "bg-green-500/40",
  },
];

export function Playbook() {
  return (
    <Section id="playbook" orb="blue" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Playbook
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Codified Decision Logic
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A playbook captures the decisions, not just the deliverables. It
            encodes what your best people already know: when to start, what to
            ask, what to produce, and when to stop. Every engagement that
            follows makes the playbook sharper.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
        {playbookParts.map((part, i) => (
          <ScrollReveal key={part.name} delay={i * 0.08}>
            <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 h-full">
              <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
                {part.name}
              </p>
              <p className="text-sm text-foreground mb-1">{part.what}</p>
              <p className="text-xs text-muted italic">{part.example}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
          <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-2">
            Compounding returns
          </h3>
          <p className="text-sm text-muted mb-6">
            Each engagement that uses a playbook refines it. The 10th time is
            faster than the 2nd, not because the problem got easier, but because
            the org got smarter.
          </p>
          <div className="space-y-4">
            {compounding.map((item, i) => (
              <motion.div
                key={item.engagement}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4"
              >
                <span className="text-xs font-mono text-muted w-10 shrink-0 text-right">
                  {item.engagement}
                </span>
                <div className="flex-1 h-7 bg-surface-raised rounded overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: item.barWidth }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3, duration: 0.6 }}
                    className={`h-full ${item.color} rounded flex items-center px-3`}
                  >
                    <span className="text-xs font-mono text-foreground whitespace-nowrap">
                      {item.effort}
                    </span>
                  </motion.div>
                </div>
                <span className="text-xs text-muted hidden md:block w-56">
                  {item.note}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
