import type { ReactNode } from "react";
import { motion } from "motion/react";
import { OnboardingStepper } from "./onboarding-stepper";
import { ONBOARDING_STEPS } from "./onboarding-context";

interface OnboardingLayoutProps {
  stepPath: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer: ReactNode;
}

/**
 * Shared shell for the middle onboarding steps (Church Profile through
 * Notifications): dark Eden background, progress stepper, and a centered
 * glass card. Keeps the split hero layout reserved for the Welcome and
 * Setup Complete bookends, matching design.md's visual language throughout.
 */
export function OnboardingLayout({ stepPath, title, subtitle, children, footer }: OnboardingLayoutProps) {
  const currentStepIndex = ONBOARDING_STEPS.findIndex((step) => step.path === stepPath);

  return (
    <div className="min-h-screen bg-eden-background font-eden flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <div className="mb-10">
          <OnboardingStepper currentStepIndex={currentStepIndex} />
        </div>

        <motion.div
          key={stepPath}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-eden-outline-variant/20 bg-eden-surface-container/70 backdrop-blur-xl p-8 sm:p-10"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-eden-on-surface mb-2">{title}</h1>
          {subtitle && <p className="text-eden-on-surface-variant mb-8">{subtitle}</p>}

          <div className="space-y-6">{children}</div>

          <div className="mt-10 flex items-center gap-4">{footer}</div>
        </motion.div>
      </div>
    </div>
  );
}
