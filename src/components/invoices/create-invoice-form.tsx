"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import type { Invoice } from "@/types/invoice"
import { format } from "date-fns"
import { CalendarIcon } from "@radix-ui/react-icons"

interface CreateInvoiceFormProps {
  onCancel: () => void
  onSubmit: (data: Partial<Invoice>) => void
}

export function CreateInvoiceForm({ onCancel, onSubmit }: CreateInvoiceFormProps) {
  const [step, setStep] = React.useState(1)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [datePickerOpen, setDatePickerOpen] = React.useState(false)
  const [formData, setFormData] = React.useState<Partial<Invoice>>({
    status: 'draft',
    items: [],
  })

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    onSubmit(formData)
  }

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border">
      {/* Progress indicator */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((number) => (
          <div
            key={number}
            className={cn(
              "flex items-center",
              number < 4 && "flex-1"
            )}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-2",
                step === number
                  ? "border-primary bg-primary text-primary-foreground"
                  : step > number
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-muted"
              )}
            >
              {number}
            </div>
            {number < 4 && (
              <div
                className={cn(
                  "h-1 flex-1 mx-4",
                  step > number ? "bg-primary" : "bg-muted"
                )}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step indicator */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {step === 1 && "Select Client"}
          {step === 2 && "Add Products"}
          {step === 3 && "Set Details"}
          {step === 4 && "Review"}
        </h2>
        <p className="text-sm text-muted-foreground">
          Step {step} of 4
        </p>
      </div>

      {/* Form steps */}
      <div className="space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div className="grid gap-4">
              <Label htmlFor="client">Client</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, clientId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a client" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">Acme Corp</SelectItem>
                  <SelectItem value="2">TechStart Inc</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="product">Product</Label>
                <Select
                  onValueChange={(value) => {
                    // Handle product selection
                    console.log('Selected product:', value)
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Product 1</SelectItem>
                    <SelectItem value="2">Product 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  onChange={(e) => {
                    // Handle quantity change
                    console.log('Quantity:', e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      id="dueDate"
                      className="w-full justify-between font-normal"
                    >
                      {date ? date.toLocaleDateString() : "Select date"}
                      <CalendarIcon className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      captionLayout="dropdown"
                      onSelect={(selectedDate) => {
                        setDate(selectedDate)
                        if (selectedDate) {
                          setFormData(prev => ({
                            ...prev,
                            dueDate: selectedDate.toISOString()
                          }))
                        }
                        setDatePickerOpen(false)
                      }}
                      styles={{
                        root: { fontSize: '16px' },
                        day: { 
                          height: '48px', 
                          width: '48px',
                          fontSize: '16px'
                        },
                        day_button: { 
                          height: '44px', 
                          width: '44px',
                          fontSize: '16px'
                        }
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Input
                  id="notes"
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="text-sm font-medium mb-2">Review Invoice Details</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Client</dt>
                  <dd className="font-medium">{formData.clientId}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Due Date</dt>
                  <dd className="font-medium">
                    {formData.dueDate && new Date(formData.dueDate).toLocaleDateString()}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="font-medium">{formData.status}</dd>
                </div>
                {formData.notes && (
                  <div className="pt-2 border-t">
                    <dt className="text-muted-foreground mb-1">Notes</dt>
                    <dd className="text-sm">{formData.notes}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          {step > 1 && (
            <Button variant="outline" onClick={handleBack}>
              Back
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
              Create Invoice
            </Button>
          )}
        </div>
      </div>
    </div>
  )
} 