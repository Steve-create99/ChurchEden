import { Plus, Users, Zap } from "lucide-react";
import { motion } from "motion/react";

const announcements = [
  {
    id: 1,
    title: "Youth Camp Registration Now Open",
    date: "May 30",
    audience: "Youth",
    preview: "Registration for the annual youth camp is now open. Deadline: June 15.",
    isNew: true,
  },
  {
    id: 2,
    title: "Mid-Year Thanksgiving Service",
    date: "May 28",
    audience: "All Members",
    preview: "Join us for a special mid-year thanksgiving service on June 29, 2026.",
    isNew: false,
  },
  {
    id: 3,
    title: "Leaders' Retreat Planning",
    date: "May 25",
    audience: "Leaders",
    preview: "All ministry leaders are required to attend the planning retreat on June 14.",
    isNew: false,
  },
];

const audienceColors: Record<string, { bg: string; text: string }> = {
  Youth: { bg: "rgba(45,27,105,0.1)", text: "#2D1B69" },
  "All Members": { bg: "rgba(10,74,58,0.1)", text: "#0A4A3A" },
  Leaders: { bg: "rgba(200,134,10,0.1)", text: "#C8860A" },
};

export function AnnouncementsHub() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.68 }}
      className="rounded-2xl p-5"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Announcements Hub
        </span>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full" style={{ background: "rgba(200,134,10,0.1)" }}>
          <Zap size={10} color="#C8860A" />
          <span style={{ fontSize: "11px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 500 }}>1 new</span>
        </div>
      </div>

      <div className="space-y-3">
        {announcements.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
            className="p-3 rounded-xl cursor-default hover:shadow-sm transition-shadow"
            style={{
              background: item.isNew ? "rgba(200,134,10,0.04)" : "#F7F7F8",
              border: item.isNew ? "1px solid rgba(200,134,10,0.18)" : "1px solid transparent",
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <div className="flex items-center gap-1.5 flex-1 min-w-0">
                {item.isNew && (
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-0.5" style={{ background: "#C8860A" }} />
                )}
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#1A1A2E",
                    fontFamily: "var(--font-label)",
                  }}
                  className="truncate"
                >
                  {item.title}
                </span>
              </div>
              <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)", flexShrink: 0 }}>
                {item.date}
              </span>
            </div>

            <p
              style={{ fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-label)" }}
              className="mb-2 line-clamp-2"
            >
              {item.preview}
            </p>

            <div className="flex items-center gap-1.5">
              <Users size={10} color="#9CA3AF" />
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-label)",
                  fontWeight: 500,
                  background: audienceColors[item.audience]?.bg ?? "#F3F4F6",
                  color: audienceColors[item.audience]?.text ?? "#6B7280",
                }}
              >
                {item.audience}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.01, boxShadow: "0 4px 20px rgba(200,134,10,0.3)" }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl transition-all"
        style={{ background: "#C8860A" }}
      >
        <Plus size={14} color="#FFFFFF" />
        <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFFFFF", fontFamily: "var(--font-label)" }}>
          Post Announcement
        </span>
      </motion.button>
    </motion.div>
  );
}
