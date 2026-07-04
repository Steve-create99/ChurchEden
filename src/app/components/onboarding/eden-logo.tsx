import { Bird } from "lucide-react";
import { cn } from "../ui/utils";

interface EdenLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

/**
 * Shared brand lockup for the Landing Page and Onboarding shell: a plain
 * line-art icon beside the wordmark, no colored badge container — matching
 * the reference layout provided (icon + bold wordmark, no icon background).
 */
export function EdenLogo({ className, iconClassName, textClassName }: EdenLogoProps) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <Bird className={cn("text-white", iconClassName)} size={26} strokeWidth={1.75} />
      <span className={cn("font-eden text-xl font-bold tracking-tight text-white", textClassName)}>
        ChurchEden
      </span>
    </div>
  );
}
