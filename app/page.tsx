import Link from "next/link";

const stories = [
  {
    slug: "onboarding-trap",
    title: "The Onboarding Trap",
    tagline: "Your new SA won't be useful for 90 days. Here's what that costs.",
    status: "live" as const,
    number: "01",
  },
  {
    slug: "tribal-knowledge-trap",
    title: "The Tribal Knowledge Trap",
    tagline: "\"Ask John, he knows.\" John is on vacation.",
    status: "live" as const,
    number: "02",
  },
  {
    slug: "self-learning-system",
    title: "The Self-Learning System",
    tagline: "Your CRM learned nothing from 200 deals. What if it did?",
    status: "live" as const,
    number: "03",
  },
  {
    slug: "interface-gap",
    title: "The Interface Gap",
    tagline: "You wrote perfect documentation. Half your team will never read it.",
    status: "live" as const,
    number: "04",
  },
  {
    slug: "question-tax",
    title: "The Question Tax",
    tagline: "Your senior SA answered 'Where is the pricing doc?' 23 times this month.",
    status: "coming-soon" as const,
    number: "05",
  },
  {
    slug: "starting-from-zero",
    title: "Starting from Zero",
    tagline: "247 deals closed. Every new one still starts with a blank page.",
    status: "coming-soon" as const,
    number: "06",
  },
  {
    slug: "handoff-gap",
    title: "The Handoff Gap",
    tagline: "Sales closed the deal. Nobody told the CA what was promised.",
    status: "coming-soon" as const,
    number: "07",
  },
  {
    slug: "rfp-fire-drill",
    title: "The RFP Fire Drill",
    tagline: "200 pages. 10 days. Your team has done this 47 times, but starts from scratch every time.",
    status: "live" as const,
    number: "08",
  },
  {
    slug: "loss-nobody-learned-from",
    title: "The Loss Nobody Learned From",
    tagline: "You lost a $420K deal last quarter. No postmortem. The same mistakes are happening again.",
    status: "live" as const,
    number: "09",
  },
  {
    slug: "sales-qbr",
    title: "The QBR Theater",
    tagline: "Last quarter's QBR was 47 slides of numbers nobody acted on. This quarter will be the same.",
    status: "live" as const,
    number: "10",
  },
  {
    slug: "reinvention-tax",
    title: "The Reinvention Tax",
    tagline: "Your team solved this problem 14 times. The 15th time? Starting from scratch.",
    status: "live" as const,
    number: "11",
  },
];

const liveStories = stories.filter((s) => s.status === "live");
const comingSoonStories = stories.filter((s) => s.status === "coming-soon");

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute orb orb-blue top-0 left-1/4 h-[600px] w-[600px] animate-float-slow" />
      <div className="absolute orb orb-purple bottom-0 right-1/4 h-[500px] w-[500px] animate-float" />

      <div className="relative z-10 w-full max-w-5xl space-y-12 text-center">
        <div className="space-y-6">
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-accent">
            EA Agentic Lab
          </p>
          <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl text-gradient">
            Stories
          </h1>
          <p className="text-muted text-lg max-w-md mx-auto">
            Interactive experiences about the pain points AI agents solve in enterprise sales.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {liveStories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group block rounded-2xl card-elevated p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl font-bold text-border group-hover:text-accent/30 transition-colors font-mono shrink-0 leading-tight mt-0.5">
                  {story.number}
                </span>
                <div className="space-y-1 flex-1 min-w-0">
                  <h2 className="text-base font-semibold group-hover:text-accent transition-colors md:text-lg leading-snug">
                    {story.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed line-clamp-2">
                    {story.tagline}
                  </p>
                </div>
                <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all text-lg shrink-0 mt-0.5">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {comingSoonStories.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted/60">
              Coming soon
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {comingSoonStories.map((story) => (
                <span
                  key={story.slug}
                  className="text-sm text-muted/40 font-mono"
                >
                  {story.number}{" "}
                  <span className="font-sans">{story.title}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="border-t border-border pt-10 space-y-4">
          <p className="text-sm text-muted">
            Built by{" "}
            <a
              href="https://github.com/franktatjana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
            >
              Tatjana Frank
            </a>
            , Solutions Architect exploring how AI agents can eliminate
            repetitive work in enterprise sales.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://ea-agentic-lab.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors"
            >
              Live Demo &rarr;
            </a>
            <span className="text-border">|</span>
            <a
              href="https://github.com/franktatjana/ea-agentic-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors"
            >
              EA Agentic Lab &rarr;
            </a>
            <span className="text-border">|</span>
            <a
              href="https://github.com/franktatjana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-accent transition-colors"
            >
              GitHub &rarr;
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
