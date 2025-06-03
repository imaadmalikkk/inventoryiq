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
import { Client, BusinessType, ClientFormData } from "@/types/clients"

interface NewClientModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (newClient: ClientFormData) => void
}

export function NewClientModal({ isOpen, onClose, onSave }: NewClientModalProps) {
  const [formData, setFormData] = React.useState<ClientFormData>({
    name: "",
    email: "",
    phone: "",
    businessAddress: {
      street: "",
      city: "",
      postcode: "",
      country: "",
    },
    businessType: "Store",
    products: [],
  })

  const handleSave = () => {
    onSave(formData)
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessAddress: {
        street: "",
        city: "",
        postcode: "",
        country: "",
      },
      businessType: "Store",
      products: [],
    })
  }

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.businessAddress.street &&
      formData.businessAddress.city &&
      formData.businessAddress.postcode &&
      formData.businessAddress.country
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
          <DialogDescription>
            Fill in the client information below. All fields are required.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Name</label>
            <Input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="col-span-3"
              placeholder="Enter client name"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Email</label>
            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="col-span-3"
              placeholder="Enter client email"
              type="email"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Phone</label>
            <Input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="col-span-3"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Business Type</label>
            <Select
              value={formData.businessType}
              onValueChange={(value: BusinessType) =>
                setFormData({ ...formData, businessType: value })
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
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right text-sm font-medium">Address</label>
            <div className="col-span-3 space-y-2">
              <Input
                value={formData.businessAddress.street}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessAddress: {
                      ...formData.businessAddress,
                      street: e.target.value,
                    },
                  })
                }
                placeholder="Street"
                required
              />
              <Input
                value={formData.businessAddress.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessAddress: {
                      ...formData.businessAddress,
                      city: e.target.value,
                    },
                  })
                }
                placeholder="City"
                required
              />
              <Input
                value={formData.businessAddress.postcode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessAddress: {
                      ...formData.businessAddress,
                      postcode: e.target.value,
                    },
                  })
                }
                placeholder="Postcode"
                required
              />
              <Input
                value={formData.businessAddress.country}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    businessAddress: {
                      ...formData.businessAddress,
                      country: e.target.value,
                    },
                  })
                }
                placeholder="Country"
                required
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!isFormValid()}>
            Add Client
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 