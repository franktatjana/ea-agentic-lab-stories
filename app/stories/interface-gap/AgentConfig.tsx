"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { usePlayer, type PlayerType } from "./PlayerContext";

const communicationOptions = [
  "Conversational",
  "Written summary",
  "Visual/Canvas",
  "Structured data",
];
const lengthOptions = ["Brief", "Detailed", "Comprehensive"];
const proactiveOptions = ["Yes, notify me", "No, I'll ask"];

const playerDefaults: Record<
  string,
  { comm: number; length: number; proactive: number; role: string }
> = {
  reader: { comm: 1, length: 2, proactive: 1, role: "Solutions Architect" },
  talker: { comm: 0, length: 0, proactive: 0, role: "Account Executive" },
  visual: { comm: 2, length: 0, proactive: 0, role: "Solutions Architect" },
  doer: { comm: 3, length: 1, proactive: 1, role: "Sales Engineer" },
};

const interactions = [
  { label: "Meeting prep", value: "Send briefing 1hr before" },
  { label: "Meeting follow-up", value: "Ask for voice debrief" },
  { label: "Updates", value: "Daily digest, conversational" },
  { label: "Alerts", value: "Immediate for high-risk signals" },
];

function RadioGroup({
  options,
  selected,
  onChange,
}: {
  options: string[];
  selected: number;
  onChange: (i: number) => void;
}) {
  return (
    <div className="space-y-1">
      {options.map((opt, i) => (
        <button
          key={opt}
          onClick={() => onChange(i)}
          className={`block w-full text-left px-3 py-1.5 rounded-lg text-sm font-mono transition-colors ${
            i === selected
              ? "bg-accent/10 border border-accent/30 text-accent"
              : "text-muted hover:text-foreground hover:bg-surface"
          }`}
        >
          {i === selected ? "\u25C9 " : "\u25CB "}
          {opt}
        </button>
      ))}
    </div>
  );
}

export function AgentConfig() {
  const { player } = usePlayer();
  const defaults = playerDefaults[player ?? "talker"];

  const [commStyle, setCommStyle] = useState(defaults.comm);
  const [length, setLength] = useState(defaults.length);
  const [proactive, setProactive] = useState(defaults.proactive);

  useEffect(() => {
    if (player && playerDefaults[player]) {
      const d = playerDefaults[player];
      setCommStyle(d.comm);
      setLength(d.length);
      setProactive(d.proactive);
    }
  }, [player]);

  const roleLabel = defaults.role;

  const playerLabels: Record<string, { name: string; color: string }> = {
    reader: { name: "The SA", color: "text-accent" },
    talker: { name: "The AE", color: "text-yellow-400" },
    visual: { name: "The Architect", color: "text-green-400" },
    doer: { name: "The Engineer", color: "text-purple-400" },
  };

  const current = playerLabels[player ?? "talker"];

  return (
    <Section id="agent-config" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Personalization
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Your Agent Adapts to You
          </h2>
          {player && (
            <p className="text-muted text-sm font-mono">
              Pre-configured for your style. Try changing the options.
            </p>
          )}
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-6">
        <ScrollReveal delay={0.1}>
          <div className="rounded-xl border border-border bg-surface overflow-hidden">
            <div className="border-b border-border px-4 py-2">
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Agent Configuration:{" "}
                <span className={current.color}>{current.name}</span>
              </span>
            </div>

            <div className="p-5 md:p-6 space-y-6">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-mono text-foreground font-bold mb-2">
                    Communication Style
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-muted mb-1">Preferred mode</p>
                      <RadioGroup
                        options={communicationOptions}
                        selected={commStyle}
                        onChange={setCommStyle}
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Response length</p>
                      <RadioGroup
                        options={lengthOptions}
                        selected={length}
                        onChange={setLength}
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Proactive updates</p>
                      <RadioGroup
                        options={proactiveOptions}
                        selected={proactive}
                        onChange={setProactive}
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-mono text-foreground font-bold mb-3">
                    Work Context
                  </p>
                  <div className="grid grid-cols-2 gap-2 font-mono text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-muted">Role</span>
                      <span className="text-foreground text-right">
                        {roleLabel}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted">Accounts</span>
                      <span className="text-foreground text-right">
                        Prospect Corp, Globex, ACME
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted">Domains</span>
                      <span className="text-foreground text-right">
                        Security, Observability
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-muted">Experience</span>
                      <span className="text-foreground text-right">
                        Senior (skip basics)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-sm font-mono text-foreground font-bold mb-3">
                    Interaction Preferences
                  </p>
                  <div className="space-y-2 font-mono text-sm">
                    {interactions.map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between gap-2"
                      >
                        <span className="text-muted">{item.label}</span>
                        <span className="text-accent text-right">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${commStyle}-${length}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-center space-y-2"
            >
              <p className="text-muted">
                Your agent adapts to how you think.
              </p>
              <p className="text-muted">
                Every team member gets the same system.
              </p>
              <p className="text-foreground font-bold">
                Each one gets a personalized interface.
              </p>
            </motion.div>
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </Section>
  );
}
