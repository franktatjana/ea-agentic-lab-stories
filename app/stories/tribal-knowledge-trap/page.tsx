import type { Metadata } from "next";
import { Hero } from "./Hero";
import { KnowledgeMap } from "./KnowledgeMap";
import { Departure } from "./Departure";
import { RealCost } from "./RealCost";
import { Vault } from "./Vault";
import { SelfLearning } from "./SelfLearning";
import { Contrast } from "./Contrast";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Tribal Knowledge Trap | EA Agentic Lab Stories",
  description:
    "Ask John, he knows. John is on vacation. See what happens when knowledge lives in people's heads.",
};

export default function TribalKnowledgeTrapPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <KnowledgeMap />
        <Departure />
        <RealCost />
        <Vault />
        <SelfLearning />
        <Contrast />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
