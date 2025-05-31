import { ClipboardList, Upload, BarChart } from "lucide-react"

const steps = [
  {
    name: "Set up your inventory",
    description: "Add your products, set stock levels, and configure alerts in minutes.",
    icon: ClipboardList,
  },
  {
    name: "Import your data",
    description: "Easily import existing inventory data from CSV or Excel files.",
    icon: Upload,
  },
  {
    name: "Track and analyze",
    description: "Monitor stock levels, generate reports, and make data-driven decisions.",
    icon: BarChart,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Get Started</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Three simple steps to better inventory management
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get up and running with InventoryIQ in minutes, not days.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col items-center text-center">
                <div className="rounded-lg bg-primary/10 p-4">
                  <step.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-6 text-lg font-semibold leading-7">
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 