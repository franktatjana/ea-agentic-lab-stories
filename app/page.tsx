import Link from "next/link";

const stories = [
  {
    slug: "onboarding-trap",
    title: "The Onboarding Trap",
    tagline: "Your new SA won't be useful for 90 days. Here's what that costs.",
    status: "live" as const,
  },
  {
    slug: "question-tax",
    title: "The Question Tax",
    tagline: "Your senior SA answered 'Where is the pricing doc?' 23 times this month.",
    status: "coming-soon" as const,
  },
  {
    slug: "starting-from-zero",
    title: "Starting from Zero",
    tagline: "247 deals closed. Every new one still starts with a blank page.",
    status: "coming-soon" as const,
  },
  {
    slug: "tribal-knowledge-trap",
    title: "The Tribal Knowledge Trap",
    tagline: "\"Ask John, he knows.\" John is on vacation.",
    status: "live" as const,
  },
  {
    slug: "handoff-gap",
    title: "The Handoff Gap",
    tagline: "Sales closed the deal. Nobody told the CA what was promised.",
    status: "coming-soon" as const,
  },
  {
    slug: "self-learning-system",
    title: "The Self-Learning System",
    tagline: "Your CRM learned nothing from 200 deals. What if it did?",
    status: "live" as const,
  },
  {
    slug: "interface-gap",
    title: "The Interface Gap",
    tagline: "You wrote perfect documentation. Half your team will never read it.",
    status: "live" as const,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl space-y-12 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            EA Agentic Lab
          </h1>
          <p className="text-muted text-lg">
            Interactive stories about the pain points AI agents solve.
          </p>
        </div>

        <div className="space-y-4">
          {stories.map((story) =>
            story.status === "live" ? (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group block rounded-xl border border-border bg-surface p-6 text-left transition-all hover:border-accent/50 hover:bg-surface/80"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold group-hover:text-accent transition-colors">
                      {story.title}
                    </h2>
                    <p className="text-muted text-sm">{story.tagline}</p>
                  </div>
                  <span className="text-muted group-hover:text-accent transition-colors text-2xl">
                    &rarr;
                  </span>
                </div>
              </Link>
            ) : (
              <div
                key={story.slug}
                className="block rounded-xl border border-border/50 bg-surface/50 p-6 text-left opacity-60"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold">{story.title}</h2>
                    <p className="text-muted text-sm">{story.tagline}</p>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted">
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
