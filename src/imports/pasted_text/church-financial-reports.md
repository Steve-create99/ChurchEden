ChurchLedger — Financial Reports & Expense Tracking Page
Design reference: Raxon Financial Dashboard — dark/light split layout, large bold numbers, orange accent cards, bar chart with highlighted peak column, savings goal progress rows in a dark card, tab navigation within the page, live update indicator. Replace orange with church brand color throughout.

Top Bar
Page title: Financial Overview
Sub-label: Real-time financial insights to support kingdom stewardship
Top-right: period selector dropdown This Month ▾ / This Quarter / This Year / Custom
Top nav tabs (inline, same as Raxon): Overview | Transactions | Expenses | Budgets | Reports
Far right: ●◀ Live Update indicator (pulsing dot + label, brand color)
Overview Tab (Default View)
Same split-card grid as Raxon — left heavy, right stacked:

Top-left — Total Church Balance (large primary card)

Label: Total Church Balance
Currency selector: GHS ▾ (with USD / GBP for diaspora accounts)
Large number: GHS 128,430.50 (40px bold, dominant)
Eye toggle to hide/show balance
Trend chip: ↑ 12.4% vs Last Month (brand color dot)
Three action buttons below (dark pill style):
⊕ Record Income
↗ Record Expense
⊞ Generate Report
Top-right — Three stacked stat cards (like Income / Total Expenses / Net Profit):

Card 1 — Total Income

GHS 48,200.00
↑ 8.2% vs Last Month (green)
Card 2 — Total Expenses

GHS 12,800.00
↓ 5.3% vs Last Month (red, subtle — not alarming)
Card 3 — Net Surplus

GHS 35,400.00
↑ 12.2% vs Last Month (brand color)
Below the three cards: mini stacked bar (like Raxon's 48% / $5,000 / 24% strip):
Income bar | Expenses bar | Surplus bar
Labeled with percentages + amounts
Bottom-left — Giving & Income Overview (bar chart)

Styled exactly like Raxon's Earning Overview chart:

Title: Giving & Income Overview
Period toggle: This Year ▾
Large YTD number: GHS 98,643.24 + trend chip
Full-width bar chart — 12 monthly bars
Hovered/peak bar fills with brand color + floating label showing amount
Non-peak bars: light gray / muted
X-axis: Jan → Dec
Y-axis: GHS values (0k → 100k)
Legend below: ● Tithes ● Offerings ● Fundraising ● Other
Bottom-right — Two cards stacked (like Financial Report card + Savings Goals):

Card A — Income Breakdown (brand color accent card, dark)

Title: Income Breakdown
Sub-label: This Quarter
Three column strip:
Tithes — GHS 42,000
Offerings — GHS 18,500
Fundraising — GHS 12,000
Decorative stacked report card visual (like Raxon's orange card fan) — use church brand color
Card B — Budget Goals (dark card, like Savings Goals)

Title: Budget Goals
+ Add Goal button (top right, brand color)
Progress rows (exactly like Raxon savings rows):
🏛 Building Fund — 72% — GHS 72,000 / GHS 100,000 ▾
📡 Media Equipment — 28% — GHS 1,400 / GHS 5,000 ▾
🚐 Church Bus — 45% — GHS 13,500 / GHS 30,000 ▾
🌍 Outreach Fund — 61% — GHS 6,100 / GHS 10,000 ▾
Progress bars: brand color fill on dark track
Each row expandable (chevron right)
Expenses Tab
This is where expense tracking lives — clean, purpose-built:

Top stats strip:

Total This Month | Largest Category | vs Budget | Pending Approval
Left — Expense Categories (donut chart)

Ring chart showing expense split:
Utilities (electricity, water, internet)
Staff & Honoraria
Events & Programs
Media & Equipment
Outreach & Missions
Maintenance & Repairs
Miscellaneous
Center of ring: GHS 12,800 Total
Legend below with amounts
Center — Expense List

Table rows — each expense entry:

Category	Description	Recorded by	Date	Amount	Status	Actions
Status badges: Approved (green) / Pending (amber) / Rejected (red)
Actions: View | Edit | Approve | Delete
Right — Quick Log Expense form (inline panel)

Category dropdown
Description (text)
Amount + currency
Date
Receipt upload (drag-and-drop)
Recorded by (auto-fills current admin)
Submit for Approval button
Approval workflow note:

Expenses above a set threshold (e.g. GHS 500) require senior pastor/finance lead approval before being marked final
Approver gets in-app + email notification
Budgets Tab
Create budget envelopes per category (same as goal rows in dark card)
Set period: Monthly / Quarterly / Annual
Track spend vs budget in real time
Color coding: green (under budget) / amber (80%+ used) / red (exceeded)
Overspend alert: triggers notification to finance admin
Reports Tab
Pre-built report templates:
Monthly Giving Summary
Annual Financial Statement
Expense Audit Report
Ministry Budget Report
Donor/Contributor Report
Each report: Preview | Download PDF | Send via Email
Custom report builder: pick date range + data fields + ministry filter → generate
Report history: list of previously generated reports with timestamps
Additional Details Worth Adding
Reconciliation flag — mark months as reconciled (locked, no further edits)
Multi-account support — Main Account / Building Fund Account / Missions Account (switchable via dropdown in balance card)
Diaspora giving split — show USD/GBP contributions separately with GHS equivalent at current exchange rate
End-of-year summary card — auto-generates in December: total received, total expenses, net surplus, top giving month, top contributor count
Tithe vs Offering ratio — small insight chip below bar chart: Tithes make up 68% of giving this year
Color / Style tokens:

Background: #0F0F0F dark base OR warm off-white #F5F4EF (offer both themes, default light)
Primary accent card: church brand color fill (replaces Raxon orange)
Dark goal card: #1A1A1A with brand color progress bars
Chart peak bar: brand color, others #E5E3DC
Status badges: semantic green / amber / red fills
Large numbers: 40px, font-weight: 700
Sub-labels: 13px, muted gray