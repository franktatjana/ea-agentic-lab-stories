"use client";

import { type ReactNode } from "react";
import { StoryNav } from "@/components/StoryNav";
import { PlayerProvider } from "./PlayerContext";

const sections = [
  { id: "hook", label: "Hook" },
  { id: "cognitive-divide", label: "Different Minds" },
  { id: "translation-tax", label: "Translation Tax" },
  { id: "player-select", label: "Choose Your Path" },
  { id: "preference-reality", label: "Retention" },
  { id: "agent-avatar", label: "Your Agent" },
  { id: "same-knowledge", label: "Many Interfaces" },
  { id: "agent-config", label: "Configuration" },
  { id: "partnership", label: "Partnership" },
  { id: "inclusion-effect", label: "Impact" },
  { id: "cta", label: "CTA" },
];

export function StoryLayout({ children }: { children: ReactNode }) {
  return (
    <PlayerProvider>
      <StoryNav sections={sections} />
      {children}
    </PlayerProvider>
  );
}
