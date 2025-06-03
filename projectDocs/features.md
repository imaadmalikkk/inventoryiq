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
**Status:** Implemented ✅

**What:** CRUD system for adding and editing products

**Why:** Core function of app — defines what is being tracked

**Implementation:**
- Add/edit/delete forms with ShadCN `Dialog` + `Form`
- Fields:
  - Name (required)
  - SKU (required)
  - Category (Food, Drink, Electronics, Textiles, Machinery, Other)
  - Price (GBP with live formatting and decimal support)
  - Stock quantity
  - Description (optional)
- Table view with:
  - Multi-select functionality
  - Bulk delete
  - CSV export with headers
  - Pagination (20 items/page)
  - Search by name/SKU/category
  - Category filtering
  - Sort by name/price
- Smooth dialog animations for better UX
- All monetary values in GBP format

**Packages:**
- `zod` for form validation
- `react-hook-form` for form handling
- ShadcnUI components for UI
- Lucide React icons

---

## 👥 Client Management
**Status:** Implemented ✅

**What:** CRUD for clients (e.g., restaurants, shops)

**Why:** Enables associating outgoing stock with customers

**Implementation:**
- Full CRUD operations with form validation
- Table view with:
  - Multi-select functionality
  - Bulk actions (delete)
  - Search functionality
  - Pagination
  - State persistence
- Client forms with fields:
  - Name (required)
  - Email (required, validated)
  - Phone (optional)
  - Address (optional)
  - Notes (optional)
- Accessibility features:
  - ARIA labels
  - Keyboard navigation
  - Focus management
- Error handling and validation
- Responsive design
- State management with proper error boundaries

**Packages:**
- ShadCN UI components for consistent design
- React Hook Form for form handling
- Zod for validation
- Lucide React icons

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