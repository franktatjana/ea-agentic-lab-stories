"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function SelfLearning() {
  return (
    <Section id="self-learning" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Feedback Loop
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The System Gets Smarter
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
                ea-agentic-lab — Learning Cycle
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-1">
                <p className="text-accent">ENGAGEMENT #247 COMPLETED</p>
                <div className="ml-4 text-muted space-y-1">
                  <p>Outcome: <span className="text-green-400">Won</span></p>
                  <p>Archetype: Competitive Displacement</p>
                  <p>Vertical: Financial Services</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-muted">Extracting learnings...</p>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <p className="text-foreground">PATTERNS IDENTIFIED:</p>
                <div className="space-y-2 text-muted">
                  <div>
                    <p>&#10003; Security team engaged Week 2 (earlier than average)</p>
                    <p className="text-accent ml-4">&rarr; Updating playbook: recommend Week 2 engagement</p>
                  </div>
                  <div>
                    <p>&#10003; New procurement objection handled successfully</p>
                    <p className="text-accent ml-4">&rarr; Adding to objection library</p>
                  </div>
                  <div>
                    <p>&#10003; Architecture approach: hybrid deployment</p>
                    <p className="text-accent ml-4">&rarr; Tagging as successful pattern for regulated industries</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-foreground">VAULT UPDATED:</p>
                <div className="ml-4 text-muted space-y-1">
                  <p>Competitive playbook refined</p>
                  <p>Win rate recalculated: 68% &rarr; <span className="text-accent">69%</span></p>
                  <p>Recommended timeline adjusted</p>
                  <p>Confidence: <span className="text-accent">proposed</span> &rarr; human review &rarr; validated</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-muted">
                  Engagement #248 will start smarter than #247.
                </p>
                <p className="text-accent">No manual documentation required.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
