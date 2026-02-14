"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const processingSteps = [
  "Extracting stakeholders...",
  "Identifying decision dynamics...",
  "Logging competitive intel...",
  "Detecting risk signals...",
  "Creating action items...",
  "Updating customer vault...",
];

const artifacts = [
  {
    icon: "\u2713",
    title: "Stakeholder map updated",
    details: [
      "Engineering Lead, Contact",
      "CTO, Decision Maker",
    ],
  },
  {
    icon: "\u2713",
    title: "Competitive intel captured",
    details: [
      "Alternative vendor in evaluation",
      "Incumbent SIEM: cost concern (40% over)",
    ],
  },
  {
    icon: "\u2713",
    title: "Risk flagged",
    details: [
      "Decision maker not yet engaged",
      "Multi-vendor evaluation active",
    ],
  },
  {
    icon: "\u2713",
    title: "Actions created",
    details: [
      "Schedule technical deep-dive",
      "Request intro to CTO",
    ],
  },
  {
    icon: "\u2713",
    title: "Vault updated",
    details: [
      "Full context now searchable",
      "Available to any team member",
    ],
  },
];

export function PostMeeting() {
  return (
    <Section id="post-meeting" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            After the Meeting
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            5 Minutes That Capture Everything
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        {/* Voice debrief */}
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-3 text-xs text-muted font-mono">
                post-meeting debrief
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-4">
              <div className="space-y-1">
                <p className="text-accent text-xs uppercase tracking-widest">
                  You (voice or text):
                </p>
                <p className="text-foreground mt-2 leading-relaxed">
                  &quot;Good call with Prospect Corp. Met with the
                  engineering lead, but the real decision maker is their CTO
                  who wasn&apos;t on the call. They&apos;re frustrated with
                  their current SIEM costs, 40% over budget. Timeline is Q3 because
                  that&apos;s when renewal hits. They mentioned another vendor is also
                  in the conversation. Need to schedule technical deep-dive
                  next week.&quot;
                </p>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <p className="text-muted">Agent processes:</p>
                <div className="ml-4 space-y-1">
                  {processingSteps.map((step, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="text-muted"
                    >
                      {i < processingSteps.length - 1 ? "├──" : "└──"}{" "}
                      <span className="text-green-400">{step}</span>
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Artifacts output */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 overflow-hidden">
            <div className="border-b border-accent/20 px-4 py-2">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Meeting Artifacts Generated
              </span>
            </div>

            <div className="p-6 font-mono text-sm space-y-5">
              {artifacts.map((artifact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="space-y-1"
                >
                  <p className="text-green-400 font-bold">
                    {artifact.icon} {artifact.title}
                  </p>
                  {artifact.details.map((detail, j) => (
                    <p key={j} className="ml-6 text-muted">
                      - {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center space-y-2">
            <p className="text-lg font-mono">
              Your time:{" "}
              <span className="text-accent font-bold">5 minutes talking</span>
            </p>
            <p className="text-lg font-mono">
              System captured:{" "}
              <span className="text-accent font-bold">everything</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
