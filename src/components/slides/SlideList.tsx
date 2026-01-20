import { Check, X, AlertTriangle, ArrowRight } from "lucide-react";

interface SlideListProps {
  items: string[];
  variant?: "bullet" | "check" | "x" | "warning" | "arrow";
  columns?: 1 | 2;
}

export const SlideList = ({ items, variant = "bullet", columns = 1 }: SlideListProps) => {
  const icons = {
    bullet: null,
    check: Check,
    x: X,
    warning: AlertTriangle,
    arrow: ArrowRight
  };

  const iconColors = {
    bullet: "",
    check: "text-emerald-400",
    x: "text-red-400",
    warning: "text-amber-400",
    arrow: "text-primary"
  };

  const Icon = icons[variant];

  return (
    <ul className={`space-y-4 ${columns === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-4 space-y-0" : ""}`}>
      {items.map((item, index) => (
        <li 
          key={index} 
          className="flex items-start gap-3 text-muted-foreground opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${(index + 2) * 100}ms` }}
        >
          {Icon ? (
            <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconColors[variant]}`} />
          ) : (
            <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
          )}
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};
