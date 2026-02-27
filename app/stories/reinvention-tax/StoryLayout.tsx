"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "pattern", label: "The Pattern" },
  { id: "cost", label: "The Cost" },
  { id: "playbook", label: "The Playbook" },
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
