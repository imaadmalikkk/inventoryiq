import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Client, BusinessType } from "@/types/clients"

interface ClientDetailsModalProps {
  client: Client | null
  isOpen: boolean
  onClose: () => void
  onSave: (updatedClient: Client) => void
}

export function ClientDetailsModal({
  client,
  isOpen,
  onClose,
  onSave,
}: ClientDetailsModalProps) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editedClient, setEditedClient] = React.useState<Client | null>(null)

  React.useEffect(() => {
    setEditedClient(client)
    setIsEditing(false)
  }, [client])

  if (!client || !editedClient) return null

  const handleSave = () => {
    if (editedClient) {
      onSave({
        ...editedClient,
        updatedAt: new Date(),
      })
      setIsEditing(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{isEditing ? "Edit Client" : "Client Details"}</DialogTitle>
          <DialogDescription>
            {isEditing
              ? "Make changes to the client information below."
              : "View client information below."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Name</label>
            {isEditing ? (
              <Input
                value={editedClient.name}
                onChange={(e) =>
                  setEditedClient({ ...editedClient, name: e.target.value })
                }
                className="col-span-3"
              />
            ) : (
              <span className="col-span-3">{client.name}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Email</label>
            {isEditing ? (
              <Input
                value={editedClient.email}
                onChange={(e) =>
                  setEditedClient({ ...editedClient, email: e.target.value })
                }
                className="col-span-3"
              />
            ) : (
              <span className="col-span-3">{client.email}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Phone</label>
            {isEditing ? (
              <Input
                value={editedClient.phone}
                onChange={(e) =>
                  setEditedClient({ ...editedClient, phone: e.target.value })
                }
                className="col-span-3"
              />
            ) : (
              <span className="col-span-3">{client.phone}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Business Type</label>
            {isEditing ? (
              <Select
                value={editedClient.businessType}
                onValueChange={(value: BusinessType) =>
                  setEditedClient({ ...editedClient, businessType: value })
                }
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Restaurant">Restaurant</SelectItem>
                  <SelectItem value="Store">Store</SelectItem>
                  <SelectItem value="Wholesaler">Wholesaler</SelectItem>
                </SelectContent>
              </Select>
            ) : (
              <span className="col-span-3">{client.businessType}</span>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Address</label>
            {isEditing ? (
              <div className="col-span-3 space-y-2">
                <Input
                  value={editedClient.businessAddress.street}
                  onChange={(e) =>
                    setEditedClient({
                      ...editedClient,
                      businessAddress: {
                        ...editedClient.businessAddress,
                        street: e.target.value,
                      },
                    })
                  }
                  placeholder="Street"
                />
                <Input
                  value={editedClient.businessAddress.city}
                  onChange={(e) =>
                    setEditedClient({
                      ...editedClient,
                      businessAddress: {
                        ...editedClient.businessAddress,
                        city: e.target.value,
                      },
                    })
                  }
                  placeholder="City"
                />
                <Input
                  value={editedClient.businessAddress.postcode}
                  onChange={(e) =>
                    setEditedClient({
                      ...editedClient,
                      businessAddress: {
                        ...editedClient.businessAddress,
                        postcode: e.target.value,
                      },
                    })
                  }
                  placeholder="Postcode"
                />
                <Input
                  value={editedClient.businessAddress.country}
                  onChange={(e) =>
                    setEditedClient({
                      ...editedClient,
                      businessAddress: {
                        ...editedClient.businessAddress,
                        country: e.target.value,
                      },
                    })
                  }
                  placeholder="Country"
                />
              </div>
            ) : (
              <div className="col-span-3">
                <p>{client.businessAddress.street}</p>
                <p>{client.businessAddress.city}</p>
                <p>{client.businessAddress.postcode}</p>
                <p>{client.businessAddress.country}</p>
              </div>
            )}
          </div>
        </div>
        <DialogFooter>
          {isEditing ? (
            <>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={handleSave}>Save changes</Button>
            </>
          ) : (
            <>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 