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
This is an educational build designed for developers in the Builder’s Lab community who are learning how to build and deploy full-stack applications.

---

## ✅ Features Implemented

| Feature              | Description                                                | Code Reference |
|----------------------|------------------------------------------------------------|----------------|
| Authentication       | User sign up / sign in using Clerk                         | `/auth/`       |
| Dashboard View       | Summary of total stock, clients, recent logs               | `/dashboard`   |
| Product Management   | CRUD for products, including quantity in/out, SKU          | `/products`    |
| Client Management    | CRUD for clients, contact info, view history               | `/clients`     |
| Invoicing            | Generate invoices from stock → PDF                         | `/invoices`    |
| CSV Export           | Export products, clients, and invoices to CSV              | `/export`      |

---

## 🧪 Features To Implement

- [ ] Invoice preview/download as PDF (using `react-pdf` or `pdf-lib`)
- [ ] Empty state UIs for products, clients, and invoices
- [ ] Dashboard graphs (basic line or bar chart for movement)
- [ ] Global Toasts for feedback (success/error messages)
- [ ] Stock history timeline or audit trail
- [ ] Responsive mobile UI tweaks

---

## 🐞 Known Bugs

| Date       | Bug Description                                       | Related File        |
|------------|--------------------------------------------------------|---------------------|
| (TBD)      | Example: Invoices showing incorrect totals             | `/components/invoice-form.tsx` |

---

## ✅ Fixed Bugs

| Date       | Bug Description                                       | Fix Summary & Code Snippet |
|------------|--------------------------------------------------------|----------------------------|
| (TBD)      | Example: Stock quantity not updating on removal        | Fixed with state mutation in `updateProductStock` fn. |

**Example Fix:**
```ts
function updateProductStock(id: string, delta: number) {
  setProducts(prev => prev.map(p => p.id === id ? { ...p, quantity: p.quantity + delta } : p));
}
```

---

## 🔁 General Notes

- All UI is built with ShadCN components.
- Clerk is used for auth — no team/role support.
- File structure follows feature-based layout: `/products`, `/clients`, `/invoices`, etc.
- CSV export will use a simple helper (`json2csv` or manual mapping).

---

This file is updated after every major feature addition or bug fix to keep Cursor fully in context.
