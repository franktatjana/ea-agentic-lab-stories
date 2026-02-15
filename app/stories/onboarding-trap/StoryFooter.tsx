import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function StoryFooter() {
  return (
    <Section id="cta" className="border-t border-border min-h-screen justify-center">
      <ScrollReveal>
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-5xl">
              Your institutional knowledge is a strategic asset.
            </h2>
            <p className="text-xl text-muted">
              Start treating it like one.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://ea-agentic-lab.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-background transition-colors hover:bg-accent-dim"
            >
              See the System &rarr;
            </a>
            <a
              href="https://github.com/franktatjana/ea-agentic-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              View Architecture
            </a>
          </div>

          <p className="text-sm text-muted pt-8 max-w-md mx-auto font-mono">
            Built by a Solutions Architect who spent 7 years watching
            institutional knowledge walk out the door.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
