"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const losses = [
  {
    knowledge: "Why ACME deal almost failed in 2022",
    consequence: "New ACME deal mishandled in 2024",
    result: "$400K deal lost to preventable issue",
  },
  {
    knowledge: "Competitive positioning refined over 50 deals",
    consequence: "Team rebuilt from scratch",
    result: "6 months of suboptimal win rates",
  },
  {
    knowledge: "Key procurement contact at Globex",
    consequence: "Deal delayed 3 months finding new path",
    result: "Slipped from Q4 to Q1, missed target",
  },
  {
    knowledge: "Unwritten rules for security questionnaire responses",
    consequence: "Three deals flagged by legal (avoidable)",
    result: "4 weeks delay per deal",
  },
];

export function RealCost() {
  return (
    <Section id="real-cost" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Ripple Effect
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The Compounding Loss
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4">
        <ScrollReveal>
          <p className="text-muted text-center mb-8">John knew:</p>
        </ScrollReveal>

        {losses.map((loss, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 font-mono text-sm">
              <div className="flex flex-col gap-2">
                <p className="text-foreground">{loss.knowledge}</p>
                <p className="text-muted pl-4">&rarr; {loss.consequence}</p>
                <p className="text-red-400 pl-8">&rarr; {loss.result}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.4}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 mt-4 text-center space-y-2">
            <p className="text-sm text-muted">Estimated impact of one departure:</p>
            <p className="text-3xl font-bold text-red-400 md:text-4xl">$1.2M</p>
            <p className="text-sm text-muted">
              And John wasn&apos;t even your only expert.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
