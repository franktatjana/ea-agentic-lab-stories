import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function StoryFooter() {
  return (
    <Section id="cta" className="border-t border-border min-h-screen justify-center" orb="purple" orbPosition="center">
      <ScrollReveal>
        <div className="space-y-8 text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted">
              Every deal your team closes contains patterns.
            </p>
            <p className="text-lg text-muted">
              Every meeting creates knowledge.
            </p>
            <p className="text-lg text-muted">
              Every loss teaches something.
            </p>
            <p className="text-2xl font-bold md:text-3xl pt-4 text-gradient">
              The question is whether your system captures it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://ea-agentic-lab.onrender.com/agents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-background transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              See the Agents &rarr;
            </a>
            <a
              href="https://github.com/franktatjana/ea-agentic-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-lg font-semibold text-foreground transition-all hover:border-accent/50 hover:bg-surface hover:shadow-lg"
            >
              View the Architecture
            </a>
          </div>

          <p className="text-sm text-muted pt-8 max-w-md mx-auto font-mono">
            Built on the belief that organizational intelligence should
            compound, not evaporate.
          </p>
        </div>
      </ScrollReveal>
    </Section>
  );
}
