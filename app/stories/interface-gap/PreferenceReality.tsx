"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { usePlayer } from "./PlayerContext";

const retentionData = [
  { method: "Reading alone", percent: 10, color: "bg-red-400" },
  { method: "Hearing alone", percent: 20, color: "bg-orange-400" },
  { method: "Seeing (visual)", percent: 30, color: "bg-yellow-400" },
  { method: "Discussing", percent: 50, color: "bg-green-400" },
  { method: "Doing / experiencing", percent: 75, color: "bg-accent" },
  { method: "Teaching / explaining", percent: 90, color: "bg-accent" },
];

function ReaderView() {
  return (
    <>
      <ScrollReveal delay={0.1}>
        <div className="mt-12 rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-6">
            How people actually retain information
          </p>
          <div className="space-y-4">
            {retentionData.map((item, i) => (
              <div key={item.method} className="space-y-1">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-muted">{item.method}</span>
                  <span
                    className={
                      item.percent <= 10
                        ? "text-red-400 font-bold"
                        : "text-foreground"
                    }
                  >
                    {item.percent}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="mt-8 text-center space-y-2">
          <p className="text-muted">
            Your documentation assumes everyone learns by reading.
          </p>
          <p className="text-3xl font-bold text-red-400">10% retention.</p>
          <p className="text-muted pt-2">
            They didn&apos;t ignore it. The format ignored them.
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}

function TalkerView() {
  return (
    <>
      <ScrollReveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 gap-4">
          {/* Reading = low retention */}
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 flex flex-col items-center justify-center text-center space-y-3">
            <div className="text-4xl">📄</div>
            <p className="text-5xl md:text-6xl font-bold text-red-400">10%</p>
            <p className="text-sm text-muted font-mono">Reading a doc</p>
          </div>
          {/* Conversation = high retention */}
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6 flex flex-col items-center justify-center text-center space-y-3">
            <div className="text-4xl">🗣️</div>
            <p className="text-5xl md:text-6xl font-bold text-green-400">50%</p>
            <p className="text-sm text-muted font-mono">Having a conversation</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-6">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/128?img=32"
              alt=""
              className="w-16 h-16 rounded-full border-2 border-yellow-500/30 object-cover shrink-0"
            />
            <div className="space-y-1">
              <p className="text-foreground font-bold">
                A face activates mirror neurons.
              </p>
              <p className="text-muted text-sm">
                Builds trust. Increases retention even further.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div className="mt-8 text-center space-y-2">
          <p className="text-muted">
            &quot;Can you just explain this to me?&quot;
          </p>
          <p className="text-yellow-400 font-bold text-lg">
            Not lazy. Neurologically smart.
          </p>
          <p className="text-muted text-sm pt-1">
            Give them a face, not a cursor.
          </p>
        </div>
      </ScrollReveal>
    </>
  );
}

function VisualView() {
  return (
    <ScrollReveal delay={0.1}>
      <div className="mt-12 space-y-6">
        <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-6">
            Retention by method
          </p>
          <div className="flex items-end justify-between gap-2 h-64">
            {retentionData.map((item, i) => (
              <motion.div
                key={item.method}
                initial={{ height: 0 }}
                animate={{ height: Math.round((item.percent / 100) * 256) }}
                transition={{
                  delay: 0.2 + i * 0.1,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                style={{ minWidth: 0 }}
                className={`flex-1 rounded-t-lg ${item.color} relative`}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono font-bold text-foreground">
                  {item.percent}%
                </span>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between gap-2 mt-3 border-t border-border pt-3">
            {retentionData.map((item) => (
              <div key={item.method} className="flex-1 text-center">
                <p className="text-[10px] text-muted leading-tight">
                  {item.method.split(" ")[0]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-center">
            <p className="text-3xl font-bold text-red-400">10%</p>
            <p className="text-xs text-muted mt-1">Reading</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 text-center">
            <p className="text-3xl font-bold text-foreground">5x</p>
            <p className="text-xs text-muted mt-1">Gap</p>
          </div>
          <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 text-center">
            <p className="text-3xl font-bold text-green-400">50%</p>
            <p className="text-xs text-muted mt-1">Discussing</p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function DoerView() {
  const [revealed, setRevealed] = useState<number[]>([]);

  const guesses = [
    { method: "Reading alone", percent: 10 },
    { method: "Discussing", percent: 50 },
    { method: "Doing / experiencing", percent: 75 },
  ];

  return (
    <ScrollReveal delay={0.1}>
      <div className="mt-12 rounded-xl border border-purple-500/20 bg-purple-500/5 p-6 md:p-8">
        <p className="text-sm font-mono text-purple-400 mb-6">
          Try it: tap each method to reveal its retention rate
        </p>
        <div className="space-y-4">
          {guesses.map((item, i) => (
            <button
              key={item.method}
              onClick={() =>
                !revealed.includes(i) && setRevealed([...revealed, i])
              }
              className={`w-full rounded-xl border p-4 text-left transition-all ${
                revealed.includes(i)
                  ? "border-purple-500/30 bg-purple-500/10"
                  : "border-border bg-surface hover:border-purple-500/30 cursor-pointer"
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-foreground font-mono">{item.method}</span>
                <AnimatePresence mode="wait">
                  {revealed.includes(i) ? (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`text-2xl font-bold ${
                        item.percent <= 10 ? "text-red-400" : "text-green-400"
                      }`}
                    >
                      {item.percent}%
                    </motion.span>
                  ) : (
                    <span className="text-muted text-sm font-mono">
                      tap to reveal
                    </span>
                  )}
                </AnimatePresence>
              </div>
              {revealed.includes(i) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="mt-3 pt-3 border-t border-purple-500/20"
                >
                  <div className="h-2 rounded-full bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full rounded-full bg-purple-400"
                    />
                  </div>
                </motion.div>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {revealed.length === guesses.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-4 border-t border-purple-500/20 text-center space-y-2"
            >
              <p className="text-foreground font-bold">
                You just experienced the difference.
              </p>
              <p className="text-muted text-sm">
                Tapping to reveal (doing) is more engaging than reading a
                chart. That&apos;s the point.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export function PreferenceReality() {
  const { player } = usePlayer();

  return (
    <Section id="preference-reality" className="border-t border-border min-h-screen justify-center">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Science
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            This Isn&apos;t Preference.
            <br />
            <span className="text-accent">It&apos;s Neurology.</span>
          </h2>
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={player ?? "default"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {player === "talker" ? (
            <TalkerView />
          ) : player === "visual" ? (
            <VisualView />
          ) : player === "doer" ? (
            <DoerView />
          ) : (
            <ReaderView />
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
