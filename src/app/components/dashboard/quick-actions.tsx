import { QrCode, UserPlus, Megaphone, DollarSign, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const actions = [
  {
    icon: QrCode,
    label: "Generate QR Code",
    desc: "Scan & record attendance",
    isHighlight: true,
  },
  {
    icon: UserPlus,
    label: "Add Member",
    desc: "Register a new member",
    isHighlight: false,
  },
  {
    icon: Megaphone,
    label: "Post Announcement",
    desc: "Send to all members",
    isHighlight: false,
  },
  {
    icon: DollarSign,
    label: "Record Offering",
    desc: "Log a new contribution",
    isHighlight: false,
  },
];

export function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.36 }}
      className="rounded-2xl p-5 h-full"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Quick Actions
        </span>
        <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "2px" }}>
          Frequently used tasks
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {actions.map((action, i) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.07 }}
            whileHover={{
              scale: 1.02,
              boxShadow: action.isHighlight
                ? "0 4px 20px rgba(200,134,10,0.35)"
                : "0 4px 16px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all"
            style={
              action.isHighlight
                ? { background: "#C8860A", boxShadow: "0 2px 10px rgba(200,134,10,0.25)" }
                : { background: "#F7F7F8", border: "1px solid #EEEEEE" }
            }
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={
                action.isHighlight
                  ? { background: "rgba(255,255,255,0.2)" }
                  : { background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }
              }
            >
              <action.icon
                size={16}
                style={{ color: action.isHighlight ? "#FFFFFF" : "#C8860A" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: action.isHighlight ? "#FFFFFF" : "#1A1A2E",
                  fontFamily: "var(--font-label)",
                }}
              >
                {action.label}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: action.isHighlight ? "rgba(255,255,255,0.75)" : "#9CA3AF",
                  fontFamily: "var(--font-label)",
                  marginTop: "1px",
                }}
              >
                {action.desc}
              </div>
            </div>
            <ChevronRight
              size={14}
              style={{ color: action.isHighlight ? "rgba(255,255,255,0.8)" : "#C8860A", flexShrink: 0 }}
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
