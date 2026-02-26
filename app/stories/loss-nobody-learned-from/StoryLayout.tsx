"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "amnesia", label: "Loss Amnesia" },
  { id: "asymmetry", label: "The Asymmetry" },
  { id: "five-whys", label: "Five Whys" },
  { id: "operationalize", label: "Operationalize" },
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
