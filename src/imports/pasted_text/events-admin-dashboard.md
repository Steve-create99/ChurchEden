ChurchLedger — Events Page (Admin Web Dashboard)

Design reference: EasyTicket booking dashboard — clean white cards, left filter sidebar, rich content rows with timeline/progress indicators, dark pill CTA buttons, blue accent for interactive elements. Adapt church brand color in place of blue.

Layout Structure
Top bar:

Page title "Events" (large, left-aligned)
Tab navigation: All Events | Upcoming | Ongoing | Past | Drafts
Right side: + Create Event button (dark pill, primary CTA)
Search bar + view toggle (List / Calendar / Grid)
Left Sidebar — Filters Panel
Styled like the EasyTicket filter panel:

Filter by Ministry — multi-select checkboxes (All, Choir, Youth, Prayer Team, Children's, Media)
Filter by Type — Sunday Service / Conference / Outreach / Fundraiser / Rehearsal / Special
Date Range — date picker (From → To), with a bar chart showing event density per week (like the time histogram in reference)
Status — Published / Draft / Cancelled / Completed
Ticketed Events only — toggle
Apply Filters button (dark, full-width)
Main Content — Events List
Each event renders as a rich card row (styled like the train booking result cards):

Left section:

Event cover thumbnail (banner image, rounded)
Event type badge (e.g. Conference, Fundraiser, Recurring)
Availability chip: 12 seats left or Open or Sold Out
Center section — event timeline strip:

Event name (large, bold)
Date + Time → Venue (mimicking the departure → arrival layout)
Ministry tag(s) — e.g. All Members or Youth Ministry, Choir
Recurring indicator: ↻ Every Sunday if recurring
Description snippet (1 line, truncated)
Right section:

Registered count: 48 / 200 with a subtle progress bar
Ticket price or Free
Action icons: Edit | Duplicate | Archive | Share
View Details button (dark pill)
Create / Edit Event — Slide-over Panel or Full Page
Opens when + Create Event is clicked. Two-column form layout:

Left column (event details):

Event Name (text input)
Event Type (dropdown: Service / Conference / Outreach / Fundraiser / Rehearsal / Special)
Date & Time (date picker + time picker — styled like EasyTicket's departure time scroll wheel)
End Date & Time
Venue (text input + optional Google Maps embed preview)
Description (rich text editor)
Cover Image / Banner (drag-and-drop upload zone — shows preview once uploaded)
Event Capacity (toggle: Set capacity limit → number input if on)
Recurring toggle:
Off by default
If on: frequency selector (Daily / Weekly / Monthly) + end date
Right column (targeting & publishing):

Push to Members section:

Send to — segmented toggle: All Members / Specific Ministry
If specific: ministry multi-select checklist
Notification channels: checkboxes for In-App / SMS / WhatsApp / Email
Schedule notification: send now or schedule for specific date/time (styled like EasyTicket's time picker)
Ticketing section (toggle on/off):

Enable Ticketing toggle
Ticket tiers: add multiple tiers (e.g. General — Free, VIP — GHS 50)
Deploy Ticket Notification button — sends a broadcast to selected members with a "Get your ticket" CTA
QR code auto-generation note: QR tickets will be auto-generated on registration
Pledge & Fundraising section (toggle on/off):

Enable Pledge / Fundraising toggle
Fundraising goal amount (number input + currency selector: GHS / USD / GBP)
Pledge description (short text — e.g. "Support our annual conference")
Send to: All Members / Specific Ministry
Deploy Pledge Notification button — pushes notification with payment link (MoMo / card)
Progress tracker preview: shows a mini fundraising progress bar (e.g. GHS 3,200 / GHS 10,000)
Bottom actions:

Save as Draft | Preview | Publish Event
Event Detail Page (clicked from list)
Styled like a single ticket booking expanded view:

Header:

Full-width banner image
Event name, type badge, date/time/venue
Status pill: Live / Draft / Completed
Edit + Share + Archive buttons
Stats row (like the 78 / 56 / 203 strip):

Registered / Checked In / Tickets Sold / Pledges Received
Center tabs:

Registrations — table of members who registered (name, ministry, registration date, ticket tier, check-in status with QR icon)
Tickets — tier breakdown, revenue total, export CSV button
Pledges — member name, amount pledged, amount paid, outstanding balance, status
Notifications Sent — log of all broadcasts (channel, time sent, delivery count)
Right panel:

Fundraising progress bar (large, branded color)
Capacity gauge: 48 / 200 registered
Quick actions: Send Reminder | Export List | Close Registration
Additional Details Worth Adding
Waitlist — auto-enable when capacity is hit; members get notified if a spot opens
Check-in mode — a dedicated fullscreen QR scanner view for the day of the event (usher-facing)
Event duplication — one-click duplicate for recurring-style events with custom dates
Post-event report — auto-generated after event ends: attendance rate, giving total, ticket revenue, engagement summary
RSVP without ticketing — simple Yes/No RSVP for free events (tracked in registrations tab)
Event share link — generates a public URL that non-app members can use to register or buy tickets via browser
Color / style tokens (consistent with Members page):

Background: warm off-white #F5F4EF
Cards: white, border-radius: 16px
Accent: church brand color (replaces EasyTicket blue)
Dark pill: #1A1A1A
Progress bars: brand color fill on light gray track
Badges: soft pill labels with brand-tinted fills