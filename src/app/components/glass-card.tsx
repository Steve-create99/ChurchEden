import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-3xl p-8 ${className}`}
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(200, 134, 10, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
      }}
    >
      {/* Inner glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(200, 134, 10, 0.1), transparent 60%)',
        }}
      />

      {/* Amber accent line */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-[2px] rounded-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--aurora-amber), transparent)',
          boxShadow: '0 0 20px rgba(200, 134, 10, 0.4)',
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
