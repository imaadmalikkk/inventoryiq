import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Unlimited products",
  "Unlimited clients",
  "Invoice generation",
  "CSV export",
  "Real-time analytics",
  "24/7 support",
  "Mobile app access",
  "API access",
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Start managing your inventory efficiently with our affordable plan. 
            No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">Pro Plan</h3>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Everything you need to manage your inventory and scale your business.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6">What's included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 sm:grid-cols-2 sm:gap-6"
            >
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold">Pay monthly, cancel anytime</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">$29</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    /month
                  </span>
                </p>
                <Button className="mt-10 w-full">
                  Get started today
                </Button>
                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 