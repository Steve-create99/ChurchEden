import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../ui/utils";

interface EdenFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
}

export function EdenField({ label, icon, className, id, ...props }: EdenFieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-eden-on-surface-variant">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-eden-outline">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={cn(
            "w-full px-4 py-3 bg-eden-surface-container-lowest border border-eden-outline-variant/30 rounded-lg text-eden-on-surface placeholder:text-eden-outline/50 transition-all focus:outline-none focus:ring-2 focus:ring-eden-primary-container",
            icon && "pl-11",
            className,
          )}
          {...props}
        />
      </div>
    </div>
  );
}
