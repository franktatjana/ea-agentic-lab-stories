"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  { label: "Structured playbooks", value: "61" },
  { label: "Role-specific configurations", value: "SA, AE, CSM, Specialist" },
  { label: "Searchable knowledge base", value: "Instant access" },
  { label: "Every engagement", value: "Captured, searchable, reusable" },
];

export function FrameworkDemo() {
  return (
    <Section id="demo" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The System
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">How It Works</h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-8">
        {/* Terminal-style demo */}
        <ScrollReveal>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                ea-agentic-lab
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-1">
                <p className="text-accent">$ search &quot;discovery framework&quot;</p>
                <p className="text-muted mt-2">Searching InfoHub...</p>
                <p className="text-foreground mt-2">
                  Found: <span className="text-accent">PB_201: Technical Discovery Framework</span>
                </p>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-muted">Playbook Details:</p>
                <div className="ml-4 space-y-1 text-muted">
                  <p>Type: Discovery</p>
                  <p>Role: SA</p>
                  <p>Used in: <span className="text-foreground">47 engagements</span></p>
                  <p>Win rate when applied: <span className="text-accent">72%</span></p>
                  <p>Average time saved: <span className="text-accent">4.2 hours per engagement</span></p>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-muted">Related playbooks:</p>
                <div className="ml-4 space-y-1">
                  <p className="text-foreground">&bull; PB_101: Stakeholder Mapping</p>
                  <p className="text-foreground">&bull; PB_102: Incumbent Pain Analysis</p>
                  <p className="text-foreground">&bull; PB_301: Competitive Positioning</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="rounded-xl border border-border bg-surface p-4 text-center space-y-2"
              >
                <div className="text-lg font-bold text-accent">{f.value}</div>
                <div className="text-xs text-muted">{f.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
