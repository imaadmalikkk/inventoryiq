import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Small Business Owner",
    content: "InventoryIQ transformed how we manage our stock. The real-time updates and automated alerts have saved us countless hours.",
    image: "/testimonials/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    content: "The client management features are exceptional. We can track everything in one place, making our operations much more efficient.",
    image: "/testimonials/michael.jpg",
  },
  {
    name: "Emma Rodriguez",
    role: "Retail Store Manager",
    content: "The invoice generation feature alone has made this tool invaluable. It's intuitive and saves us so much time.",
    image: "/testimonials/emma.jpg",
  },
]

export function SocialProofSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by businesses everywhere
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our customers have to say about their experience with InventoryIQ.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between">
              <CardContent className="pt-6">
                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-7 text-muted-foreground">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 