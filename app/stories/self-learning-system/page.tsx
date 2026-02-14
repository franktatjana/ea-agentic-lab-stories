import type { Metadata } from "next";
import { Hero } from "./Hero";
import { MeetingProblem } from "./MeetingProblem";
import { AgentWorkflow } from "./AgentWorkflow";
import { PostMeeting } from "./PostMeeting";
import { LearningLoop } from "./LearningLoop";
import { AgentTeam } from "./AgentTeam";
import { CompoundEffect } from "./CompoundEffect";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Self-Learning System | EA Agentic Lab Stories",
  description:
    "Traditional tools are static. This system has AI agents that learn from outcomes and improve recommendations over time.",
};

export default function SelfLearningSystemPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <MeetingProblem />
        <AgentWorkflow />
        <PostMeeting />
        <LearningLoop />
        <AgentTeam />
        <CompoundEffect />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
