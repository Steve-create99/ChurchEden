import type { ButtonHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "../ui/utils";

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"
>;

interface EdenButtonProps extends NativeButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export function EdenButton({ children, variant = "primary", className, ...props }: EdenButtonProps) {
  if (variant === "outline") {
    return (
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "px-6 py-3.5 rounded-lg border border-eden-outline-variant/40 text-eden-on-surface hover:bg-eden-surface-container-high transition-all duration-300 font-eden font-medium",
          className,
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.01, filter: "brightness(1.1)" }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "px-6 py-3.5 rounded-lg bg-eden-primary-container text-white shadow-lg shadow-eden-primary-container/20 transition-all duration-300 font-eden font-medium flex items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
