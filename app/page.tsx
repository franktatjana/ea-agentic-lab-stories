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
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="absolute orb orb-blue top-0 left-1/4 h-[600px] w-[600px] animate-float-slow" />
      <div className="absolute orb orb-purple bottom-0 right-1/4 h-[500px] w-[500px] animate-float" />

      <div className="relative z-10 w-full max-w-2xl space-y-16 text-center">
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

        <div className="space-y-4 text-left">
          {stories.map((story) =>
            story.status === "live" ? (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group block rounded-2xl card-elevated p-6 md:p-7"
              >
                <div className="flex items-center gap-5">
                  <span className="text-3xl font-bold text-border group-hover:text-accent/30 transition-colors font-mono shrink-0">
                    {story.number}
                  </span>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h2 className="text-lg font-semibold group-hover:text-accent transition-colors md:text-xl">
                      {story.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {story.tagline}
                    </p>
                  </div>
                  <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all text-xl shrink-0">
                    &rarr;
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={story.slug}
                className="block rounded-2xl border border-border/30 p-6 md:p-7 opacity-40"
              >
                <div className="flex items-center gap-5">
                  <span className="text-3xl font-bold text-border/50 font-mono shrink-0">
                    {story.number}
                  </span>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h2 className="text-lg font-semibold md:text-xl">
                      {story.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed">
                      {story.tagline}
                    </p>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted shrink-0">
                    Soon
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
