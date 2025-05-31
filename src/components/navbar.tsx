"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { handleClick } = useSmoothScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all ${
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-xl font-bold">
            InventoryIQ
          </a>
        </div>
        
        {/* Mobile menu */}
        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={handleClick}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button className="w-full" variant="default">
                      Get Started
                    </Button>
                    <Button className="mt-4 w-full" variant="outline">
                      Log in
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleClick}
              className="text-sm font-semibold leading-6 hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline">Log in</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar; 