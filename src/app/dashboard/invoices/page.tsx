"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { Badge } from "@/components/ui/badge"
import { InvoicesTable } from "@/components/invoices/invoices-table"
import { Button } from "@/components/ui/button"
import { EyeOpenIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import { CreateInvoiceForm } from "@/components/invoices/create-invoice-form"
import { Input } from "@/components/ui/input"
import type { Invoice } from "@/types/invoice"

// Mock data for initial setup
const invoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    clientId: "client-1",
    clientName: "Acme Corp",
    status: "pending",
    total: 1250.00,
    dueDate: "2024-04-15",
    createdAt: "2024-03-15",
    updatedAt: "2024-03-15",
    items: [],
    subtotal: 1000.00,
    tax: 250.00,
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    clientId: "client-2",
    clientName: "TechStart Inc",
    status: "paid",
    total: 850.00,
    dueDate: "2024-03-30",
    createdAt: "2024-03-16",
    updatedAt: "2024-03-16",
    items: [],
    subtotal: 700.00,
    tax: 150.00,
  },
]

export default function InvoicesPage() {
  const [isCreating, setIsCreating] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const columns: ColumnDef<Invoice>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "invoiceNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Invoice Number" />
      ),
    },
    {
      accessorKey: "clientName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Client" />
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue("status") as string
        const statusColors = {
          draft: "bg-gray-500",
          pending: "bg-yellow-500",
          paid: "bg-green-500",
          overdue: "bg-red-500",
        }
        return (
          <Badge className={statusColors[status as keyof typeof statusColors]}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        )
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "total",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Total" />
      ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("total"))
        const formatted = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP",
        }).format(amount)
        return <div className="font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "dueDate",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Due Date" />
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue("dueDate"))
        const formatted = new Intl.DateTimeFormat("en-GB").format(date)
        return <div>{formatted}</div>
      },
    },
  ]

  const handleCreateInvoice = (data: Partial<Invoice>) => {
    // Handle invoice creation
    console.log('Creating invoice:', data)
    setIsCreating(false)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Invoices</h1>
        <Button 
          onClick={() => setIsCreating(true)} 
          className="bg-green-600 hover:bg-green-700"
        >
          New Invoice
        </Button>
      </div>

      {/* Main content */}
      {isCreating ? (
        <CreateInvoiceForm 
          onCancel={() => setIsCreating(false)}
          onSubmit={handleCreateInvoice}
        />
      ) : (
        <InvoicesTable 
          data={invoices}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      )}
    </div>
  )
} 