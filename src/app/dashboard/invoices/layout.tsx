import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Invoices | InventoryIQ",
  description: "Manage your invoices and track payments",
}

export default function InvoicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      {children}
    </div>
  )
} 