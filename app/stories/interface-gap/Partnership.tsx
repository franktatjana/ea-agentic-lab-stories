"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const agentBecomes = [
  "Your prep partner before calls",
  "Your debrief listener after calls",
  "Your memory across all engagements",
  "Your interface to organizational knowledge",
];

export function Partnership() {
  return (
    <Section id="partnership" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            A New Model
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Not a Tool. A Partner.
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Old model */}
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 h-full space-y-6">
            <h3 className="font-bold text-lg text-red-400 font-mono">
              The Old Model
            </h3>
            <div className="font-mono text-sm space-y-3 text-center">
              <p className="text-foreground">You</p>
              <p className="text-muted">&darr;</p>
              <p className="text-foreground">System</p>
              <p className="text-muted">&darr;</p>
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 px-4 py-2">
                <p className="text-muted">Static output</p>
              </div>
              <p className="text-muted">&darr;</p>
              <p className="text-muted text-xs">
                You figure out what to do with it
              </p>
            </div>
            <div className="border-t border-red-500/20 pt-4 text-center">
              <p className="text-sm text-red-400 font-mono">
                One-directional. Passive. Generic.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Agent model */}
        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 h-full space-y-6">
            <h3 className="font-bold text-lg text-accent font-mono">
              The Agent Model
            </h3>
            <div className="font-mono text-sm space-y-3 text-center">
              <div className="flex items-center justify-center gap-3">
                <p className="text-foreground">You</p>
                <p className="text-accent">&larr;&rarr;</p>
                <p className="text-accent font-bold">Your Agent</p>
              </div>
              <div className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-left space-y-1">
                <p className="text-muted text-xs">Knows your accounts</p>
                <p className="text-muted text-xs">Knows your style</p>
                <p className="text-muted text-xs">Knows your priorities</p>
                <p className="text-muted text-xs">Adapts to how you think</p>
              </div>
              <p className="text-muted">&darr;</p>
              <div className="rounded-lg border border-accent/20 bg-accent/5 px-4 py-2">
                <p className="text-accent">Personalized collaboration</p>
              </div>
              <div className="flex items-center justify-center gap-6 text-xs">
                <span className="text-foreground">You: decide</span>
                <span className="text-muted">Agent: supports, captures, learns</span>
              </div>
            </div>
            <div className="border-t border-accent/20 pt-4 text-center">
              <p className="text-sm text-accent font-mono">
                Bi-directional. Active. Personal.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-10 space-y-4">
          <p className="text-center text-muted text-sm font-mono mb-4">
            Your agent becomes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {agentBecomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-border bg-surface p-3 text-center"
              >
                <p className="text-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center pt-4 space-y-1">
            <p className="text-accent font-mono text-sm">
              Speaking your language.
            </p>
            <p className="text-foreground font-bold">Working your way.</p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
