PROMPT 1 — QR Attendance Check-in Screen
Design intent: This is a operational/live screen — used by ushers or admins on the day of a service or event. It needs to feel fast, focused, and near-instant in feedback. Think airport boarding gate scanner UI — full attention on the scan zone, everything else secondary.

Two Modes (toggle at top)
📷 Scan QR — camera-based scanning (default)
🔍 Manual Search — type member name or ID if QR fails
Scan Mode Layout
Full-screen focused layout — minimal chrome:

Top bar (slim):

Church logo (small, left)
Event/Service name: Sunday Morning Service — Jun 1, 2026
Live counter (top right): 142 Checked In (updates in real time, brand color number)
End Session button (outlined, top right)
Center — Scan Zone (dominant, takes 55% of screen):

Camera viewfinder card — large, rounded corners (border-radius: 20px)
Animated scanning line (thin brand color line sweeping top → bottom in loop)
Corner bracket markers (like a QR frame guide — 4 corners, brand color)
Below viewfinder: Point camera at member's QR code (muted, 13px)
Success state (flashes on successful scan):

Viewfinder border pulses green
Member card slides up from bottom:
Large circular avatar
Member name (bold, 22px)
Ministry tag
✓ Checked In — 9:04 AM (green, bold)
Dismisses automatically after 2.5 seconds
Already checked-in state:

Viewfinder border pulses amber
Card shows: Already checked in at 8:52 AM
Not found state:

Viewfinder border pulses red
Card shows: Member not found — Try manual search
Bottom panel (always visible, slim):

Three quick stats in a strip:

Total Expected — 340
Checked In — 142 (brand color, live updating)
Absent — 198 (muted)
Mini live feed (last 5 check-ins, scrolling upward):

Avatar + Name + time — Abena Mensah · 9:04 AM
Each new entry slides in from bottom, pushing older ones up
Subtle animation, not distracting
Manual Search Mode Layout
Replaces scan zone with:

Search bar (large, autofocused):

Placeholder: Search by name, phone, or member ID
Results appear instantly below as member cards:
Avatar | Name | Ministry | Member ID
Check In button on each row (brand color pill)
If already checked in: gray Checked In ✓ state
Member QR Card (what the member shows)
Separate screen / printable view:

Church logo top
Member name + photo
QR code (large, center)
Member ID below QR
Service/event name
Valid for: Sunday Jun 1, 2026
Church brand color accents
Additional Details Worth Adding
Usher mode — simplified UI, no admin controls, just scan + counter
Offline mode — if internet drops, check-ins are cached locally and sync when connection returns. Banner shows: Offline — syncing when connected
Late check-in flag — if service started 30+ mins ago, check-in is tagged Late (amber badge, still counted as attended)
Guest check-in — button to log a first-timer: captures name + phone + how they heard about the church → feeds into first-timer follow-up sequence
Multi-event — if multiple events same day, admin selects which event session to check in for at session start
PROMPT 2 — Attendance History Page
Design intent: This is an analytics and records page — calm, data-rich, scannable. Pastors and admins use this to understand trends, identify absent members, and follow up. Think of it as the reporting counterpart to the live scan screen.

Layout Structure
Top: Page header + stats strip
Left sidebar: Filters
Center: Attendance timeline / table (dominant)
Right panel: Member detail slide-over on click
Top Bar
Page title: Attendance
Sub-label: Track member presence across services and events
Period toggle: This Week / This Month / This Year / Custom
Right: Export Report (outlined) | Send Absence Follow-up (brand color pill)
Stats Strip (4 chips)
Average Attendance — 68% (with trend ↑ or ↓)
This Sunday — 214 members
Consistent Members — 89 (attended 4+ of last 5 services)
At Risk — 23 (missed 3+ consecutive services, amber)
Left Sidebar — Filters
Event / Service — dropdown (All / Sunday Service / Wednesday Bible Study / Youth / specific events)
Date range — date picker
Ministry — multi-select
Attendance status — Present / Absent / Late / Guest
Member type — All / Regular / First-timer / At Risk
Apply Filters dark pill
Reset link
Center — Two Views (toggle: 📊 Overview / 📋 Records)
Overview View (default):

Attendance trend chart (bar chart, full width):

X-axis: dates / service names
Y-axis: number of members
Bar per service: brand color fill for present, muted gray for capacity
Hover tooltip: Sunday Jun 1 · 214 present · 68% rate · 23 late
Below chart: ● Present ● Absent ● Late legend
Heatmap strip (below chart):

Calendar-style grid: each cell = one service
Color intensity = attendance rate (light brand tint → full brand color)
Like a GitHub contribution graph but for church attendance
Quick visual of which weeks were strong vs weak
Ministry breakdown (bar rows below heatmap):

Each ministry row: name + attendance rate bar + number
All Members: 68%
Youth Ministry: 81%
Choir: 94% (they rehearse, naturally high)
Children's: 72%
Prayer Team: 88%
Records View:

Full member-by-service table:

Columns: | Member | Ministry | Jun 1 | May 25 | May 18 | May 11 | Streak | Rate | Actions |

Each service column: ✓ (green, present) / ✗ (red, absent) / L (amber, late) / G (blue, guest brought)
Streak: consecutive services attended (flame icon if 5+)
Rate: percentage over selected period
Actions: View Profile | Send Follow-up
Row states:

Consistent attenders (4+/5): subtle green left border
At-risk members (3+ misses): subtle red left border
First-timers: blue badge on name
Bulk actions (select multiple rows):

Send Absence Message — triggers WhatsApp/SMS to selected absent members
Export Selected
Flag for Pastoral Follow-up
Right Panel — Member Attendance Detail (on row click)
Slide-over without leaving page:

Member photo + name + ministry
Attendance rate (large, bold): 74%
Ring chart: Present vs Absent vs Late (last 12 services)
Timeline (vertical list): each service with date, status, check-in time if present
Last seen: Sunday May 25 · Checked in 9:12 AM
Streak badge: 🔥 4 consecutive services
Absence pattern insight (AI-light): Tends to miss mid-month services
Action buttons:
Send WhatsApp Follow-up
Send SMS
Add Pastoral Note
View Full Profile →
Additional Details Worth Adding
At-risk alert system — auto-flags members who miss 3+ consecutive services → notifies their assigned pastor/shepherd for follow-up
First-timer tracking — separate tab showing all guests who were logged at check-in, their follow-up status, and whether they returned
Service summary cards — click any service from the heatmap to see a full breakdown: who was present, who was absent, late arrivals, guests, check-in duration
Attendance certificates — for members with perfect or high attendance over a year, generate a downloadable certificate (great for church culture)
Comparative view — side-by-side: this month vs last month attendance rate per ministry
Shared style tokens (both screens):

QR screen background: deep dark #0A0A0A — scan focus demands it
History page background: warm off-white #F5F4EF
Brand color: scan success green #22C55E, brand color for check-in counter and highlights
Scan viewfinder: border-radius: 20px, animated corner brackets
Table rows: white, 1px bottom border, hover highlight
At-risk row: rgba(red, 0.06) left border 3px red
Consistent row: rgba(green, 0.06) left border 3px green
Ring/donut charts: brand color fill, dark track

