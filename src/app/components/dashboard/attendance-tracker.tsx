import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const attendanceData = [
  { label: "Jun 1", attended: true, pct: 0.92 },
  { label: "May 25", attended: true, pct: 0.88 },
  { label: "May 18", attended: true, pct: 0.95 },
  { label: "May 11", attended: true, pct: 0.82 },
  { label: "May 4", attended: false, pct: 0.45 },
  { label: "Apr 27", attended: true, pct: 0.78 },
  { label: "Apr 20", attended: true, pct: 0.91 },
  { label: "Apr 13", attended: false, pct: 0.32 },
  { label: "Apr 6", attended: true, pct: 0.85 },
  { label: "Mar 30", attended: true, pct: 0.87 },
  { label: "Mar 23", attended: true, pct: 0.90 },
  { label: "Mar 16", attended: false, pct: 0.55 },
  { label: "Mar 9", attended: true, pct: 0.93 },
  { label: "Mar 2", attended: true, pct: 0.76 },
  { label: "Feb 23", attended: true, pct: 0.89 },
  { label: "Feb 16", attended: false, pct: 0.38 },
  { label: "Feb 9", attended: true, pct: 0.84 },
  { label: "Feb 2", attended: true, pct: 0.91 },
  { label: "Jan 26", attended: true, pct: 0.72 },
  { label: "Jan 19", attended: false, pct: 0.28 },
  { label: "Jan 12", attended: true, pct: 0.88 },
  { label: "Jan 5", attended: true, pct: 0.85 },
];

function dotColor(pct: number) {
  if (pct >= 0.85) return "#C8860A";
  if (pct >= 0.6) return "rgba(200,134,10,0.5)";
  if (pct >= 0.4) return "rgba(200,134,10,0.25)";
  return "#E5E7EB";
}

export function AttendanceTracker() {
  const [period, setPeriod] = useState("Weekly");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.28 }}
      className="rounded-2xl p-5 h-full"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Attendance
        </span>
        <button
          onClick={() => setPeriod(period === "Weekly" ? "Monthly" : "Weekly")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors hover:bg-gray-50"
          style={{ border: "1px solid #EEEEEE" }}
        >
          <span style={{ fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-label)" }}>{period}</span>
          <ChevronDown size={12} color="#9CA3AF" />
        </button>
      </div>

      {/* Big number */}
      <div className="mb-1">
        <div style={{ fontSize: "32px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)", lineHeight: 1.1 }}>
          892
        </div>
        <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "4px" }}>
          Average Sunday attendance
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-1.5">
          <span style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Capacity: 1,000</span>
          <span style={{ fontSize: "11px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 600 }}>89.2%</span>
        </div>
        <div className="h-2 rounded-full" style={{ background: "#F3F4F6" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #C8860A, #D4A628)" }}
            initial={{ width: 0 }}
            animate={{ width: "89.2%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Dot grid */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Service days</span>
          <div className="flex items-center gap-3">
            {[
              { label: "High", color: "#C8860A" },
              { label: "Med", color: "rgba(200,134,10,0.5)" },
              { label: "Low", color: "#E5E7EB" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full inline-block" style={{ background: item.color }} />
                <span style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-1.5" style={{ gridTemplateColumns: "repeat(11, 1fr)" }}>
          {attendanceData.map((d, i) => (
            <motion.div
              key={i}
              className="rounded-full cursor-pointer"
              style={{ aspectRatio: "1", background: dotColor(d.pct) }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.03 }}
              title={`${d.label}: ${Math.round(d.pct * 1000)} attendees`}
            />
          ))}
        </div>
      </div>

      {/* Month comparison */}
      <div className="flex gap-3 pt-3" style={{ borderTop: "1px solid #EEEEEE" }}>
        <div className="flex-1 text-center">
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>892</div>
          <div style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>This Month</div>
        </div>
        <div className="w-px" style={{ background: "#EEEEEE" }} />
        <div className="flex-1 text-center">
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>854</div>
          <div style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Last Month</div>
        </div>
        <div className="w-px" style={{ background: "#EEEEEE" }} />
        <div className="flex-1 text-center">
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#0A7A4A", fontFamily: "var(--font-label)" }}>+4.5%</div>
          <div style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Growth</div>
        </div>
      </div>
    </motion.div>
  );
}
