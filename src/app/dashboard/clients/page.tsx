"use client"

import { ClientsTable } from "@/components/clients/clients-table"
import { Shell } from "@/components/shells/shell"
import { BusinessType, Client, ClientTableState, ClientFormData } from "@/types/clients"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { NewClientModal } from "@/components/clients/new-client-modal"
import { ClientDetailsModal } from "@/components/clients/client-details-modal"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

// Initial mock data
const initialMockClients: Client[] = [
  {
    id: "1",
    name: "Acme Restaurant",
    email: "contact@acmerestaurant.com",
    phone: "123-456-7890",
    businessAddress: {
      street: "123 Main St",
      city: "New York",
      postcode: "10001",
      country: "USA",
    },
    businessType: "Restaurant" as BusinessType,
    products: [
      {
        id: "p1",
        name: "Product 1",
        link: "/products/p1",
      },
    ],
    notes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "City Store",
    email: "info@citystore.com",
    phone: "234-567-8901",
    businessAddress: {
      street: "456 Oak St",
      city: "Los Angeles",
      postcode: "90001",
      country: "USA",
    },
    businessType: "Store" as BusinessType,
    products: [
      {
        id: "p2",
        name: "Product 2",
        link: "/products/p2",
      },
      {
        id: "p3",
        name: "Product 3",
        link: "/products/p3",
      },
    ],
    notes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Global Distributors",
    email: "contact@globaldist.com",
    phone: "345-678-9012",
    businessAddress: {
      street: "789 Pine St",
      city: "Chicago",
      postcode: "60601",
      country: "USA",
    },
    businessType: "Wholesaler" as BusinessType,
    products: [
      {
        id: "p1",
        name: "Product 1",
        link: "/products/p1",
      },
      {
        id: "p2",
        name: "Product 2",
        link: "/products/p2",
      },
      {
        id: "p3",
        name: "Product 3",
        link: "/products/p3",
      },
    ],
    notes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export default function ClientsPage() {
  const { toast } = useToast()
  const [tableState, setTableState] = useState<ClientTableState>({
    page: 1,
    pageSize: 20,
    filters: {},
  })
  const [clients, setClients] = useState<Client[]>([])
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  // Load clients from localStorage on mount
  useEffect(() => {
    const storedClients = localStorage.getItem("clients")
    if (storedClients) {
      setClients(JSON.parse(storedClients))
    } else {
      setClients(initialMockClients)
      localStorage.setItem("clients", JSON.stringify(initialMockClients))
    }
  }, [])

  // Save clients to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients))
  }, [clients])

  const handleNewClient = (formData: ClientFormData) => {
    const newClient: Client = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      notes: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    setClients((prev) => [...prev, newClient])
    setIsNewClientModalOpen(false)
    toast({
      title: "Success",
      description: "Client added successfully",
    })
  }

  const handleUpdateClient = (updatedClient: Client) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    )
    setIsDetailsModalOpen(false)
    toast({
      title: "Success",
      description: "Client updated successfully",
    })
  }

  const handleDeleteClient = (ids: string[]) => {
    setClients((prev) => prev.filter((client) => !ids.includes(client.id)))
    toast({
      title: "Success",
      description: "Client deleted successfully",
    })
  }

  return (
    <Shell>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
            <p className="text-muted-foreground">
              Manage your clients and their information
            </p>
          </div>
          <Button onClick={() => setIsNewClientModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Client
          </Button>
        </div>
        <div className="space-y-4">
          <ClientsTable
            data={clients}
            pageCount={1}
            state={tableState}
            onStateChange={setTableState}
            onDeleteSelected={handleDeleteClient}
            onClientSelect={(client) => {
              setSelectedClient(client)
              setIsDetailsModalOpen(true)
            }}
          />
        </div>
      </div>

      <NewClientModal
        isOpen={isNewClientModalOpen}
        onClose={() => setIsNewClientModalOpen(false)}
        onSave={handleNewClient}
      />

      <ClientDetailsModal
        client={selectedClient}
        isOpen={isDetailsModalOpen}
        onClose={() => {
          setIsDetailsModalOpen(false)
          setSelectedClient(null)
        }}
        onSave={handleUpdateClient}
      />

      <Toaster />
    </Shell>
  )
} 