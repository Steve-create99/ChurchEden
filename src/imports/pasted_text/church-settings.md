PROMPT 1 — General Church Settings Page
Design intent: Clean, form-heavy but never overwhelming. Organized into clear sections with a sticky left nav. Think Notion settings or Linear workspace settings — professional, spacious, every field purposeful.

Layout Structure
Two-column: sticky left nav sidebar + scrollable right content area

Left Sidebar — Settings Navigation
Vertical list of setting sections (like Notion's settings sidebar):


⚙️  General
🏛  Church Profile
🎨  Branding & Theme
🌍  Language & Region
📱  Integrations
🔔  Notifications
💳  Billing & Plan
🔒  Security
📂  Data & Backups
Active section highlighted with brand color left border + tinted background pill.

Section 1 — General
Church Name (text input)
Church Tagline / Motto (text input, optional)
Date Founded (date picker)
Denomination (dropdown: Pentecostal / Baptist / Methodist / Anglican / Non-denominational / Other)
Church Size (dropdown: Under 100 / 100–500 / 500–2000 / 2000+)
Primary Language (dropdown)
Time Zone (searchable dropdown — defaults to Africa/Accra)
Week starts on (Monday / Sunday toggle)
Save Changes button (brand color pill, bottom of section)
Section 2 — Church Profile
Contact Information:

Phone number (+ country code selector)
Email address
Website URL
Physical address (street, city, region, country)
Google Maps embed preview (auto-generates from address)
Social Media Links:

Facebook | Instagram | YouTube | Twitter/X | TikTok
Each as a labeled text input with platform icon
Service Times:

Repeatable rows: Service Name + Day + Start Time + End Time
+ Add Service Time link
Example: Sunday Morning Service · Sun · 9:00 AM · 11:30 AM
Save Changes

Section 3 — Branding & Theme
Church Logo:

Upload zone (drag-and-drop or click)
Shows current logo preview
Recommended size: 400×400px, PNG/SVG
Church Banner / Cover Image:

Upload zone (for website hero and app header)
Recommended: 1440×480px
Brand Colors:

Primary Color — color picker + hex input
Secondary Color — color picker + hex input
Live preview card (mini mockup of how nav + button + card looks with selected colors)
Reset to Default link
App Theme:

Toggle: Light / Dark / System Default
Favicon:

Upload zone (32×32px icon for browser tab)
Save Changes

Section 4 — Language & Region
Default App Language — dropdown (English / Twi / Ga / Ewe)
Enable multilingual support — toggle
If on: checkboxes for each language to activate
Note: Members can select their preferred language in the app
Currency — GHS / USD / GBP (multi-select for diaspora support)
Date format — DD/MM/YYYY / MM/DD/YYYY
Number format — 1,000.00 / 1.000,00
Save Changes

Section 5 — Integrations
Each integration as a card row:

Logo	Name	Description	Status	Action
Integrations:

Hubtel — SMS & MoMo payments · Connected ✓ / Connect
Arkesel — Local SMS delivery · Connect
Africa's Talking — Pan-African SMS · Connect
Twilio — International SMS · Connect
Flutterwave — MoMo + international cards · Connected ✓
Stripe — International card payments · Connect
Paystack — Ghana/Nigeria + cards · Connect
YouTube Live — Livestream embed · Connect
Facebook Live — Livestream embed · Connect
Mailchimp — Email campaigns · Connect
Google Maps — Location embed · Connected ✓
Each connected integration has: Configure | Disconnect links

+ Request Integration link at bottom

Section 6 — Notifications
System Notification Defaults:

Toggle rows — admin controls what goes out by default:

Birthday auto-wishes to members — toggle + channel (SMS / WhatsApp / Email)
Anniversary auto-wishes — toggle + channel
Event reminders (24hrs before) — toggle + channel
Giving receipt on transaction — toggle + channel
Absence follow-up (after 3 misses) — toggle + channel
New member welcome message — toggle + channel
Fundraising goal reached alert — toggle (to admin)
Failed transaction alert — toggle (to admin)
Notification Quiet Hours:

Do Not Disturb — time range picker (e.g. 10 PM → 7 AM)
Override for urgent/emergency announcements toggle
Save Changes

Section 7 — Billing & Plan
Current plan: Haven Pro — GHS 299/month
Plan features summary (bullet list)
Next billing date
Payment method on file (card last 4 digits / MoMo number)
Upgrade Plan | Change Payment Method | Download Invoice buttons
Usage meters:
Members: 214 / 500
SMS this month: 1,840 / 3,000
Storage: 2.4GB / 10GB
Admin seats: 4 / 10
Section 8 — Security
Two-Factor Authentication (2FA) — toggle + setup flow
Session timeout — dropdown (15 min / 30 min / 1 hr / Never)
Login activity log — table: IP address, device, location, date/time, Revoke action
Active sessions — list of logged-in devices with Log out all button
Password policy (for all admin accounts):
Minimum length slider
Require uppercase / numbers / symbols toggles
Password expiry: Never / 90 days / 180 days
Save Changes

Section 9 — Data & Backups
Export all church data — Export ZIP button (members, giving, attendance, sermons)
Scheduled backups — toggle + frequency (Daily / Weekly)
Last backup: Jun 1, 2026 · 2:00 AM ✓
Delete church workspace — danger zone, red card, requires typing church name to confirm + 2FA
PROMPT 2 — Admin Management & Roles Page (Super Admin)
Design intent: This is a people + permissions management screen. Think Vercel team settings or GitHub organization members — clean member rows, role badges, permission matrices, invite flow. Serious but approachable. Only the Super Admin sees the full controls.

Layout Structure
Full-page, two-zone:

Top: Page header + stats strip + + Invite Admin CTA
Center: Admins table (dominant)
Right slide-over: Role editor / Admin detail on click
Top Bar
Page title: Admin Management
Sub-label: Control who has access to ChurchLedger and what they can do
Right: + Invite Admin (brand color pill) | Manage Roles (outlined)
Stats Strip
Total Admins — 6
Active Now — 2 (green dot)
Pending Invites — 1 (amber)
Custom Roles — 4
Admins Table
Each admin as a row:

| Avatar | Name + Email | Role Badge | Permissions Summary | Last Active | Status | Actions |

Role badges (color-coded pills):

👑 Super Admin — deep brand color
✝️ Senior Pastor — purple
💰 Finance Manager — green
📢 Media & Comms — blue
🎟 Events Coordinator — amber
👥 Member Care — teal
🖥 IT / Technical — gray
Custom Role — outlined pill
Status badges:

Active (green) / Invited (amber, pending signup) / Suspended (red) / Inactive (gray)
Actions per row:

Edit Role | Resend Invite (if pending) | Suspend | Remove
Super Admin row: no edit/remove actions (protected)
Invite Admin Flow (slide-over panel)
Opens on + Invite Admin:

Step 1 — Basic Info:

Full name (text input)
Email address (text input)
Phone number (optional, for WhatsApp access)
Profile photo upload (optional)
Step 2 — Assign Role:

Role selector — large card grid (pick one):


┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ ✝️ Senior Pastor │  │ 💰 Finance Mgr  │  │ 📢 Media & Comms│
│ Full access     │  │ Finance only    │  │ Announcements   │
│ except billing  │  │ + reports       │  │ + media upload  │
└─────────────────┘  └─────────────────┘  └─────────────────┘

┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│ 🎟 Events Coord │  │ 👥 Member Care  │  │ ⚙️ Custom Role  │
│ Events + attend │  │ Members + msgs  │  │ Build your own  │
│ + QR check-in   │  │ + milestones    │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
Selected card gets brand color border + checkmark.

Step 3 — Fine-tune Permissions (if Custom Role or override needed):

Permission matrix — grouped toggle rows:


MEMBERS
  ├ View members .............. ● ON
  ├ Add / edit members ........ ● ON
  ├ Delete members ............ ○ OFF
  └ Export member data ........ ○ OFF

GIVING & FINANCE
  ├ View transactions ......... ● ON
  ├ Record giving manually .... ● ON
  ├ View financial reports ..... ○ OFF
  ├ Approve expenses ........... ○ OFF
  └ Access billing settings .... ○ OFF

EVENTS
  ├ View events ............... ● ON
  ├ Create / edit events ....... ● ON
  ├ Delete events .............. ○ OFF
  └ Manage ticketing ........... ● ON

ANNOUNCEMENTS
  ├ Draft announcements ........ ● ON
  ├ Publish announcements ...... ○ OFF  ← requires approval
  ├ Send SMS / WhatsApp ........ ○ OFF
  └ Schedule broadcasts ........ ● ON

SERMONS & MEDIA
  ├ Upload sermons ............. ● ON
  ├ Delete media ............... ○ OFF
  └ Manage live stream ......... ○ OFF

ATTENDANCE
  ├ View attendance records .... ● ON
  ├ Run QR check-in ............ ● ON
  └ Export attendance data ..... ○ OFF

SETTINGS
  ├ Church profile settings .... ○ OFF
  ├ Integrations ............... ○ OFF
  ├ Manage admins .............. ○ OFF
  └ Billing & plan ............. ○ OFF
Step 4 — Ministry Scope (optional restriction):

Restrict to specific ministry toggle
If on: ministry multi-select → this admin only sees data for their assigned ministries
Example: Youth Pastor only sees Youth Ministry members, events, attendance
Step 5 — Send Invite:

Preview card: name + role + permission summary
Invite channel: Email / WhatsApp / Both
Custom invite message (optional text field)
Send Invite button (brand color pill)
Invited admin receives a link to set up their password and access the dashboard
Manage Roles Page (from Manage Roles button)
Full role editor:

Left: List of all roles (default + custom)

Each role: name + color dot + number of admins assigned + Edit | Delete
+ Create Custom Role button
Right: Role editor for selected role:

Role name (text input)
Role color (color picker — for badge)
Role icon (emoji picker)
Description (short text)
Permission matrix (same toggles as above)
Save Role | Duplicate Role | Delete Role
Default roles are locked (cannot delete, but permissions can be adjusted):

Super Admin — all permissions, always on, grayed out
Senior Pastor, Finance Manager, etc. — editable
Admin Detail Slide-over (on row click)
Profile photo + name + email + phone
Role badge (large)
Last active: 2 hours ago
Member since: Jan 12, 2026
Permission summary (grouped, read-only view)
Ministry scope (if restricted)
Login activity (last 5 sessions: device, location, time)
Action buttons: Edit Role | Reset Password | Suspend Account | Remove Admin
Additional Details Worth Adding
Approval chains — certain actions (publish announcements, approve expenses above threshold) require a second admin to approve. Set up in role settings
Activity log per admin — every action an admin takes is logged: Pastor Ama edited member profile · Jun 1, 9:42 AM
Admin audit report — exportable log of all admin actions over a period
Two-factor enforcement — Super Admin can force 2FA for all admins or specific roles
Temporary access — grant admin access for a fixed period (e.g. a guest speaker's coordinator for one week), auto-expires
Notification to Super Admin — any time a new admin logs in for the first time or a suspicious login is detected
Shared style tokens (both pages):

Background: #F5F4EF warm off-white
Left nav active state: brand color left border 3px + rgba(brand, 0.08) bg
Permission toggles: brand color when ON, #E5E3DC when OFF
Role cards: white, border-radius: 14px, selected state — brand color 2px border + rgba(brand, 0.06) fill
Danger zone card: rgba(red, 0.06) bg, 1px red border, red text
Role badge pills: unique color per role, consistent across all pages
Admin table rows: white, hover #F9F8F4, 1px bottom border