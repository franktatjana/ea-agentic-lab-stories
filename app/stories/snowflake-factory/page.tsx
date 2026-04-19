import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Questionnaire } from "./Questionnaire";
import { DealBrief } from "./DealBrief";
import { Scenarios } from "./Scenarios";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Snowflake Factory | EA Agentic Lab Stories",
  description:
    "Every deal teaches. No deal transfers. Turning field experience into a reusable, living SA knowledge sharing system.",
};

export default function SnowflakeFactoryPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Questionnaire />
        <DealBrief />
        <Scenarios />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
