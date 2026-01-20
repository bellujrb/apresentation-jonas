import { useState, useEffect, useCallback } from "react";
import { SlideContainer } from "./slides/SlideContainer";
import { SlideNavigation } from "./slides/SlideNavigation";
import { slides, slideNames } from "./slides/slides-data";

export const SlideDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [key, setKey] = useState(0);

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
      setKey(prev => prev + 1);
    }
  }, [currentSlide]);

  const goToPrev = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      setKey(prev => prev + 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <SlideContainer key={`${index}-${key}`} isActive={index === currentSlide}>
          {slide.content}
        </SlideContainer>
      ))}
      
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrev={goToPrev}
        onNext={goToNext}
        slideNames={slideNames}
      />
    </div>
  );
};
