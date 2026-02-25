"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "scramble", label: "The Scramble" },
  { id: "ghost-work", label: "Ghost Work" },
  { id: "bid-decision", label: "Bid / No-Bid" },
  { id: "orchestration", label: "Orchestration" },
  { id: "compare", label: "Before / After" },
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
