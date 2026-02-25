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
            An RFP just landed in your inbox.
          </h1>
          <p className="text-lg text-muted md:text-xl max-w-2xl mx-auto">
            200 pages. Mandatory requirements. Tight scoring rubric.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="space-y-2"
        >
          <p className="text-muted text-sm font-mono uppercase tracking-widest">
            Submission deadline?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <span className="text-7xl font-bold text-accent md:text-9xl tracking-tighter">
            10
          </span>
          <span className="text-3xl font-bold text-accent md:text-5xl ml-4">
            DAYS
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-muted text-sm font-mono"
        >
          Your team has done this 47 times. Every one started from scratch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
    </section>
  );
}
