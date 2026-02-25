import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Scramble } from "./Scramble";
import { GhostWork } from "./GhostWork";
import { BidDecision } from "./BidDecision";
import { Orchestration } from "./Orchestration";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The RFP Fire Drill | EA Agentic Lab Stories",
  description:
    "200 pages. 10 days. Your team has done this 47 times before, but starts from scratch every time.",
};

export default function RfpFireDrillPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Scramble />
        <GhostWork />
        <BidDecision />
        <Orchestration />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
