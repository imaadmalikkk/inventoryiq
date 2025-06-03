import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clients",
  description: "Manage your clients",
}

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 