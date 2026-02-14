"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const without = [
  { time: "Monday", text: 'Where\'s the competitive battlecard John maintained?' },
  { time: "Tuesday", text: "Who knows why ACME deal almost failed?" },
  { time: "Week 2", text: "We need to rebuild competitive positioning" },
  { time: "Month 2", text: "Still finding gaps in what we don't know" },
  { time: "Month 6", text: "We've mostly recovered. Mostly." },
];

const withSystem = [
  { time: "Monday", text: "Knowledge remains in vault" },
  { time: "Tuesday", text: 'Search "ACME history" \u2192 full context' },
  { time: "Week 2", text: "Competitive positioning unchanged (it's in the system)" },
  { time: "Month 2", text: "New SA onboarded using John's documented patterns" },
  { time: "Month 6", text: "System has learned from 20 more deals since John left" },
];

export function Contrast() {
  return (
    <Section id="contrast" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Two Outcomes
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            John leaves. What happens?
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 space-y-4 h-full">
            <h3 className="font-bold text-lg text-red-400">Without System</h3>
            <div className="space-y-3">
              {without.map((item) => (
                <div key={item.time} className="flex gap-3 text-sm">
                  <span className="text-muted font-mono shrink-0 w-20">{item.time}</span>
                  <span className="text-muted">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4 space-y-1 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Cost</span>
                <span className="text-red-400 font-bold">$1.2M+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Recovery</span>
                <span className="text-red-400">6+ months</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 space-y-4 h-full">
            <h3 className="font-bold text-lg text-accent">With Knowledge Vault</h3>
            <div className="space-y-3">
              {withSystem.map((item) => (
                <div key={item.time} className="flex gap-3 text-sm">
                  <span className="text-muted font-mono shrink-0 w-20">{item.time}</span>
                  <span className="text-muted">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-1 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Knowledge loss</span>
                <span className="text-accent font-bold">Zero</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Disruption</span>
                <span className="text-accent">None</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
