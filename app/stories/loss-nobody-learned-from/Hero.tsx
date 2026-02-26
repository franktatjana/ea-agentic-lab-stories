"use client";

import { motion } from "framer-motion";

const losses = [
  { amount: "$420K", reason: "Champion left. No backup.", months: "3 months ago" },
  { amount: "$280K", reason: "Single-threaded. Again.", months: "5 months ago" },
  { amount: "$190K", reason: "Competitor already embedded.", months: "7 months ago" },
];

export function Hero() {
  return (
    <section
      id="hook"
      className="relative flex min-h-screen flex-col items-center justify-center px-6"
    >
      <div className="w-full max-w-3xl space-y-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            You lost a deal last quarter.
          </h1>
          <p className="text-lg text-muted md:text-xl max-w-2xl mx-auto">
            The team moved on. No postmortem. No root cause. No playbook
            update.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-3"
        >
          {losses.map((loss, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.4, duration: 0.5 }}
              className="flex items-center justify-center gap-4 text-sm md:text-base"
            >
              <span className="font-mono font-bold text-red-400">
                {loss.amount}
              </span>
              <span className="text-muted">{loss.reason}</span>
              <span className="text-xs font-mono text-muted/60">
                {loss.months}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="space-y-2 pt-4"
        >
          <p className="text-2xl font-bold md:text-4xl text-gradient-warm">
            Same pattern. Three times.
          </p>
          <p className="text-muted text-lg">
            Nobody connected the dots because nobody documented them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 1 }}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-muted text-sm tracking-widest uppercase"
          >
            Scroll to see what happens next
            <div className="mt-2 text-2xl">&darr;</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-red-500/5 blur-3xl" />
      </div>
    </section>
  );
}
