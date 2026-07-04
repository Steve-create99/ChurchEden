import { motion } from "motion/react";

interface TabSwitcherProps {
  activeTab: "register" | "signin";
  onChange: (tab: "register" | "signin") => void;
}

export function TabSwitcher({ activeTab, onChange }: TabSwitcherProps) {
  return (
    <div
      className="inline-flex p-1.5 rounded-full mb-8"
      style={{
        background: 'rgba(0, 0, 0, 0.03)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <button
        onClick={() => onChange("register")}
        className="relative px-8 py-2.5 rounded-full transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          color: activeTab === "register" ? 'white' : 'rgba(0, 0, 0, 0.6)',
        }}
      >
        {activeTab === "register" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--aurora-amber), var(--aurora-gold))',
              boxShadow: '0 4px 12px rgba(200, 134, 10, 0.3)',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">Register</span>
      </button>

      <button
        onClick={() => onChange("signin")}
        className="relative px-8 py-2.5 rounded-full transition-colors duration-300"
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          color: activeTab === "signin" ? 'white' : 'rgba(0, 0, 0, 0.6)',
        }}
      >
        {activeTab === "signin" && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--aurora-amber), var(--aurora-gold))',
              boxShadow: '0 4px 12px rgba(200, 134, 10, 0.3)',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">Sign In</span>
      </button>
    </div>
  );
}
