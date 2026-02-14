import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24 ${className}`}
    >
      <div className="w-full max-w-4xl">{children}</div>
    </section>
  );
}
