import { InputHTMLAttributes, forwardRef, ReactNode } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, icon, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="block mb-2 tracking-wide" style={{ fontFamily: 'var(--font-label)', fontSize: '13px', color: 'rgba(0, 0, 0, 0.7)' }}>
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={`w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:border-[var(--aurora-amber)] focus:ring-2 focus:ring-[var(--aurora-amber)]/20 focus:outline-none ${icon ? 'pl-12' : ''} ${className}`}
            style={{ fontFamily: 'var(--font-body)' }}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500" style={{ fontFamily: 'var(--font-body)' }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
