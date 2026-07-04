import { useState } from "react";
import { ChevronDown, Download, BarChart3 } from "lucide-react";
import { motion } from "motion/react";

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
const weekLabels = ["W1", "W2", "W3", "W4", "W5"];

const heatmapData = [
  [0.0, 0.0, 0.2, 0.0, 0.0, 0.5, 0.9],
  [0.0, 0.0, 0.4, 0.0, 0.0, 0.7, 1.0],
  [0.0, 0.1, 0.3, 0.0, 0.0, 0.6, 0.8],
  [0.0, 0.0, 0.5, 0.0, 0.0, 0.4, 1.0],
  [0.0, 0.0, 0.1, 0.0, 0.0, 0.3, 0.5],
];

function cellColor(v: number) {
  if (v === 0) return "#F3F4F6";
  if (v < 0.25) return "#FEF3C7";
  if (v < 0.5) return "#FCD34D";
  if (v < 0.75) return "#F59E0B";
  return "#C8860A";
}

export function GivingOverview() {
  const [period, setPeriod] = useState("Monthly");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="rounded-2xl p-5 h-full"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Giving Overview
        </span>
        <button
          onClick={() => setPeriod(period === "Monthly" ? "Weekly" : "Monthly")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors hover:bg-gray-50"
          style={{ border: "1px solid #EEEEEE" }}
        >
          <span style={{ fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-label)" }}>{period}</span>
          <ChevronDown size={12} color="#9CA3AF" />
        </button>
      </div>

      {/* Amount */}
      <div className="mb-1">
        <div style={{ fontSize: "32px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)", lineHeight: 1.1 }}>
          GHS 48,320<span style={{ fontSize: "18px" }}>.00</span>
        </div>
        <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "4px" }}>
          Total received this month
        </div>
      </div>

      {/* Sub-categories */}
      <div className="flex items-center gap-3 mb-5">
        {[
          { label: "Tithes", color: "#C8860A" },
          { label: "Offerings", color: "#D4A628" },
          { label: "Special Funds", color: "#6B7280" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: item.color }} />
            <span style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="mb-5">
        <div className="flex gap-0.5 mb-0.5 pl-7">
          {dayLabels.map((d, i) => (
            <div
              key={i}
              className="flex-1 text-center"
              style={{ fontSize: "9px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="space-y-1">
          {heatmapData.map((week, wi) => (
            <div key={wi} className="flex items-center gap-0.5">
              <span style={{ fontSize: "9px", color: "#9CA3AF", fontFamily: "var(--font-label)", width: "22px", flexShrink: 0 }}>
                {weekLabels[wi]}
              </span>
              {week.map((v, di) => (
                <motion.div
                  key={di}
                  className="flex-1 rounded-sm"
                  style={{ height: "22px", background: cellColor(v) }}
                  initial={{ scaleY: 0, originY: 1 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + wi * 0.06 + di * 0.02 }}
                  title={v > 0 ? `GHS ${Math.round(v * 5000).toLocaleString()}` : "No data"}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Scale legend */}
      <div className="flex items-center gap-1 mb-5">
        <span style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>Less</span>
        {["#F3F4F6", "#FEF3C7", "#FCD34D", "#F59E0B", "#C8860A"].map((c) => (
          <div key={c} className="w-4 h-3 rounded-sm" style={{ background: c }} />
        ))}
        <span style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>More</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1A1A2E" }}
        >
          <BarChart3 size={13} color="#C8860A" />
          <span style={{ fontSize: "12px", fontWeight: 600, color: "#FFFFFF", fontFamily: "var(--font-label)" }}>View Breakdown</span>
        </button>
        <button
          className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl transition-all hover:bg-gray-50 active:scale-95"
          style={{ border: "1px solid #EEEEEE" }}
        >
          <Download size={13} color="#6B7280" />
          <span style={{ fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Export</span>
        </button>
      </div>
    </motion.div>
  );
}
