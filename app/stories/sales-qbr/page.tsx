import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Theater } from "./Theater";
import { Preparation } from "./Preparation";
import { Intelligence } from "./Intelligence";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The QBR Theater | EA Agentic Lab Stories",
  description:
    "Last quarter's QBR was 47 slides of numbers nobody acted on. This quarter will be the same.",
};

export default function SalesQbrPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Theater />
        <Preparation />
        <Intelligence />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
