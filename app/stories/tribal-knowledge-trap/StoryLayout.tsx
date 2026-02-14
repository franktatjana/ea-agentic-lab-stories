"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "knowledge-map", label: "Knowledge Map" },
  { id: "departure", label: "Exit Interview" },
  { id: "real-cost", label: "Real Cost" },
  { id: "vault", label: "The Vault" },
  { id: "self-learning", label: "Self-Learning" },
  { id: "contrast", label: "Contrast" },
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
