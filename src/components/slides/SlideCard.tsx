import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface SlideCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "default" | "accent" | "highlight";
  delay?: number;
}

export const SlideCard = ({ 
  title, 
  description, 
  icon: Icon, 
  variant = "default",
  delay = 0 
}: SlideCardProps) => {
  const variants = {
    default: "bg-gradient-card border-border hover:border-primary/30",
    accent: "bg-gradient-card border-accent/30 hover:border-accent/50",
    highlight: "bg-gradient-primary border-transparent"
  };

  const iconBg = {
    default: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent",
    highlight: "bg-white/20 text-white"
  };

  return (
    <div 
      className={`p-6 rounded-xl border transition-all duration-300 opacity-0 animate-fade-in-up ${variants[variant]}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {Icon && (
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconBg[variant]}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className={`text-lg font-semibold mb-2 ${variant === "highlight" ? "text-white" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${variant === "highlight" ? "text-white/80" : "text-muted-foreground"}`}>
        {description}
      </p>
    </div>
  );
};
