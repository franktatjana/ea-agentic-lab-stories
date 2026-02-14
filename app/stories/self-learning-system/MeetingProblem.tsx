"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const knowledgeCreated = [
  "Customer pain points articulated",
  "Technical requirements clarified",
  "Decision timeline confirmed",
  "Stakeholder dynamics revealed",
  "Competitive landscape mentioned",
  "Budget signals detected",
];

export function MeetingProblem() {
  return (
    <Section id="meeting-problem" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Problem
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Every Meeting Creates Knowledge.
            <br />
            <span className="text-red-400">None of It Survives.</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12">
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-muted font-mono">
                DISCOVERY CALL COMPLETED
              </span>
              <span className="ml-auto text-xs text-muted font-mono">
                Duration: 45 minutes
              </span>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-mono text-accent">
                  Knowledge created:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {knowledgeCreated.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="text-green-400">+</span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-4">
                <div className="space-y-1">
                  <p className="text-sm font-mono text-red-400">
                    Knowledge captured:
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="text-sm text-muted ml-4"
                  >
                    &quot;Good meeting&quot;{" "}
                    <span className="text-muted/60">
                      (in Salesforce notes)
                    </span>
                  </motion.p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-mono text-red-400">
                    Knowledge available for next SA:
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2 }}
                    className="text-sm text-muted ml-4"
                  >
                    None
                  </motion.p>
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-mono text-red-400">
                    Knowledge available for system learning:
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="text-sm text-muted ml-4"
                  >
                    None
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-8 text-center">
          <p className="text-lg text-muted">
            6 insights created.{" "}
            <span className="text-red-400 font-bold">0 captured.</span>
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
