import { useState } from "react";
import {
  ArrowLeft, Edit3, MessageSquare, ChevronDown, ChevronUp,
  Phone, Heart, Droplets, Star, Cake, Flame, CheckCircle,
  X, Send, Sparkles, Users,
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "motion/react";
import type { Member, Milestone } from "./mock-data";

// ─── Accordion ────────────────────────────────────────────────────────────────
function Accordion({
  title, icon: Icon, children, defaultOpen = false,
}: {
  title: string; icon: React.ElementType; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid #F0EDEA" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Icon size={13} style={{ color: "#C8860A" }} />
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>
            {title}
          </span>
        </div>
        {open
          ? <ChevronUp size={13} color="#9CA3AF" />
          : <ChevronDown size={13} color="#9CA3AF" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-3 space-y-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex justify-between items-start gap-3 py-0.5">
      <span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", flexShrink: 0 }}>{label}</span>
      <span style={{ fontSize: "12px", color: "#1A1A1A", fontFamily: "var(--font-label)", textAlign: "right" }}>{value}</span>
    </div>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, accent = false }: {
  label: string; value: string; sub?: string; accent?: boolean;
}) {
  return (
    <div className="rounded-2xl p-4" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
      <div style={{ fontSize: "10px", fontWeight: 600, color: "#9CA3AF", fontFamily: "var(--font-label)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
        {label}
      </div>
      <div style={{ fontSize: "28px", fontWeight: 700, color: accent ? "#C8860A" : "#1A1A1A", fontFamily: "var(--font-label)", lineHeight: 1.1, marginTop: "4px" }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "2px" }}>{sub}</div>}
    </div>
  );
}

// ─── Chart tooltip ────────────────────────────────────────────────────────────
function ChartTooltip({ active, payload, label }: {
  active?: boolean; payload?: Array<{ name: string; value: number; color: string }>; label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl px-3 py-2" style={{ background: "#1A1A1A", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}>
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-label)", marginBottom: "3px" }}>{label}</div>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full inline-block flex-shrink-0" style={{ background: p.color }} />
          <span style={{ fontSize: "12px", color: "#fff", fontFamily: "var(--font-label)" }}>
            {p.name}: GHS {p.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Attendance dots ──────────────────────────────────────────────────────────
function AttendanceDots({ records }: { records: { label: string; attended: boolean }[] }) {
  const attended = records.filter((r) => r.attended).length;
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {records.map((r, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.03, type: "spring", stiffness: 260 }}
            className="flex flex-col items-center gap-1"
            title={`${r.label} — ${r.attended ? "Attended" : "Absent"}`}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: r.attended ? "#C8860A" : "#F0EDEA",
                boxShadow: r.attended ? "0 2px 8px rgba(200,134,10,0.3)" : "none",
              }}
            >
              {r.attended
                ? <CheckCircle size={14} color="#fff" />
                : <X size={11} color="#C5BAB0" />}
            </div>
            <span style={{ fontSize: "9px", color: "#B0A89E", fontFamily: "var(--font-label)" }}>
              {r.label.replace(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) /, "")}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-3 pt-3" style={{ borderTop: "1px solid #F0EDEA" }}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C8860A", display: "inline-block" }} />
          <span style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Attended</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F0EDEA", display: "inline-block" }} />
          <span style={{ fontSize: "11px", color: "#6B7280", fontFamily: "var(--font-label)" }}>Absent</span>
        </div>
        <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginLeft: "auto" }}>
          {attended} / {records.length} services
        </span>
      </div>
    </div>
  );
}

// ─── Milestone icons ──────────────────────────────────────────────────────────
const milestoneIcon: Record<Milestone["type"], React.ElementType> = {
  birthday: Cake,
  baptism: Droplets,
  wedding: Heart,
  membership: Star,
  salvation: Sparkles,
};

