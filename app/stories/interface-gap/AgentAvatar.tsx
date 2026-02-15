"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { usePlayer } from "./PlayerContext";

function TalkerView() {
  const conversation = [
    { speaker: "ae", text: "What's our positioning against the incumbent?" },
    {
      speaker: "agent",
      text: "For the Prospect Corp deal specifically, or general positioning?",
    },
    {
      speaker: "ae",
      text: "Prospect Corp. They mentioned a competitor yesterday.",
    },
    {
      speaker: "agent",
      text: `Got it. Three key points for Prospect Corp:

First \u2014 they're concerned about cost. The competitor's pricing model will likely exceed budget at their data volume. We have two case studies where similar customers saw 40% cost reduction.

Second \u2014 their security team has concerns about data residency. The competitor's regional options are limited. We should lead with our deployment flexibility.

Third \u2014 the integration with their existing monitoring investment. We can run alongside during migration, the competitor requires full replacement.

Want me to set up talking points for your next call?`,
    },
    { speaker: "ae", text: "Yes, and remind me before the Thursday meeting." },
    {
      speaker: "agent",
      text: "Done. I'll send a brief Wednesday evening and a reminder Thursday morning. Anything else?",
    },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="border-b border-border px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
        <span className="ml-2 text-xs text-muted font-mono">
          Conversational Mode
        </span>
      </div>
      <div className="p-5 md:p-6 space-y-4">
        {conversation.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
            className={`flex ${
              msg.speaker === "ae" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
                msg.speaker === "ae"
                  ? "bg-accent/10 border border-accent/20"
                  : "bg-surface border border-border"
              } text-foreground`}
            >
              <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ReaderView() {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="border-b border-border px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-accent/60" />
        <span className="ml-2 text-xs text-muted font-mono">
          Structured Briefing
        </span>
      </div>
      <div className="p-6 font-mono text-sm space-y-5">
        <div>
          <p className="text-accent font-bold">COMPETITIVE POSITIONING: Prospect Corp</p>
          <p className="text-xs text-muted mt-1">
            Generated from engagement vault | Updated today
          </p>
        </div>

        <div className="border-t border-border pt-4 space-y-3">
          <div>
            <p className="text-foreground font-bold">1. Cost Advantage</p>
            <p className="text-muted mt-1">
              Competitor pricing model exceeds budget at target data volumes.
              Two reference case studies show 40% cost reduction with our
              platform.
            </p>
          </div>
          <div>
            <p className="text-foreground font-bold">2. Data Residency</p>
            <p className="text-muted mt-1">
              Customer security team flagged data residency concerns.
              Competitor regional options limited. Lead with deployment
              flexibility.
            </p>
          </div>
          <div>
            <p className="text-foreground font-bold">3. Migration Path</p>
            <p className="text-muted mt-1">
              Existing monitoring investment can be preserved. Our platform
              runs alongside during migration; competitor requires full
              replacement.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <p className="text-accent">Recommended actions:</p>
          <p className="text-muted mt-1">
            - Prepare cost comparison for Thursday meeting
          </p>
          <p className="text-muted">
            - Request intro to security team lead
          </p>
        </div>
      </div>
    </div>
  );
}

function VisualView() {
  const features = [
    { label: "Cost at scale", us: "Predictable", them: "Exceeds budget", advantage: true },
    { label: "Data residency", us: "Flexible regions", them: "Limited", advantage: true },
    { label: "Migration", us: "Run alongside", them: "Full replacement", advantage: true },
    { label: "Market presence", us: "Growing", them: "Established", advantage: false },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="border-b border-border px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-400/60" />
        <span className="ml-2 text-xs text-muted font-mono">
          Comparison Canvas
        </span>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-3 gap-3 mb-4 font-mono text-xs text-muted">
          <div />
          <div className="text-center text-accent font-bold">Us</div>
          <div className="text-center text-red-400 font-bold">Competitor</div>
        </div>
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="grid grid-cols-3 gap-3 py-3 border-t border-border"
          >
            <p className="text-sm text-muted font-mono">{f.label}</p>
            <div
              className={`text-center text-sm rounded-lg px-2 py-1 ${
                f.advantage
                  ? "bg-green-500/10 text-green-400"
                  : "bg-surface text-muted"
              }`}
            >
              {f.us}
            </div>
            <div
              className={`text-center text-sm rounded-lg px-2 py-1 ${
                !f.advantage
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {f.them}
            </div>
          </motion.div>
        ))}
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-sm text-green-400 font-mono">
            3 of 4 dimensions in our favor
          </p>
        </div>
      </div>
    </div>
  );
}

function DoerView() {
  const [selected, setSelected] = useState<number | null>(null);

  const scenario = {
    prompt:
      'Customer says: "We\'re also looking at a competitor. Their platform seems more established."',
    options: [
      {
        label: "Acknowledge and redirect to cost",
        response:
          "That's fair, they've been around longer. But let me share what our customers at similar scale found about total cost of ownership. Two companies your size saw 40% lower costs with us.",
        quality: "strong",
      },
      {
        label: "Dismiss the competitor",
        response:
          "They have a lot of issues. I wouldn't recommend them.",
        quality: "weak",
      },
      {
        label: "Ask about their priorities",
        response:
          "Good to know. What matters most to your team in this evaluation: cost, deployment flexibility, or migration complexity? That'll help me show you where we differ most.",
        quality: "strong",
      },
    ],
  };

  return (
    <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 overflow-hidden">
      <div className="border-b border-purple-500/20 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-purple-400/60" />
        <span className="ml-2 text-xs text-muted font-mono">
          Scenario Practice
        </span>
      </div>
      <div className="p-6 space-y-4">
        <div className="rounded-lg bg-surface border border-border p-4">
          <p className="text-sm text-foreground">{scenario.prompt}</p>
        </div>

        <p className="text-xs font-mono text-purple-400">
          How do you respond? Pick one:
        </p>

        <div className="space-y-2">
          {scenario.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left rounded-xl border p-4 transition-all ${
                selected === i
                  ? opt.quality === "strong"
                    ? "border-green-500/30 bg-green-500/10"
                    : "border-red-500/30 bg-red-500/10"
                  : "border-border bg-surface hover:border-purple-500/30"
              }`}
            >
              <p className="text-sm text-foreground">{opt.label}</p>
              <AnimatePresence>
                {selected === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="mt-3 pt-3 border-t border-border"
                  >
                    <p className="text-xs text-muted mb-2">
                      {opt.quality === "strong"
                        ? "Strong response:"
                        : "Weak response:"}
                    </p>
                    <p className="text-sm text-foreground italic">
                      &quot;{opt.response}&quot;
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs text-muted text-center pt-2"
            >
              This scenario was generated from competitive intel in the vault.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function AgentAvatar() {
  const { player } = usePlayer();

  const modeLabels: Record<string, string> = {
    reader: "Structured Briefing",
    talker: "Conversation",
    visual: "Comparison Canvas",
    doer: "Scenario Practice",
  };

  return (
    <Section id="agent-avatar" className="border-t border-border" orb="blue" orbPosition="left">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Solution
          </p>
          <h2 className="text-3xl font-bold md:text-5xl text-gradient">
            Your Agent. Your Way.
          </h2>
          {player && (
            <p className="text-muted text-sm font-mono">
              Showing: {modeLabels[player]} mode
            </p>
          )}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={player ?? "default"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {player === "visual" ? (
                <VisualView />
              ) : player === "doer" ? (
                <DoerView />
              ) : player === "talker" ? (
                <TalkerView />
              ) : (
                <ReaderView />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Same intelligence as", value: "12-page doc" },
            { label: "Delivered through", value: player ? modeLabels[player].toLowerCase() : "your format" },
            { label: "Retained", value: "significantly higher" },
            { label: "Time", value: "2 minutes" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface p-3 text-center space-y-1"
            >
              <div className="text-sm font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
