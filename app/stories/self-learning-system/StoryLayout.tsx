"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "meeting-problem", label: "The Problem" },
  { id: "agent-workflow", label: "Before Meeting" },
  { id: "post-meeting", label: "After Meeting" },
  { id: "learning-loop", label: "Learning Loop" },
  { id: "agent-team", label: "The Agents" },
  { id: "compound", label: "Compound Effect" },
  { id: "cta", label: "CTA" },
];

export function StoryLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <StoryNav sections={sections} />
      {children}
    </>
  );
}
