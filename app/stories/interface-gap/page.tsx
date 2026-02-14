import type { Metadata } from "next";
import { Hero } from "./Hero";
import { CognitiveDivide } from "./CognitiveDivide";
import { TranslationTax } from "./TranslationTax";
import { PlayerSelect } from "./PlayerSelect";
import { PreferenceReality } from "./PreferenceReality";
import { AgentAvatar } from "./AgentAvatar";
import { SameKnowledge } from "./SameKnowledge";
import { AgentConfig } from "./AgentConfig";
import { Partnership } from "./Partnership";
import { InclusionEffect } from "./InclusionEffect";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Interface Gap | EA Agentic Lab Stories",
  description:
    "Your team doesn't have a knowledge problem. They have an interface problem. AI agents that adapt to how each person thinks.",
};

export default function InterfaceGapPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <CognitiveDivide />
        <TranslationTax />
        <PlayerSelect />
        <PreferenceReality />
        <AgentAvatar />
        <SameKnowledge />
        <AgentConfig />
        <Partnership />
        <InclusionEffect />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
