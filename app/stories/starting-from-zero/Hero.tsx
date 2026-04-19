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
            247 deals closed.
            <br />
            <span className="text-gradient">Deal 248 starts blank.</span>
          </h1>
          <p className="text-lg text-muted md:text-xl max-w-2xl mx-auto">
            Every new engagement begins with the same empty doc,
            the same first-principles thinking, the same week of setup.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="space-y-2"
        >
          <p className="text-muted text-sm font-mono uppercase tracking-widest">
            Current template
          </p>
          <div className="max-w-md mx-auto rounded-xl border-2 border-dashed border-border bg-surface p-8 font-mono text-sm text-muted">
            <p className="opacity-40">{"<blank page />"}</p>
            <div className="h-12" />
            <div className="h-px bg-border my-2" />
            <p className="opacity-40 text-xs">cursor_here|</p>
          </div>
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
            See what 247 deals should have taught you
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
