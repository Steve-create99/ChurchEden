import { useState } from "react";
import { InputField } from "./input-field";
import { AmberButton } from "./amber-button";
import { Mail, Lock } from "lucide-react";

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful registration
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  const handleGoogleSignup = () => {
    // Simulate Google OAuth
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

  return (
    <div>
      <h2 className="mb-2" style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 700, color: '#1a1a1a' }}>
        Register Your Church
      </h2>
      <p className="mb-8" style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(0, 0, 0, 0.6)' }}>
        Get started in minutes. No credit card required.
      </p>

      <AmberButton variant="glass" onClick={handleGoogleSignup} className="mb-6">
        <div className="flex items-center justify-center gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
            <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
            <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
            <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </div>
      </AmberButton>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px" style={{ background: 'rgba(0, 0, 0, 0.1)' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(0, 0, 0, 0.4)' }}>
          or register manually
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(0, 0, 0, 0.1)' }} />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          label="Email Address"
          type="email"
          placeholder="pastor@church.com"
          icon={<Mail size={18} />}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <InputField
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              icon={<Lock size={18} />}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-[43px] text-gray-400 hover:text-gray-600 transition-colors"
              style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="relative">
            <InputField
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              icon={<Lock size={18} />}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-[43px] text-gray-400 hover:text-gray-600 transition-colors"
              style={{ fontSize: '12px', fontFamily: 'var(--font-body)' }}
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        <label className="flex items-start gap-3 cursor-pointer mt-4">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
            className="mt-1 w-4 h-4 rounded border-gray-300 bg-white checked:bg-[var(--aurora-amber)] cursor-pointer"
            required
          />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(0, 0, 0, 0.7)' }}>
            I agree to the{" "}
            <a href="#" className="text-[var(--aurora-amber)] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-[var(--aurora-amber)] hover:underline">
              Privacy Policy
            </a>
          </span>
        </label>

        <AmberButton type="submit" className="mt-6">
          Create Church Account →
        </AmberButton>
      </form>

      <p className="text-center mt-6" style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(0, 0, 0, 0.5)' }}>
        Already registered?{" "}
        <button className="text-[var(--aurora-amber)] hover:underline">
          Sign in →
        </button>
      </p>
    </div>
  );
}
