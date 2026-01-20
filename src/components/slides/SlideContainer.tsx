import { ReactNode } from "react";

interface SlideContainerProps {
  children: ReactNode;
  isActive: boolean;
}

export const SlideContainer = ({ children, isActive }: SlideContainerProps) => {
  if (!isActive) return null;

  return (
    <div className="min-h-screen pb-24 pt-12 px-6 md:px-12 lg:px-20 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
};
