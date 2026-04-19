"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const chain = [
  {
    role: "AE (pitch call, week 2)",
    quote:
      "Yeah, we'll have someone dedicated to you during onboarding. You won't be on your own.",
    tone: "verbal, in-call",
  },
  {
    role: "AE (email, week 4)",
    quote:
      "Looking forward to getting you onboarded smoothly with our team behind you.",
    tone: "vague, in writing",
  },
  {
    role: "MSA §3.2",
    quote:
      "Customer shall receive standard onboarding as defined in the Service Description Schedule.",
    tone: "formal, binding",
  },
  {
    role: "Customer (internal chat)",
    quote:
      "We're getting a dedicated TAM for the first 90 days, per what they told us.",
    tone: "expectation, recorded",
  },
  {
    role: "CA (day 31, hears it for the first time)",
    quote:
      "Wait, they think they have a dedicated TAM? I was assigned 14 accounts this month.",
    tone: "painful discovery",
  },
];

export function Telephone() {
  return (
    <Section id="telephone" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            Broken Telephone
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            One promise. Five versions.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Nothing was wrong at each step. Everyone acted in good faith.
            The gap is what nobody was responsible for carrying forward.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {chain.map((item, i) => (
          <ScrollReveal key={i} delay={i * 0.12}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-surface p-5 md:p-6 flex items-start gap-4"
            >
              <span className="text-2xl font-bold text-muted font-mono w-8 shrink-0">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-mono uppercase tracking-widest text-accent">
                    {item.role}
                  </p>
                  <p className="text-xs text-muted font-mono">{item.tone}</p>
                </div>
                <p className="text-foreground italic">&quot;{item.quote}&quot;</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.7}>
        <p className="mt-12 text-center text-muted max-w-2xl mx-auto">
          The AE is not lying. The lawyer is not sloppy. The customer is not confused.
          There is simply no system that reconciles verbal commitments,
          contractual language, and customer expectations into one record.
        </p>
      </ScrollReveal>
    </Section>
  );
}
