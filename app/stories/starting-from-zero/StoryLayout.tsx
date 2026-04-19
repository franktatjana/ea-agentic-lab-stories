"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "graveyard", label: "The Graveyard" },
  { id: "pattern", label: "The Pattern" },
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
