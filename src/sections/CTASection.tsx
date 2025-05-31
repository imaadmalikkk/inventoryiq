import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative isolate overflow-hidden bg-primary/5">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to transform your inventory management?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Join thousands of businesses that trust InventoryIQ to manage their stock, 
            clients, and invoices. Start your free trial today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">
              Get started for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#gradient)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="gradient">
            <stop stopColor="hsl(var(--primary))" />
            <stop offset={1} stopColor="hsl(var(--primary))" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  )
} 