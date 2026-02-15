"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="hook"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute orb orb-blue top-1/4 -left-32 h-[600px] w-[600px] animate-float-slow" />
      <div className="absolute orb orb-purple bottom-1/4 -right-32 h-[500px] w-[500px] animate-float" />

      <div className="relative z-10 w-full max-w-3xl space-y-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-gradient">
            You wrote perfect documentation.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-lg text-muted md:text-xl">
            Clear structure. Complete information. Well-organized.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <p className="text-2xl font-bold text-red-400 md:text-4xl">
            Half your team will never read it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="space-y-3 pt-4"
        >
          <p className="text-lg text-muted">Not because they&apos;re lazy.</p>
          <p className="text-xl text-foreground font-semibold">
            Because that&apos;s not how they think.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.4, duration: 1 }}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-muted text-sm tracking-widest uppercase"
          >
            Scroll to see why
            <div className="mt-2 text-2xl">&darr;</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
