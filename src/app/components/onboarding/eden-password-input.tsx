import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "../ui/utils";

interface EdenPasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  hint?: string;
}

/**
 * Password field with a show/hide toggle. Translates design.md's
 * `document.querySelector` + `addEventListener` visibility toggle into a
 * `useState<boolean>` that drives the `input[type]` and icon directly.
 */
export function EdenPasswordInput({
  hint,
  className,
  id,
  ...props
}: EdenPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1.5">
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full px-4 py-3 bg-eden-surface-container-lowest border border-eden-outline-variant/30 rounded-lg text-eden-on-surface placeholder:text-eden-outline/50 transition-all focus:outline-none focus:ring-2 focus:ring-eden-primary-container focus:ring-offset-0",
            className,
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-eden-on-surface-variant hover:text-eden-on-surface transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {hint && <p className="text-xs text-eden-on-surface-variant pt-1">{hint}</p>}
    </div>
  );
}
