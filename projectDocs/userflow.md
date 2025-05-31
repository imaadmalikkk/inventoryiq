# 🔄 User Flow - `userflow.md`

This document outlines the full end-to-end user flow for InventoryIQ. It details the screens, possible user actions, and navigation paths, as well as all functional interactions a user may take within the application. This will be used to guide page creation, routing, and UI logic.

---

## 🧭 Overall Flow Map

```text
Landing Page → Sign Up / Sign In → Dashboard
   ├─> Products
   │     ├─> View All
   │     ├─> Add New Product
   │     ├─> View Product Details
   │     └─> Update Stock (In/Out)
   ├─> Clients
   │     ├─> View All
   │     ├─> Add Client
   │     ├─> Client Detail View
   │     └─> View Sent Inventory
   ├─> Invoices
   │     ├─> Create Invoice
   │     ├─> View All Invoices
   │     └─> Download/View PDF
   └─> Export
         ├─> Export Products CSV
         ├─> Export Clients CSV
         └─> Export Invoices CSV
```

---

## 🏠 Landing Page
**Route:** `/`
- Hero section with app description
- CTA button → “Get Started” → `/sign-up`
- Optional: login link if user already has account

---

## 🔐 Auth Flow (Clerk)
**Routes:** `/sign-up`, `/sign-in`
- Handled via Clerk’s UI components
- On success → redirect to `/dashboard`

---

## 📊 Dashboard
**Route:** `/dashboard`
- Welcome message / user name
- Metrics Cards: total products, clients, items distributed
- Recent Activity Table (last 5 transactions)
- Navigation sidebar to:
  - Products
  - Clients
  - Invoices
  - Export

---

## 📦 Product Flow
### View Products
**Route:** `/products`
- Table view of all products
- Search bar, filter (optional)
- Button: “Add New Product” → opens modal or navigates to `/products/new`

### Add Product
**Route:** `/products/new`
- Form: name, SKU, unit, starting quantity
- Submit → redirect back to `/products`

### View Product Details
**Route:** `/products/[id]`
- Show product info
- Tabs or sections:
  - Inventory In / Out log
  - Button: Add Stock → opens modal
  - Button: Distribute Stock → opens modal to associate client

---

## 👥 Client Flow
### View Clients
**Route:** `/clients`
- Table of all clients
- Button: “Add New Client” → `/clients/new`

### Add Client
**Route:** `/clients/new`
- Form: name, contact info, notes
- On save → redirect back to `/clients`

### Client Detail
**Route:** `/clients/[id]`
- View info + distribution history
- Buttons:
  - Send stock to this client (opens stock-out modal)
  - View past invoices (optional)

---

## 🧾 Invoice Flow
### View Invoices
**Route:** `/invoices`
- List of past invoices
- Button: “Create Invoice” → `/invoices/new`

### Create Invoice
**Route:** `/invoices/new`
- Step-by-step form:
  - Select client
  - Add product lines (product + quantity)
  - Auto-fill price (or manually enter)
- Button: “Generate Invoice”
- On submit:
  - Save to DB
  - Generate PDF
  - Option: download or open `/invoices/[id]`

### View Invoice
**Route:** `/invoices/[id]`
- Invoice view + Download button

---

## 📁 Export Flow
**Route:** `/export`
- Buttons:
  - Export Products CSV
  - Export Clients CSV
  - Export Invoices CSV
- Each button downloads a respective file

---

## ⚙️ Other Scenarios

### Logout
- Via Clerk `<UserButton />` in navbar

### Empty States
- Show placeholders or prompts when:
  - No products/clients/invoices yet
  - No activity logs on dashboard

### Error States
- 404 Page → `/404`
- Generic error fallback UI for failed network requests

---

_This userflow should evolve alongside the app. Update this as new flows are added or changed._
