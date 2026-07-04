import { Plus, MapPin, Clock } from "lucide-react";
import { motion } from "motion/react";

const events = [
  {
    id: 1,
    title: "Sunday Service",
    time: "9:00 AM",
    venue: "Main Auditorium",
    day: "2",
    monthShort: "Jun",
    dayName: "Sun",
    type: "Service",
  },
  {
    id: 2,
    title: "Youth Bible Study",
    time: "5:00 PM",
    venue: "Youth Hall",
    day: "4",
    monthShort: "Jun",
    dayName: "Tue",
    type: "Study",
  },
  {
    id: 3,
    title: "Leaders' Meeting",
    time: "10:00 AM",
    venue: "Conference Room A",
    day: "7",
    monthShort: "Jun",
    dayName: "Fri",
    type: "Meeting",
  },
  {
    id: 4,
    title: "Sunday Service",
    time: "9:00 AM",
    venue: "Main Auditorium",
    day: "9",
    monthShort: "Jun",
    dayName: "Sun",
    type: "Service",
  },
];

const typeColors: Record<string, string> = {
  Service: "#2D1B69",
  Study: "#0A4A3A",
  Meeting: "#C8860A",
  Camp: "#1A0533",
};

export function UpcomingEvents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.56 }}
      className="rounded-2xl p-5"
      style={{ background: "#FFFFFF", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <span style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A2E", fontFamily: "var(--font-label)" }}>
          Upcoming Events
        </span>
        <div
          className="px-2 py-0.5 rounded-full"
          style={{ background: "rgba(200,134,10,0.1)" }}
        >
          <span style={{ fontSize: "11px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 500 }}>
            7 events
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.06 }}
            className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-default"
            style={{ borderLeft: `3px solid ${typeColors[event.type] ?? "#C8860A"}` }}
          >
            {/* Date badge */}
            <div
              className="flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center"
              style={{ background: `${typeColors[event.type]}12` }}
            >
              <span style={{ fontSize: "18px", fontWeight: 700, color: typeColors[event.type], fontFamily: "var(--font-label)", lineHeight: 1 }}>
                {event.day}
              </span>
              <span style={{ fontSize: "9px", color: typeColors[event.type], fontFamily: "var(--font-label)", fontWeight: 500 }}>
                {event.monthShort}
              </span>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A2E", fontFamily: "var(--font-label)" }} className="truncate">
                {event.title}
              </div>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <div className="flex items-center gap-1">
                  <Clock size={10} color="#9CA3AF" />
                  <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{event.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={10} color="#9CA3AF" />
                  <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }} className="truncate">{event.venue}</span>
                </div>
              </div>
            </div>

            {/* Day name */}
            <div className="flex-shrink-0 self-center">
              <span style={{ fontSize: "11px", color: "#9CA3AF", fontFamily: "var(--font-label)" }}>{event.dayName}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all"
        style={{ border: "1.5px dashed #DDDDDD" }}
      >
        <Plus size={14} color="#C8860A" />
        <span style={{ fontSize: "12px", color: "#C8860A", fontFamily: "var(--font-label)", fontWeight: 500 }}>
          Create Event
        </span>
      </motion.button>
    </motion.div>
  );
}
