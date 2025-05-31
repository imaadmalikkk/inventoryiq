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
   └─> Settings
         └─> User Preferences
```

---

## 🏠 Landing Page (Implemented)
**Route:** `/`
- Hero section with app description
- CTA button → "Get Started" → `/sign-up`
- Optional: login link if user already has account

---

## 🔐 Auth Flow (Pending)
**Routes:** `/sign-up`, `/sign-in`
- To be handled via Clerk's UI components
- On success → redirect to `/dashboard`

---

## 📊 Dashboard (Implemented)
**Route:** `/dashboard`
- Sidebar navigation with:
  - Dashboard
  - Products
  - Clients
  - Invoices
  - Settings
- Main content:
  - Metric Cards:
    - Total Products
    - Total Clients
    - Total Stock
  - Recent Activity Table (last 5 transactions)
  - Quick Action Cards:
    - Add Stock
    - New Client
    - Create Invoice
    - Export Data

---

## 📦 Product Flow (Pending)
### View Products
**Route:** `/products`
- Table view of all products
- Search bar, filter (optional)
- Button: "Add New Product" → opens modal or navigates to `/products/new`

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

## 👥 Client Flow (Pending)
### View Clients
**Route:** `/clients`
- Table of all clients
- Button: "Add New Client" → `/clients/new`

### Add Client
**Route:** `/clients/new`
- Form: name, contact info, notes
- On save → redirect back to `/clients`

### Client Detail
**Route:** `/clients/[id]`
- View info + distribution history
- Buttons:
  - Send stock to this client (opens stock-out modal)
  - View past invoices

---

## 🧾 Invoice Flow (Pending)
### View Invoices
**Route:** `/invoices`
- List of past invoices
- Button: "Create Invoice" → `/invoices/new`

### Create Invoice
**Route:** `/invoices/new`
- Step-by-step form:
  - Select client
  - Add product lines (product + quantity)
  - Auto-fill price (or manually enter)
- Button: "Generate Invoice"
- On submit:
  - Save to DB
  - Generate PDF
  - Option: download or open `/invoices/[id]`

### View Invoice
**Route:** `/invoices/[id]`
- Invoice view + Download button

---

## ⚙️ Settings Flow (Pending)
**Route:** `/settings`
- User preferences
- Account settings
- Notification preferences (future)

---

## 🎯 Current Implementation Status

✅ **Completed:**
- Landing page layout and design
- Dashboard layout with sidebar
- Dashboard metrics and activity view
- Quick action cards

🚧 **In Progress:**
- Authentication setup
- Product management
- Client management

📝 **Pending:**
- Invoice generation
- Settings page
- PDF generation
- Data export

---

_This userflow should evolve alongside the app. Update this as new flows are added or changed._
