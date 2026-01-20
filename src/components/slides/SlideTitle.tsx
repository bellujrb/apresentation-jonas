import { ReactNode } from "react";

interface SlideTitleProps {
  children: ReactNode;
  subtitle?: string;
  slideNumber?: number;
}

export const SlideTitle = ({ children, subtitle, slideNumber }: SlideTitleProps) => {
  return (
    <div className="mb-12 opacity-0 animate-fade-in-up">
      {slideNumber && (
        <span className="text-sm font-semibold text-primary mb-4 block tracking-wider uppercase">
          {String(slideNumber).padStart(2, "0")}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
        {children}
      </h1>
      {subtitle && (
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
