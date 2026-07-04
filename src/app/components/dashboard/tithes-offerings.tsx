import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import {
  Plus, Download, TrendingUp, TrendingDown, ArrowRight,
  ChevronRight, Users, AlertCircle, ArrowUpRight, ArrowDownRight,
} from "lucide-react";

// ─── Tokens ───────────────────────────────────────────────────────────────────

const BRAND = "#C8860A";
const DARK = "#1A1A1A";
const BG = "#F5F4EF";

// ─── Mock Data ────────────────────────────────────────────────────────────────

const GIVING_BREAKDOWN = [
  { name: "Tithe", amount: 24100, color: "#2D1B69" },
  { name: "Offering", amount: 14600, color: BRAND },
  { name: "Seed / First Fruit", amount: 6300, color: "#0A4A3A" },
  { name: "Fundraising", amount: 3200, color: "#7C3AED" },
];
const TOTAL = GIVING_BREAKDOWN.reduce((s, d) => s + d.amount, 0);

const MINISTRY_BREAKDOWN = [
  { name: "All Members", amount: 28000, trend: "up" },
  { name: "Youth Ministry", amount: 9400, trend: "up" },
  { name: "Choir", amount: 5200, trend: "down" },
  { name: "Children's", amount: 3100, trend: "up" },
  { name: "Media", amount: 2500, trend: "down" },
];
const MAX_MINISTRY = Math.max(...MINISTRY_BREAKDOWN.map(m => m.amount));

const CHANNEL_BREAKDOWN = [
  { name: "MoMo", amount: 21400, pct: 44 },
  { name: "Card", amount: 14800, pct: 31 },
  { name: "Cash", amount: 8600, pct: 18 },
  { name: "Cheque", amount: 3400, pct: 7 },
];

const TOP_CONTRIBUTORS = [
  { name: "Dr. Kwame Asante", ministry: "All Members", amount: 2400, initials: "KA", color: "#2D1B69" },
  { name: "Sis. Grace Mensah", ministry: "Choir", amount: 1800, initials: "GM", color: BRAND },
  { name: "Bro. Yaw Amponsah", ministry: "Youth", amount: 1500, initials: "YA", color: "#0A4A3A" },
  { name: "Elder Abena Osei", ministry: "Prayer Team", amount: 1200, initials: "AO", color: "#7C3AED" },
  { name: "Sis. Ama Boateng", ministry: "Children's", amount: 980, initials: "AB", color: "#B45309" },
];
const MAX_CONTRIB = Math.max(...TOP_CONTRIBUTORS.map(c => c.amount));

// Calendar giving blocks per day
const CALENDAR_DAYS = [
  {
    day: "Mon", date: "Jun 1",
    blocks: [
      { label: "Online Giving", amount: 3200, color: `${BRAND}CC`, givers: ["KA", "GM", "YA"], extra: 8 },
    ],
  },
  {
    day: "Tue", date: "Jun 2",
    blocks: [
      { label: "MoMo Transfer", amount: 1800, color: "#2D1B6980", givers: ["AO", "AB"], extra: 3 },
    ],
  },
  {
    day: "Wed", date: "Jun 3",
    blocks: [
      { label: "Online Giving", amount: 2400, color: `${BRAND}99`, givers: ["KA", "YA"], extra: 5 },
      { label: "Special Seed", amount: 800, color: "#7C3AED80", givers: ["GM"], extra: 2 },
    ],
  },
  {
    day: "Thu", date: "Jun 4",
    blocks: [
      { label: "MoMo Transfer", amount: 1200, color: "#0A4A3A80", givers: ["AB", "AO"], extra: 1 },
    ],
  },
  {
    day: "Fri", date: "Jun 5",
    blocks: [
      { label: "Online Giving", amount: 4100, color: `${BRAND}BB`, givers: ["KA", "GM", "AB"], extra: 12 },
    ],
  },
  {
    day: "Sat", date: "Jun 6",
    blocks: [
      { label: "Card Payment", amount: 900, color: "#2D1B6960", givers: ["YA"], extra: 0 },
    ],
  },
  {
    day: "Sun", date: "Jun 7",
    blocks: [
      { label: "Sunday Service Offering", amount: 12400, color: BRAND, givers: ["KA", "GM", "YA", "AO", "AB"], extra: 48 },
      { label: "First Fruit Seed", amount: 1800, color: "#7C3AED90", givers: ["KA", "AB"], extra: 4 },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmt(n: number) {
  if (n >= 1000) return `GHS ${(n / 1000).toFixed(1)}k`;
  return `GHS ${n.toLocaleString()}`;
}
function fmtFull(n: number) {
  return `GHS ${n.toLocaleString()}`;
}

// ─── Shared atoms ─────────────────────────────────────────────────────────────

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #EBEBEB", ...style }}>
      {children}
    </div>
  );
}

function AccentCard({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ background: BRAND, borderRadius: 14, ...style }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "var(--font-label)", fontSize: 11, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>
      {children}
    </div>
  );
}

