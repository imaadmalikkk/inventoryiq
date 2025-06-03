import * as React from "react"
import Link from "next/link"
import { MoreHorizontal } from "lucide-react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { DataTablePagination } from "@/components/data-table-pagination"
import { DataTableToolbar } from "./client-toolbar"
import { Client, ClientTableProps, ClientTableState } from "@/types/clients"

interface ClientsTableProps extends ClientTableProps {
  onClientSelect?: (client: Client) => void
}

export const columns: ColumnDef<Client>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const client = row.original
      return (
        <button
          onClick={() => row.table.options.meta?.onClientSelect?.(client)}
          className="text-left hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          {client.name}
        </button>
      )
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="w-[180px]">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="w-[150px]">{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "businessAddress.city",
    header: "City",
    cell: ({ row }) => (
      <div className="w-[120px]">{row.original.businessAddress.city}</div>
    ),
  },
  {
    accessorKey: "businessType",
    header: "Business Type",
    cell: ({ row }) => (
      <div className="w-[120px]">{row.getValue("businessType")}</div>
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => {
      const products = row.getValue("products") as Client["products"]
      return (
        <div className="flex gap-1 flex-wrap w-[200px]">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="text-sm text-blue-600 hover:underline"
            >
              {product.name}
            </Link>
          ))}
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const client = row.original
      const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => row.table.options.meta?.onClientSelect?.(client)}
              >
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => row.table.options.meta?.onClientSelect?.(client)}
              >
                Edit Client
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="text-red-600"
                onClick={() => setShowDeleteDialog(true)}
              >
                Delete Client
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  client and remove their data from the system.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() => {
                    row.table.options.meta?.onDeleteSelected?.([client.id])
                    setShowDeleteDialog(false)
                  }}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )
    },
  },
]

export function ClientsTable({
  data,
  pageCount,
  state,
  onStateChange,
  onDeleteSelected,
  onClientSelect,
}: ClientsTableProps) {
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination: {
        pageIndex: state.page - 1,
        pageSize: state.pageSize,
      },
    },
    meta: {
      onDeleteSelected,
      onClientSelect,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  React.useEffect(() => {
    const newState = {
      ...state,
      page: table.getState().pagination.pageIndex + 1,
      pageSize: table.getState().pagination.pageSize,
    }

    if (sorting[0]) {
      newState.sort = {
        field: sorting[0].id as any,
        order: sorting[0].desc ? "desc" : "asc",
      }
    }

    if (
      newState.page !== state.page ||
      newState.pageSize !== state.pageSize ||
      JSON.stringify(newState.sort) !== JSON.stringify(state.sort)
    ) {
      onStateChange(newState)
    }
  }, [
    table.getState().pagination.pageIndex,
    table.getState().pagination.pageSize,
    sorting,
  ])

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  )
} 