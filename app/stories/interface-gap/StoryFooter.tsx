import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function StoryFooter() {
  return (
    <Section id="cta" className="border-t border-border">
      <ScrollReveal>
        <div className="space-y-8 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted">
              Your team doesn&apos;t have a knowledge problem.
            </p>
            <p className="text-lg text-muted">
              They have an interface problem.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-xl text-muted">The knowledge exists.</p>
              <p className="text-xl text-foreground font-bold">
                The format excludes.
              </p>
            </div>
            <p className="text-2xl font-bold text-accent md:text-3xl pt-4">
              Give everyone an agent that speaks their language.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://ea-agentic-lab.onrender.com/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-background transition-colors hover:bg-accent-dim"
            >
              See Agent Personalization &rarr;
            </a>
            <a
              href="https://github.com/franktatjana/ea-agentic-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              View the Architecture
            </a>
          </div>

          <p className="text-sm text-muted pt-8 max-w-md mx-auto font-mono">
            Built for teams where not everyone thinks the same way.
            Which is every team.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
