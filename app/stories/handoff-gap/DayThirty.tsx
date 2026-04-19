"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const timeline = [
  { day: "Day 0", event: "Deal closes. AE rings the gong.", status: "closed" },
  { day: "Day 3", event: "CA assigned. Receives MSA, welcome doc, standard checklist.", status: "assigned" },
  { day: "Day 8", event: "First call with customer. Customer asks: 'When does our TAM start?'", status: "drift" },
  { day: "Day 12", event: "CA checks MSA. No TAM mentioned. Assumes customer is confused.", status: "drift" },
  { day: "Day 19", event: "Customer escalates: 'We were promised dedicated support.'", status: "alert" },
  { day: "Day 24", event: "CA pulls AE into thread. AE: 'Oh yeah, I said we'd take care of them.'", status: "alert" },
  { day: "Day 31", event: "Customer success call. Customer demands what they believed was sold.", status: "crisis" },
  { day: "Day 34", event: "Exec involvement. Renewal risk flag. NPS drops.", status: "crisis" },
];

const statusStyle = {
  closed: "border-accent/40 text-accent",
  assigned: "border-border text-muted",
  drift: "border-yellow-500/40 text-yellow-500",
  alert: "border-orange-500/40 text-orange-500",
  crisis: "border-red-500/40 text-red-400",
};

export function DayThirty() {
  return (
    <Section id="day-thirty" className="border-t border-border" orb="warm" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The 34 Days Everyone Loses
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            How a good deal becomes a retention risk.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Nobody did anything wrong on any single day. The gap compounds
            silently until the customer forces the reconciliation.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 max-w-3xl mx-auto relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-border" />
        <div className="space-y-3">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.day} delay={i * 0.08}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-16 pr-2"
              >
                <div
                  className={`absolute left-2 top-3 h-8 w-8 rounded-full border-2 ${statusStyle[t.status as keyof typeof statusStyle]} bg-background flex items-center justify-center`}
                >
                  <div className="h-2 w-2 rounded-full bg-current" />
                </div>
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p
                    className={`text-xs font-mono uppercase tracking-widest ${statusStyle[t.status as keyof typeof statusStyle].split(" ")[1]}`}
                  >
                    {t.day}
                  </p>
                  <p className="text-sm text-foreground mt-1">{t.event}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ScrollReveal delay={0.8}>
        <div className="mt-12 text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-6xl md:text-7xl font-bold text-red-400 tracking-tighter">
              34
            </span>
            <span className="text-xl text-muted font-mono">
              days of silent drift
            </span>
          </div>
          <p className="text-muted">
            The fix is not more communication. The fix is one source of truth,
            committed before the AE leaves the room.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
