import { motion } from "motion/react";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base white gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(200, 134, 10, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(45, 27, 105, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(10, 74, 58, 0.05) 0%, transparent 60%),
            linear-gradient(135deg, #FEFEFE 0%, #F8F9FB 50%, #FFFFFF 100%)
          `
        }}
      />

      {/* Animated orbs - lighter and more subtle */}
      <motion.div
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ background: 'rgba(200, 134, 10, 0.3)' }}
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full blur-3xl opacity-12"
        style={{ background: 'rgba(45, 27, 105, 0.25)' }}
        animate={{
          x: [0, -60, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[20%] left-[40%] w-[350px] h-[350px] rounded-full blur-3xl opacity-10"
        style={{ background: 'rgba(10, 74, 58, 0.25)' }}
        animate={{
          x: [0, 40, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full blur-3xl opacity-08"
        style={{ background: 'rgba(212, 166, 40, 0.2)' }}
        animate={{
          x: [0, -40, 0],
          y: [0, 70, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
