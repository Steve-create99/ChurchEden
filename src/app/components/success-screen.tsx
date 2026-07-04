import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

interface SuccessScreenProps {
  onEnterDashboard: () => void;
}

export function SuccessScreen({ onEnterDashboard }: SuccessScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onEnterDashboard();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onEnterDashboard]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.6,
          }}
          className="mb-8 inline-block"
        >
          <div
            className="relative w-32 h-32 rounded-full flex items-center justify-center mx-auto"
            style={{
              background: 'linear-gradient(135deg, var(--aurora-amber), var(--aurora-gold))',
              boxShadow: '0 0 60px rgba(200, 134, 10, 0.6)',
            }}
          >
            <CheckCircle size={64} className="text-white" strokeWidth={2.5} />

            {/* Glow ring animation */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: '3px solid var(--aurora-amber)',
                opacity: 0.6,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '48px',
              fontWeight: 700,
              color: '#1a1a1a',
            }}
          >
            You're all set!
          </h1>

          <p
            className="mb-3 max-w-xl mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              color: 'rgba(0, 0, 0, 0.6)',
              lineHeight: 1.6,
            }}
          >
            Your church dashboard is ready. You have Super Admin access — invite leaders and assign roles from your dashboard.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(200, 134, 10, 0.1)',
              border: '1px solid rgba(200, 134, 10, 0.3)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[var(--aurora-amber)] animate-pulse" />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--aurora-amber)',
              }}
            >
              A confirmation has been sent to your email
            </span>
          </motion.div>
        </motion.div>

        {/* Auto-redirect message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
            }}
          >
            Redirecting to your dashboard...
          </p>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: 'var(--aurora-amber)',
              top: `${30 + Math.random() * 40}%`,
              left: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
