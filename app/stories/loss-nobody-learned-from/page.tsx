import type { Metadata } from "next";
import { Hero } from "./Hero";
import { Amnesia } from "./Amnesia";
import { Asymmetry } from "./Asymmetry";
import { FiveWhys } from "./FiveWhys";
import { Operationalize } from "./Operationalize";
import { BeforeAfter } from "./BeforeAfter";
import { StoryFooter } from "./StoryFooter";
import { StoryLayout } from "./StoryLayout";

export const metadata: Metadata = {
  title: "The Loss Nobody Learned From | EA Agentic Lab Stories",
  description:
    "You lost a $420K deal last quarter. No postmortem. The same mistakes are happening again.",
};

export default function LossNobodyLearnedFromPage() {
  return (
    <StoryLayout>
      <main>
        <Hero />
        <Amnesia />
        <Asymmetry />
        <FiveWhys />
        <Operationalize />
        <BeforeAfter />
        <StoryFooter />
      </main>
    </StoryLayout>
  );
}
