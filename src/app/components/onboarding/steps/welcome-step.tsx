import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Mail, ShieldCheck, User } from "lucide-react";
import { OnboardingSplitShell } from "../onboarding-split-shell";
import { EdenField } from "../eden-field";
import { EdenPasswordInput } from "../eden-password-input";
import { EdenButton } from "../eden-button";
import { useOnboarding } from "../onboarding-context";

/**
 * Step 1 of 3 — Welcome. Re-implements design.md's "Create account" page:
 * the password visibility toggle and background parallax are handled by
 * EdenPasswordInput / OnboardingSplitShell respectively (React state, no
 * direct DOM manipulation).
 */
export function WelcomeStep() {
  const navigate = useNavigate();
  const { data, updateData } = useOnboarding();
  const [firstName, setFirstName] = useState(data.firstName);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateData({ firstName, email, password });
    navigate("/onboarding/church-profile");
  };

  const handleGoogleSignIn = () => {
    navigate("/onboarding/complete");
  };

  return (
    <OnboardingSplitShell
      visualContent={
        <div className="space-y-4 text-white">
          <ShieldCheck size={40} className="text-eden-primary" />
          <h2 className="text-3xl font-bold leading-tight">
            Financial stewardship built for the modern ministry
          </h2>
          <p className="text-white/70">
            Track giving, manage members, and grow your congregation with confidence.
          </p>
        </div>
      }
    >
      <header className="mb-10">
        <h1 className="mb-2 text-3xl font-bold text-eden-on-surface">Welcome to ChurchEden</h1>
        <p className="text-eden-on-surface-variant">Start your journey with modern financial ministry.</p>
      </header>

      <div className="space-y-6">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-eden-outline-variant/30 bg-eden-surface-container-low py-3 transition-all duration-300 hover:bg-eden-surface-container-high active:scale-[0.98]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="font-medium text-eden-on-surface">Sign up with Google</span>
        </button>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-eden-outline-variant/20" />
          <span className="mx-4 flex-shrink text-[10px] uppercase tracking-widest text-eden-on-surface-variant">Or</span>
          <div className="flex-grow border-t border-eden-outline-variant/20" />
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <EdenField
            label="First name*"
            placeholder="Enter your first name"
            icon={<User size={18} />}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <EdenField
            label="Email*"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={18} />}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-eden-on-surface-variant">
              Password*
            </label>
            <EdenPasswordInput
              id="password"
              placeholder="Create a password"
              hint="Must be at least 8 characters."
              minLength={8}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <EdenButton type="submit" className="w-full mt-2">
            Create account
          </EdenButton>
        </form>

        <p className="text-center text-sm text-eden-on-surface-variant">
          Already have an account?{" "}
          <a className="font-bold text-eden-primary hover:underline underline-offset-4" href="#">
            Log in
          </a>
        </p>
      </div>
    </OnboardingSplitShell>
  );
}
