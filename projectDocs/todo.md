# ✅ To-Do - `todo.md`

This file contains a **chronological step-by-step guide** to implementing InventoryIQ from scratch. Each step is listed in the recommended order, starting with UI design and progressing through to full implementation and polish. This order is carefully designed for clarity, developer flow, and tutorial value.

---

## 🎨 1. UI Design (Prioritise Visual Structure)

### 1.1 Design Landing Page ✅
- [x] Create basic layout using Tailwind (hero, subtext, CTA)
- [x] Add navigation bar (logo + sign in link)
- [x] Create call-to-action that links to `/sign-up`
- [x] Ensure fully responsive layout

### 1.2 Design Dashboard Shell ✅
- [x] Set up sidebar navigation (Dashboard, Products, Clients, Invoices)
- [x] Add top navbar with user info and theme toggle
- [x] Use ShadCN layout primitives (`Card`, `Tabs`, etc.)
- [x] **UPDATED 2024-03-21:** Removed Settings from sidebar navigation

### 1.3 Design Dashboard View ✅
- [x] Create stat cards (products in stock, total clients, items out)
- [x] Add recent activity log (last 5 transactions)
- [x] Add quick action cards for common tasks

### 1.4 Design Products Section
- [ ] Table view for products
- [ ] Modal or page to add new product
- [ ] Product detail page with stock in/out actions

### 1.5 Design Clients Section
- [ ] Table view for clients
- [ ] Add client modal/page
- [ ] Client detail page with delivery history

### 1.6 Design Invoices Section
- [ ] Table of past invoices
- [ ] Page to create new invoice (form UI)
- [ ] Invoice detail view with PDF preview

### 1.7 Design Export Page
- [ ] Buttons to download CSVs for products, clients, and invoices

---

## ⚙️ 2. Authentication Setup (Clerk)

### 2.1 Install & Initialise Clerk
- [ ] Install `@clerk/nextjs`
- [ ] Wrap app in `<ClerkProvider>` in `_app.tsx`
- [ ] Create `/sign-up` and `/sign-in` pages using `<SignUp />` and `<SignIn />`

### 2.2 Protect Routes
- [ ] Use `withAuth` HOC or Clerk middleware to guard app routes

---

## 🧱 3. Core Layout & Routing

### 3.1 Set Up App Shell ✅
- [x] Create base layout component with sidebar + navbar
- [x] Set up responsive layout
- [x] Implement navigation
- [x] **UPDATED 2024-03-21:** Streamlined sidebar by removing Settings section

### 3.2 Define Routes ✅
- [x] `/dashboard`
- [ ] `/products`, `/products/new`, `/products/[id]`
- [ ] `/clients`, `/clients/new`, `/clients/[id]`
- [ ] `/invoices`, `/invoices/new`, `/invoices/[id]`
- [x] ~~`/settings`~~ **REMOVED 2024-03-21:** Settings route removed from navigation

---

## 🧩 4. Feature Implementation

### 4.1 Product Management
- [ ] Create product table in DB
- [ ] Implement add/edit/delete product UI
- [ ] Add "stock in" and "stock out" modal
- [ ] Compute running stock balance

### 4.2 Client Management
- [ ] Create client table
- [ ] Implement add/edit/delete clients
- [ ] Display stock sent to client

### 4.3 Inventory Movement Tracking
- [ ] Create `transactions` table
- [ ] Write logs to table on stock actions
- [ ] Show logs in product detail & dashboard

### 4.4 Invoicing
- [ ] Create invoice table
- [ ] Invoice creation form with validation
- [ ] PDF generation

### 4.5 CSV Export
- [ ] Implement export functions for each table (products, clients, invoices)
- [ ] Use `papaparse` or manual logic to format CSV
- [ ] Trigger download via anchor or blob

---

## 🧪 5. Testing & Edge Cases
- [ ] Handle empty states for all pages
- [ ] Implement basic error boundaries or toasts
- [ ] Test mobile responsiveness
- [ ] Test invalid input / fail cases

---

## 🎁 6. Polish & Ship
- [ ] Add favicon & logo
- [ ] Final UI polish and spacing cleanup
- [ ] Add light/dark toggle
- [ ] Run final QA and user test flow
- [ ] Deploy with Vercel

---

## 📝 Recent Changes

**2024-03-21:**
- Removed Settings icon and route from sidebar navigation
- Simplified navigation to focus on core inventory management features
- Cleaned up imports in sidebar component

---

_This to-do list should be updated as new tasks arise or features evolve._
