import type { ReactNode } from "react";
import { EdenGlassPanel } from "./eden-glass-panel";
import { EdenLogo } from "./eden-logo";
import onboardingHero from "@/assets/onboarding-hero.png";

interface OnboardingSplitShellProps {
  children: ReactNode;
  /** Content rendered in the sticky right-hand visual panel (desktop only). */
  visualContent?: ReactNode;
}

/**
 * Full split-screen shell reproducing design.md's onboarding page layout:
 * a scrollable left form column and a sticky right visual panel with
 * floating glass shapes. Used for the bookend steps (Welcome, Setup Complete).
 */
export function OnboardingSplitShell({ children, visualContent }: OnboardingSplitShellProps) {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-eden-background font-eden">
      <section className="flex flex-col justify-between px-6 md:px-12 py-8 relative z-10">
        <EdenLogo iconClassName="text-eden-primary" textClassName="text-eden-on-surface" />

        <div className="max-w-[440px] w-full mx-auto my-16">{children}</div>

        <footer className="pt-8">
          <p className="text-xs text-eden-on-surface-variant/60 text-center">
            © 2026 ChurchEden. Financial stewardship for the modern ministry.
          </p>
        </footer>
      </section>

      <section className="hidden md:flex relative items-center justify-center overflow-hidden h-screen sticky top-0">
        <div
          className="absolute inset-0 bg-cover bg-center contrast-110 saturate-125"
          style={{ backgroundImage: `url(${onboardingHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-eden-surface-container-lowest/85 from-10% via-eden-surface-container-lowest/25 via-45% to-transparent to-70%" />

        <EdenGlassPanel className="absolute -top-32 -right-12 w-48 h-48 rounded-2xl rotate-12 opacity-25" />
        <EdenGlassPanel className="absolute -bottom-24 -left-16 w-64 h-64 rounded-full opacity-15" />

        <div className="relative z-20 px-12 max-w-[520px] text-left">
          {visualContent}
        </div>
      </section>
    </main>
  );
}
