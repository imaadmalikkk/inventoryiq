export type BusinessType = "Restaurant" | "Store" | "Wholesaler"

export interface Client {
  id: string
  name: string
  email: string
  phone: string
  businessAddress: {
    street: string
    city: string
    postcode: string
    country: string
  }
  businessType: BusinessType
  products: {
    id: string
    name: string
    link: string
  }[]
  notes: {
    id: string
    content: string
    createdAt: Date
  }[]
  createdAt: Date
  updatedAt: Date
}

export interface ClientFormData extends Omit<Client, "id" | "createdAt" | "updatedAt" | "notes"> {}

export type SortField = "name" | "email" | "businessType" | "createdAt"
export type SortOrder = "asc" | "desc"

export interface ClientTableFilter {
  businessType?: BusinessType
  query?: string
}

export interface ClientTableState {
  page: number
  pageSize: number
  sort?: {
    field: SortField
    order: SortOrder
  }
  filters: ClientTableFilter
}

export interface ClientTableProps {
  data: Client[]
  pageCount: number
  state: ClientTableState
  onStateChange: (state: ClientTableState) => void
  onDeleteSelected?: (ids: string[]) => void
} 