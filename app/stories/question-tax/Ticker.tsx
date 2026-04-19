"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const pings = [
  { time: "08:12", from: "Amir (new SA)", channel: "Chat DM", q: "where's the pricing deck for mid-market?" },
  { time: "09:34", from: "Priya (AE)", channel: "Chat #deals", q: "John, quick q — current discount tiers?" },
  { time: "10:47", from: "Diego (partner)", channel: "Email", q: "Can you send the latest pricing one-pager?" },
  { time: "11:05", from: "Sarah (SE)", channel: "Chat DM", q: "Hey, do we have EU pricing handy?" },
  { time: "13:22", from: "Mike (AE)", channel: "Chat thread", q: "what's the floor on enterprise bundle?" },
  { time: "14:10", from: "Lena (new hire)", channel: "1:1 ping", q: "Where should I look for pricing?" },
  { time: "15:41", from: "Raj (SE)", channel: "Chat DM", q: "pricing sheet link?" },
  { time: "16:29", from: "Customer", channel: "Forwarded by AE", q: "Can you share your rate card?" },
];

export function Ticker() {
  return (
    <Section id="ticker" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            One Day, One Senior SA
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            The Question Ticker.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            This is a single Thursday. Every ping interrupts something real.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12 mx-auto max-w-3xl rounded-xl border border-border bg-surface overflow-hidden">
          <div className="border-b border-border px-4 py-3 flex items-center justify-between font-mono text-xs text-muted">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Inbox &middot; Thursday</span>
            </div>
            <span>asking for: pricing doc</span>
          </div>
          <div className="divide-y divide-border">
            {pings.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="px-4 py-3 flex items-start gap-4"
              >
                <span className="text-xs font-mono text-muted w-14 pt-0.5">
                  {p.time}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted">
                    <span className="text-foreground font-semibold">{p.from}</span>
                    <span>&middot;</span>
                    <span>{p.channel}</span>
                  </div>
                  <p className="text-sm text-foreground mt-1">&quot;{p.q}&quot;</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-border bg-surface-raised px-4 py-3 flex items-center justify-between text-xs font-mono">
            <span className="text-muted">Same answer. 8 times today.</span>
            <span className="text-accent font-bold">~64 min lost</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="mt-10 text-center text-muted max-w-2xl mx-auto">
          John is not lazy. John is a knowledge cache with a human in front of it.
          Every ping is a cache hit that took his full attention.
        </p>
      </ScrollReveal>
    </Section>
  );
}
