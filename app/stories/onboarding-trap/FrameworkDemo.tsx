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

        {/* Onboarding Blueprint */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                blueprint — SA Onboarding
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-1">
                <p className="text-accent">BLUEPRINT: SA Onboarding — Structured Track</p>
                <p className="text-muted text-xs mt-1">Replaces 90-day unstructured ramp with guided playbook sequence</p>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div>
                  <p className="text-foreground">WEEK 1-2: Foundation</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── PB_001: Organization &amp; Tool Orientation</p>
                    <p>├── PB_002: Product Knowledge Essentials</p>
                    <p>└── PB_003: InfoHub &amp; Knowledge Vault Walkthrough</p>
                  </div>
                </div>

                <div>
                  <p className="text-foreground">WEEK 3-4: Skill Building</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── PB_101: Stakeholder Mapping</p>
                    <p>├── PB_201: Technical Discovery Framework</p>
                    <p>└── PB_301: Competitive Positioning Basics</p>
                  </div>
                </div>

                <div>
                  <p className="text-foreground">WEEK 5-8: Guided Engagements</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── PB_102: Qualification Criteria Checklist</p>
                    <p>├── PB_202: Architecture Assessment Template</p>
                    <p>└── PB_401: First Solo Engagement Runbook</p>
                  </div>
                </div>

                <div>
                  <p className="text-foreground">WEEK 9-12: Independence</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── PB_103: Business Case Development</p>
                    <p>├── PB_402: Deal Review Self-Assessment</p>
                    <p>└── PB_403: Knowledge Contribution Guide</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 text-muted">
                <p>Onboarding is not a calendar. <span className="text-accent">It&apos;s a blueprint.</span></p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <ScrollReveal delay={0.2}>
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