// ─── Send message modal ───────────────────────────────────────────────────────
function MessageModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const [channel, setChannel] = useState<"whatsapp" | "sms" | "email">("whatsapp");
  const [msg, setMsg] = useState(`Hi ${member.name.split(" ")[0]}, hope you're doing well! Redeemer's Chapel is reaching out...`);
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-md rounded-2xl p-6"
        style={{ background: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
        initial={{ scale: 0.94, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 12 }}
      >
        <div className="flex items-center justify-between mb-5">
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>Send Message</span>
          <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
            <X size={15} color="#6B7280" />
          </button>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ background: "#F5F4EF" }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: member.avatarColor }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-label)" }}>{member.initials}</span>
          </div>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>{member.name}</div>
            <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{member.phone}</div>
          </div>
        </div>

        <div className="flex rounded-xl overflow-hidden mb-4" style={{ border: "1px solid #E8E4DE" }}>
          {(["whatsapp", "sms", "email"] as const).map((ch) => (
            <button
              key={ch}
              onClick={() => setChannel(ch)}
              className="flex-1 py-2.5 transition-all capitalize"
              style={channel === ch ? { background: "#1A1A1A" } : { background: "transparent" }}
            >
              <span style={{ fontSize: "12px", fontWeight: 500, fontFamily: "var(--font-label)", color: channel === ch ? "#fff" : "#6B7280" }}>
                {ch === "whatsapp" ? "WhatsApp" : ch === "sms" ? "SMS" : "Email"}
              </span>
            </button>
          ))}
        </div>

        <textarea
          rows={4}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="w-full p-3 rounded-xl resize-none outline-none"
          style={{ background: "#F5F4EF", fontSize: "13px", color: "#1A1A1A", fontFamily: "var(--font-label)", border: "1px solid #E8E4DE" }}
        />
        <button
          className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded-xl transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#1A1A1A" }}
        >
          <Send size={13} color="#C8860A" />
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#fff", fontFamily: "var(--font-label)" }}>
            Send via {channel === "whatsapp" ? "WhatsApp" : channel === "sms" ? "SMS" : "Email"}
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export function MemberDetail({ member, onBack }: { member: Member; onBack: () => void }) {
  const [period, setPeriod] = useState<"Monthly" | "Weekly">("Monthly");
  const [showMsg, setShowMsg] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState(member.notes);

  const addNote = () => {
    if (!newNote.trim()) return;
    setNotes([{ id: `n${Date.now()}`, author: "Pastor Emmanuel", date: "Jun 4, 2026", content: newNote.trim() }, ...notes]);
    setNewNote("");
  };

  const upcoming = member.milestones.filter((m) => m.upcoming).sort((a, b) => (a.daysAway ?? 999) - (b.daysAway ?? 999));
  const past = member.milestones.filter((m) => !m.upcoming);

  return (
    <div className="flex-1 flex flex-col overflow-hidden" style={{ background: "#F5F4EF" }}>
      {/* Top nav */}
      <div
        className="flex-shrink-0 flex items-center gap-3 px-5 lg:px-7"
        style={{ height: "60px", background: "#F5F4EF", borderBottom: "1px solid #E8E4DE" }}
      >
        <button onClick={onBack} className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 transition-colors">
          <ArrowLeft size={16} color="#1A1A1A" />
        </button>
        <div className="flex items-center gap-1.5">
          <button onClick={onBack} style={{ fontSize: "13px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>Members</button>
          <span style={{ color: "#C5BAB0" }}>/</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>{member.name}</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <button
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full transition-colors hover:bg-black/5"
            style={{ border: "1px solid #E8E4DE" }}
          >
            <Edit3 size={12} color="#1A1A1A" />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>Edit</span>
          </button>
          <button
            onClick={() => setShowMsg(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#1A1A1A" }}
          >
            <MessageSquare size={12} color="#C8860A" />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "#fff", fontFamily: "var(--font-label)" }}>Send Message</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 lg:p-7">
        <div className="grid grid-cols-1 lg:grid-cols-[256px_1fr_256px] gap-5 max-w-screen-xl mx-auto">

          {/* ── Left panel ── */}
          <div className="flex flex-col gap-4">
            {/* Profile card */}
            <div className="rounded-2xl p-5 flex flex-col items-center text-center" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                style={{ background: member.avatarColor, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
              >
                <span style={{ fontSize: "26px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-label)" }}>{member.initials}</span>
              </div>
              <div style={{ fontSize: "17px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>{member.name}</div>
              <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "2px" }}>
                {member.ministries[0]} · {member.gender}
              </div>

              {/* Giving badge */}
              <div
                className="mt-3 flex items-center gap-2 px-3.5 py-2 rounded-full"
                style={{ background: "rgba(200,134,10,0.08)", border: "1px solid rgba(200,134,10,0.2)" }}
              >
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#C8860A", fontFamily: "var(--font-label)" }}>
                  GHS {member.totalGivingYTD.toLocaleString()}
                </span>
                <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>this year</span>
              </div>

              {/* Status */}
              <div className="mt-2.5">
                <span
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontSize: "11px", fontWeight: 500, fontFamily: "var(--font-label)",
                    background: member.status === "Active" ? "rgba(10,122,74,0.08)" : member.status === "First-timer" ? "rgba(200,134,10,0.08)" : "#F3F4F6",
                    color: member.status === "Active" ? "#0A7A4A" : member.status === "First-timer" ? "#C8860A" : "#6B7280",
                  }}
                >
                  {member.status}
                </span>
              </div>

              <div className="w-full mt-3 pt-3 flex items-center justify-between" style={{ borderTop: "1px solid #F0EDEA" }}>
                <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>Member since</span>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>{member.joinDate}</span>
              </div>
            </div>

            {/* Accordion card */}
            <div className="rounded-2xl px-4 py-1" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <Accordion title="Spiritual Journey" icon={Sparkles} defaultOpen>
                <InfoRow label="Salvation" value={member.salvationDate} />
                <InfoRow label="Baptism" value={member.baptismDate || "Not yet"} />
                <InfoRow label="Confirmation" value={member.confirmationDate || "Not yet"} />
              </Accordion>
              <Accordion title="Contact Info" icon={Phone}>
                <InfoRow label="Phone" value={member.phone} />
                <InfoRow label="Email" value={member.email} />
                <InfoRow label="Address" value={member.address} />
              </Accordion>
              <Accordion title="Family Info" icon={Heart}>
                <InfoRow label="Spouse" value={member.spouse || "Not listed"} />
                <InfoRow label="Children" value={member.children.length ? member.children.join(", ") : "None"} />
              </Accordion>
              <Accordion title="Ministry Involvement" icon={Users}>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.ministries.map((m) => (
                    <span key={m} className="px-2.5 py-1 rounded-full" style={{ background: "#F5F4EF", fontSize: "11px", color: "#1A1A1A", fontFamily: "var(--font-label)" }}>
                      {m}
                    </span>
                  ))}
                </div>
              </Accordion>
            </div>
          </div>

          {/* ── Center ── */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* Stat cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard
                label="Attendance Rate"
                value={`${member.attendanceRate}%`}
                sub="Last 12 services"
                accent={member.attendanceRate >= 85}
              />
              <StatCard
                label="Total Giving YTD"
                value={`GHS ${(member.totalGivingYTD / 1000).toFixed(1)}k`}
                sub="Year to date"
                accent
              />
              <StatCard label="Events Attended" value={String(member.eventsAttended)} sub="This year" />
              <StatCard
                label="Giving Streak"
                value={`${member.streak}wk`}
                sub="Consecutive"
                accent={member.streak >= 10}
              />
            </div>

            {/* Giving history */}
            <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>Giving History</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "1px" }}>Tithe · Offering · Special</div>
                </div>
                <div className="flex rounded-xl overflow-hidden" style={{ border: "1px solid #E8E4DE" }}>
                  {(["Monthly", "Weekly"] as const).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className="px-3 py-1.5 transition-all"
                      style={period === p ? { background: "#1A1A1A" } : { background: "transparent" }}
                    >
                      <span style={{ fontSize: "11px", fontWeight: 500, fontFamily: "var(--font-label)", color: period === p ? "#fff" : "#6B7280" }}>{p}</span>
                    </button>
                  ))}
                </div>
              </div>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={member.givingHistory} barCategoryGap="35%" barGap={2}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F5F4EF" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9CA3AF", fontFamily: "var(--font-label)" }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: "#9CA3AF", fontFamily: "var(--font-label)" }} width={36} />
                  <Tooltip content={<ChartTooltip />} />
                  <Bar dataKey="tithe" name="Tithe" fill="#C8860A" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="offering" name="Offering" fill="#D4A628" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="special" name="Special" fill="#FCD34D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Attendance record */}
            <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>Attendance Record</div>
                  <div style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)", marginTop: "1px" }}>Past 12 Sunday services</div>
                </div>
                <div className="px-3 py-1.5 rounded-full" style={{ background: "rgba(200,134,10,0.08)" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "#C8860A", fontFamily: "var(--font-label)" }}>{member.attendanceRate}% rate</span>
                </div>
              </div>
              <AttendanceDots records={member.serviceAttendance} />
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="flex flex-col gap-4">
            {/* Milestones */}
            <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-4">
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>Milestones</span>
                <span className="px-2.5 py-1 rounded-full" style={{ background: "#F5F4EF", fontSize: "12px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>
                  {upcoming.length}/{member.milestones.length}
                </span>
              </div>

              {upcoming.length > 0 && (
                <div className="mb-3">
                  <div style={{ fontSize: "10px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.07em", fontFamily: "var(--font-label)", marginBottom: "8px" }}>UPCOMING</div>
                  <div className="space-y-2">
                    {upcoming.map((m) => {
                      const Icon = milestoneIcon[m.type] ?? Star;
                      const isClose = (m.daysAway ?? 999) <= 14;
                      return (
                        <div key={m.label} className="flex items-center gap-3 p-2.5 rounded-xl" style={{ background: isClose ? "rgba(200,134,10,0.05)" : "#F9F8F6" }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: isClose ? "rgba(200,134,10,0.12)" : "#F0EDEA" }}>
                            <Icon size={14} style={{ color: "#C8860A" }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>{m.label}</div>
                            <div style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{m.date}</div>
                          </div>
                          {(m.daysAway ?? 999) <= 30 && (
                            <span className="px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(200,134,10,0.1)", fontSize: "10px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 600 }}>
                              {m.daysAway}d
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {past.length > 0 && (
                <div>
                  <div style={{ fontSize: "10px", fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.07em", fontFamily: "var(--font-label)", marginBottom: "8px" }}>PAST</div>
                  <div className="space-y-2">
                    {past.map((m) => {
                      const Icon = milestoneIcon[m.type] ?? Star;
                      return (
                        <div key={m.label} className="flex items-center gap-3 p-2.5 rounded-xl" style={{ background: "#F9F8F6" }}>
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#F0EDEA" }}>
                            <Icon size={14} style={{ color: "#C8860A" }} />
                          </div>
                          <div>
                            <div style={{ fontSize: "12px", fontWeight: 600, color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{m.label}</div>
                            <div style={{ fontSize: "11px", color: "#B0A89E", fontFamily: "var(--font-label)" }}>{m.date}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="rounded-2xl p-5" style={{ background: "#FFFFFF", boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center justify-between mb-4">
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", fontFamily: "var(--font-label)" }}>Pastor Notes</span>
                <Flame size={14} color="#C8860A" />
              </div>

              <textarea
                rows={3}
                placeholder="Add a private note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full p-3 rounded-xl resize-none outline-none"
                style={{ background: "#F5F4EF", fontSize: "12px", color: "#1A1A1A", fontFamily: "var(--font-label)", border: "1.5px solid transparent", transition: "border-color 0.15s" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(200,134,10,0.35)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "transparent")}
              />
              <AnimatePresence>
                {newNote.trim() && (
                  <motion.button
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    onClick={addNote}
                    className="w-full mt-2 py-2.5 rounded-xl transition-all hover:opacity-90"
                    style={{ background: "#1A1A1A" }}
                  >
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#fff", fontFamily: "var(--font-label)" }}>Post Note</span>
                  </motion.button>
                )}
              </AnimatePresence>

              <div className="space-y-2.5 mt-3">
                <AnimatePresence>
                  {notes.map((note) => (
                    <motion.div
                      key={note.id}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl"
                      style={{ background: "#F5F4EF" }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span style={{ fontSize: "11px", fontWeight: 600, color: "#C8860A", fontFamily: "var(--font-label)" }}>{note.author}</span>
                        <span style={{ fontSize: "10px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{note.date}</span>
                      </div>
                      <p style={{ fontSize: "12px", color: "#4B5563", fontFamily: "var(--font-label)" }}>{note.content}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {notes.length === 0 && (
                  <div className="text-center py-3">
                    <span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>No notes yet</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showMsg && <MessageModal member={member} onClose={() => setShowMsg(false)} />}
      </AnimatePresence>
    </div>
  );
}
