import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/data-table-column-header"
import { Badge } from "@/components/ui/badge"
import { InvoicesTable } from "@/components/invoices/invoices-table"

// Types
interface Invoice {
  id: string
  invoiceNumber: string
  clientName: string
  status: "draft" | "pending" | "paid" | "overdue"
  total: number
  dueDate: string
  createdAt: string
}

// Mock data for initial setup
const invoices: Invoice[] = [
  {
    id: "1",
    invoiceNumber: "INV-001",
    clientName: "Acme Corp",
    status: "pending",
    total: 1250.00,
    dueDate: "2024-04-15",
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    invoiceNumber: "INV-002",
    clientName: "TechStart Inc",
    status: "paid",
    total: 850.00,
    dueDate: "2024-03-30",
    createdAt: "2024-03-16",
  },
]

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

export default function InvoicesPage() {
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Invoices</h2>
          <p className="text-muted-foreground">
            Manage your invoices and track payments
          </p>
        </div>
      </div>
      <InvoicesTable columns={columns} data={invoices} />
    </>
  )
} 