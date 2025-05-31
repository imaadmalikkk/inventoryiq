import { Product, Client, Transaction, Invoice } from "@/types"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Organic Coffee Beans",
    sku: "COF-001",
    quantityIn: 1000,
    quantityOut: 450,
    unit: "kg"
  },
  {
    id: "2",
    name: "Premium Tea Bags",
    sku: "TEA-001",
    quantityIn: 5000,
    quantityOut: 2200,
    unit: "boxes"
  },
  {
    id: "3",
    name: "Artisan Chocolate Bars",
    sku: "CHO-001",
    quantityIn: 800,
    quantityOut: 320,
    unit: "bars"
  }
]

export const mockClients: Client[] = [
  {
    id: "1",
    name: "Café Luna",
    contact: "john@cafeluna.com",
    notes: "Premium coffee shop chain"
  },
  {
    id: "2",
    name: "Sweet Delights Bakery",
    contact: "sarah@sweetdelights.com",
    notes: "Wholesale bakery"
  },
  {
    id: "3",
    name: "The Tea House",
    contact: "mike@teahouse.com",
    notes: "Specialty tea shop"
  }
]

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    productId: "1",
    type: "out",
    quantity: 50,
    date: "2024-03-20",
    clientId: "1"
  },
  {
    id: "2",
    productId: "2",
    type: "in",
    quantity: 1000,
    date: "2024-03-19"
  },
  {
    id: "3",
    productId: "3",
    type: "out",
    quantity: 100,
    date: "2024-03-18",
    clientId: "2"
  },
  {
    id: "4",
    productId: "1",
    type: "out",
    quantity: 75,
    date: "2024-03-17",
    clientId: "3"
  },
  {
    id: "5",
    productId: "2",
    type: "out",
    quantity: 200,
    date: "2024-03-16",
    clientId: "1"
  }
]

export const mockInvoices: Invoice[] = [
  {
    id: "INV-001",
    clientId: "1",
    items: [
      {
        productId: "1",
        quantity: 50,
        price: 15.99
      }
    ],
    date: "2024-03-20",
    total: 799.50,
    status: "pending"
  },
  {
    id: "INV-002",
    clientId: "2",
    items: [
      {
        productId: "3",
        quantity: 100,
        price: 4.99
      }
    ],
    date: "2024-03-18",
    total: 499.00,
    status: "paid"
  }
] 