function Avatar({ initials, color, size = 26 }: { initials: string; color: string; size?: number }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 99, background: `${color}22`, border: `1.5px solid ${color}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontFamily: "var(--font-label)", fontSize: size * 0.34, fontWeight: 700, color }}>{initials}</span>
    </div>
  );
}

type Period = "Week" | "Month" | "Year" | "Custom";

// ─── Period Selector ──────────────────────────────────────────────────────────

function PeriodSelector({ active, onChange }: { active: Period; onChange: (p: Period) => void }) {
  return (
    <div style={{ display: "flex", background: "#F3F4F6", borderRadius: 10, padding: 3, gap: 2 }}>
      {(["Week", "Month", "Year", "Custom"] as Period[]).map(p => (
        <button key={p} onClick={() => onChange(p)}
          style={{ padding: "5px 14px", borderRadius: 7, border: "none", background: active === p ? "#fff" : "transparent", color: active === p ? DARK : "#9CA3AF", fontFamily: "var(--font-label)", fontSize: 12, fontWeight: active === p ? 700 : 500, cursor: "pointer", boxShadow: active === p ? "0 1px 4px rgba(0,0,0,0.08)" : "none", transition: "all 0.15s" }}>
          {p}
        </button>
      ))}
    </div>
  );
}

// ─── Custom Donut Label ───────────────────────────────────────────────────────

function DonutCenter({ total }: { total: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
      <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Total</div>
      <div style={{ fontFamily: "var(--font-label)", fontSize: 17, fontWeight: 800, color: "#fff", lineHeight: 1 }}>GHS</div>
      <div style={{ fontFamily: "var(--font-label)", fontSize: 20, fontWeight: 800, color: "#fff", lineHeight: 1.1 }}>{(total / 1000).toFixed(1)}k</div>
    </div>
  );
}

// ─── Giving Calendar Block ────────────────────────────────────────────────────

function CalendarBlock({ block, onExpand, expanded }: {
  block: typeof CALENDAR_DAYS[0]["blocks"][0];
  onExpand: () => void;
  expanded: boolean;
}) {
  return (
    <div>
      <div
        onClick={onExpand}
        style={{ background: block.color, borderRadius: 8, padding: "6px 10px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, transition: "opacity 0.15s" }}
        onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: "#fff", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{block.label}</div>
          <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "rgba(255,255,255,0.8)" }}>{fmtFull(block.amount)}</div>
        </div>
        {/* Avatar cluster */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {block.givers.slice(0, 3).map((g, i) => (
            <div key={i} style={{ width: 20, height: 20, borderRadius: 99, background: "rgba(255,255,255,0.3)", border: "1.5px solid rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: i > 0 ? -6 : 0, zIndex: 3 - i }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 8, fontWeight: 700, color: "#fff" }}>{g}</span>
            </div>
          ))}
          {block.extra > 0 && (
            <div style={{ width: 20, height: 20, borderRadius: 99, background: "rgba(0,0,0,0.25)", border: "1.5px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: -6 }}>
              <span style={{ fontFamily: "var(--font-label)", fontSize: 8, fontWeight: 700, color: "#fff" }}>+{block.extra}</span>
            </div>
          )}
        </div>
      </div>
      {expanded && (
        <div style={{ background: "#fff", border: "1px solid #EBEBEB", borderRadius: "0 0 8px 8px", padding: "10px 12px", marginTop: -4 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#6B7280" }}>Givers</span>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: DARK }}>{block.givers.length + block.extra}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#6B7280" }}>Amount</span>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: BRAND }}>{fmtFull(block.amount)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#6B7280" }}>Channel</span>
            <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#374151" }}>MoMo · Card · Cash</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Tithes & Offerings Page ──────────────────────────────────────────────────

export function TithesOfferingsPage() {
  const [period, setPeriod] = useState<Period>("Month");
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);

  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  return (
    <div style={{ flex: 1, overflowY: "auto", background: BG }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "24px 28px 36px" }}>

        {/* ── Top Bar ── */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "var(--font-label)", fontSize: 13, color: "#9CA3AF", marginBottom: 2 }}>{today}</div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, color: DARK, margin: 0 }}>Good morning, Pastor Kwame 👋</h1>
            <div style={{ fontFamily: "var(--font-label)", fontSize: 13, color: "#6B7280", marginTop: 4 }}>Here's your giving overview for this {period.toLowerCase()}.</div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button style={{ display: "flex", alignItems: "center", gap: 7, background: "transparent", border: "1.5px solid #D1D5DB", borderRadius: 99, padding: "8px 18px", fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 600, color: "#374151", cursor: "pointer" }}>
              <Download size={14} />Export Report
            </button>
            <button style={{ display: "flex", alignItems: "center", gap: 7, background: BRAND, border: "none", borderRadius: 99, padding: "9px 18px", fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 700, color: "#fff", cursor: "pointer" }}>
              <Plus size={15} />Record Giving
            </button>
          </div>
        </div>

        {/* Period Selector */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
          <PeriodSelector active={period} onChange={setPeriod} />
        </div>

        {/* ── Three-column grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 260px", gap: 18, alignItems: "start" }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Widget 1 — Total Received */}
            <Card style={{ padding: "20px 20px" }}>
              <div style={{ fontFamily: "var(--font-label)", fontSize: 11, fontWeight: 700, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Total Received</div>
              <div style={{ fontFamily: "var(--font-label)", fontSize: 36, fontWeight: 800, color: DARK, lineHeight: 1, marginBottom: 8 }}>GHS 48,200</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, background: "rgba(10,74,58,0.09)", borderRadius: 99, padding: "3px 9px" }}>
                  <ArrowUpRight size={12} color="#0A4A3A" />
                  <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: "#0A4A3A" }}>12%</span>
                </div>
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#9CA3AF" }}>from last month</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Users size={13} color="#9CA3AF" />
                <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#6B7280" }}>214 contributors</span>
              </div>
            </Card>

            {/* Widget 2 — Giving Breakdown (accent card) */}
            <AccentCard style={{ padding: "20px 20px" }}>
              <div style={{ fontFamily: "var(--font-label)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14 }}>Giving Breakdown</div>
              {/* Donut chart */}
              <div style={{ position: "relative", height: 170 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={GIVING_BREAKDOWN}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={76}
                      paddingAngle={3}
                      dataKey="amount"
                      strokeWidth={0}
                    >
                      {GIVING_BREAKDOWN.map((entry, index) => (
                        <Cell key={index} fill={index === 0 ? "rgba(255,255,255,0.9)" : index === 1 ? "rgba(255,255,255,0.55)" : index === 2 ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)"} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => [`GHS ${value.toLocaleString()}`, ""]}
                      contentStyle={{ borderRadius: 10, border: "none", fontSize: 12, fontFamily: "var(--font-label)" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <DonutCenter total={TOTAL} />
              </div>
              {/* Legend */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
                {GIVING_BREAKDOWN.map((d, i) => {
                  const opacities = ["rgba(255,255,255,0.9)", "rgba(255,255,255,0.55)", "rgba(255,255,255,0.35)", "rgba(255,255,255,0.2)"];
                  return (
                    <div key={d.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <div style={{ width: 9, height: 9, borderRadius: 3, background: opacities[i], flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{d.name}</span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: "#fff" }}>{Math.round((d.amount / TOTAL) * 100)}%</span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "rgba(255,255,255,0.6)", marginLeft: 4 }}>GHS {(d.amount / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccentCard>

            {/* Widget 3 — Ministry Breakdown */}
            <Card style={{ padding: "18px 20px" }}>
              <SectionLabel>By Ministry</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {MINISTRY_BREAKDOWN.map(m => (
                  <div key={m.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#374151", fontWeight: 500 }}>{m.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        {m.trend === "up"
                          ? <ArrowUpRight size={11} color="#0A4A3A" />
                          : <ArrowDownRight size={11} color="#B91C1C" />}
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: DARK }}>GHS {(m.amount / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                    <div style={{ background: "#F3F4F6", borderRadius: 99, height: 5, overflow: "hidden" }}>
                      <div style={{ background: BRAND, width: `${Math.round((m.amount / MAX_MINISTRY) * 100)}%`, height: "100%", borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Widget 4 — Channel Breakdown */}
            <Card style={{ padding: "18px 20px" }}>
              <SectionLabel>By Channel</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {CHANNEL_BREAKDOWN.map(ch => (
                  <div key={ch.name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#374151", fontWeight: 500 }}>{ch.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "#9CA3AF" }}>{ch.pct}%</span>
                        <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: DARK }}>GHS {(ch.amount / 1000).toFixed(1)}k</span>
                      </div>
                    </div>
                    <div style={{ background: "#F3F4F6", borderRadius: 99, height: 5, overflow: "hidden" }}>
                      <div style={{ background: "#2D1B69", width: `${ch.pct}%`, height: "100%", borderRadius: 99 }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* ── CENTER — Giving Calendar ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <Card style={{ padding: "22px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                <div>
                  <SectionLabel>Weekly Giving Calendar</SectionLabel>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 15, fontWeight: 700, color: DARK, marginTop: -8 }}>Jun 1 – Jun 7, 2026</div>
                </div>
                <div style={{ fontFamily: "var(--font-label)", fontSize: 22, fontWeight: 800, color: BRAND }}>
                  GHS 27,600
                  <span style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 500, color: "#9CA3AF", marginLeft: 6 }}>this week</span>
                </div>
              </div>

              {/* Days */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {CALENDAR_DAYS.map(day => (
                  <div key={day.day} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    {/* Day label */}
                    <div style={{ width: 54, flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, color: day.day === "Sun" ? BRAND : DARK }}>{day.day}</div>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "#9CA3AF" }}>{day.date}</div>
                    </div>
                    {/* Blocks */}
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                      {day.blocks.map((block) => {
                        const key = `${day.day}-${block.label}`;
                        return (
                          <CalendarBlock
                            key={key}
                            block={block}
                            expanded={expandedBlock === key}
                            onExpand={() => setExpandedBlock(expandedBlock === key ? null : key)}
                          />
                        );
                      })}
                    </div>
                    {/* Day total */}
                    <div style={{ width: 80, textAlign: "right", flexShrink: 0 }}>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 700, color: DARK }}>
                        {fmt(day.blocks.reduce((s, b) => s + b.amount, 0))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View transactions link */}
              <div style={{ borderTop: "1px solid #F3F4F6", marginTop: 18, paddingTop: 14, display: "flex", justifyContent: "flex-end" }}>
                <button style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 600, color: BRAND }}>
                  View full transaction log <ArrowRight size={14} />
                </button>
              </div>
            </Card>

            {/* Summary bar chart — channel totals visual */}
            <Card style={{ padding: "20px 22px" }}>
              <SectionLabel>Daily Giving Trend</SectionLabel>
              <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 90 }}>
                {CALENDAR_DAYS.map(day => {
                  const dayTotal = day.blocks.reduce((s, b) => s + b.amount, 0);
                  const maxDay = Math.max(...CALENDAR_DAYS.map(d => d.blocks.reduce((s, b) => s + b.amount, 0)));
                  const pct = Math.round((dayTotal / maxDay) * 100);
                  return (
                    <div key={day.day} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                        <div style={{ width: "100%", borderRadius: "5px 5px 0 0", background: day.day === "Sun" ? BRAND : `${BRAND}50`, height: `${pct}%`, minHeight: 4, transition: "height 0.4s" }} />
                      </div>
                      <span style={{ fontFamily: "var(--font-label)", fontSize: 10, color: day.day === "Sun" ? BRAND : "#9CA3AF", fontWeight: day.day === "Sun" ? 700 : 400 }}>{day.day}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Top Contributors */}
            <Card style={{ padding: "18px 20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <SectionLabel>Top Contributors</SectionLabel>
                <button style={{ fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 600, color: BRAND, background: "none", border: "none", cursor: "pointer" }}>View all</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {TOP_CONTRIBUTORS.map((c, i) => (
                  <div key={c.name} style={{ position: "relative", borderRadius: 8, overflow: "hidden" }}>
                    {/* Background progress bar */}
                    <div style={{ position: "absolute", inset: 0, background: `${BRAND}${i === 0 ? "14" : "0A"}`, width: `${Math.round((c.amount / MAX_CONTRIB) * 100)}%`, borderRadius: 8 }} />
                    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 10, padding: "6px 8px" }}>
                      <Avatar initials={c.initials} color={c.color} size={30} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 600, color: DARK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.name}</div>
                        <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "#9CA3AF" }}>{c.ministry}</div>
                      </div>
                      <div style={{ fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 700, color: BRAND, flexShrink: 0 }}>GHS {c.amount.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Fundraising Progress */}
            <AccentCard style={{ padding: "20px 20px" }}>
              <div style={{ fontFamily: "var(--font-label)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.65)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>Fundraising Progress</div>
              <div style={{ fontFamily: "var(--font-label)", fontSize: 13, color: "rgba(255,255,255,0.85)", marginBottom: 16 }}>Building Fund Campaign</div>

              {/* Ring */}
              <div style={{ position: "relative", height: 130, marginBottom: 12 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{ v: 76 }, { v: 24 }]} cx="50%" cy="50%" innerRadius={42} outerRadius={58} startAngle={90} endAngle={-270} dataKey="v" strokeWidth={0}>
                      <Cell fill="rgba(255,255,255,0.9)" />
                      <Cell fill="rgba(255,255,255,0.2)" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 26, fontWeight: 800, color: "#fff", lineHeight: 1 }}>76%</div>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Raised</div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 16, fontWeight: 800, color: "#fff" }}>GHS 38,200</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Goal</div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 16, fontWeight: 800, color: "rgba(255,255,255,0.8)" }}>GHS 50,000</div>
                </div>
              </div>
              {/* Progress bar */}
              <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 99, height: 6, overflow: "hidden", marginBottom: 10 }}>
                <div style={{ background: "rgba(255,255,255,0.9)", width: "76%", height: "100%", borderRadius: 99 }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <ArrowDownRight size={12} color="rgba(255,255,255,0.7)" />
                <span style={{ fontFamily: "var(--font-label)", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>↓ 2.6% pace vs last campaign</span>
              </div>
            </AccentCard>

            {/* Pending / Unverified */}
            <Card style={{ padding: "16px 18px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(185,28,28,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <AlertCircle size={18} color="#B91C1C" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 2 }}>Pending Review</div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 26, fontWeight: 800, color: "#B91C1C", lineHeight: 1, marginBottom: 6 }}>4</div>
                  <div style={{ fontFamily: "var(--font-label)", fontSize: 12, color: "#6B7280", marginBottom: 10 }}>Transactions flagged or unverified</div>
                  <button style={{ display: "flex", alignItems: "center", gap: 5, background: "rgba(185,28,28,0.08)", color: "#B91C1C", border: "none", borderRadius: 99, padding: "6px 14px", fontFamily: "var(--font-label)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
                    Review now <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}
