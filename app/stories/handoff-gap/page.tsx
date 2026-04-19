import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Telephone } from "./Telephone";
import { DayThirty } from "./DayThirty";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Handoff Gap | EA Agentic Lab Stories",
  description:
    "Sales closed the deal. Nobody told the CA what was promised. See what breaks.",
};

export default function HandoffGapPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Telephone />
        <DayThirty />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
