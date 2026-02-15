"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function LearningLoop() {
  return (
    <Section id="learning-loop" className="border-t border-border" orb="warm" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Learning Loop
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The System That Gets Smarter
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        {/* Won deal */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 overflow-hidden">
            <div className="border-b border-green-500/20 px-4 py-3 flex items-center gap-2">
              <span className="text-xs font-mono text-green-400 uppercase tracking-widest">
                Deal #247 Closed: Won
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted"
              >
                Learning Agent analyzing outcome...
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="border-t border-green-500/20 pt-4 space-y-2"
              >
                <p className="text-green-400 font-bold">PATTERN DETECTED:</p>
                <p className="text-foreground leading-relaxed">
                  &quot;CTO engaged by Week 3 correlates with 73% win rate in
                  Competitive Displacement deals. This deal: CTO engaged
                  Week 2.&quot;
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="border-t border-green-500/20 pt-4 space-y-2"
              >
                <p className="text-accent font-bold">UPDATING PLAYBOOK:</p>
                <p className="text-foreground">
                  Competitive Displacement &rarr; Discovery Phase
                </p>
                <div className="ml-4 space-y-1 text-muted">
                  <p>
                    ├── Previous:{" "}
                    <span className="text-muted">
                      &quot;Identify decision maker&quot;
                    </span>
                  </p>
                  <p>
                    └── Updated:{" "}
                    <span className="text-accent">
                      &quot;Engage executive sponsor by Week 3&quot;
                    </span>
                  </p>
                  <p className="ml-8 text-xs text-muted">
                    [Priority: CRITICAL] [Source: Win correlation from 34 deals]
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Lost deal */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 overflow-hidden">
            <div className="border-b border-red-500/20 px-4 py-3 flex items-center gap-2">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest">
                Deal #198 Closed: Lost
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted"
              >
                Learning Agent analyzing outcome...
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="border-t border-red-500/20 pt-4 space-y-2"
              >
                <p className="text-red-400 font-bold">PATTERN DETECTED:</p>
                <p className="text-foreground leading-relaxed">
                  &quot;Competitor engaged through different department without
                  detection until Week 8. Common loss pattern: 4 of last 7
                  losses.&quot;
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="border-t border-red-500/20 pt-4 space-y-3"
              >
                <div className="space-y-2">
                  <p className="text-accent font-bold">UPDATING RISK MODEL:</p>
                  <p className="text-foreground">
                    Risk Radar Agent &rarr; New trigger added:
                  </p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>
                      ├── &quot;Multi-thread detection&quot;
                    </p>
                    <p>
                      ├── Signal: Stakeholder mentions other initiatives
                    </p>
                    <p>
                      └── Action: Prompt account mapping expansion
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-accent font-bold">UPDATING PLAYBOOK:</p>
                  <p className="text-foreground">
                    All Blueprints &rarr; Week 2 checkpoint
                  </p>
                  <div className="ml-4 space-y-1 text-muted">
                    <p>
                      ├── Added:{" "}
                      <span className="text-accent">
                        &quot;Confirm no parallel vendor evaluations&quot;
                      </span>
                    </p>
                    <p>└── Source: Loss pattern analysis</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Next deal benefit */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 space-y-3">
            <p className="text-sm font-mono text-accent font-bold">
              Deal #248 will receive:
            </p>
            <div className="font-mono text-sm space-y-1 text-foreground">
              <p>- Updated playbook with new critical step</p>
              <p>- Risk detection for multi-thread pattern</p>
              <p>- Benchmark: CTO engagement by Week 3</p>
            </div>
            <div className="border-t border-accent/20 pt-4 space-y-2 text-center">
              <p className="text-muted">The system learned from losses.</p>
              <p className="text-foreground font-semibold">
                The next SA benefits automatically.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
