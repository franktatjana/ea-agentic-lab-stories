"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const tags = ["#manufacturing", "#DACH", "#security", "#observability", "#hybrid", "#splunk-competitive", "#servicenow"];

export function DealBrief() {
  return (
    <Section id="brief" className="border-t border-border" orb="blue" orbPosition="right">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            One Deal. One Brief.
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            What structured knowledge looks like.
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            A deal brief is a single markdown file. Tagged, linked to assets,
            queryable by any AI tool. Here&apos;s one from a closed DACH deal.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto rounded-xl border border-border bg-surface overflow-hidden font-mono"
        >
          <div className="border-b border-border px-5 py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-muted">dach-manufacturing-siem.md</span>
            </div>
            <span className="text-accent font-bold">WON &middot; &euro;1.2M ARR</span>
          </div>

          <div className="p-6 space-y-6 text-sm">
            <div>
              <p className="text-xl font-bold text-foreground font-sans">
                # Deal Brief: DACH Manufacturing, SIEM Migration
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-bold">## Metadata</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-muted">
                <div><span className="text-foreground">Industry:</span> Manufacturing</div>
                <div><span className="text-foreground">Region:</span> DACH</div>
                <div><span className="text-foreground">Date:</span> Q1 2026</div>
                <div><span className="text-foreground">Competitor:</span> Splunk</div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-bold">## Win Factors</p>
              <ul className="space-y-1 text-xs text-muted pl-4">
                <li>&middot; Early PM engagement unlocked roadmap conversation on Azure native support</li>
                <li>&middot; Hybrid architecture addressed on-prem constraint competitors ignored</li>
                <li>&middot; Transparent cost structure built trust at CFO level</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-bold">## What I Would Reuse</p>
              <ul className="space-y-1 text-xs text-muted pl-4">
                <li>&rarr; Hybrid architecture diagram <span className="text-foreground">&middot; /assets/dach-hybrid-arch.png</span></li>
                <li>&rarr; CFO ROI one-pager <span className="text-foreground">&middot; /assets/roi-template.pdf</span></li>
                <li>&rarr; POC evaluation scorecard <span className="text-foreground">&middot; /assets/poc-scorecard.xlsx</span></li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-bold">## Shelf Life</p>
              <ul className="space-y-1 text-xs text-muted pl-4">
                <li>&middot; Hybrid architecture approach: still valid</li>
                <li>&middot; Splunk positioning: still relevant, pricing gap narrowed &rarr; needs update</li>
                <li>&middot; ServiceNow gap: still exists as of Q1 2026</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-bold">## Repeatability</p>
              <ul className="space-y-1 text-xs text-muted pl-4">
                <li>&middot; Hybrid architecture pattern: seen in 3 other DACH enterprise deals</li>
                <li>&middot; PM early engagement: confirmed critical in 2 additional won deals</li>
                <li>&middot; ServiceNow gap: reported by 4 SAs across EMEA &rarr; <span className="text-accent">systemic</span></li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-accent font-bold">## Tags</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-accent bg-accent/10 border border-accent/20 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-surface-raised px-5 py-3 flex items-center justify-between text-xs text-muted">
            <span>Searchable &middot; tagged &middot; AI-ready</span>
            <span>One file per deal</span>
          </div>
        </motion.div>
      </ScrollReveal>
    </Section>
  );
}
