"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const questions = [
  { label: "Use Case", prompt: "What problem were we solving? What made it unique?" },
  { label: "Win Factors", prompt: "What was decisive? PM engagement, POC, architecture, price?" },
  { label: "Lose Factors", prompt: "What did we lose on? Price, product gaps, process, timing?" },
  { label: "Risks & Challenges", prompt: "What nearly killed the deal? Technology, process, people?" },
  { label: "Customer Voice", prompt: "What did they say about us vs. competitors? Their words." },
  { label: "What I Would Reuse", prompt: "What would you share with another SA tomorrow?" },
  { label: "What Was Missing", prompt: "What asset or playbook would have saved you time?" },
  { label: "How We Operated", prompt: "PM, PS, Competitive Intel, Channel: where did it break down?" },
  { label: "Shelf Life", prompt: "Would a new SA still know what to do six months from now?" },
  { label: "Repeatability", prompt: "Have you seen this pattern before, or is it unique?" },
];

export function Questionnaire() {
  return (
    <Section id="questionnaire" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Questions Every Deal Already Answers
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Ten questions. Never asked.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Every closed deal holds the answers to these. Nobody writes them down,
            so the next SA answers them again from scratch.
          </p>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
        {questions.map((q, i) => (
          <ScrollReveal key={q.label} delay={i * 0.06}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-surface p-5 flex items-start gap-4 h-full"
            >
              <span className="text-xl font-bold font-mono text-muted shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0 space-y-1">
                <p className="text-sm font-mono uppercase tracking-widest text-accent">
                  {q.label}
                </p>
                <p className="text-sm text-foreground">{q.prompt}</p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.7}>
        <p className="mt-12 text-center text-muted max-w-2xl mx-auto">
          A 30-minute structured reflection per deal. One MD file. Searchable,
          tagged, AI-ready. The intelligence was already in the SA&apos;s head.
          Now it leaves the room with them.
        </p>
      </ScrollReveal>
    </Section>
  );
}
