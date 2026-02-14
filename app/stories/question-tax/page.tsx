import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Question Tax | EA Agentic Lab Stories",
  description:
    "Your senior SA answered the same question 23 times this month. See the real cost.",
};

export default function QuestionTaxPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center space-y-4">
        <p className="text-sm font-mono uppercase tracking-widest text-accent">
          Coming Soon
        </p>
        <h1 className="text-4xl font-bold md:text-6xl">The Question Tax</h1>
        <p className="text-muted text-lg max-w-xl mx-auto">
          Your senior SA answered &quot;Where is the pricing doc?&quot; 23 times
          this month.
        </p>
      </div>
    </main>
  );
}
