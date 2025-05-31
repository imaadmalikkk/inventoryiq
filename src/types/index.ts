export type Product = {
  id: string
  name: string
  sku: string
  quantityIn: number
  quantityOut: number
  unit: string
}

export type Client = {
  id: string
  name: string
  contact: string
  notes?: string
}

export type Transaction = {
  id: string
  productId: string
  type: 'in' | 'out'
  quantity: number
  date: string
  clientId?: string
}

export type Invoice = {
  id: string
  clientId: string
  items: {
    productId: string
    quantity: number
    price: number
  }[]
  date: string
  total: number
  status: 'paid' | 'pending' | 'overdue'
} 