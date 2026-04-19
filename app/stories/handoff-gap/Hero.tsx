"use client";

import { motion } from "framer-motion";

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
            Sales promised it.
            <br />
            <span className="text-gradient-warm">CA found out day 31.</span>
          </h1>
          <p className="text-lg text-muted md:text-xl max-w-2xl mx-auto">
            The contract says one thing. The Slack thread says another.
            The customer remembers a third. Your CA inherits all three.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-3 gap-3 max-w-2xl mx-auto"
        >
          {[
            { who: "What sales said", what: "White-glove onboarding" },
            { who: "What contract says", what: "Standard onboarding" },
            { who: "What customer heard", what: "Dedicated TAM" },
          ].map((item, i) => (
            <motion.div
              key={item.who}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.2 }}
              className="rounded-lg border border-border bg-surface p-4 text-left"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted">
                {item.who}
              </p>
              <p className="text-sm text-foreground mt-2">{item.what}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="pt-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-muted text-sm tracking-widest uppercase"
          >
            Three realities, one angry customer
            <div className="mt-2 text-2xl">&darr;</div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-3xl" />
      </div>
    </section>
  );
}
