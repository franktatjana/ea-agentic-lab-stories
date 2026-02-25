"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const criteria = [
  {
    name: "Strategic Fit",
    weight: 25,
    question: "Does this align with our target segments and strengthen our position?",
  },
  {
    name: "Competitive Position",
    weight: 25,
    question: "Do we have relationships, incumbency, or insider knowledge?",
  },
  {
    name: "Solution Fit",
    weight: 20,
    question: "Can we meet mandatory requirements without major gaps?",
  },
  {
    name: "Resource Availability",
    weight: 15,
    question: "Do we have capacity to respond well and deliver if we win?",
  },
  {
    name: "Commercial Viability",
    weight: 15,
    question: "Is the deal size worth the effort? Are terms reasonable?",
  },
];

export function BidDecision() {
  const [scores, setScores] = useState<number[]>(
    criteria.map(() => 50)
  );
  const [assessed, setAssessed] = useState(false);

  const weightedScore = Math.round(
    criteria.reduce((sum, c, i) => sum + (scores[i] * c.weight) / 100, 0)
  );

  const decision =
    weightedScore >= 70
      ? { label: "BID", color: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10" }
      : weightedScore >= 50
        ? { label: "CONDITIONAL", color: "text-yellow-400", border: "border-yellow-500/30", bg: "bg-yellow-500/10" }
        : { label: "NO-BID", color: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" };

  return (
    <Section id="bid-decision" orb="warm" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The First Question
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Should You Even Respond?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Most teams answer every RFP because &ldquo;you can&apos;t win if
            you don&apos;t play.&rdquo; The data says otherwise: pursuing
            low-probability RFPs costs more than walking away.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 space-y-8">
        <div className="rounded-xl border border-border bg-surface p-6 md:p-8 space-y-8">
          {criteria.map((c, i) => (
            <div key={c.name} className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">
                  {c.name}{" "}
                  <span className="text-muted font-mono text-xs">
                    ({c.weight}% weight)
                  </span>
                </span>
                <span className="font-mono font-bold">{scores[i]}</span>
              </div>
              <p className="text-xs text-muted">{c.question}</p>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={scores[i]}
                onChange={(e) => {
                  const next = [...scores];
                  next[i] = Number(e.target.value);
                  setScores(next);
                }}
                className="w-full accent-accent"
              />
              <div className="flex justify-between text-xs text-muted">
                <span>Poor</span>
                <span>Strong</span>
              </div>
            </div>
          ))}

          <button
            onClick={() => setAssessed(true)}
            className="w-full rounded-lg bg-accent py-3 font-semibold text-background transition-colors hover:bg-accent-dim"
          >
            Assess
          </button>
        </div>

        <AnimatePresence>
          {assessed && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-xl border ${decision.border} ${decision.bg} p-6 md:p-8 text-center space-y-4`}
            >
              <p className="text-sm font-mono uppercase tracking-widest text-muted">
                Weighted Score
              </p>
              <p className={`text-6xl font-bold ${decision.color}`}>
                {weightedScore}
              </p>
              <p className={`text-2xl font-bold ${decision.color}`}>
                {decision.label}
              </p>

              <div className="border-t border-border/30 pt-4 text-sm text-muted space-y-2 max-w-md mx-auto">
                {weightedScore >= 70 && (
                  <p>
                    Strong probability. Mobilize the response team and aim to
                    submit 48 hours early for review buffer.
                  </p>
                )}
                {weightedScore >= 50 && weightedScore < 70 && (
                  <p>
                    Borderline. Escalate to leadership within 24 hours.
                    Only proceed if strategic fit is above 80.
                  </p>
                )}
                {weightedScore < 50 && (
                  <p>
                    Low probability. Decline professionally and redirect effort
                    to winnable opportunities.
                  </p>
                )}
              </div>

              <div className="pt-4 font-mono text-xs text-muted">
                <p>
                  Today: this decision is a gut call over coffee.
                </p>
                <p className="text-accent mt-1">
                  With agents: weighted analysis in under 60 seconds.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
