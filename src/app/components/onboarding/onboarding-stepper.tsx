import { Check } from "lucide-react";
import { ONBOARDING_STEPS } from "./onboarding-context";
import { cn } from "../ui/utils";

interface OnboardingStepperProps {
  currentStepIndex: number;
}

export function OnboardingStepper({ currentStepIndex }: OnboardingStepperProps) {
  return (
    <ol className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
      {ONBOARDING_STEPS.map((step, index) => {
        const isComplete = index < currentStepIndex;
        const isActive = index === currentStepIndex;

        return (
          <li key={step.path} className="flex items-center gap-2 sm:gap-3">
            <div
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-eden font-semibold transition-colors duration-300",
                isComplete && "border-eden-primary-container bg-eden-primary-container text-white",
                isActive && "border-eden-primary bg-eden-primary/20 text-eden-primary",
                !isComplete && !isActive && "border-eden-outline-variant/40 text-eden-outline",
              )}
              aria-current={isActive ? "step" : undefined}
            >
              {isComplete ? <Check size={14} /> : index + 1}
            </div>
            {index < ONBOARDING_STEPS.length - 1 && (
              <div
                className={cn(
                  "h-px w-4 sm:w-8 transition-colors duration-300",
                  isComplete ? "bg-eden-primary-container" : "bg-eden-outline-variant/30",
                )}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
