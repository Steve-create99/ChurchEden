import { useEffect, useState, type CSSProperties } from "react";
import { cn } from "../ui/utils";

interface EdenGlassPanelProps {
  className?: string;
  /** Pixels of travel at the extremes of the viewport. */
  parallaxSpeed?: number;
}

/**
 * Decorative glassmorphism shape used on the right-hand visual panel of the
 * onboarding split layout. Reproduces design.md's `.glass-panel` mousemove
 * parallax via a `window` listener + state, instead of direct DOM mutation.
 */
export function EdenGlassPanel({ className, parallaxSpeed = 20 }: EdenGlassPanelProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setOffset({ x: x * parallaxSpeed, y: y * parallaxSpeed });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [parallaxSpeed]);

  const style: CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  return (
    <div
      className={cn(
        "backdrop-blur-2xl bg-white/5 border border-eden-secondary-fixed-dim/15",
        className,
      )}
      style={style}
    />
  );
}
