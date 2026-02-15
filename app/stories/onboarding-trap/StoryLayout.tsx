"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "calendar", label: "Calendar" },
  { id: "slack", label: "Question Tax" },
  { id: "cost", label: "Cost" },
  { id: "compare", label: "Before / After" },
  { id: "demo", label: "How It Works" },
  { id: "blueprint", label: "Blueprint" },
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
