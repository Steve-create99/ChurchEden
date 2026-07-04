import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "motion/react";

const data = [
  { name: "Tithes", value: 26575, pct: 55 },
  { name: "Offerings", value: 13530, pct: 28 },
  { name: "Special Funds", value: 5799, pct: 12 },
  { name: "Missions", value: 2416, pct: 5 },
];

const COLORS = ["#C8860A", "#D4A628", "#F59E0B", "#FCD34D"];

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="px-3 py-2 rounded-xl"
        style={{ background: "#1A1A2E", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
      >
        <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-label)" }}>
          {payload[0].name}
        </div>
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-label)" }}>
          GHS {payload[0].value.toLocaleString()}
        </div>
      </div>
    );
  }
  return null;
};

export function FundBreakdown() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.62 }}
      className="rounded-2xl p-5"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Fund Breakdown
        </span>
        <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>June 2026</span>
      </div>

      {/* Donut chart */}
      <div className="relative">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={85}
              paddingAngle={3}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>Total</div>
          <div style={{ fontSize: "17px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)", lineHeight: 1.2, textAlign: "center" }}>
            GHS<br />48,320
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-2.5 mt-2">
        {data.map((item, i) => (
          <div key={item.name} className="flex items-center gap-2.5">
            <span
              className="w-3 h-3 rounded-sm flex-shrink-0"
              style={{ background: COLORS[i] }}
            />
            <div className="flex-1 flex items-center justify-between">
              <span style={{ fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-label)" }}>
                {item.name}
              </span>
              <div className="flex items-center gap-2">
                <div
                  className="h-1.5 rounded-full"
                  style={{ width: `${item.pct * 0.8}px`, background: COLORS[i], minWidth: "4px" }}
                />
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
                  {item.pct}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div
        className="flex gap-3 mt-4 pt-4"
        style={{ borderTop: "1px solid #EEEEEE" }}
      >
        {[
          { label: "Largest", value: "Tithes", sub: "GHS 26,575" },
          { label: "Growth", value: "+12%", sub: "vs last month" },
        ].map((item) => (
          <div key={item.label} className="flex-1 text-center p-2 rounded-xl" style={{ background: "#F7F7F8" }}>
            <div style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{item.label}</div>
            <div style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>{item.value}</div>
            <div style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{item.sub}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
