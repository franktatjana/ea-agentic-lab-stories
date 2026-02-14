"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { usePlayer, type PlayerType } from "./PlayerContext";

const interfaces = [
  {
    person: "The SA",
    type: "Reader",
    playerType: "reader" as PlayerType,
    color: "text-accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/5",
    activeBorder: "border-accent/60",
    activeBg: "bg-accent/15",
    renderedAs: "Structured document",
    format: "Headings, sections, detailed text",
    depth: "Complete analysis with sources",
    length: "12 pages",
  },
  {
    person: "The AE",
    type: "Talker",
    playerType: "talker" as PlayerType,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/20",
    bgColor: "bg-yellow-500/5",
    activeBorder: "border-yellow-500/60",
    activeBg: "bg-yellow-500/15",
    renderedAs: "Conversational agent",
    format: "Interactive dialogue",
    depth: "Answers specific questions",
    length: "As long as the conversation needs",
  },
  {
    person: "The Architect",
    type: "Visual",
    playerType: "visual" as PlayerType,
    color: "text-green-400",
    borderColor: "border-green-500/20",
    bgColor: "bg-green-500/5",
    activeBorder: "border-green-500/60",
    activeBg: "bg-green-500/15",
    renderedAs: "Comparison canvas",
    format: "Side-by-side visual, feature matrix",
    depth: "Key differentiators highlighted",
    length: "One page, scannable",
  },
  {
    person: "The Engineer",
    type: "Doer",
    playerType: "doer" as PlayerType,
    color: "text-purple-400",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/5",
    activeBorder: "border-purple-500/60",
    activeBg: "bg-purple-500/15",
    renderedAs: "Scenario simulation",
    format: '"Customer says X, you respond Y"',
    depth: "Practice-oriented, example-driven",
    length: "Interactive exercise",
  },
];

export function SameKnowledge() {
  const { player } = usePlayer();

  return (
    <Section id="same-knowledge" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            One Source of Truth
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            One Truth. Many Interfaces.
          </h2>
          <p className="text-muted font-mono text-sm">
            SOURCE: Competitive positioning data (structured YAML)
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {interfaces.map((item, i) => {
          const isSelected = player === item.playerType;
          const isOther = player !== null && !isSelected;

          return (
            <ScrollReveal key={item.person} delay={0.1 + i * 0.1}>
              <div
                className={`rounded-xl border p-5 h-full transition-all ${
                  isSelected
                    ? `${item.activeBorder} ${item.activeBg} scale-[1.02] ring-1 ring-${item.color.replace("text-", "")}/30`
                    : isOther
                    ? `${item.borderColor} ${item.bgColor} opacity-50`
                    : `${item.borderColor} ${item.bgColor}`
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <p
                    className={`font-mono text-xs uppercase tracking-widest ${item.color}`}
                  >
                    For {item.person} ({item.type})
                  </p>
                  {isSelected && (
                    <span className={`text-xs font-mono ${item.color}`}>
                      \u2190 you
                    </span>
                  )}
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="flex justify-between gap-2">
                    <span className="text-muted">Rendered as</span>
                    <span className="text-foreground text-right">
                      {item.renderedAs}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted">Format</span>
                    <span className="text-foreground text-right">
                      {item.format}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted">Depth</span>
                    <span className="text-foreground text-right">
                      {item.depth}
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted">Length</span>
                    <span className={`font-bold text-right ${item.color}`}>
                      {item.length}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 text-center space-y-2">
          <p className="text-muted">
            Same data. Same accuracy. Same source of truth.
          </p>
          <p className="text-foreground text-xl font-bold">
            Four people actually using it.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
