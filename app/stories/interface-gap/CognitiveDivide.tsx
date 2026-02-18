"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const types = [
  {
    label: "Readers",
    count: 3,
    color: "text-accent",
    barColor: "bg-accent/60",
    borderColor: "border-accent/40",
    process: "Process information by reading",
    prefer: "Documents, structured text, written briefs",
    will: 'Will read: The 20-page architecture doc',
    photos: [
      "https://i.pravatar.cc/64?img=11",
      "https://i.pravatar.cc/64?img=5",
      "https://i.pravatar.cc/64?img=24",
    ],
  },
  {
    label: "Talkers",
    count: 3,
    color: "text-yellow-400",
    barColor: "bg-yellow-400/60",
    borderColor: "border-yellow-500/40",
    process: "Process information through conversation",
    prefer: "Discussions, verbal explanations, Q&A",
    will: 'Will say: "Can someone just explain this to me?"',
    photos: [
      "https://i.pravatar.cc/64?img=32",
      "https://i.pravatar.cc/64?img=44",
      "https://i.pravatar.cc/64?img=38",
    ],
  },
  {
    label: "Visual Thinkers",
    count: 2,
    color: "text-green-400",
    barColor: "bg-green-400/60",
    borderColor: "border-green-500/40",
    process: "Process information through diagrams",
    prefer: "Charts, flows, spatial relationships",
    will: 'Will ask: "Is there a picture of this?"',
    photos: [
      "https://i.pravatar.cc/64?img=60",
      "https://i.pravatar.cc/64?img=56",
    ],
  },
  {
    label: "Doers",
    count: 2,
    color: "text-purple-400",
    barColor: "bg-purple-400/60",
    borderColor: "border-purple-500/40",
    process: "Process information by doing",
    prefer: "Hands-on, examples, trial and error",
    will: 'Will say: "Just show me how it works"',
    photos: [
      "https://i.pravatar.cc/64?img=47",
      "https://i.pravatar.cc/64?img=52",
    ],
  },
];

export function CognitiveDivide() {
  return (
    <Section id="cognitive-divide" className="border-t border-border" orb="purple" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Cognitive Divide
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Same Team. Different Minds.
          </h2>
          <p className="text-muted font-mono text-sm">YOUR TEAM OF 10</p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-4">
        {types.map((type, i) => (
          <ScrollReveal key={type.label} delay={0.1 + i * 0.1}>
            <div className="rounded-xl border border-border bg-surface p-5 md:p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex gap-1 pt-1">
                  {Array.from({ length: type.count }).map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + j * 0.1 }}
                      className={`w-3 h-8 rounded-sm ${type.barColor}`}
                    />
                  ))}
                </div>
                <div className="space-y-1 min-w-0 flex-1">
                  <p className={`font-bold ${type.color}`}>
                    {type.label} ({type.count})
                  </p>
                  <p className="text-sm text-muted">{type.process}</p>
                  <p className="text-sm text-muted">
                    Prefer: {type.prefer}
                  </p>
                  <p className="text-sm text-foreground font-mono">
                    {type.will}
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-center -space-x-2">
                  {type.photos.map((photo, j) => (
                    <motion.img
                      key={j}
                      src={photo}
                      alt=""
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + j * 0.1 }}
                      className={`w-9 h-9 rounded-full border-2 ${type.borderColor} object-cover`}
                      style={{ zIndex: type.photos.length - j }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.5}>
        <div className="mt-10 text-center space-y-2">
          <p className="text-muted text-lg">
            You created documentation for readers.
          </p>
          <p className="text-red-400 text-xl font-bold">
            You excluded 70% of your team.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
