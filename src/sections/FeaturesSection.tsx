import { BarChart3, Users2, FileText, Package2, Zap, Clock } from "lucide-react"

const features = [
  {
    name: "Inventory Tracking",
    description: "Real-time stock levels and automated alerts for low inventory. Keep track of every item with ease.",
    icon: Package2,
  },
  {
    name: "Client Management",
    description: "Organize client information, track order history, and manage relationships all in one place.",
    icon: Users2,
  },
  {
    name: "Invoice Generation",
    description: "Create and send professional invoices automatically. Export to PDF or CSV with one click.",
    icon: FileText,
  },
  {
    name: "Analytics & Reports",
    description: "Gain insights with detailed reports on sales, inventory turnover, and client behavior.",
    icon: BarChart3,
  },
  {
    name: "Fast Performance",
    description: "Lightning-fast interface ensures you can manage your inventory without any delays.",
    icon: Zap,
  },
  {
    name: "Real-time Updates",
    description: "All changes are synced instantly across your account. Never miss a stock update.",
    icon: Clock,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful features for modern inventory management
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Take control of your inventory with our comprehensive suite of tools designed for small businesses.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
} 