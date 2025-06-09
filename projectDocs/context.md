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
| Clients Management  | Full CRUD operations for clients with table view and actions | `/dashboard/clients/page.tsx` |
| Invoices Management | Basic table structure with filtering and sorting            | `/dashboard/invoices/page.tsx` |
| Mock Data Structure  | Types and sample data for products, clients, transactions | `/types/index.ts`, `/dashboard/mock-data.ts` |

### Products Page Features
- Table view with pagination (20 items per page)
- Search by name, SKU, or category
- Filter by product type (Food, Drink, Electronics, Textiles, Machinery, Other)
- Sort by name (A-Z, Z-A) and price (Low-High, High-Low)
- Bulk delete functionality
- CSV export with headers (Name, SKU, Category, Price, Stock)
- Add/Edit product forms with validation
- Live GBP price formatting with decimal support
- Smooth dialog animations
- Responsive design with modern UI components

### Clients Page Features
- Table view with pagination and state management
- Search and filter functionality
- Bulk selection and actions
- Add/Edit client forms with validation
- Delete confirmation dialogs
- Responsive design with modern UI components
- Accessibility features implemented
- State persistence between navigation

### Invoices Page Features (In Progress)
- Table view with pagination
- Search by invoice number
- Filter by status (Draft, Pending, Paid, Overdue)
- Sort by invoice number, client name, total, and due date
- Bulk selection functionality
- Color-coded status badges
- GBP currency formatting
- Date formatting for due dates
- Responsive design with modern UI components

---

## 🧪 Features To Implement

- [ ] Authentication with Clerk
- [x] Clients CRUD operations
- [ ] Invoice creation modal
- [ ] Invoice editing
- [ ] Invoice deletion
- [ ] PDF generation for invoices
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
| 2024-03-20 | Price input field was not handling decimals properly    | Implemented new price input with live GBP formatting and proper decimal handling |
| 2024-03-20 | Dialog animation was coming from bottom right           | Updated dialog animation to use centered fade-in with scale effect |
| 2024-03-20 | CSV export was missing headers                         | Added proper headers to CSV export with GBP formatted prices |
| 2024-03-21 | Metadata export error in clients page                  | Created separate layout file for clients page to handle metadata |
| 2024-03-21 | Missing Checkbox component in clients table            | Installed and configured shadcn Checkbox component |
| 2024-03-21 | Infinite update loop in ClientsTable                   | Fixed useEffect dependency array and state change check in onStateChange handler |
| 2024-03-21 | Build Error: ProductCategory type mismatch in products page | Fixed dropdown menu items to use correct ProductCategory values ('Food', 'Drink' instead of 'Fruits', 'Drinks') and added missing categories (Textiles, Machinery, Other) |
| 2024-03-21 | Build Error: Missing @tabler/icons-react dependency | Removed unused components that imported from @tabler/icons-react (app-sidebar.tsx, nav-*.tsx, section-cards.tsx, data-table.tsx) since they weren't being used in the application |
| 2024-03-21 | Build Error: row.table property doesn't exist in TanStack Table | Fixed clients table by moving column definitions inside component function and directly accessing callback functions instead of row.table.options.meta |

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
- All monetary values displayed in GBP with proper formatting
- Improved UX with smooth animations and intuitive input handling
- Clients page implements state management with proper error handling
- All forms follow consistent validation and error handling patterns
- **2024-03-21: Removed Settings icon from sidebar navigation** - Cleaned up sidebar by removing unused Settings route and import

---

This file is updated after every major feature addition or bug fix to keep Cursor fully in context.
