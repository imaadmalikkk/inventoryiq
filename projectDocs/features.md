# 🧩 Features Overview - `features.md`

This document outlines **every planned feature** for InventoryIQ in detail. Each feature includes:
- What it does
- Why it's needed
- Implementation breakdown
- Suggested packages (if any)

This is the source of truth for feature planning and development.

---

## 🔐 Authentication (via Clerk)
**Status:** Pending

**What:** Allow users to sign up, log in, and log out.

**Why:** Restricts access to a single user's private inventory data.

**Implementation:**
- Use `@clerk/nextjs` package
- Wrap app with `<ClerkProvider>` in `_app.tsx`
- Protect dashboard routes with `withAuth`
- Use `<UserButton />` in navbar for settings/logout

**Packages:**
- [`@clerk/nextjs`](https://www.npmjs.com/package/@clerk/nextjs)

---

## 📊 Dashboard Overview
**Status:** Implemented ✅

**What:** Homepage showing a summary of total stock, client count, recent actions

**Why:** Provides at-a-glance visibility of business health.

**Implementation:**
- Metric cards showing key stats:
  - Total Products
  - Total Clients
  - Total Stock
- Recent activity table with last 5 transactions
- Quick action cards for common tasks
- Responsive layout with ShadCN components

**Packages:**
- ShadCN UI components
- Lucide React icons

---

## 📦 Product Management
**Status:** Pending

**What:** CRUD system for adding and editing products

**Why:** Core function of app — defines what is being tracked

**Implementation:**
- Add/edit/delete forms (ShadCN `Dialog` + `Form`)
- Fields: name, SKU, quantity in, quantity out, unit (optional)
- Table view with filters/sorting
- Calculate running total as: `quantityIn - quantityOut`

**Packages:**
- Optional: `zod` for form validation

---

## 👥 Client Management
**Status:** Pending

**What:** CRUD for clients (e.g., restaurants, shops)

**Why:** Enables associating outgoing stock with customers

**Implementation:**
- Form: name, contact info, notes
- Table view with search/sort
- Client detail view → recent stock sent

**Packages:**
- Optional: `react-hook-form` or `zod`

---

## 🔁 Inventory In/Out Flow
**Status:** Pending

**What:** Log stock coming in and stock going out

**Why:** Allows tracking movement of inventory over time

**Implementation:**
- Use `+` button for "Add Stock" and "Send Stock"
- Both write to a `transactions` table with type = in/out
- Associate each with a product (and optionally a client for out)
- View logs per product

**Data Structure:**
```ts
{
  id,
  productId,
  type: 'in' | 'out',
  quantity,
  date,
  clientId?: string
}
```

---

## 🧾 Invoicing
**Status:** Pending

**What:** Generate simple invoices when stock is sent out

**Why:** Useful for client records, documentation, and education

**Implementation:**
- Invoice creation modal: select client, add product lines, price, quantity
- Auto-generate invoice number (e.g. INV-001)
- Save invoice to database
- PDF generation

**Packages:**
- `@react-pdf/renderer` or `pdf-lib`

---

## 📁 Data Export
**Status:** Pending

**What:** Download client/product/invoice data as CSV

**Why:** Enables offline analysis, reporting, or backups

**Implementation:**
- Quick action card for export
- Map JSON → CSV string
- Use `FileSaver` or anchor download

**Packages:**
- `papaparse` or `json2csv`

---

## 🌙 Dark Mode Support
**Status:** Pending

**What:** Light/dark theme toggle

**Why:** Improves usability in low-light environments

**Implementation:**
- Use ShadCN theme system
- Toggle mode with `mode-toggle.tsx`

**Packages:**
- None extra (ShadCN native)

---

## 📱 Mobile Responsiveness
**Status:** Partially Implemented ✅

**What:** Optimise UI for smaller screens

**Why:** Enables warehouse, shop-floor, or mobile use cases

**Implementation:**
- Tailwind responsive classes
- Collapse sidebar into hamburger menu on small screens
- Stack cards vertically on mobile

**Packages:**
- None

---

_This file should be referenced by the team and updated when new features are discussed or shipped._