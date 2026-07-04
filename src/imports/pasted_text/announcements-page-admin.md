ChurchLedger — Announcements Page (Admin Web Dashboard)

Design reference: VectorOS agent dashboard — clean white workspace, minimal top nav, left-heavy content with a persistent right activity panel, subtle card borders, lots of breathing room, professional but human. Adapt church brand color in place of the blue accent.

Layout Structure
Three-column layout (like VectorOS):

Left: Status filter sidebar
Center: Announcements workspace (main feed)
Right: Activity & scheduling panel
Top Bar
Page title "Announcements" (large, left-aligned)
Status indicator for the admin: ● Active with name (like "Veronica Lawson" in reference)
Right side: + New Announcement dark pill button
Sub-nav tabs (inline, not bold): All | Drafts | Scheduled | Published | Archived
Search bar (subtle, icon-leading)
Stats Strip (below top bar)
Four metric chips in a row — same style as the 23 min / 42 / 14 / 142 min row in reference:

Sent This Month — number + ↑ trend
Scheduled — number + count
Open Rate (SMS/email delivery success) — percentage
Reach — total members notified across all channels
Center — Announcements Feed
Each announcement renders as a horizontal card (like the AI Collaboration task cards in reference):

Card anatomy:

Top-left: channel badge — 📧 Email / 💬 SMS / 📱 WhatsApp / 🔔 In-App (multi-channel chips)
Top-right: expand arrow icon
Announcement title (bold, 16px)
Body preview — 2-line truncated snippet of the message
Bottom row:
Ministry target: All Members or Youth Ministry, Choir (pill tags)
Scheduled time or Sent — Sun 8:00 AM
Author avatar + name (tiny, bottom-left — like "David Bryne" in reference)
Status badge (right-aligned): Draft (gray) / Scheduled (amber) / Published (green) / Archived (muted)
Action icons (far right): Edit ✏️ | Duplicate | Archive | Delete
Card states:

Default — white card, subtle border
Draft — left border accent: gray
Scheduled — left border accent: amber
Published — left border accent: green
Archived — muted opacity, italic font
Right Panel — Activity & Queue
Persistent right panel (like "Your Shift" + "Shift Activity" in reference):

Top section — "Up Next"

A stack of scheduled announcements with countdown:

Avatar/icon for ministry target
Announcement title (truncated)
Time until send: In 2h 30m or Today, 9:00 AM
Expandable chevron (like the name rows in reference)
Bottom section — "Send Log"

Timestamped activity feed (like Shift Activity):

Announcement sent → All Members — 10:04
Draft saved — Youth Rally Notice — 9:41
Scheduled — Sunday Bulletin — 9:00
Edited — Tithe Reminder — 8:52
Small avatar chip on left, timestamp on right — exactly like the VectorOS activity log
Create / Edit Announcement — Slide-over or Full Center Panel
Replaces the center feed when + New Announcement is clicked. Clean two-column form:

Left column — Content:

Title (text input — required)
Body (rich text editor — bold, italic, lists, emoji, max character counter per channel)
Attachment — optional image/banner upload (drag-and-drop, shows preview)
Announcement Type — dropdown: General Notice / Event Reminder / Tithe & Offering / Fundraising / Pastoral Message / Emergency
Right column — Delivery settings:

Target audience:

Send to — segmented: All Members / Specific Ministry
Ministry multi-select checklist (if specific)
Estimated reach counter updates live: ~340 members
Channels:

Checkbox group: In-App Notification / SMS / WhatsApp / Email
Per-channel character preview (SMS caps at 160 chars — show live counter)
WhatsApp note: Sent via broadcast list
Scheduling:

Send Now vs Schedule for Later toggle
If scheduled: date picker + time picker (scroll-wheel style like EasyTicket reference)
Recurring toggle: Repeat this announcement
Frequency: Daily / Weekly / Monthly
Example use case: "Every Sunday morning at 7AM — service reminder"
Language:

Translate message toggle
Language chips: English | Twi | Ga | Ewe
Auto-translate via AI (small "Generate" button per language)
Bottom actions:

Save Draft | Preview | Schedule / Send Now
Announcement Detail View (expand from card)
Expands inline or as a slide-over:

Full announcement content (rendered as member would see it)
Delivery stats:
Sent to: 340 members
Delivered: 318 (SMS) / 290 (Email)
Failed: 22 — with Retry button
Read/Opened: 201
Channel breakdown (mini bar chart per channel)
Recipient list — searchable table: member name, channel, status (Delivered / Failed / Opened)
Action bar: Edit | Duplicate | Archive | Delete
Additional Details Worth Adding
Pinned announcements — pin up to 3 announcements to top of member app home feed
Priority flag — mark as Urgent (overrides DND, sends immediately regardless of schedule)
Templates library — save frequently used announcements as reusable templates (e.g. Sunday Service Reminder, Monthly Tithe Notice)
Approval workflow — junior admins submit for review; senior pastor/admin approves before it goes live
Auto-announcements — system-generated: birthday wishes, event reminders 24hrs before, giving receipts (shown in log as System)
Preview per channel — before sending, toggle between SMS view / WhatsApp view / Email view to see exactly how it renders
Color / Style tokens (consistent across all pages):

Background: warm off-white #F5F4EF
Cards: white, border-radius: 12px, 1px border subtle
Left border accents: gray (draft) / amber (scheduled) / green (published)
Right panel background: slightly darker off-white (like VectorOS right column)
Dark pill: #1A1A1A
Activity log timestamps: muted gray, right-aligned