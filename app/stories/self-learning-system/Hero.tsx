"use client";

import { motion } from "framer-motion";

const lostItems = [
  { count: "200", label: "deals", verb: "learned nothing from" },
  { count: "400", label: "meetings", verb: "captured nothing from" },
  { count: "50", label: "losses", verb: "improved nothing from" },
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="space-y-2">
              <p className="text-sm font-mono uppercase tracking-widest text-muted">
                Day 1
              </p>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-border bg-surface flex items-center justify-center">
                <span className="text-4xl md:text-5xl">📊</span>
              </div>
              <p className="text-sm text-muted font-mono">Your CRM</p>
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-2xl text-muted"
            >
              &rarr;
            </motion.span>

            <div className="space-y-2">
              <p className="text-sm font-mono uppercase tracking-widest text-muted">
                Day 365
              </p>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-border bg-surface flex items-center justify-center">
                <span className="text-4xl md:text-5xl">📊</span>
              </div>
              <p className="text-sm text-muted font-mono">Your CRM</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-2xl font-bold md:text-4xl">Exactly the same.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="space-y-3"
        >
          {lostItems.map((item, i) => (
            <motion.p
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 + i * 0.3, duration: 0.5 }}
              className="text-muted text-lg md:text-xl"
            >
              It {item.verb}{" "}
              <span className="text-red-400 font-bold">{item.count}</span>{" "}
              {item.label}.
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="space-y-4 pt-4"
        >
          <p className="text-xl text-muted">Your tools don&apos;t get smarter.</p>
          <p className="text-3xl font-bold text-accent md:text-4xl">
            What if they did?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-muted text-sm tracking-widest uppercase"
          >
            Scroll to see how
            <div className="mt-2 text-2xl">&darr;</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
    </section>
  );
}
