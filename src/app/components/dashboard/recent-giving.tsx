import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { motion } from "motion/react";

const transactions = [
  { id: 1, name: "Emmanuel Asante", initials: "EA", amount: 500, type: "Tithe", date: "Today", isNew: true, color: "#C8860A" },
  { id: 2, name: "Abena Mensah", initials: "AM", amount: 200, type: "Offering", date: "Today", isNew: true, color: "#2D1B69" },
  { id: 3, name: "Kofi Boateng", initials: "KB", amount: 1000, type: "Tithe", date: "Yesterday", isNew: false, color: "#0A4A3A" },
  { id: 4, name: "Akosua Darko", initials: "AD", amount: 350, type: "Special Fund", date: "Yesterday", isNew: false, color: "#1A0533" },
  { id: 5, name: "Samuel Owusu", initials: "SO", amount: 750, type: "Tithe", date: "May 30", isNew: false, color: "#C8860A" },
  { id: 6, name: "Gifty Amponsah", initials: "GA", amount: 150, type: "Offering", date: "May 30", isNew: false, color: "#2D1B69" },
  { id: 7, name: "Prince Amoah", initials: "PA", amount: 500, type: "Missions", date: "May 29", isNew: false, color: "#0A4A3A" },
  { id: 8, name: "Nana Ama Yeboah", initials: "NY", amount: 200, type: "Tithe", date: "May 29", isNew: false, color: "#1A0533" },
];

const filterChips = ["All", "Tithes", "Offerings", "Special Funds", "Missions"];

const typeColors: Record<string, string> = {
  Tithe: "#0A7A4A",
  Offering: "#2D1B69",
  "Special Fund": "#C8860A",
  Missions: "#1A0533",
};

export function RecentGiving() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = transactions.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      (activeFilter === "Tithes" && t.type === "Tithe") ||
      (activeFilter === "Offerings" && t.type === "Offering") ||
      (activeFilter === "Special Funds" && t.type === "Special Fund") ||
      (activeFilter === "Missions" && t.type === "Missions");
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.44 }}
      className="rounded-2xl p-5"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Recent Giving
        </span>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full" style={{ background: "rgba(200,134,10,0.1)" }}>
          <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#C8860A" }} />
          <span style={{ fontSize: "11px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 500 }}>
            {transactions.filter((t) => t.isNew).length} new
          </span>
        </div>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl flex-1"
          style={{ background: "#F7F7F8" }}
        >
          <Search size={13} color="#9CA3AF" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-1 min-w-0"
            style={{ fontSize: "13px", color: "#1A1A2E", fontFamily: "var(--font-label)" }}
          />
          {search && (
            <button onClick={() => setSearch("")}>
              <X size={12} color="#9CA3AF" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
          {filterChips.map((chip) => (
            <button
              key={chip}
              onClick={() => setActiveFilter(chip)}
              className="flex-shrink-0 px-3 py-1.5 rounded-full transition-all"
              style={
                activeFilter === chip
                  ? { background: "#1A1A2E", color: "#FFFFFF" }
                  : { background: "#F7F7F8", color: "#6B7280", border: "1px solid #EEEEEE" }
              }
            >
              <span style={{ fontSize: "11px", fontFamily: "var(--font-label)", fontWeight: activeFilter === chip ? 600 : 400 }}>
                {chip}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Table header */}
      <div className="hidden sm:grid grid-cols-12 px-2 mb-2 gap-2">
        {["Member", "Amount", "Type", "Date"].map((h, i) => (
          <div
            key={h}
            className={i === 0 ? "col-span-5" : i === 1 ? "col-span-3" : i === 2 ? "col-span-2" : "col-span-2"}
          >
            <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)", fontWeight: 500 }}>{h}</span>
          </div>
        ))}
      </div>

      {/* Transactions */}
      <div className="space-y-1">
        {filtered.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.5 + i * 0.04 }}
            className="grid grid-cols-12 items-center px-3 py-3 rounded-xl gap-2 hover:bg-gray-50 transition-colors cursor-default"
          >
            {/* Member */}
            <div className="col-span-5 flex items-center gap-2.5">
              {t.isNew && (
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#C8860A" }} />
              )}
              {!t.isNew && <span className="w-1.5 h-1.5 flex-shrink-0" />}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: t.color }}
              >
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-label)" }}>
                  {t.initials}
                </span>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A2E", fontFamily: "var(--font-label)" }} className="truncate">
                {t.name}
              </span>
            </div>

            {/* Amount */}
            <div className="col-span-3">
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
                GHS {t.amount.toLocaleString()}
              </span>
            </div>

            {/* Type */}
            <div className="col-span-2">
              <span
                className="px-2 py-0.5 rounded-full"
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-label)",
                  fontWeight: 500,
                  background: `${typeColors[t.type]}18`,
                  color: typeColors[t.type],
                }}
              >
                {t.type}
              </span>
            </div>

            {/* Date */}
            <div className="col-span-2">
              <span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{t.date}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 mt-2" style={{ borderTop: "1px solid #EEEEEE" }}>
        <span style={{ fontSize: "12px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>
          Showing {filtered.length} of {transactions.length} transactions
        </span>
        <button style={{ fontSize: "12px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 500 }}>
          View all transactions →
        </button>
      </div>
    </motion.div>
  );
}
