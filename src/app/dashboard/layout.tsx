import { Sidebar } from "@/components/layout/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-50">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <div className="px-6 py-4">
          {children}
        </div>
      </main>
    </div>
  )
} 