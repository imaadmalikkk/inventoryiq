"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Settings
} from "lucide-react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Products",
    icon: Package,
    href: "/products",
    color: "text-violet-500",
  },
  {
    label: "Clients",
    icon: Users,
    href: "/clients",
    color: "text-pink-700",
  },
  {
    label: "Invoices",
    icon: FileText,
    href: "/invoices",
    color: "text-orange-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-gray-700",
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-50 text-gray-800">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Inventory<span className="text-blue-600">IQ</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-gray-900 hover:bg-gray-100 rounded-lg transition",
                pathname === route.href ? "text-gray-900 bg-gray-100" : "text-gray-500"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 