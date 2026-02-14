"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const people = [
  {
    name: "John",
    knowledge: ["Competitive displacement wins", "Security objections", "ACME account history"],
    status: "Vacation",
    available: false,
  },
  {
    name: "Sarah",
    knowledge: ["Enterprise procurement process", "Legal review acceleration", "Executive alignment"],
    status: "In calls",
    available: false,
  },
  {
    name: "EMEA Team",
    knowledge: ["GDPR compliance patterns", "UK account relationships", "Healthcare vertical"],
    status: "Offline",
    available: false,
  },
];

export function KnowledgeMap() {
  return (
    <Section id="knowledge-map" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Problem
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Where Your Knowledge Actually Lives
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {people.map((p, i) => (
          <ScrollReveal key={p.name} delay={i * 0.15}>
            <div className="rounded-xl border border-border bg-surface p-6 space-y-4 h-full">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{p.name}</h3>
                <span className="text-xs font-mono px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                  {p.status}
                </span>
              </div>
              <ul className="space-y-2">
                {p.knowledge.map((k) => (
                  <li key={k} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-red-400 shrink-0">&#x2715;</span>
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl border border-border bg-surface/50 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">0%</div>
            <div className="text-xs text-muted mt-1">Knowledge accessible</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-muted">Scattered</div>
            <div className="text-xs text-muted mt-1">Documentation</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400">Everyone</div>
            <div className="text-xs text-muted mt-1">Single points of failure</div>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
