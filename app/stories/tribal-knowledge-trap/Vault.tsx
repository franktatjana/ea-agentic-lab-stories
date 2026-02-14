"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Vault() {
  return (
    <Section id="vault" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Solution
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Knowledge That Doesn&apos;t Leave
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12">
        <ScrollReveal>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                ea-agentic-lab — Knowledge Vault
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-5">
              <p className="text-accent">KNOWLEDGE VAULT — Three-Layer Architecture</p>

              <div className="space-y-4">
                <div>
                  <p className="text-foreground">VAULT 1: Customer InfoHub</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── Solution architecture per engagement</p>
                    <p>├── Architecture Decision Records (ADRs)</p>
                    <p>├── Customer journey maps</p>
                    <p>└── Value delivery tracking</p>
                  </div>
                  <p className="ml-4 text-xs text-accent mt-1">Owner: SA (pre-sales) → CA (post-sales)</p>
                </div>

                <div>
                  <p className="text-foreground">VAULT 2: Internal Account Hub</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── Stakeholder maps &amp; relationships</p>
                    <p>├── Competitive intelligence per account</p>
                    <p>├── Risk tracking &amp; governance</p>
                    <p>└── Agent scratchpads &amp; working notes</p>
                  </div>
                  <p className="ml-4 text-xs text-accent mt-1">Vendor-only, per account</p>
                </div>

                <div>
                  <p className="text-foreground">VAULT 3: Global Knowledge Vault</p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>├── operations/ — engagement patterns, stakeholder handling</p>
                    <p>├── content/ — security, observability, search, platform</p>
                    <p>├── external/ — industry research, analyst reports</p>
                    <p>└── assets/ — reusable templates, references</p>
                  </div>
                  <p className="ml-4 text-xs text-accent mt-1">Cross-account, anonymized institutional memory</p>
                </div>
              </div>

              <div className="border-t border-border pt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-accent">24/7</p>
                  <p className="text-muted text-xs">Accessible</p>
                </div>
                <div>
                  <p className="text-accent">No</p>
                  <p className="text-muted text-xs">Individual dependency</p>
                </div>
                <div>
                  <p className="text-accent">Yes</p>
                  <p className="text-muted text-xs">Grows with every engagement</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
