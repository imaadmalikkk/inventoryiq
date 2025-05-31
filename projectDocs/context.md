# 📦 InventoryIQ - `context.md`

This file provides a **living reference** for the Cursor AI editor and any contributors during development of **InventoryIQ**, a micro SaaS inventory management application. It includes an overview of the project, tracked features, known/fixed bugs, and implementation details. This file should be **updated regularly**.

---

## 🧭 Project Overview

**Name:** InventoryIQ  
**Type:** Micro SaaS (educational project)  
**Stack:** Next.js, TypeScript, TailwindCSS, ShadCN UI, Clerk (Auth)  

**Purpose:**  
To provide a simple, intuitive inventory and client management dashboard for small businesses that distribute physical products (e.g., food, drink, electronics) to clients like corner shops, restaurants, or wholesalers.

**Audience:**  
This is an educational build designed for developers in the Builder's Lab community who are learning how to build and deploy full-stack applications.

---

## ✅ Features Implemented

| Feature              | Description                                                | Code Reference |
|----------------------|------------------------------------------------------------|----------------|
| Dashboard Layout     | Sidebar navigation with main content area                  | `/dashboard/layout.tsx` |
| Dashboard Overview   | Metrics cards, recent activity, quick actions              | `/dashboard/page.tsx` |
| Products Management | Full CRUD operations for products with filtering and sorting | `/dashboard/products/page.tsx` |
| Mock Data Structure  | Types and sample data for products, clients, transactions | `/types/index.ts`, `/dashboard/mock-data.ts` |

### Products Page Features
- Table view with pagination (20 items per page)
- Search by name, SKU, or category
- Filter by product type (Fruits, Drinks, Electronics, Other)
- Sort by name (A-Z, Z-A) and price (Low-High, High-Low)
- Bulk delete functionality
- CSV export for selected products
- Add/Edit product forms with validation
- Responsive design with modern UI components

---

## 🧪 Features To Implement

- [ ] Authentication with Clerk
- [ ] Clients CRUD operations
- [ ] Invoice generation
- [ ] Stock movement tracking
- [ ] Mobile responsive adjustments
- [ ] Empty state UIs
- [ ] API integration for products
- [ ] Real-time updates
- [ ] Image upload for products
- [ ] Batch import from CSV

---

## 🐞 Known Bugs

| Date       | Bug Description                                       | Related File        |
|------------|--------------------------------------------------------|---------------------|
| N/A        | No bugs reported yet                                    | N/A                |

---

## ✅ Fixed Bugs

| Date       | Bug Description                                       | Fix Summary & Code Snippet |
|------------|--------------------------------------------------------|----------------------------|
| N/A        | No bugs fixed yet                                       | N/A                       |

---

## 🔁 General Notes

- Dashboard UI implemented with ShadCN components
- Using client-side rendering for interactive components
- Following feature-based layout structure
- Mock data structured to match expected API responses
- Quick actions implemented as cards for better UX
- Products page uses modern form validation with Zod
- Table component supports bulk actions and CSV export
- All components follow accessibility best practices

---

This file is updated after every major feature addition or bug fix to keep Cursor fully in context.
