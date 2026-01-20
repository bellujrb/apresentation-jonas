import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  slideNames: string[];
}

export const SlideNavigation = ({ 
  currentSlide, 
  totalSlides, 
  onPrev, 
  onNext,
  slideNames 
}: SlideNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            <span>{String(totalSlides).padStart(2, "0")}</span>
          </span>
          <span className="text-sm text-muted-foreground hidden md:block">
            {slideNames[currentSlide]}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-secondary">
        <div 
          className="h-full bg-gradient-primary transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>
    </div>
  );
};
