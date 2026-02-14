"use client";

import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

const beforeStats = [
  { label: "Documentation created", value: "100 pages/month" },
  { label: "Documentation read", value: "~30% of team" },
  { label: "Documentation retained", value: "~10% of content" },
  { label: "Knowledge actually used", value: "Fraction" },
];

const afterStats = [
  { label: "Knowledge accessible by", value: "100% of team" },
  { label: "Knowledge format", value: "Adapted per person" },
  { label: "Knowledge retained", value: "Significantly higher" },
  { label: "Knowledge actually used", value: "Default behavior" },
];

export function InclusionEffect() {
  return (
    <Section id="inclusion-effect" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-6 text-center">
          <p className="text-sm font-mono uppercase tracking-widest text-accent">
            The Result
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            When Everyone Can Access Knowledge
          </h2>
        </div>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Before */}
        <ScrollReveal variant="slideRight" delay={0.1}>
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 md:p-8 h-full space-y-5">
            <h3 className="font-bold text-lg text-red-400 font-mono">
              Before: One-format documentation
            </h3>
            <div className="space-y-2 font-mono text-sm">
              {beforeStats.map((stat) => (
                <div key={stat.label} className="flex justify-between gap-2">
                  <span className="text-muted">{stat.label}</span>
                  <span className="text-red-400 text-right">{stat.value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-red-500/20 pt-4">
              <p className="text-muted text-sm font-mono italic">
                &quot;Did anyone read the update?&quot;
              </p>
              <p className="text-muted text-xs mt-1">
                Asked weekly, answered rarely
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* After */}
        <ScrollReveal variant="slideLeft" delay={0.2}>
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-6 md:p-8 h-full space-y-5">
            <h3 className="font-bold text-lg text-accent font-mono">
              After: Personalized agent interfaces
            </h3>
            <div className="space-y-2 font-mono text-sm">
              {afterStats.map((stat) => (
                <div key={stat.label} className="flex justify-between gap-2">
                  <span className="text-muted">{stat.label}</span>
                  <span className="text-accent font-bold text-right">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-accent/20 pt-4">
              <p className="text-muted text-sm font-mono italic">
                &quot;Did anyone read the update?&quot;
              </p>
              <p className="text-accent text-xs mt-1">
                Question becomes irrelevant
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3}>
        <div className="mt-10 text-center space-y-2">
          <p className="text-accent">Readers read.</p>
          <p className="text-yellow-400">Talkers talk.</p>
          <p className="text-green-400">Visual thinkers see.</p>
          <p className="text-purple-400">Doers do.</p>
          <div className="pt-4 space-y-1">
            <p className="text-foreground font-bold">Nobody excluded.</p>
            <p className="text-muted">Same source of truth.</p>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
