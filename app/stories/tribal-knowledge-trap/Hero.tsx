"use client";

import { motion } from "framer-motion";

const redirects = [
  { quote: '"Ask John, he knows this."', status: "John is on vacation.", icon: "✕" },
  { quote: '"Try Sarah, she handled a similar deal."', status: "Sarah is in back-to-back calls until 4pm.", icon: "✕" },
  { quote: '"Check with the team in EMEA, they did this last quarter."', status: "It's 2am in London.", icon: "✕" },
];

export function Hero() {
  return (
    <section id="hook" className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-3xl space-y-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {redirects.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 1.2 }}
              className="space-y-2"
            >
              <p className="text-xl md:text-2xl text-foreground">{r.quote}</p>
              <p className="text-muted flex items-center justify-center gap-2">
                <span className="text-red-400">{r.icon}</span> {r.status}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 0.8 }}
          className="space-y-2 pt-4"
        >
          <p className="text-lg text-muted">The knowledge exists.</p>
          <p className="text-2xl font-bold text-accent md:text-3xl">
            Inside people who aren&apos;t available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.2, duration: 1 }}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-muted text-sm tracking-widest uppercase"
          >
            Scroll to see the problem
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
