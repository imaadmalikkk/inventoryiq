"use client"

import { Cross2Icon, PlusCircledIcon, TrashIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/data-table-view-options"
import { DataTableFacetedFilter } from "@/components/data-table-faceted-filter"
import type { Invoice } from "@/types/invoice"

interface InvoiceToolbarProps {
  table: Table<Invoice>
  searchQuery: string
  onSearchChange: (value: string) => void
}

const statuses = [
  { label: "Draft", value: "draft" },
  { label: "Pending", value: "pending" },
  { label: "Paid", value: "paid" },
  { label: "Overdue", value: "overdue" },
]

export function InvoiceToolbar({
  table,
  searchQuery,
  onSearchChange,
}: InvoiceToolbarProps) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search invoices..."
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {table.getSelectedRowModel().rows.length > 0 && (
          <Button
            variant="destructive"
            size="sm"
            className="h-8"
            onClick={() => {
              // Handle bulk delete
              console.log('Delete selected invoices')
            }}
          >
            <TrashIcon className="mr-2 h-4 w-4" />
            Delete
          </Button>
        )}

        <DataTableViewOptions table={table} />
      </div>
    </div>
  )
} 