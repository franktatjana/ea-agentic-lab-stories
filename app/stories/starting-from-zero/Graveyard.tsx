"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const artifacts = [
  { name: "ACME_discovery_v1.docx", owner: "Priya", date: "2024-07", reused: 0 },
  { name: "Globex_discovery_final.docx", owner: "Priya", date: "2024-09", reused: 0 },
  { name: "Initech_discovery_FINAL.docx", owner: "Mike", date: "2024-11", reused: 0 },
  { name: "Umbrella_discovery_v2.docx", owner: "Sarah", date: "2025-01", reused: 0 },
  { name: "Hooli_discovery_FINAL_v2.docx", owner: "Mike", date: "2025-03", reused: 0 },
  { name: "Soylent_discovery_draft.docx", owner: "Priya", date: "2025-06", reused: 0 },
  { name: "Tyrell_discovery_FINAL_final.docx", owner: "Diego", date: "2025-09", reused: 0 },
  { name: "Wonka_discovery_v3.docx", owner: "Lena", date: "2026-01", reused: 0 },
];

export function Graveyard() {
  return (
    <Section id="graveyard" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Document Graveyard
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            247 deals. 247 forgotten docs.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Every one of these was a complete discovery. Interview notes, stakeholder
            maps, pain points, constraints. Every one is now a private folder nobody
            will open again.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mt-12 mx-auto max-w-3xl rounded-xl border border-border bg-surface overflow-hidden">
          <div className="border-b border-border px-4 py-3 flex items-center justify-between font-mono text-xs text-muted">
            <span>SharePoint &middot; /discovery_docs</span>
            <span>Sorted by: last opened</span>
          </div>
          <div className="divide-y divide-border">
            {artifacts.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="px-4 py-3 flex items-center gap-4"
              >
                <span className="text-muted opacity-40">&#128196;</span>
                <span className="text-sm text-foreground font-mono flex-1 truncate">
                  {a.name}
                </span>
                <span className="text-xs text-muted font-mono hidden md:inline">
                  {a.owner}
                </span>
                <span className="text-xs text-muted font-mono w-20 text-right">
                  {a.date}
                </span>
                <span className="text-xs font-mono text-red-400/70 w-20 text-right">
                  reused: {a.reused}×
                </span>
              </motion.div>
            ))}
          </div>
          <div className="border-t border-border bg-surface-raised px-4 py-3 flex items-center justify-between font-mono text-xs">
            <span className="text-muted">
              + 239 more, last opened by anyone: never
            </span>
            <span className="text-red-400 font-bold">0% reuse</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="mt-10 text-center text-muted max-w-2xl mx-auto">
          The knowledge exists. It&apos;s just locked per-deal, per-person,
          per-folder. Nobody searches for it because nobody trusts what they&apos;ll find.
        </p>
      </ScrollReveal>
    </Section>
  );
}
