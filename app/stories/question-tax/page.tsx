import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Ticker } from "./Ticker";
import { Cost } from "./Cost";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Question Tax | EA Agentic Lab Stories",
  description:
    "Your senior SA answered the same question 23 times this month. See the real cost.",
};

export default function QuestionTaxPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Ticker />
        <Cost />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
