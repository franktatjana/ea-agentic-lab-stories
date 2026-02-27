import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Pattern } from "./Pattern";
import { Cost } from "./Cost";
import { Playbook } from "./Playbook";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Reinvention Tax | EA Agentic Lab Stories",
  description:
    "Your team solved this problem 14 times. The 15th time? Starting from scratch.",
};

export default function ReinventionTaxPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Pattern />
        <Cost />
        <Playbook />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
