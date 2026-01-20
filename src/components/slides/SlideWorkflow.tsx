import { ArrowDown, LucideIcon } from "lucide-react";

interface WorkflowStep {
  title: string;
  icon: LucideIcon;
}

interface SlideWorkflowProps {
  steps: WorkflowStep[];
}

export const SlideWorkflow = ({ steps }: SlideWorkflowProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div 
            className="flex items-center gap-4 bg-gradient-card border border-border rounded-xl px-6 py-4 opacity-0 animate-fade-in-up min-w-[280px]"
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <ArrowDown 
              className="w-5 h-5 text-muted-foreground my-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${(index + 2.5) * 100}ms` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
