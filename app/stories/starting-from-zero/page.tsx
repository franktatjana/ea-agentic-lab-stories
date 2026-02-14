import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starting from Zero | EA Agentic Lab Stories",
  description:
    "247 deals closed. Every new one still starts with a blank page.",
};

export default function StartingFromZeroPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center space-y-4">
        <p className="text-sm font-mono uppercase tracking-widest text-accent">
          Coming Soon
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">Starting from Zero</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          247 deals closed. Every new one still starts with a blank page.
        </p>
      </div>
    </main>
  );
}
