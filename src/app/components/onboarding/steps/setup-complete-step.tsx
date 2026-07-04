import { useEffect } from "react";
import { useNavigate } from "react-router";
import confetti from "canvas-confetti";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { EdenButton } from "../eden-button";

const AUTO_REDIRECT_MS = 4000;

export function SetupCompleteStep() {
  const navigate = useNavigate();

  const enterDashboard = () => navigate("/dashboard");

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#e3b34d", "#c9931a", "#ffe16d", "#ffffff"],
    });

    const timer = setTimeout(enterDashboard, AUTO_REDIRECT_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-eden-background px-8 font-eden text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.6 }}
        className="relative mb-8 inline-block"
      >
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-eden-primary-container shadow-[0_0_60px_rgba(201,147,26,0.5)]">
          <CheckCircle2 size={64} className="text-white" strokeWidth={2.5} />
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-eden-primary"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
        <h1 className="mb-4 text-4xl font-bold text-eden-on-surface sm:text-5xl">You&apos;re all set!</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-eden-on-surface-variant">
          Your church dashboard is ready. You have Super Admin access — invite leaders and assign roles from your
          dashboard.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}>
        <EdenButton onClick={enterDashboard} className="px-10">
          Enter Dashboard
        </EdenButton>
        <p className="mt-6 text-sm text-eden-on-surface-variant/70">Redirecting to your dashboard...</p>
      </motion.div>
    </div>
  );
}
