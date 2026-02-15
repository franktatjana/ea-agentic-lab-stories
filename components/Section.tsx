import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  orb?: "blue" | "purple" | "warm" | "none";
  orbPosition?: "left" | "right" | "center";
}

export function Section({
  children,
  id,
  className = "",
  orb = "none",
  orbPosition = "center",
}: SectionProps) {
  const orbPos = {
    left: "top-1/3 -left-32",
    right: "top-1/3 -right-32",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <section
      id={id}
      className={`relative flex flex-col items-center px-6 py-20 md:py-28 md:px-12 lg:px-24 overflow-hidden section-fade-top ${className}`}
    >
      {orb !== "none" && (
        <div
          className={`absolute orb orb-${orb} ${orbPos[orbPosition]} h-[500px] w-[500px] md:h-[700px] md:w-[700px]`}
        />
      )}
      <div className="relative z-10 w-full max-w-4xl">{children}</div>
    </section>
  );
}
