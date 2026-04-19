"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "questionnaire", label: "Questionnaire" },
  { id: "brief", label: "Deal Brief" },
  { id: "scenarios", label: "Four Ways" },
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
