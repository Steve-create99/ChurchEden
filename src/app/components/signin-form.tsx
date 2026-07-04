import { useState } from "react";
import { InputField } from "./input-field";
import { AmberButton } from "./amber-button";
import { Mail, Lock } from "lucide-react";

interface SignInFormProps {
  onSuccess: () => void;
}

export function SignInForm({ onSuccess }: SignInFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful sign in
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  const handleGoogleSignIn = () => {
    // Simulate Google OAuth
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  return (
    <div>
      <h2 className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>
        Welcome back
      </h2>
      <p className="mb-8" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(0, 0, 0, 0.6)' }}>
        Sign in to your church dashboard
      </p>

      <AmberButton variant="glass" onClick={handleGoogleSignIn} className="mb-6">
        <div className="flex items-center justify-center gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
            <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
            <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
            <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
          </svg>
          Sign in with Google
        </div>
      </AmberButton>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ background: 'rgba(0, 0, 0, 0.1)' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(0, 0, 0, 0.4)' }}>
          or sign in with email
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(0, 0, 0, 0.1)' }} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <InputField
          label="Email Address"
          type="email"
          placeholder="pastor@church.com"
          icon={<Mail size={18} />}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block tracking-wide" style={{ fontFamily: 'var(--font-label)', fontSize: '13px', color: 'rgba(0, 0, 0, 0.7)' }}>
              Password
            </label>
            <a href="#" className="text-[var(--aurora-amber)] hover:underline" style={{ fontFamily: 'var(--font-body)', fontSize: '13px' }}>
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full pl-12 px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 transition-all duration-300 focus:border-[var(--aurora-amber)] focus:ring-2 focus:ring-[var(--aurora-amber)]/20 focus:outline-none"
              style={{ fontFamily: 'var(--font-body)' }}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <AmberButton type="submit" className="mt-6">
          Sign In →
        </AmberButton>
      </form>

      <p className="text-center mt-6" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(0, 0, 0, 0.5)' }}>
        New to Haven?{" "}
        <button className="text-[var(--aurora-amber)] hover:underline">
          Register your church →
        </button>
      </p>
    </div>
  );
}
