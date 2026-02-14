"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { usePlayer, type PlayerType } from "./PlayerContext";

const players: {
  type: PlayerType;
  label: string;
  icon: string;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
  preference: string;
}[] = [
  {
    type: "reader",
    label: "Reader",
    icon: "\uD83D\uDCD6",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/10",
    description: "You process information by reading",
    preference: "Give me the document",
  },
  {
    type: "talker",
    label: "Talker",
    icon: "\uD83D\uDCAC",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/10",
    description: "You process information through conversation",
    preference: "Just explain it to me",
  },
  {
    type: "visual",
    label: "Visual",
    icon: "\uD83D\uDCC8",
    color: "text-green-400",
    borderColor: "border-green-500/30",
    bgColor: "bg-green-500/10",
    description: "You process information through diagrams",
    preference: "Show me a picture",
  },
  {
    type: "doer",
    label: "Doer",
    icon: "\uD83D\uDEE0\uFE0F",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgColor: "bg-purple-500/10",
    description: "You process information by doing",
    preference: "Let me try it",
  },
];

export function PlayerSelect() {
  const { player, setPlayer } = usePlayer();

  return (
    <Section id="player-select" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Choose Your Path
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            How Do You Think?
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Pick the one that feels most like you.
            The rest of this story will adapt.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 gap-4">
        {players.map((p, i) => (
          <ScrollReveal key={p.type} delay={0.1 + i * 0.05}>
            <button
              onClick={() => setPlayer(p.type)}
              className={`w-full rounded-xl border p-5 md:p-6 text-left transition-all ${
                player === p.type
                  ? `${p.borderColor} ${p.bgColor} scale-[1.02]`
                  : player === null
                  ? "border-border bg-surface hover:border-accent/30 hover:bg-surface/80"
                  : "border-border/50 bg-surface/50 opacity-50"
              }`}
            >
              <div className="space-y-2">
                <span className="text-3xl">{p.icon}</span>
                <p className={`font-bold text-lg ${player === p.type ? p.color : "text-foreground"}`}>
                  {p.label}
                </p>
                <p className="text-sm text-muted">{p.description}</p>
                <p className="text-xs font-mono text-muted italic">
                  &quot;{p.preference}&quot;
                </p>
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <AnimatePresence>
        {player && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center space-y-2"
          >
            <p className="text-foreground font-mono">
              Got it. You&apos;re a{" "}
              <span className={players.find((p) => p.type === player)?.color}>
                {players.find((p) => p.type === player)?.label}
              </span>.
            </p>
            <p className="text-muted text-sm">
              Scroll to see this story adapt to you.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
