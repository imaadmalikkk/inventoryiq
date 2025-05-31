import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin } from "lucide-react"

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  support: [
    { name: "Documentation", href: "#" },
    { name: "API", href: "#" },
    { name: "Help Center", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export function Footer() {
  return (
    <footer className="border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-xl font-bold">InventoryIQ</span>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Making inventory management simple and efficient.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} InventoryIQ. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-64"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 