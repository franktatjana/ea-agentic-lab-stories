import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Calendar } from "./Calendar";
import { QuestionTax } from "./QuestionTax";
import { CostCalculator } from "./CostCalculator";
import { BeforeAfter } from "./BeforeAfter";
import { FrameworkDemo } from "./FrameworkDemo";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Onboarding Trap | EA Agentic Lab Stories",
  description:
    "90 days to ramp a new SA. See the real cost of enterprise onboarding.",
};

export default function OnboardingTrapPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Calendar />
        <QuestionTax />
        <CostCalculator />
        <BeforeAfter />
        <FrameworkDemo />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
